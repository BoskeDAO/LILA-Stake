pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LERNToken is ERC20 {
    constructor() public ERC20("LERN Token", "LERN") {
        _mint(msg.sender, 1000000000000000000000000);
    }
}