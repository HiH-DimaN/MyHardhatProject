"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { ethers, JsonRpcSigner } from "ethers";
import { MusicShop_factory } from "@/typechain";
import { MusicShop } from "@/typechain";
import { BrowserProvider } from "ethers";
import Image from "next/image";

import ConnectWallet from "@/components/ConnectWallet";
import WaitingFromTransactionMessage from "@/components/WaitingFromTransactionMessaget";
import TransactionErrorMessage from "@/components/TransactionErrorMessage";
import WaitingForTransactionMessage from "./components/WaitingForTransactionMessage";
import { error } from "console";
import { title } from "process";
import { strict } from "assert";
import { validateHeaderName } from "http";

const HARDHAT_NETWORK_ID = "0x539";
const MUSIC_SHOP_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

declare let window: any;

type CurrentConnectionProps = {
  provider: BrowserProvider | undefined;
  shop: MusicShop | undefined;
  signer: JsonRpcSigner | undefined;
};

type AlbumProps = {
  index: ethers.BigNumberish;
  uid: string;
  title: string;
  price: ethers.BigNumberish;
  quantity: ethers.BigNumberish;
};


export default function Home() {
  const [networkError, setNetworkError] = useState<string>();
  const [txBeingSent, setTxBeingSent] = useState<string>();
  const [transactionError, setTransactionError] = useState<any>();
  const [currentBalance, setCurrentBalance] = useState<string>();
  const [albums, setAlbums] = useState<AlbumProps[]>([]);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [currentConnection, setCurrentConnection] = 
    useState<CurrentConnectionProps>();

  useEffect(() => {
    (async () => {
      if (currentConnection?.provider && currentConnection.signer) {
        setCurrentBalance(
          (
            await currentConnection.provider.getBalance(
              currentConnection.signer.address,
              await currentConnection.provider.getBlockNumber(),
            )
          ).toString()

        );
      }

    })();
  }, [currentConnection, txBeingSent]); 
  
  useEffect(() => {
    (async () => {
      if (currentConnection?.shop && currentConnection.signer) {
        const newAlbums = (await currentConnection.shop.allAlbums()).map((album) => {
          return {
            index: album.index,
            uid: album.uid,
            title: album.title,
            price: album.price,
            quantity: album.quantity,           
          }
        });

        setAlbums((albums) => [...albums, ...newAlbums]);

        setIsOwner(
          ethers.getAddress(await currentConnection.shop.owner()) ===
            (await currentConnection.signer.getAddress())
        );
      } 
    })();
  }, [currentConnection]);

  const _connectWallet = async () => {
    if (window.ethereum === undefined) {
      setNetworkError("Please install Metamask");

      
      return;
    }

    if (!(await _checkNetwork())) {
      return;
    }
    
    const [selectedAccount] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    await _initialize(selectedAccount)

    window.ethereum.on(
      "accountChanged",
      async ([newAccount]: [newAccount: string]) => {
        if (newAccount === undefined) {
          return _resetState();
        }

        await _initialize(newAccount);
      }
    );

    window.ethereum.on("chainChanged", ([_networkId]: any) => {
      _resetState;

    });

  };

  const _initialize = async (slectedAccount: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner(slectedAccount);

    setCurrentConnection({
      ...currentConnection,
      provider,
      signer,
      shop: MusicShop_factory.connect(MUSIC_SHOP_ADDRESS, signer),
    });
  };

  const _resetState = () => {
    setCurrentBalance(undefined);
    setIsOwner(false);
    setAlbums([]);
    setNetworkError(undefined);
    setTransactionError(undefined);
    setTxBeingSent(undefined);
    setCurrentConnection({
      provider: undefined,
      signer: undefined,
      shop: undefined,
    });
  };

  const _checkNetwork = async (): Promise<boolean> => {
    const chosenChainID = await window.ethereum.request({
      method: "eth_chainID",
    });

    if (chosenChainID === HARDHAT_NETWORK_ID) {
      return true;
    }

    setNetworkError("Please connect to Hardhat network (localhost:8545)!");
    
    return false;

  };

  const _dismissNetworkError = () => {
    setNetworkError(undefined);
  };

  const _dismissTransactionError = () => {
    setTransactionError(undefined)
  };

  const _getRpsErrorMessage = (error: any): string => {
    console.log(error);
    if (error.data) {
      return error.data.message
    }

    return error.mesage
  };

  const _handleAddAlbum = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!currentConnection?.shop) {
      return false;
    }

    const shop = currentConnection.shop;
    const formData = new FormData(event.currentTarget);

    const title = formData.get("albumTitle")?.toString();
    const price = formData.get("albumPrice")?.toString();
    const quantity = formData.get("albumQty")?.toString();

    if (title && price && quantity) {
      const uid = ethers.solidityPackedKeccak256(["string"], [title]);

      try {
        const index = await shop.currentIndex();

        const addTx = await shop.addAlbum(
          uid,
          title,
          BigInt(price),
          BigInt(quantity)
        );

        setTxBeingSent(addTx.hash);

        await addTx.wait();

        setAlbums((albums) => [
          ...albums,
          {
            index,
            uid,
            title,
            price,
            quantity,
          },
        ]);
      } catch (err) {
        console.error(err);        
      } finally {
        setTxBeingSent(undefined);
      }
    }
  };

  const _handleBuyAlbum = async (
    album: AlbumProps,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (!currentConnection?.shop) {
      return false;
    }

    try {
      const buyTx = await currentConnection.shop.buy(album.index, { value: album.price });
      setTxBeingSent(buyTx.hash);
      await buyTx.wait();

      setAlbums(
        albums.map((a) => {
          if (a.index === album.index) {
            album.quantity = 
              BigInt(album.quantity) - BigInt(1);
            return album;
          } else {
            return a;
          }
        })          
      );
    } catch (err) {
      console.error(err);

      setTransactionError(err);
    } finally {
      setTxBeingSent(undefined)
    }
  }

  const availableAlbums = () => {
    const albumsList = albums.map((album) => {
      return (
        <li key={album.uid}>
          <>
            {album.title} (#{album.index.toString()}<br />
            Price: {album.price.toString()}
            <br />
            Qty: {album.quantity.toString()}
            <br />
            {BigInt(album.quantity) > BigInt(0) && (
              <button onClick={(e) => _handleBuyAlbum(album, e)}>
                Buy 1 copy
              </button>
            )}
          </>
        </li>
      );
    });

    return albumsList;

  };

  return (
    <main>
      {!currentConnection?.signer&& (
        <ConnectWallet
          connectWallet={_connectWallet}
          networkError={networkError}
          dismiss={_dismissNetworkError}
        />  
      )}

      {currentConnection?.signer&& (
        <p>Your address: {currentConnection.signer.address}</p>
      )}

      {txBeingSent && <WaitingForTransactionMessage txHash={txBeingSent} />}

      {transactionError && (
        <TransactionErrorMessage
          message={_getRpsErrorMessage(transactionError)}
          dismiss={_dismissTransactionError}
        />
      )}

      {currentBalance && (
        <p>Your balance: {ethers.formatEther(currentBalance)} ETH</p>
      )}

      {albums.length > 0 && <ul>{availableAlbums()}</ul>}

      {isOwner && !txBeingSent && (
        <form onSubmit={_handleAddAlbum}>
          <h2>Add album</h2>

          <label>
            Title:
            <input type="text" name="albumTitle" />
          </label>

          <label>
            Price:
            <input type="text" name="albumPrice" />
          </label>

          <label>
            Qty:
            <input type="text" name="albumQty" />
          </label>

          <input type="submit" name="Add!" />
        </form>
      )}
    </main>
  );
}
