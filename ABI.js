module.exports = {
    ABI:[
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_beneficiary",
                    "type": "address"
                },
                {
                    "name": "_tokenAmount",
                    "type": "uint256"
                },
                {
                    "name": "_bonusAmont",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "changeOwner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "tokenAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "bonusAmont",
                    "type": "uint256"
                }
            ],
            "name": "Tranferred",
            "type": "event"
        }
    ]
    
}