const { expect} = require("chai");
const { ethers } = require("hardhat");
const chai = require("chai");
const should = chai.should();


describe("changeValue", function(){
    beforeEach(async function(){
        [owner,add1,add2,...addrs] = await ethers.getSigners();
        const changeValue = await ethers.getContractFactory("changeValue");
        changevalue = await changeValue.deploy(6);
        await changevalue.deployed();
    })
    it("Contract is Deployed?", async function(){
        console.log("Yes Contract is Deployed Successfully!");
    }),
    it("price is zero ", async function(){
      expect( await changevalue.price()).to.equal(6);
    }),
    it("change price", async function(){
      await changevalue.updatePrice(8);
      console.log("Price after update is", await changevalue.price()); //8
    }),
    it("price should not be changed", async function(){
      await changevalue.connect(add1).updatePrice(9).should.be.revertedWith("Ownable: caller is not the owner");
      console.log("price is ",await changevalue.price()); //6
    })
    
})

    