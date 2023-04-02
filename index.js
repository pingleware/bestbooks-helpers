"use strict"

const { ChartOfAccounts, 
        Ledger, 
        Journal, 
        Asset, 
        Equity, 
        Expense, 
        Liability, 
        ContraLiability, 
        Vendor } = require("@pingleware/bestbooks-core");

async function createAccount(name,type) {
    try {
        const coa = new ChartOfAccounts();
        await coa.add(name,type).then(function(status){
            return status;
        });
    } catch(error) {
        console.error(error);
    }
}

async function createNewUser(usertype,usermeta) {
    try {
        switch(usertype) {
            case 'internal':
                {

                }
                break;
            case 'vendor':
                {
                    var vendor = new Vendor();
                    return await vendor.add(usermeta);
                }
                break;
            case 'customer':
                {

                }
                break;
        }
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

function getTransactions(account, type, begin_date, end_date) {
    try {
        var ledger = new Ledger(account, type);
        return ledger.get_transactions_by_range(begin_date,end_date);
    } catch(error) {
        console.error(error);
    }
}

function addTransaction(name, type, date, description, debit, credit,callback,company_id=0,office_id=0) {
    try {
        var status = [];
        const coa = new ChartOfAccounts();
        coa.add(name,type);

        const ledger = new Ledger(name,type);

        if (debit > 0 && credit == 0) {
            ledger.addDebit(date, description, debit, company_id, office_id).then(function(_status){
                status.push(_status);
                callback(status);
            });
        } else if (debit == 0 && credit > 0) {
            ledger.addCredit(date, description, credit, company_id, office_id).then(function(_status){
                status.push(_status);
                callback(status);
            });
        } else if (debit > 0 && credit > 0) {
            ledger.addDebit(date, description, debit, company_id, office_id).then(function(_status){
                status.push(_status);
                ledger.addCredit(date, description, credit, company_id, office_id).then(function(_status){
                    status.push(_status);
                    callback(status);
                });
            });
        }
    } catch(error) {
        console.error(error);
    }
}

function addTransactionSync(name, type, date, description, debit, credit,company_id=0,office_id=0) {
    try {
        var status = [];
        const coa = new ChartOfAccounts();
        coa.add(name,type);

        const ledger = new Ledger(name,type);

        var results = [];

        if (debit > 0 && credit == 0) {
            results[0] = ledger.addDebit(date, description, debit, company_id, office_id);
        } else if (debit == 0 && credit > 0) {
            results[0] = ledger.addCredit(date, description, credit, company_id, office_id);
        } else if (debit > 0 && credit > 0) {
            results[0] = ledger.addDebit(date, description, debit, company_id, office_id);
            results[1] = ledger.addCredit(date, description, credit, company_id, office_id)
        }
        return results;
    } catch(error) {
        console.error(error);
    }
}

function editTransaction(id, type, account, date, description, debit, credit) {
    try {
        async() => {
            const coa = new ChartOfAccounts();
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

function asset(account, txdate, description, amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add(account,'Asset');

        var asset = new Asset(account);
        if (amount < 0) {
            asset.decrease(txdate,description,amount);
        } else {
            asset.increase(txdate,description,amount);
        }
    } catch(error) {
        console.error(error);
    }
}

function expense(account, txdate, description, amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add(account,'Expense');

        var expense = new Expense(account);
        if (amount < 0) {
            expense.decrease(txdate,description,amount);
        } else {
            expense.increase(txdate,description,amount);
        }
    } catch(error) {
        console.error(error);
    }
}

/**
 * Credit Accounts: Liabilities, Equity, & Revenue
 * From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml
 *
 * Liability, Equity, and Revenue accounts usually receive credits, so they maintain negative 
 * balances. They are called credit accounts. Accounting books will say “Accounts that 
 * normally maintain a negative balance are increased with a Credit and decreased with a 
 * Debit.” Again, look at the number line. If you add a negative number (credit) to a 
 * negative number, you get a larger negative number! (moving left on the number line). But 
 * if you start with a negative number and add a positive number to it (debit), you get a 
 * smaller negative number because you move to the right on the number line.
 * 
 * We have not discussed crossing zero on the number line. If we have $100 in our checking
 * account and write a check for $150, the check will bounce and Cash will have a negative 
 * value - an undesirable event. A negative account might reach zero - such as a loan account 
 * when the final payment is posted. And many accounts, such as Expense accounts, are reset 
 * to zero at the beginning of the new fiscal year. But credit accounts rarely have a 
 * positive balance and debit accounts rarely have a negative balance at any time.
 * 
 * [Remember: A debit adds a positive number and a credit adds a negative number. But you 
 * NEVER put a minus sign on a number you enter into the accounting software.] 
 */
function liability(account, txdate, description, amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add(account,'Liability');

        var liability = new Liability(account);
        if (amount < 0) {
            liability.decrease(txdate,description,amount);
        } else {
            liability.increase(txdate,description,amount);
        }
    } catch(error) {
        console.error(error);
    }
}

function equity(account, txdate, description, amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add($account, "Equity");
    
        var equity = new Equity(account);
        if (amount < 0) {
            equity.increase(txdate, description, amount);
        } else {
            equity.decrease(txdate, description, amount);
        }
    } catch(error) {
        console.error(error);
    }
}

function revenue(account, txdate, description, amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add($account, "Revenue");
    
        var revenue = new Revenue(account);
        if (amount < 0) {
            revenue.increase(txdate, description, amount);
        } else {
            revenue.decrease(txdate, description, amount);
        }
    } catch(error) {
        console.error(error);
    }
}

function isJournalInbalance() {
    try {
        var journal = new Journal();
		return journal.inBalance();
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 1: Owner Invests Capital in the Company
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * Owner invests $5,000.   Analysis: Since money is deposited into the checking account, Cash 
 * is debited (the balance increased by $5,000). What account receives a credit? An Equity 
 * account called Owner’s Equity or Capital Contribution. Since Equity accounts are 
 * ‘negative’ accounts, crediting this Equity account increases its balance by $5,000.
 *
 * Debit Cash (increase its balance)
 * 
 * Credit Owner’s Equity|Capital (increases its balance)
 */
 
function investment(txdate, description, amount, equity='Owners Equity') {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add(equity, 'Equity');

		var cash = new Cash('Cash');
		cash.increase(txdate, description, amount);

		var equity = new Equity(equity);
		equity.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 2: Company Takes Out a Loan
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The company borrows $8,000 from a bank.   Analysis: Since the money will be deposited into 
 * the checking account, Cash is debited (the balance increased by $8,000.) The account to 
 * receive the credit is a Liability account called Loans Payable (you may create a separate 
 * account or sub-account for each loan). Liability accounts are credit accounts, so 
 * crediting the Liability account increases its negative balance by $8,000 (moves to the 
 * left on the number line).
 *
 * Debit Cash (increases its balance)
 * 
 * Credit Loans Payable (increases its balance)
 */
function encumber(txdate, description, amount) {
    var coa = new ChartOfAccounts();
    coa.add('Cash', 'Cash');
    coa.add('Loans Payable', 'Liability');

    var cash = new Cash('Cash');
    cash.increase(txdate, description, amount);

    var liability = new Liability('Loans Payable');
    liability.increase(txdate, description, amount);
}

/**
 * Example 3: Monthly Statement Fee from Bank
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * Your bank charges a monthly statement fee of $14.   Analysis: This transaction is entered via a journal 
 * entry each month when the checking account is balanced. Since money was removed from the checking 
 * account, Cash is credited (the balance decreased by $14). The Expense account called Bank Service 
 * Charges receives the debit.
 *
 * Debit Bank Fees (increases its balance)
 *
 * Credit Cash (decreases its balance)
 */
function bankfee(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add('Bank Service Charges', 'Expense');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, amount);

		var expense = new Expense('Bank Service Charges');
		expense.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 4: Making a Loan Payment
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * You pay $540, via check, on the $8,000 loan acquired in Example 2. Of this amount, $500 is applied to 
 * the principal, and $40 is applied to the loan interest.   Analysis: Since a check is being written, 
 * BestBooks will automatically credit Cash. In this case the debit is split between two accounts. To 
 * reflect the $500 that has been applied to the loan balance, debit the loan account. (Since it is a 
 * liability account, a debit will reduce its balance, which is what you want.) The $40 interest paid is 
 * an expense, so debit the expense account called Loan Interest. Remember that even though the debit is 
 * split between two accounts, the total debit must always equal the total credit.
 *
 * Debit Loans Payable $500 (decreases its balance)
 *
 * Debit Interest Expense $40 (increases its balance)
 *
 * Credit Cash $540 (decreases its balance)
 */
function loanPayment(txdate, description, amount, interest) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add('Loans Payable', 'Liability');
		coa.add('Interest Expense', 'Expense');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, Number(amount + interest));

		var liability = new Liability('Loans Payable');
		liability.decrease(txdate, description, amount);

		var expense = new Expense('Interest Expense');
		expense.increase(txdate, description, interest);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 5: Company Writes a Check to Pay for an Asset
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The Company writes a check for $8,500 of equipment.   Analysis: Since a check was written, BestBooks 
 * will automatically credit Cash. The item is too costly to be considered an expense, so it must be 
 * entered into the accounting system as an asset. So we will debit an Asset account called Equipment or 
 * something similar. In addition, assets must be depreciated over time, with journal entries entered each 
 * year for a proscribed number of years. Depreciation is complicated, so be sure to see your accountant 
 * when purchasing company assets.
 *
 * Debit Equipment (increases its balance)
 *
 * Credit Cash (decreases its balance)
 *
 * [Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a 
 * minus sign on a number you enter into the accounting software.] 
 */
function payAssetsByCheck(txdate, description, amount, account) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add(account, 'Asset');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, amount);

		var asset = new Asset(account);
		asset.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

function payAssetsByCredit(txdate, description, amount, account) {
    try {
		var coa = new ChartOfAccounts();
		coa.add(account, 'Asset');
		coa.add('Accounts Payable', 'Liability');

		var expense = new Asset(account);
		expense.increase(txdate, description, amount);

		var liability = new Liability('Accounts Payable');
		liability.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 6: Company Writes Check to Pay for Expenses
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The Company writes a check to pay for $318 of office supplies.   Analysis: Since a check was written, 
 * BestBooks will automatically credit Cash. We debit the Expense account called Office.
 *
 * Debit Office (increases its balance)
 *
 * Credit Cash (decreases its balance)
 */
function payExpenseByCheck(txdate, description, amount, account) {
    try {
	    var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add(account, 'Expense');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, amount);

		var expense = new Expense(account);
		expense.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 7: Company Uses Credit Card to Pay for Expenses
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The Company purchases $318 of office supplies and pays with a company credit card. Back in the office, 
 * the bill is entered into the accounting software.   Analysis: When you enter a bill, BestBooks will 
 * automatically credit the Liability account called Accounts Payable. And since you purchased office 
 * supplies, an expense account called Office (or similar) should receive the debit.
 *
 * Debit Office (increase its balance)
 *
 * Credit Accounts Payable (increases its balance)
 */
function payExpenseByCard(txdate, description, amount, account) {
    try {
		var coa = new ChartOfAccounts();
		coa.add(account, 'Expense');
		coa.add('Accounts Payable', 'Liability');

		var liability = new Liability('Accounts Payable');
		liability.increase(txdate, description, amount);

		var expense = new Expense(account);
		expense.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 8: Company Pays the Credit Card Bill
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * You pay the bill for the $318 of office supplies purchased in Example 7.   Analysis: When the bill was 
 * entered, an expense account called Office (or similar) was debited and Accounts Payable was credited. 
 * Now as we write a check to pay the bill, BestBooks will automatically credit Cash. And the accounting 
 * software will debit Accounts Payable - in effect, reversing the earlier credit.
 *
 * Debit Accounts Payable (decreases its balance)
 *
 * Credit Cash (decrease its balance)
 */
function cardPayment(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add('Accounts Payable', 'Liability');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, amount);

		var liability = new Liability('Accounts Payable');
		liability.decrease(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 9: Company Pays Cash for a Cost of Good Sold (COGS)
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The Company pays $450 cash for Product A - a COGS part.   Analysis: When you write the check, 
 * BestBooks will automatically credit Cash. In the check window, choose the COGS account from the 
 * Expenses tab, or choose an Item from the Items tab that is associated with the COGS account. Either 
 * way, the COGS account receives the debit.
 *
 * Debit COGS (increase its balance)
 *
 * Credit Cash (decrease its balance)
 */
function cashPayment(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add('Cost of Goods Sold', 'Expense');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, amount);

		var cogs = new Expense('Cost of Goods Sold');
		cogs.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 10: Company Receives Cash Payment for a Sale
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The Company sells Product A for $650 cash.   
 * Analysis: When you enter the cash sale, BestBooks will automatically debit Cash. 
 * You will have to choose an Item for the sale … it might be “Prod A income” and 
 * associated with the Sales account.
 *
 * Debit Cash (increases its balance)
 * 
 * Credit Sales (increases its balance)
 */
function salesCash(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add("Sales", "Revenue");
		coa.add("Cash", "Cash");

		var sales = new Revenue("Sales");
		sales.increase(txdate, description, amount);

		var cash = new Cash("Cash");
		cash.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 11: Company Makes a Credit Card Sale
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The Company sells Product A for $650 on credit.   Analysis: When you create an invoice, 
 * you must specify an Item for each separate charge on the invoice. BestBooks will 
 * automatically credit the revenue account(s) associated with these Items. And BestBooks 
 * will automatically debit the invoice amount to Accounts Receivable.
 *
 * Debit Accounts Receivable (increases the balance)
 *
 * Credit Sales (increases the balance)
 */
function salesCard(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add("Sales", "Revenue");
		coa.add("Account Receivable", "Asset");

		var sales = new Revenue("Sales");
		sales.increase(txdate, description, amount);

		var ar = new Asset("Account Receivable");
		ar.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 12: Company Receives Payment on an Invoice
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The Company receives a payment for the $650 invoice above.   Analysis: When you created the invoice, 
 * BestBooks debited the Accounts Receivable account. When you post the invoice payment, BestBooks will 
 * credit A/R - in effect reversing the earlier debit. The accounting software will also debit Cash - 
 * increasing its balance.
 *
 * Debit Cash (increases the balance)
 * 
 * Credit A/R (decreases the balance)
 */
function accountsReceivablePayment(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add("Account Receivable", "Asset");

		var cash = new Cash('Cash');
		cash.increase(txdate, description, amount);

		var ar = new Asset("Account Receivable");
		ar.decrease(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 13: Owner Takes Money Out of the Company - a Distribution
 * From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml
 *
 * The owner’s writes himself a check for $1,000.   Analysis: Since a check was written, BestBooks will 
 * automatically credit Cash. The account you chose for the debit is an Equity account called Draw (Sole 
 * Proprietor) or Distribution (Corporation). Note: These are the only non-contra Equity accounts that are 
 * positive accounts and receive debits.
 *
 * Debit Owner’s Draw (increases its balance)
 *
 * Credit Cash (decrease its balance)
 */
function distribution(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash', 'Cash');
		coa.add('Distribution', 'Equity');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, amount);

		var equity = new Equity('Distrbution');
		equity.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Costs of Goods Sold
 * 
 * There are the following COGS categories in accordance with the GAAP.
 * 		
 * Debit COGS is an Expense (increases it's balance)
 * Credit Purchases is a Liability (decrease it's balance)
 * Credit Inventory is an Asset (increase or decrease based on the amount)
 */
function COGS(txdate,description,amount, cogs='COGS',purchase='Purchases',inventory='Inventory') {
    try {
		var coa = new ChartOfAccounts();
		coa.add(cogs, 'Expense');
		coa.add(purchase, 'Liability');
		coa.add(inventory, 'Asset');
		
		var expense = new Expense(cogs);
		expense.increase(txdate, description, amount);
		
		var account_payable = new Liability(purchase);
		account_payable.decrease(txdate, description, amount);
		
		var asset = new Asset(inventory);
		if (amount < 0) {
			asset.decrease(txdate, description, amount);
		} else {
			asset.increase(txdate, description, amount);
		}
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 17: Unearned Revenue
 * Is income received but not yet earned, e.g. deposits taken on a job not yet performed.
 * Unearned income is applicable for Service Income, while Product Income is regular income
 * 
 * https://www.wallstreetmojo.com/unearned-revenue-journal-entries/
 * 
 * https://www.accountingverse.com/accounting-basics/unearned-revenue.html 
 * 
 * Cash asset account is debited for amount (balance is decreasing)
 * Unearned Revenue liability account is credited for amount (balance is increasing)
 * 
 */
function unearnedRevenue(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Cash','Asset');
		coa.add('Unearned Revenue','Revenue');

		var cash = new Cash('Cash');
		cash.decrease(txdate, description, amount);

		var unearned_revenue = new Revenue('Unearned Revenue');
		unearned_revenue.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 18: Accounting for Bad Debt
 * If a company sells on credit, customers will occasionally be unable to pay, 
 * in which case the seller should charge the account receivable to expense as a bad debt
 * 
 * https://www.accountingtools.com/articles/2017/5/17/accounts-receivable-accounting
 * 
 * Bad Debt expense account debited 
 * Account Receivable is credited
 */
function badDebt(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add('Bad Debt','Expense');
		coa.add('Account Receivable','Asset');

		var bad_debt = new Expense('Bad Debt');
		bad_debt.increase(txdate, description, amount);

		var account_receivable = new Asset('Account Receivable');
		account_receivable.decrease(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 19: Accrued Income
 * When a company has earned income but has not received the monies, that are NOT from Sales
 * 
 * https://accounting-simplified.com/financial/accrual-accounting/accrued-income
 * 
 * Income Receivable is debited (increases the balance)
 * Income account is credited (increases the balance)
 */
function accruedIncome(txdate, description, amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add("Income Receivable", "Asset");
		coa.add("Income", "Revenue");

		var income = new Income("Income");
		income.increase(txdate, description, amount);

		var ir = new Asset("Income Receivable");
		ir.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 19.1: Receipt of Payment on Accrued Income
 * When payment is due, and the customer makes the payment, an accountant for that company would record an adjustment to accrued revenue. 
 * The accountant would make an adjusting journal entry in which the amount of cash received by the customer 
 * would be debited to the cash account on the balance sheet, 
 * and the same amount of cash received would be credited to the accrued revenue account or accounts receivable account, reducing that account.
 * 
 * Cash Account is debited (increases the balance)
 * Income Receivable is credited (decreases the balamce)
 */
function accruedIncomePayment() {
    try {
		var coa = new ChartOfAccounts();
		coa.add("Income Receivable", "Asset");
		coa.add("Cash","Asset");

		var ir = new Asset("Income Receivable");
		ir.decrease(txdate, description, amount);

		var cash = new Asset("Cash");
		cash.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Example 20: Accrued Expense
 * When a company has an expense but has not paid, and recorded as an adjusting entry
 * 
 * https://www.accountingtools.com/articles/what-are-accrued-expenses.html
 * 
 * Expense account is debited (balance is increasing)
 * Payable account is credited (balance is increasing)
 */
function accruedExpense(expense,payable,txdate,description,amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add($expense, "Asset");
		coa.add($payable, "Liability");

		var expense_account = new Asset(expense);
		expense_account.increase(txdate, description, amount);

		var payable_account = new Liability(payable);
		payable_account.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Dividends Payable
 * 
 * See https://www.wallstreetprep.com/knowledge/dividends-payable/
 * Cash Dividend Declared: 
 *      Debit (decrease) -> Retained Earnings (Equity)
 *      Credit (increase) => Dividends Payable (Liability)
 * 
 * Cash Dividend Paid: Debit -> Dividends Payable (liability), Credit -> Cash (Asset)
 */
function dividendDeclared(txdate,description,amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add("Retained Earnings", "Equity");
		coa.add("Dividends Payable", "Liability");

		var equity_account = new Equity("Retained Earnings");
		equity_account.decrease(txdate, description, amount);

		var payable_account = new Liability("Dividends Payable");
		payable_account.increase(txdate, description, amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * 
 * @param {*} txdate 
 * @param {*} description 
 * @param {*} amount 
 * 
 * Cash Dividend Paid: 
 *      Debit*= (decrease) -> Dividends Payable (liability)
 *      Credit (decrease) -> Cash (Asset)
 */
function dividendPaid(txdate,description,amount) {
    try {
		var coa = new ChartOfAccounts();
		coa.add("Cash", "Asset");
		coa.add("Dividends Payable", "Liability");

		var asset_account = new Asset("Cash");
		asset_account.decrease(txdate, description, amount);

		var payable_account = new Liability("Dividends Payable");
		payable_account.decrease(txdate, description, amount);
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
 * For purposes of this Subtopic, the technological feasibility of a computer software product is established when the entity has completed all planning, 
 * designing, activities that are necessary to establish that the product can be produced to meet its design specifications including functions, features, 
 * and technical performance requirements. At a minimum, the entity shall have performed the activities in either (a) or (b) as evidence that
 * technological feasibility has been established: 
 */

/**
 * Security Deposit
 * 
 * Receive: Cash (Asset) -> Debit (increase)
 *          Refundable Secuirty Deposit (Liability) -> Credit (Increase)
 */
function securityDepositReceived(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Cash","Asset");
        coa.add("Refundable Security Deposit","Liability");
        var cash = new Asset("Cash");
        var refundableSecurityDeposit = new Liability("Refundable Security Deposit");
        cash.increase(txdate,description,amount);
        refundableSecurityDeposit.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}
/**
 * Paid:    Cash (Asset) -> Credit (decrease)
 *          Security Deposit (Asset) -< Debit (increase) 
 */
function securityDepositPaid(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Cash","Asset");
        coa.add("Security Deposit","Asset");
        var cash = new Asset("Cash");
        var securityDeposit = new Liability("Security Deposit");
        cash.decrease(txdate,description,amount);
        securityDeposit.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Deferred Revenue
 * 
 * Since deferred revenues are not considered revenue until they are earned, 
 * they are not reported on the income statement.  Instead they are reported on the balance sheet 
 * as a liability. As the income is earned, the liability is decreased and recognized as income.
 * 
 * the Cash (Asset account) and the Unearned Revenue (Liability account) are increasing.
 */
function deferredRevenue(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Cash","Asset");
        coa.add("Unearned Revenue","Liability");

        var cash = new Asset("Cash");
        var unernedRevenue = new Liability("Unearned Revenue");

        cash.increase(txdate,description,amount);
        unernedRevenue.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}
/**
 * Recognize Uneaarned Revenue
 * 
 * Once the services are performed, the income can be recognized with the following entry:  
 * This entry is decreasing the liability account and increasing revenue.
 */
function recognizeDeferredRevenue(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Unearned Revenue","Liability");
        coa.add("Revenue","Revenue");

        var unernedRevenue = new Liability("Unearned Revenue");
        var revenue = new Revenue("Revenue");

        unernedRevenue.decrease(txdate,description,amount);
        revenue.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Deferred Expense
 * 
 * Like deferred revenues, deferred expenses are not reported on the income statement. 
 * Instead, they are recorded as an asset on the balance sheet until the expenses are incurred. 
 * As the expenses are incurred the asset is decreased and the expense is recorded on the 
 * income statement.
 * 
 * The (Asset account) is increasing, and Cash (Asset account) is decreasing.
 */
function deferredExpense(asset_account,txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add(asset_account,"Asset");
        coa.add("Cash","Cash");

        var asset = new Asset(asset_account);
        var cash = new Asset("Cash");

        asset.increase(txdate,description,amount);
        cash.decrease(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}
/**
 * Recognize Deferred Expense
 * 
 * Here we are decreasing our (Asset) and increasing our (Expense)
 */
function recognizeDeferredExpense(asset_account,expense_accouont,txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add(asset_account,"Asset");
        coa.add(expense_accouont,"Expense");

        var asset = new Asset(asset_account);
        var expense = new Expense(expense_accouont);

        asset.decrease(txdate,description,amount);
        expense.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Prepaid Subscriptions 
 */
function prepaidSubscriptions(txdate,description,amount) {
    try {
        deferredExpense("Prepaid Subscriptions",txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}
/**
 * Recognized Prepaid Subscription
 * 
 * is an adjusting entry when the prepaid subscription is recognized
 */
function recognizePrepaidSubscription(txdate,description,amount) {
    try {
        recognizeDeferredExpense("Prepaid Subscriptions","Subscriptions",txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Paid -in Capital Stock ior Contributed Capital
 * 
 * @param {string} txdate 
 * @param {string} description 
 * @param {number} amount total amount invested
 * @param {number} shares are the number of share purchases
 * @param {string} assetClass, default='Common Stock', other choices are 'Preferred Stock', Debt, Commodity, etc.
 * @param {number} parValue, default=0
 */
function paidInCapitalStock(txdate,description,amount,shares,assetClass="Common Stock",parValue=0) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Cash","Cash");
        coa.add(assetClass,"Equity");

        var cash = new Cash("Cash");
        cash.increase(txdate,description,amount);

        var equity = new Equity(assetClass);

        if (Number(parValue) > 0) {
            var excess = Number(amount) - Number(shares * parValue);
            if (excess > 0) {
                coa.add(`Additional Paid-In Capital - ${assetClass}`,"Asset");
                var paidInCapital = new Asset(`Additional Paid-In Capital - ${assetClass}`);
                paidInCapital.decrease(txdate,description,excess);

                var sharesValue = Number(shares * parValue);
                equity.increase(txdate,description,sharesValue);
            } else {
                equity.increase(txdate,description,amount);
            }
        } else {
            equity.increase(txdate,description,amount);    
        }    
    } catch(error) {
        console.error(error);
    }
}

/**
 * Issuance of Stock Dividend
 * See https://www.accountingtools.com/articles/stock-dividend-accounting
 * A business typically issues a stock dividend when it does not have sufficient cash 
 * to pay out a normal dividend, and so resorts to a "paper" distribution of additional shares 
 * to shareholders. A stock dividend is never treated as a liability of the issuer, 
 * since the issuance does not reduce assets. Consequently, this type of dividend cannot 
 * realistically be considered a distribution of assets to shareholders.
 * 
 * Also used for Participating Preferred Stock divident, see https://www.accountingcoach.com/stockholders-equity/explanation/7
 */
function stockDividend(txdate,description,amount,shares,assetClass="Common Stock",parValue=0) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Retained Earnings","Equity");
        coa.add(assetClass,"Equity");

        var retainedEarnings = new Equity("Retained Earnings");
        retainedEarnings.decrease(txdate,description,Number(sharesOutstanding * fairMarketValue));

        var equity = new Equity(assetClass);

        if (Number(parValue) > 0) {
            var sharesValue = Number(shares * parValue);
            var excess = Number(amount) - sharesValue;
            if (excess > 0) {
                coa.add(`Additional Paid-In Capital - ${assetClass}`,"Asset");
                var paidInCapital = new Asset(`Additional Paid-In Capital - ${assetClass}`);
                paidInCapital.decrease(txdate,description,excess);

                equity.increase(txdate,description,sharesValue);
            } else {
                equity.increase(txdate,description,amount);
            }
        } else {
            equity.increase(txdate,description,amount);
        }
    } catch(error) {
        console.error(error);
    }
}

/** 
 * Cash Dividend Declared 
 * See https://www.accountingtools.com/articles/how-do-i-account-for-cash-dividends.html
 */
function cashDividendDeclared(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Retained Earnings","Equity");
        coa.add("Dividends Payable","Liability");

        var retainedEarnings = new Equity("Retained Earnings");
        retainedEarnings.decrease(txdate,description,amount);

        var dividendsPayable = new Liability("Dividends Payable");
        dividendsPayable.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Cash Dividend Payable
 * See https://www.accountingtools.com/articles/how-do-i-account-for-cash-dividends.html
 */
function cashDividendPayable(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Cash","Cash");
        coa.add("Dividends Payable","Liability");

        var dividendsPayable = new Liability("Dividends Payable");
        dividendsPayable.decrease(txdate,description,amount);

        var cash = new Cash();
        cash.decrease(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Nonparticipating Preferred Stock Dividend
 * See https://www.accountingcoach.com/stockholders-equity/explanation/7
 * 
 */

/**
 * Stocks issued other than Cash
 * See https://www.accountingcoach.com/stockholders-equity/explanation/9
 * 
 * An example, when an investors trades real estate for shares, where the real estate is the asset account or
 * an investor agrees to a UCC claim on real estate for shares, now the UCC claim is the asset
 * 
 * asset_account can be "Real Estate", "UCC Claim", etc.
 * 
 * assetClass can be "Common Stock", "Preferred Stock", "Debt", "Commodity", "Merger & Acquisitions", "Employee"
 */
function stocksIssuedOtherThanCash(txdate,description,amount,asset_account,shares,assetClass="Common Stock",parValue=0) {
    try {
        var coa = new ChartOfAccounts();
        coa.add(asset_account,"Asset");
        coa.add(assetClass,"Equity");

        var asset = new Asset(asset_account);
        asset.increase(txdate,description,amount);

        var equity = new Equity(assetClass);

        if (Number(parValue) > 0) {
            var stockValue = Number(shares * parValue);
            var excess = Number(amount) - stockValue;
            if (excess > 0) {
                coa.add(`Additional Paid-In Capital - ${assetClass}`,"Asset");
                var paidInCapital = new Asset(`Additional Paid-In Capital - ${assetClass}`);
                paidInCapital.decrease(txdate,description,excess);

                equity.increase(txdate,description,commonStock);
            } else {
                equity.increase(txdate,description,amount);
            }
        } else {
            equity.increase(txdate,description,amount);
        }
    } catch(error) {
        console.error(error);
    }
}

/**
 * Working hours
 */
function workingHours(hoursPerWeek) {
    let hoursPerYear = Math.round(Number(hoursPerWeek / 52));
    return {
        workHoursInYear: hoursPerYear,
        workHoursInMonth: Math.round(Number(hoursPerYear / 12))
    }
}
/**
 * Payroll Payable
 */
function payrollPayable(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Cash","Cash");
        coa.add("Net Payroll Payable","Liability");

        var cash = new Cash();
        var payroll = new Liability("Net Payroll Payable");

        payroll.increase(txdate,description,amount);
        cash.decrease(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Accrued Interest
 * See https://www.accountingcoach.com/bonds-payable/explanation/2
 */
function accruedInterest(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Interest Expense","Expense");
        coa.add("Interest Payable","Liability");

        var expense = new Expense("Interest Expense");
        var liability = new Liability("Interest Payable");

        expense.increase(txdate,description,amount);
        liability.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}
/**
 * Interest Expense
 */
function interestExpense(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Interest Expense","Expense");
        coa.add("Cash","Cash");

        var cash = new Cash();
        var expense = new Expense("Interest Expense");

        expense.increase(txdate,description,amount);
        cash.decrease(txdate,description,amount);

    } catch(error) {
        console.error(error);
    }
}
/**
 * Bonds Issued at Par with No Accrued Interest
 */
function bondsIssuedWOAccruedInterest(txdate,description,amount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Bonds Payable","Liability");
        coa.add("Cash","Cash");

        var cash = new Cash();
        var liability = new Liability("Bonds Payable");

        cash.increase(txdate,description,amount);
        liability.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}
/**
 * Bonds Issued at Par with Accrued Interest
 */
function bondsIssuedWithAccruedInteres(txdate,description,amount,interest) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Bonds Payable","Liability");
        coa.add("Interest Payable","Liability");
        coa.add("Cash","Cash");

        var cash = new Cash();
        var bondsPayable = new Liability("Bonds Payable");
        var interestPayable = new Liability("Interest Payable");

        cash.increase(txdate,description,Number(amount + interest));
        bondsPayable.increase(txdate,description,amount);
        interestPayable.incresse(txdate,description,interest);

    } catch(error) {
        console.error(error);
    }
}
/**
 * Bond Premium with Straight-Line Amortization
 */
function bondPremium(txdate,description,amount,premium) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Bonds Payable","Liability");
        coa.add("Bond Premium","Liability");
        coa.add("Cash","Cash");

        var cash  = new Cash();
        var bondsPayable = new Liability("Bonds Payable");
        var bondPremium = new Liability("Bond Premium");

        cash.increase(txdate,description,Number(amount + premium));
        bondsPayable.increase(txdate,description,amount);
        bondPremium.increase(txdate,description,premium);

    } catch(error) {
        console.error(error);
    }
}
/**
 * Bond Premium Interest Payment
 */
function bondPremiumInterestPayment(txdate,description,amount,premium) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Interest Expense","Expense");
        coa.add("Bond Premium","Liability");
        coa.add("Interest Payable","Liability");

        var interestPayable = new Liability("Interest Payable");
        var expense = new Expense("Interest Expense");
        var liability = new Liability("Bond Premium");

        expense.increase(txdate,description,amount);
        liability.decrease(txdate,description,premium);
        interestPayable.increase(txdate,description,Number(amount + premium));

    } catch(error) {
        console.error(error);
    }
}
/**
 * Bond Discount with Straight-Line Amortization
 * See https://www.accountingcoach.com/bonds-payable/explanation/6
 */
function bondDiscount(txdate,description,amount,discount) {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Bonds Payable","Liability");
        coa.add("Bond Discount","ContraLiability");
        coa.add("Cash","Cash");

        var cash  = new Cash();
        var bondsPayable = new Liability("Bonds Payable");
        var bondDiscount = new ContraLiability("Bond Premium");

        cash.increase(txdate,description,Number(amount + discount));
        bondsPayable.increase(txdate,description,amount);
        bondDiscount.increase(txdate,description,discount);

    } catch(error) {
        console.error(error);
    }
}

/**
 * Inventory Purchase
 */
function inventoryPurchase(txdate,description,amount,inventory="Inventory") {
    try {
        var coa = new ChartOfAccounts();
        coa.add("Accounts Payable","Liability");
        coa.add(inventory,"Asset");

        var accountsPayable = new Liability("Accounts Payable");
        var inventory = new Asset(inventory);

        inventory.increase(txdate,description,amount);
        accountsPayable.increase(txdate,description,amount);
    } catch(error) {
        console.error(error);
    }
}
/**
 * Inventory Shrinkage
 * See https://yourbusiness.azcentral.com/accounting-treatment-restaurant-spoilage-27516.html
 * 
 * In a cootage food kitchen, which may be licensed as a home-based food manufacturer, inventory shrinkage through expired or
 * spoilage is inevitable.
 * 
 * The reason for Inventory shrinkage is the general term for lost, stolen, damaged, spoiled, or expired inventory should be provided in
 * the description
 * 
 * Use this helper when you discover actual losses, debit your reserve account and credit inventory by the loss amount.
 */
function inventoryShrinkage(txdate,description,amount,asset="Inventory",contra_asset="Shrinkage Reserve") {
    var coa = new ChartOfAccounts();
    coa.add(contra_asset,AccountTypes.ContraAsset);
    coa.add(asset,AccountTypes.Asset);

    var contraAssetAccount = new ContraAsset(contra_asset);
    contraAssetAccount.increase(txdate,description,amount);

    var assetAccount = new Asset(asset);
    assetAccount.decrease(txdate,description,amount);
}
/**
 * Shrinkage Reserve
 * 
 * Generally accepted accounting principles require you to match expenses to the periods in which they occur. 
 * For this reason, companies might establish special reserve accounts for shrinkage losses. 
 * You first must estimate your shrinkage loss at the beginning of the period. 
 * Credit a contra-asset account with a name like “allowance for inventory losses” or “shrinkage reserve” for your estimated loss, 
 * and debit an expense account or COGS for the same amount. 
 * When you discover actual losses, debit your reserve account and credit inventory by the loss amount.
 * 
 * ONLY use the COGS if inventory loss is small, otherwise use an Inventory expense
 */
function inventoryShrinkageReserve(txdate,description,amount,expense="COGS",contra_asset="Shrinkage Reserve") {
    var coa = new ChartOfAccounts();
    coa.add(contra_asset,AccountTypes.ContraAsset);
    coa.add(expense,AccountTypes.Expense);

    var contraAssetAccount = new ContraAsset(contra_asset);
    contraAssetAccount.decrease(txdate,description,amount);

    var expenseAccount = new Expense(expense);
    expenseAccount.increase(txdate,description,amount);
}
function initializeEquity() {
    var coa = new ChartOfAccounts();
    coa.add('Common Shares Par Value','Equity');
    coa.add('Additional Paid-in Capital','Equity');
    coa.add('Retained Earnings','Equity');
    coa.add('Treasury Shares','Equity');
}

/**
 * Receive sales using paypal, with optional specific account.
 * 
 * For example,
 *      You made a sale from a specific website, like a cottage food website, and need to keep
 *      track of the total sales does not exceed a maximum as defined by state laws. So sales are
 *      recorded in the separate revenue account
 * 
 * @param {TIMESTAMP} txdate
 * @param {string} description
 * @param {number} amount
 * @param {string} account
 */
function salesViaPaypal(txdate,description,amount,fee,account="Sales") {
    try {
		var coa = new ChartOfAccounts();
		coa.add(account, "Revenue");
		coa.add("Paypal", "Bank");
        coa.add("Bank Fee", "Expense");

		var sales = new Revenue(account);
		sales.increase(txdate, description, Number(amount + fee));

		var ar = new Asset("Paypal");
		ar.increase(txdate, description, amount);

        var fees = new Expense("Bank Fee");
        fees.increase(txdate,`Paypal fee for: ${description}`,fee);
    } catch(error) {
        console.error(error);
    }
}

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
    createNewUser,
    addCredit,
    addDebit,
    getTransactions,
    addTransaction,
    addTransactionSync,
    editTransaction,
    addJournalTransaction,
    editJournalTransaction,
    asset,
    expense,
    liability,
    equity,
    revenue,
    isJournalInbalance,
    investment,
    encumber,
    bankfee,
    loanPayment,
    payAssetsByCheck,
    payAssetsByCredit,
    payExpenseByCheck,
    payExpenseByCard,
    cardPayment,
    cashPayment,
    salesCash,
    salesCard,
    salesViaPaypal,
    accountsReceivablePayment,
    distribution,
    COGS,
    unearnedRevenue,
    badDebt,
    accruedIncome,
    accruedIncomePayment,
    accruedExpense,
    dividendDeclared,
    dividendPaid,
    securityDepositReceived,
    securityDepositPaid,
    deferredRevenue,
    recognizeDeferredRevenue,
    deferredExpense,
    recognizeDeferredExpense,
    prepaidSubscriptions,
    recognizePrepaidSubscription,
    paidInCapitalStock,
    stockDividend,
    cashDividendDeclared,
    cashDividendPayable,
    stocksIssuedOtherThanCash,
    workingHours,
    payrollPayable,
    accruedInterest,
    interestExpense,
    bondsIssuedWOAccruedInterest,
    bondsIssuedWithAccruedInteres,
    bondPremium,
    bondPremiumInterestPayment,
    bondDiscount,
    inventoryPurchase,
    inventoryShrinkage,
    inventoryShrinkageReserve,
    initializeEquity
}