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

async function addCredit(account, date, description, amount, company_id=0, office_id=0) {
    await account.addCredit(date,description,amount,company_id,office_id).then(function(status){
        return status;
    });
}

async function addDebit(account, date, description, amount, company_id=0, office_id=0) {
    await account.addDebit(date,description,amount,company_id,office_id).then(function(status){
        return status;
    });
}

function addTransaction(name, type, date, description, debit, credit,callback,company_id=0,office_id=0) {
    try {
        var status = [];
        const coa = new ChartOfAccounts();
        coa.add(name,type);

        const ledger = new Ledger(name,type);
        console.log(ledger)
        if (debit > 0 && credit == 0) {
            ledger.addDebit(date, description, debit, company_id, office_id).then(function(_status){
                status.push(_status);
                console.log(status);
                callback(status);
            });
        } else if (debit == 0 && credit > 0) {
            ledger.addCredit(date, description, credit, company_id, office_id).then(function(_status){
                status.push(_status);
                console.log(status);
                callback(status);
            });
        } else if (debit > 0 && credit > 0) {
            ledger.addDebit(date, description, debit, company_id, office_id).then(function(_status){
                status.push(_status);
                console.log(status);
                ledger.addCredit(date, description, credit, company_id, office_id).then(function(_status){
                    status.push(_status);
                    console.log(status);
                    callback(status);
                });
            });
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

function addJournalTransaction(account, date, reference, debit, credit, company_id=0, office_id=0) {
    try {
        var journal = new  Journal(account);
        journal.add(date,reference,account,debit,credit,company_id,office_id);
    } catch(error) {
        console.error(error);
    }
}

function editJournalTransaction(id, account, date, reference, debit, credit) {
    try {
        var journal = new Journal(account);
        journal.update(id,date,account,debit,credit,reference);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Cost to Estimate Technological Feasability
 * FASB ASC Topic: 985-20-25-1
 * 
 * All costs incurred to establish the technological feasibility of a computer software product 
 * to be sold, leased, or otherwise marketed are research and development costs. 
 * Those costs shall be charged to expense when incurred as required by Subtopic
 * 
 * For purposes of this Subtopic, the technological feasibility of a computer software product is established when the entity has completed all planning, designing, 
 * activities that are necessary to establish that the product can be produced to meet its design specifications including functions, features, 
 * and technical performance requirements. At a minimum, the entity shall have performed the activities in either (a) or (b) as evidence that
 * technological feasibility has been established: 
 */

/**
 * Debit Accounts: Assets & Expenses
 * From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml
 * 
 * Because Asset and Expense accounts maintain positive balances, they are positive, or debit 
 * accounts. Accounting books will say “Accounts that normally have a positive balance are
 *  increased with a Debit and decreased with a Credit.” Of course they are! Look at the 
 * number line. If you add a positive number (debit) to a positive number, you get a bigger
 * positive number. But if you start with a positive number and add a negative number 
 * (credit), you get a smaller positive number (you move left on the number line). 
 * The asset account called Cash, or the checking account, is unique in that it routinely
 * receives debits and credits, but its goal is to maintain a positive balance!
 */

/**
 * ELECT a.id,a.name,a.type,a.code,
(SELECT COUNT(j.id) FROM journal  j JOIN accounts a ON j.account = a.name) AS count,
IFNULL((SELECT  j.debit-j.credit  FROM journal j JOIN accounts a ON j.account=a.name) ,0.00) AS balance 
FROM accounts  a WHERE a.company_id=1
 */
module.exports = {
    createAccount,
    addCredit,
    addDebit,
    addTransaction,
    editTransaction,
    addJournalTransaction,
    editJournalTransaction
}