//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract MyContract {
  struct Friends {
    string name;
    bool invited;
  }

  Friends [] public listOfFriends;
  Friends [] public guestList;

  function newFriends(string memory _name, bool _invited) public {
    listOfFriends.push(Friends({name: _name, invited: _invited}));
  }
      

}