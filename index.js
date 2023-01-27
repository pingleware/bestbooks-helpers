"use strict"

const { ChartOfAccounts, Ledger, Journal, Asset, Expense, Liability } = require("@pingleware/bestbooks-core");
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
    accountsReceivablePayment,
    distribution,
    COGS,
    unearnedRevenue,
    badDebt,
    accruedIncome,
    accruedIncomePayment,
    accruedExpense
}