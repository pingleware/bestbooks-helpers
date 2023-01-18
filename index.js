"use strict"

const { ChartOfAccounts } = require("@pingleware/bestbooks-core");
const core = require("@pingleware/bestbooks-core");

async function createAccount(name,type) {
    try {
        const coa = new core.ChartOfAccounts();
        await coa.add(name,type).then(function(status){
            return status;
        });
    } catch(error) {
        console.error(error);
    }
}

async function addCredit(account, date, description, amount) {
    await account.addCredit(date,description,amount).then(function(status){
        return status;
    });
}

async function addDebit(account, date, description, amount) {
    await account.addDebit(date,description,amount).then(function(status){
        return status;
    });
}

function addTransaction(name, type, date, description, debit, credit) {
    try {
        async() => {
            var status = [];
            const coa = new core.ChartOfAccounts();
            coa.add(name,type);
    
            const ledger = new core.Ledger(name,type);
            if (debit > 0) {
                await ledger.addDebit(date, description, debit).then(function(_status){
                    status.push(_status);
                });
            }
            if (credit > 0) {
                await ledger.addCredit(date, description, credit).then(function(_status){
                    status.push(_status);
                });
            }    
        }
    } catch(error) {
        console.error(error);
    }
}

function editTransaction(id, type, account, date, description, debit, credit) {
    try {
        async() => {
            const coa = new core.ChartOfAccounts();
            coa.add(account,type);
            const ledger = new Ledger(account, type);
			ledger.getByID(id);
			return await ledger.update(id, account, type, date, description, debit, credit);
        }
    } catch(error) {
        console.error(error);
    }
}

module.exports = {
    createAccount,
    addCredit,
    addDebit,
    addTransaction,
    editTransaction
}