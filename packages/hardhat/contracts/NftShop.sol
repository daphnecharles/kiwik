// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTShop is ERC721Enumerable, Ownable {
  using Strings for uint256;

  string public baseURI;
  string public baseExtension = ".json";
  uint256 public cost = 0.00 ether;
  uint256 public maxMintAmount = 0; 
  bool public mintCapped = false;
  bool public paused = false;

  constructor(
    string memory _name,
    string memory _initBaseURI,
    uint256 _cost,
    uint256 _maxMintAmount,
    bool _mintCapped
  ) ERC721(_name, "") {
    setBaseURI(_initBaseURI);
    setCost(_cost);
    setMintCapped(_mintCapped);
    if (_mintCapped) {
        setmaxMintAmount(_maxMintAmount);
    }
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(address _to) public payable {
    require(!paused);
    _mint(_to, 1);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }
  
  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

  function setMintCapped(bool _mintCapped) public onlyOwner {
    mintCapped = _mintCapped;
  }

  function withdraw() public payable onlyOwner {
    // This will pay Kiwik 5% of the initial sale.
    (bool hs, ) = payable(0x8ac29b4a1f99E118E2f23F705507442C2F6Ba9d5).call{value: address(this).balance * 5 / 100}("");
    require(hs);
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
  }
}