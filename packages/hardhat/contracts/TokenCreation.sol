
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KIWIK is ERC20 {
    constructor() ERC20("KIWIK", "KIWIK") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}