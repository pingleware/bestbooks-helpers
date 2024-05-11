# BestBooks Accounting Application Framework - HELPERS

The helper functions (aka hooks under WordPress) provide simpler interaction with the framework

# Dependency

    @pingleware/bestbooks-core

## Dependents

    @pingleware/bestbooks-export

    @pingleware/bestbooks-import

# Helper Methods

* accountsReceivablePayment
* accruedExpense
* accruedIncome
* accruedIncomePayment
* accruedInterest
* addCredit
* addDebit
* addFundsToPostageDebitAccount
* addJournalTransaction
* addTransaction
* addTransactionSync
* allocateFundingAccount
* asset
* badDebt
* bankfee
* bondDiscount
* bondPremium
* bondPremiumInterestPayment
* bondsIssuedWOAccruedInterest
* bondsIssuedWithAccruedInteres
* cardPayment
* cashDividendDeclared
* cashDividendPayable
* cashPayment
* COGS
* commissionPaid
* commissionPayable
* createAccount
* createNewUser
* deferredExpense
* deferredRevenue
* distribution
* dividendDeclared
* dividendPaid
* editJournalTransaction
* editTransaction
* encumber
* equity
* exchangeCryptocurrencyToUSD
* exchangeUSDToCryptocurrency
* expense
* getTransactions
* getUsersByType
* googleAdsenseEarning
* googleAdsensePayout
* googleAdsenseReceivePayout
* initializeEquity
* interestExpense
* inventoryFinishedGoods
* inventoryPurchase
* inventoryRawMaterials
* inventoryShrinkage
* inventoryShrinkageReserve
* inventorySold
* inventoryWIP
* investment
* isJournalInbalance
* liability
* loanPayment
* paidInCapitalStock
* payAssetsByCheck
* payAssetsByCredit
* payExpenseByCard
* payExpenseByCheck
* payrollPayable
* pendingPurchase
* pendingPurchaseCleared
* postageExpense
* prepaidSubscriptions
* recognizeDeferredExpense
* recognizeDeferredRevenue
* recognizePrepaidSubscription
* revenue
* salesCard
* salesCash
* salesViaPaypal
* securityDepositPaid
* securityDepositReceived
* softwareLicense
* spendFundingAccount
* stockDividend
* stocksIssuedOtherThanCash
* unearnedRevenue
* workingHours

## accountsReceivablePayment
Example 12: Company Receives Payment on an Invoice
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company receives a payment for the $650 invoice above.   Analysis: When you created the invoice, BestBooks debited the Accounts Receivable account. When you post the invoice payment, BestBooks will credit A/R - in effect reversing the earlier debit. The accounting software will also debit Cash - increasing its balance.

Debit Cash (increases the balance)

Credit A/R (decreases the balance)

## accruedExpense
Example 20: Accrued Expense

When a company has an expense but has not paid, and recorded as an adjusting entry

https://www.accountingtools.com/articles/what-are-accrued-expenses.html

Expense account is debited (balance is increasing)
Payable account is credited (balance is increasing)

## accruedIncome
Example 19: Accrued Income
When a company has earned income but has not received the monies, that are NOT from Sales

https://accounting-simplified.com/financial/accrual-accounting/accrued-income

Income Receivable is debited (increases the balance)
Income account is credited (increases the balance)

## accruedIncomePayment
Example 19.1: Receipt of Payment on Accrued Income

When payment is due, and the customer makes the payment, an accountant for that company would record an adjustment to accrued revenue. The accountant would make an adjusting journal entry in which the amount of cash received by the customer would be debited to the cash account on the balance sheet, and the same amount of cash received would be credited to the accrued revenue account or accounts receivable account, reducing that account.

Cash Account is debited (increases the balance)
Income Receivable is credited (decreases the balamce)

## accruedInterest

## addCredit

## addDebit

## addFundsToPostageDebitAccount

## addJournalTransaction

## addTransaction

## addTransactionSync

## allocateFundingAccount

## asset

## badDebt
Example 18: Accounting for Bad Debt
If a company sells on credit, customers will occasionally be unable to pay, in which case the seller should charge the account receivable to expense as a bad debt

https://www.accountingtools.com/articles/2017/5/17/accounts-receivable-accounting

Bad Debt expense account debited 
Account Receivable is credited

## bankfee

Example 3: Monthly Statement Fee from Bank
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

Your bank charges a monthly statement fee of $14.   Analysis: This transaction is entered via a journal entry each month when the checking account is balanced. Since money was removed from the checking account, Cash is credited (the balance decreased by $14). The Expense account called Bank Service Charges receives the debit.

Debit Bank Fees (increases its balance)

Credit Cash (decreases its balance)

## bondDiscount

## bondPremium

## bondPremiumInterestPayment

## bondsIssuedWOAccruedInterest

## bondsIssuedWithAccruedInteres

## cardPayment
Example 8: Company Pays the Credit Card Bill
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

You pay the bill for the $318 of office supplies purchased in Example 7. Analysis: When the bill was entered, an expense account called Office (or similar) was debited and Accounts Payable was credited. Now as we write a check to pay the bill, BestBooks will automatically credit Cash. And the accounting software will debit Accounts Payable - in effect, reversing the earlier credit.

Debit Accounts Payable (decreases its balance)
 
Credit Cash (decrease its balance)

## cashDividendDeclared

## cashDividendPayable

## cashPayment
Example 9: Company Pays Cash for a Cost of Good Sold (COGS)
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company pays $450 cash for Product A - a COGS part.   Analysis: When you write the check, BestBooks will automatically credit Cash. In the check window, choose the COGS account from the Expenses tab, or choose an Item from the Items tab that is associated with the COGS account. Either way, the COGS account receives the debit.

Debit COGS (increase its balance)
  
Credit Cash (decrease its balance)

## COGS
Costs of Goods Sold

There are the following COGS categories in accordance with the GAAP.
		
Debit COGS is an Expense (increases it's balance)
Credit Purchases is a Liability (decrease it's balance)
Credit Inventory is an Asset (increase or decrease based on the amount)

## commissionPaid

## commissionPayable

## createAccount

## createNewUser

## deferredExpense

## deferredRevenue
Deferred Revenue

Since deferred revenues are not considered revenue until they are earned, they are not reported on the income statement.  Instead they are reported on the balance sheet 
as a liability. As the income is earned, the liability is decreased and recognized as income.

the Cash (Asset account) and the Unearned Revenue (Liability account) are increasing.

## distribution
Example 13: Owner Takes Money Out of the Company - a Distribution
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The owner’s writes himself a check for $1,000.   Analysis: Since a check was written, BestBooks will automatically credit Cash. The account you chose for the debit is an Equity account called Draw (Sole Proprietor) or Distribution (Corporation). Note: These are the only non-contra Equity accounts that are positive accounts and receive debits.

Debit Owner’s Draw (increases its balance)

Credit Cash (decrease its balance)

## dividendDeclared
Dividends Payable

See https://www.wallstreetprep.com/knowledge/dividends-payable/
Cash Dividend Declared: 
     Debit (decrease) -> Retained Earnings (Equity)
     Credit (increase) => Dividends Payable (Liability)

Cash Dividend Paid: Debit -> Dividends Payable (liability), Credit -> Cash (Asset)

## dividendPaid

## editJournalTransaction

## editTransaction

## encumber

Example 2: Company Takes Out a Loan
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The company borrows $8,000 from a bank.   Analysis: Since the money will be deposited into the checking account, Cash is debited (the balance increased by $8,000.) The account to receive the credit is a Liability account called Loans Payable (you may create a separate account or sub-account for each loan). Liability accounts are credit accounts, so
crediting the Liability account increases its negative balance by $8,000 (moves to the left on the number line).

Debit Cash (increases its balance)

Credit Loans Payable (increases its balance)

## equity

Credit Accounts: Liabilities, Equity, & Revenue
From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml

Liability, Equity, and Revenue accounts usually receive credits, so they maintain negative balances. They are called credit accounts. Accounting books will say “Accounts that
normally maintain a negative balance are increased with a Credit and decreased with a Debit.” Again, look at the number line. If you add a negative number (credit) to a
negative number, you get a larger negative number! (moving left on the number line). But if you start with a negative number and add a positive number to it (debit), you get a smaller negative number because you move to the right on the number line.

We have not discussed crossing zero on the number line. If we have $100 in our checking account and write a check for $150, the check will bounce and Cash will have a negative
value - an undesirable event. A negative account might reach zero - such as a loan account when the final payment is posted. And many accounts, such as Expense accounts, are reset to zero at the beginning of the new fiscal year. But credit accounts rarely have a positive balance and debit accounts rarely have a negative balance at any time.

[Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a minus sign on a number you enter into the accounting software.]

## exchangeCryptocurrencyToUSD

## exchangeUSDToCryptocurrency

When you exchange USD (U.S. Dollars) for cryptocurrency, you'll need to record the transaction in your accounting records. Here's a general example based on accrual accounting principles:

1. Record the Purchase of Cryptocurrency:

   - Debit: Cryptocurrency Asset - to increase the value of the cryptocurrency acquired
   - Credit: Cash (or Bank Account) - to decrease the USD balance
2. Recognize Any Transaction Fees:
   If there are fees associated with the cryptocurrency purchase, record them separately:

   - Debit: Cryptocurrency Asset - to increase the cost basis of the cryptocurrency
   - Credit: Cash (or Bank Account) - to reduce the amount spent

Here's an example of the journal entry:

| Account                  | Debit ($)  | Credit ($) |      |
| ------------------------ | ------------------------- | ---- |
| Cryptocurrency Asset     | XXXX                      |      |
| Cash or Bank Account     |                           | XXXX |
| Transaction Fees Expense | XXXX                      |      |

Please note that the specific accounts and amounts will depend on the details of your transaction, such as the amount of cryptocurrency purchased and any associated fees.

It's important to consult with an accountant or financial professional when recording cryptocurrency transactions, as accounting treatment may vary based on specific circumstances and regulations.
Additionally, fair value adjustments may be necessary if there are significant fluctuations in the value of the cryptocurrency.

## expense

## getTransactions

## getUsersByType

## googleAdsenseEarning

Bookkeeping Entry for Google AdSense Earnings:

Date: [Date of transaction]

1. Initial Google AdSense Earnings:

   - Account Credit: Google AdSense Revenue
   - Amount: [Amount earned from Google AdSense]
2. Upon Reaching Threshold Balance:

   - Account Debit: Google AdSense Revenue
   - Account Credit: Accounts Receivable (or Bank Account)
   - Amount: [Threshold balance reached, typically $100]
3. When Monies Received:

   - Account Debit: Accounts Receivable (if applicable)
   - Account Credit: Bank Account
   - Amount: [Amount received from Google AdSense]

Note: Ensure to record the transactions accurately, with appropriate dates and amounts. Adjust accounts based on your specific bookkeeping system and accounting practices.

| Name                    | Type   | Accpunt |
| ----------------------- | ------ | ------- |
| Google AdSense Revenue | Credit | Revenue |
| Accounts Receivable     | Debit  | Asset   |
| Bank Account            | Debit  | Asset   |

## googleAdsensePayout

## googleAdsenseReceivePayout

## initializeEquity

## interestExpense

## inventoryFinishedGoods

## inventoryPurchase

## inventoryRawMaterials

## inventoryShrinkage

## inventoryShrinkageReserve

## inventorySold

## inventoryWIP

## investment

Example 1: Owner Invests Capital in the Company
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

Owner invests $5,000.   Analysis: Since money is deposited into the checking account, Cash is debited (the balance increased by $5,000). What account receives a credit? An Equity account called Owner’s Equity or Capital Contribution. Since Equity accounts are ‘negative’ accounts, crediting this Equity account increases its balance by $5,000.

Debit Cash (increase its balance)

Credit Owner’s Equity|Capital (increases its balance)

## isJournalInbalance

## liability

Credit Accounts: Liabilities, Equity, & Revenue
From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml

Liability, Equity, and Revenue accounts usually receive credits, so they maintain negative balances. They are called credit accounts. Accounting books will say “Accounts that
normally maintain a negative balance are increased with a Credit and decreased with a Debit.” Again, look at the number line. If you add a negative number (credit) to a
negative number, you get a larger negative number! (moving left on the number line). But if you start with a negative number and add a positive number to it (debit), you get a smaller negative number because you move to the right on the number line.

We have not discussed crossing zero on the number line. If we have $100 in our checking account and write a check for $150, the check will bounce and Cash will have a negative
value - an undesirable event. A negative account might reach zero - such as a loan account when the final payment is posted. And many accounts, such as Expense accounts, are reset to zero at the beginning of the new fiscal year. But credit accounts rarely have a positive balance and debit accounts rarely have a negative balance at any time.

[Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a minus sign on a number you enter into the accounting software.]

## loanPayment

Example 4: Making a Loan Payment
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

You pay $540, via check, on the $8,000 loan acquired in Example 2. Of this amount, $500 is applied to the principal, and $40 is applied to the loan interest.   Analysis: Since a check is being written, BestBooks will automatically credit Cash. In this case the debit is split between two accounts. To reflect the $500 that has been applied to the loan balance, debit the loan account. (Since it is a liability account, a debit will reduce its balance, which is what you want.) The $40 interest paid is an expense, so debit the expense account called Loan Interest. Remember that even though the debit is split between two accounts, the total debit must always equal the total credit.

Debit Loans Payable $500 (decreases its balance)

Debit Interest Expense $40 (increases its balance)

Credit Cash $540 (decreases its balance)

## paidInCapitalStock

## payAssetsByCheck

Example 5: Company Writes a Check to Pay for an Asset
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company writes a check for $8,500 of equipment.   Analysis: Since a check was written, BestBooks will automatically credit Cash. The item is too costly to be considered an expense, so it must be entered into the accounting system as an asset. So we will debit an Asset account called Equipment or something similar. In addition, assets must be depreciated over time, with journal entries entered each year for a proscribed number of years. Depreciation is complicated, so be sure to see your accountant when purchasing company assets.

Debit Equipment (increases its balance)

Credit Cash (decreases its balance)

[Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a
minus sign on a number you enter into the accounting software.]

## payAssetsByCredit

## payExpenseByCard

Example 7: Company Uses Credit Card to Pay for Expenses
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company purchases $318 of office supplies and pays with a company credit card. Back in the office, the bill is entered into the accounting software.   Analysis: When you enter a bill, BestBooks will automatically credit the Liability account called Accounts Payable. And since you purchased office supplies, an expense account called Office (or similar) should receive the debit.

Debit Office (increase its balance)

Credit Accounts Payable (increases its balance)

## payExpenseByCheck

Example 6: Company Writes Check to Pay for Expenses
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company writes a check to pay for $318 of office supplies.   Analysis: Since a check was written, BestBooks will automatically credit Cash. We debit the Expense account called Office.

Debit Office (increases its balance)

Credit Cash (decreases its balance)

## payrollPayable

## pendingPurchase

When the purchase is made and recorded as pending, you debit the relevant expense account and credit the pending purchase liability account.

Debit: Expense Account
Credit: Pending Purchases Account

## pendingPurchaseCleared

* Once the transaction clears the bank, you need to remove the pending purchase liability and record the actual expense.
* Debit the pending purchase liability account to clear it.
* Credit the bank account to reduce it by the cleared purchase amount.

Debit: Pending Purchases Liability Account
Credit: Bank Account

## pendingPurchaseSettled

Is a proxy to the pendingPurchaseCleared function.

## postageExpense

## prepaidSubscriptions

## recognizeDeferredExpense

## recognizeDeferredRevenue

## recognizePrepaidSubscription

## revenue

Credit Accounts: Liabilities, Equity, & Revenue
From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml

Liability, Equity, and Revenue accounts usually receive credits, so they maintain negative balances. They are called credit accounts. Accounting books will say “Accounts that
normally maintain a negative balance are increased with a Credit and decreased with a Debit.” Again, look at the number line. If you add a negative number (credit) to a
negative number, you get a larger negative number! (moving left on the number line). But if you start with a negative number and add a positive number to it (debit), you get a smaller negative number because you move to the right on the number line.

We have not discussed crossing zero on the number line. If we have $100 in our checking account and write a check for $150, the check will bounce and Cash will have a negative
value - an undesirable event. A negative account might reach zero - such as a loan account when the final payment is posted. And many accounts, such as Expense accounts, are reset to zero at the beginning of the new fiscal year. But credit accounts rarely have a positive balance and debit accounts rarely have a negative balance at any time.

[Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a minus sign on a number you enter into the accounting software.]

## salesCard
Example 11: Company Makes a Credit Card Sale
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company sells Product A for $650 on credit. Analysis: When you create an invoice, you must specify an Item for each separate charge on the invoice. BestBooks will 
automatically credit the revenue account(s) associated with these Items. And BestBooks will automatically debit the invoice amount to Accounts Receivable.

Debit Accounts Receivable (increases the balance)

Credit Sales (increases the balance)

## salesCash
Example 10: Company Receives Cash Payment for a Sale
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company sells Product A for $650 cash. Analysis: When you enter the cash sale, BestBooks will automatically debit Cash. You will have to choose an Item for the sale … it might be “Prod A income” and associated with the Sales account.

Debit Cash (increases its balance)

Credit Sales (increases its balance)

## salesViaPaypal

## securityDepositPaid

## securityDepositReceived
Security Deposit

Receive: Cash (Asset) -> Debit (increase)
         Refundable Security Deposit (Liability) -> Credit (Increase)

## softwareLicense

## spendFundingAccount

## stockDividend

## stocksIssuedOtherThanCash

## unearnedRevenue
Example 17: Unearned Revenue

Is income received but not yet earned, e.g. deposits taken on a job not yet performed. Unearned income is applicable for Service Income, while Product Income is regular income

https://www.wallstreetmojo.com/unearned-revenue-journal-entries/

https://www.accountingverse.com/accounting-basics/unearned-revenue.html 

Cash asset account is debited for amount (balance is decreasing)

Unearned Revenue liability account is credited for amount (balance is increasing)

## workingHours
