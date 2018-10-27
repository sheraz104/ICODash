const express = require("express");
const Web3 = require("web3");

const app = express();

const CrowdsaleABI = require("./ABI").ABI;

const web3 = new Web3("wss://ropsten.infura.io/ws");

app.get("/getBalance/:crowdsaleAddress/:userAddress", (req, res) => {
  const { crowdsaleAddress, userAddress } = req.params;
  let crowdsaleInstance = new web3.eth.Contract(CrowdsaleABI, crowdsaleAddress);

  crowdsaleInstance.getPastEvents(
    "Tranferred",
    {
      filter: { beneficiary: userAddress },
      fromBlock: 0,
      toBlock: "latest"
    },

    (err, event) => {
      if (err) {
        console.log(err);
        return;
      }

    //   console.log(event[event.length - 1]);
      const {beneficiary, tokenAmount, bonusAmont} = event[event.length - 1].returnValues;
    //   console.log(beneficiary, tokenAmount, bonusAmont);
      res.send({beneficiary, tokenAmount, bonusAmont})
    }
  );
});


const PORT = process.env.PORT || 8333;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
