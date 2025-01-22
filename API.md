# API Documentation

## accountsReceivablePayment

Example 12: Company Receives Payment on an Invoice
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company receives a payment for the $650 invoice above.   Analysis: When you created the invoice, BestBooks debited the Accounts Receivable account. When you post the invoice payment, BestBooks will credit A/R - in effect reversing the earlier debit. The accounting software will also debit Cash - increasing its balance.

Debit Cash (increases the balance)

Credit A/R (decreases the balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## accruedExpense

Example 20: Accrued Expense

When a company has an expense but has not paid, and recorded as an adjusting entry

https://www.accountingtools.com/articles/what-are-accrued-expenses.html

Expense account is debited (balance is increasing)
Payable account is credited (balance is increasing)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |


## accruedIncome

Example 19: Accrued Income
When a company has earned income but has not received the monies, that are NOT from Sales

https://accounting-simplified.com/financial/accrual-accounting/accrued-income

Income Receivable is debited (increases the balance)
Income account is credited (increases the balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| accpunt     | String | the income account, default: Income                                 |
| receivable  | String | the income receivable account, default: Income Receivable           |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |


## accruedIncomePayment

Example 19.1: Receipt of Payment on Accrued Income

When payment is due, and the customer makes the payment, an accountant for that company would record an adjustment to accrued revenue. The accountant would make an adjusting journal entry in which the amount of cash received by the customer would be debited to the cash account on the balance sheet, and the same amount of cash received would be credited to the accrued revenue account or accounts receivable account, reducing that account.

Cash Account is debited (increases the balance)
Income Receivable is credited (decreases the balamce)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| accpunt     | String | the asset account to receive monies, default: Cash                  |
| receivable  | String | the accrued income receivable account, default: Income Receivable   |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |


## accruedInterest
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## addCredit
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## addDebit
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## addFundsToPostageDebitAccount
To record the transactions involving the CFO transferring funds to the postage debit account and the subsequent deductions for each letter or package sent by the mailroom, you would typically use a double-entry bookkeeping system. Here's how you might record these transactions:

1. **Initial Transfer from CFO to Postage Debit Account:**
   
   Debit: Postage Debit Account
   Credit: Cash/Bank Account

   This entry reflects the transfer of funds from the CFO to the postage debit account.

2. **Cost Deduction for Sending Mail:**

   Debit: Postage Expense Account
   Credit: Postage Debit Account

   This entry records the expense incurred by the mailroom for sending mail. The amount is deducted from the postage debit account.

Let's say, for example, the CFO transfers $1,000 to the postage debit account initially, and then the mailroom sends a package costing $50 in postage:

1. **Initial Transfer Entry:**
   
   Debit: Postage Debit Account ($1,000)
   Credit: Cash/Bank Account ($1,000)

2. **Cost Deduction Entry for Sending Mail:**

   Debit: Postage Expense Account ($50)
   Credit: Postage Debit Account ($50)

These entries ensure that the transactions are accurately recorded, reflecting both the transfer of funds and the associated expenses incurred by the mailroom.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##       |
| account      | String | Funding account, default: Bank                                     |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## addJournalTransaction
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## addTransaction
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## addTransactionSync
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| debit      | Number | The debit amount of the transaction in 2-digit decimal format, #.##      |
| credit      | Number | The credit amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## allocateFundingAccount

In a double-entry accounting system, when allocating funds for a new approval request, you typically use the following ledger accounts:

1. Cash/Bank Account: This account tracks the cash or bank balance available in your organization. When funds are allocated for the new approval request,
   you'll debit this account to record the increase in the available funds.
2. Funding Allocation Account: This account is used to record the allocation of funds for specific purposes, projects, or approval requests.
   You'll credit this account to indicate that funds have been allocated for the new request.
3. Expense/Approval Request Account: This account tracks the expenses or costs associated with the approval requests.
   When the approval request is approved and the allocated funds are spent, you'll debit this account to record the expense.

Let's illustrate the double-entry accounting entries for allocating funds for a new approval request:

1. Initial Balance:

   - Cash/Bank Account: $10,000 (Debit)
   - Funding Allocation Account: $0 (Credit)
   - Approval Request Account: $0 (Credit)
   - Payment Account: $0 (Credit)
2. Funding Allocation for New Approval Request:

   - Cash/Bank Account: $10,000 (Debit)
   - Funding Allocation Account: $1,000 (Credit)
   - Approval Request Account: $0 (Credit)
   - Payment Account: $0 (Credit)
3. When the Approval Request is Approved and Funds are Spent:

   - Cash/Bank Account: $9,000 (Debit) -> Actual cash spent on the approval request
   - Funding Allocation Account: $0 (Debit) -> Funds used up
   - Approval Request Account: $1,000 (Debit) -> Expense incurred
   - Payment Account: $1,000 (Credit) -> Payment made for the approval request

The Payment Account is used to record the payment made (credit entry) when funds are spent for the approved approval request. This completes the accounting entries, showing the flow of funds from the Cash/Bank Account to the Funding Allocation Account, Approval Request Account, and finally, to the Payment Account.

Please note that the specific account names and chart of accounts might vary based on your organization's accounting system and practices. Always consult with your accounting department or a certified accountant to ensure accurate and compliant bookkeeping for your business.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## asset

Debit Accounts: Assets & Expenses
From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml

Because Asset and Expense accounts maintain positive balances, they are positive, or debit accounts. Accounting books will say “Accounts that normally have a positive balance are increased with a Debit and decreased with a Credit.” Of course they are! Look at the number line. If you add a positive number (debit) to a positive number, you get a bigger positive number. But if you start with a positive number and add a negative number (credit), you get a smaller positive number (you move left on the number line).
The asset account called Cash, or the checking account, is unique in that it routinely receives debits and credits, but its goal is to maintain a positive balance!

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |


## badDebt

Example 18: Accounting for Bad Debt
If a company sells on credit, customers will occasionally be unable to pay, in which case the seller should charge the account receivable to expense as a bad debt

https://www.accountingtools.com/articles/2017/5/17/accounts-receivable-accounting

Bad Debt expense account debited
Account Receivable is credited

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |


## bankfee

Example 3: Monthly Statement Fee from Bank
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

Your bank charges a monthly statement fee of $14.   Analysis: This transaction is entered via a journal entry each month when the checking account is balanced. Since money was removed from the checking account, Cash is credited (the balance decreased by $14). The Expense account called Bank Service Charges receives the debit.

Debit Bank Fees (increases its balance)

Credit Cash (decreases its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |


## bondDiscount
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## bondPremium
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## bondPremiumInterestPayment
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## bondsIssuedWOAccruedInterest
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## bondsIssuedWithAccruedInteres
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## cardPayment

Example 8: Company Pays the Credit Card Bill
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

You pay the bill for the $318 of office supplies purchased in Example 7. Analysis: When the bill was entered, an expense account called Office (or similar) was debited and Accounts Payable was credited. Now as we write a check to pay the bill, BestBooks will automatically credit Cash. And the accounting software will debit Accounts Payable - in effect, reversing the earlier credit.

Debit Accounts Payable (decreases its balance)

Credit Cash (decrease its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## cashDividendDeclared
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## cashDividendPayable
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## cashPayment

Example 9: Company Pays Cash for a Cost of Good Sold (COGS)
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company pays $450 cash for Product A - a COGS part.   Analysis: When you write the check, BestBooks will automatically credit Cash. In the check window, choose the COGS account from the Expenses tab, or choose an Item from the Items tab that is associated with the COGS account. Either way, the COGS account receives the debit.

Debit COGS (increase its balance)

Credit Cash (decrease its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## COGS

Costs of Goods Sold

There are the following COGS categories in accordance with the GAAP.

Debit COGS is an Expense (increases it's balance)
Credit Purchases is a Liability (decrease it's balance)
Credit Inventory is an Asset (increase or decrease based on the amount)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## commissionPaid
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## commissionPayable
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## createAccount
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## createNewUser
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## deferredExpense
Deferred Expense

Like deferred revenues, deferred expenses are not reported on the income statement. 
Instead, they are recorded as an asset on the balance sheet until the expenses are incurred. 
As the expenses are incurred the asset is decreased and the expense is recorded on the 
income statement.

The (Asset account) is increasing, and Cash (Asset account) is decreasing.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## deferredRevenue

Deferred Revenue

Since deferred revenues are not considered revenue until they are earned, they are not reported on the income statement.  Instead they are reported on the balance sheet
as a liability. As the income is earned, the liability is decreased and recognized as income.

the Cash (Asset account) and the Unearned Revenue (Liability account) are increasing.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## distribution

Example 13: Owner Takes Money Out of the Company - a Distribution
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The owner’s writes himself a check for $1,000.   Analysis: Since a check was written, BestBooks will automatically credit Cash. The account you chose for the debit is an Equity account called Draw (Sole Proprietor) or Distribution (Corporation). Note: These are the only non-contra Equity accounts that are positive accounts and receive debits.

Debit Owner’s Draw (increases its balance)

Credit Cash (decrease its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## dividendDeclared

Dividends Payable

See https://www.wallstreetprep.com/knowledge/dividends-payable/
Cash Dividend Declared:
     Debit (decrease) -> Retained Earnings (Equity)
     Credit (increase) => Dividends Payable (Liability)

Cash Dividend Paid: Debit -> Dividends Payable (liability), Credit -> Cash (Asset)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## dividendPaid
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## DynamicPricing
Is a class to calculate the DynamicPricing based on supply and demand with the inclusion of specialized industries of
retail, saas, airling, gig and energy.

constructor
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| basePrice   | Number | the base price                                                      |

calculatePrice
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| industry    | String | the industry as defined: retail, saas, airline, gig, energy, general|
| params      | Object | the params for each industry                                        |

generalPricing
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| demand      | Number |                                                                     |
| supply      | Number |                                                                     |
| maxSupply   | Number |                                                                     |
| sensitivity | Number | default: 0.5                                                        |

retailPricing
| Argument        | Type   | Comment                                                             |
| --------------- | ------ | ------------------------------------------------------------------- |
| demand          | Number |                                                                     |
| supply          | Number |                                                                     |
| maxSupply       | Number |                                                                     |
| competitorPrice | Number |                                                                     |
| sensitivity     | Number | default: 0.5                                                        |

saasPricing
| Argument        | Type   | Comment                                                             |
| --------------- | ------ | ------------------------------------------------------------------- |
| newUsers        | Number |                                                                     |
| lostUsers       | Number |                                                                     |
| totalUsers      | Number |                                                                     |
| lifetimeValue   | Number |                                                                     |
| acquisitionCost | Number |                                                                     |
| sensitivity     | Number | default: 0.5                                                        |

airlinePricing
| Argument       | Type   | Comment                                                             |
| -------------- | ------ | ------------------------------------------------------------------- |
| seatsSold      | Number |                                                                     |
| seatsAvailable | Number |                                                                     |
| totalSeats     | Number |                                                                     |
| timeLeft       | Number |                                                                     |
| maxTime        | Number |                                                                     |
| sensitivity    | Number | default: 0.5                                                        |

gigPricing
| Argument         | Type   | Comment                                                             |
| ---------------- | ------ | ------------------------------------------------------------------- |
| activeRequests   | Number |                                                                     |
| availableWorkers | Number |                                                                     |
| maxWorkers       | Number |                                                                     |
| urgencyFactor    | Number | default: 1.2                                                        | 
| sensitivity      | Number | default: 0.5                                                        |

energyPricing
| Argument            | Type   | Comment                                                             |
| ------------------- | ------ | ------------------------------------------------------------------- |
| demand              | Number |                                                                     |
| supply              | Number |                                                                     |
| maxSupply           | Number |                                                                     |
| environmentalFactor | Number | default: 1.1                                                        | 
| sensitivity         | Number | default: 0.5                                                        |

In dynamic pricing models, **sensitivity**, **urgencyFactor**, and **environmentalFactor** are parameters that adjust pricing based on demand, urgency, and external conditions. Here’s what they mean and how they influence pricing:

---

### **1. Sensitivity (Price Elasticity Factor)**
- **Definition**: This parameter controls how strongly the price responds to changes in supply and demand.  
- **Range**: Usually between **0** (no effect) and **1** (high effect).  
- **Impact**:  
  - **Low sensitivity** (e.g., `0.1`) → Prices change **slowly** with demand fluctuations.  
  - **High sensitivity** (e.g., `0.9`) → Prices **spike or drop significantly** based on supply-demand imbalances.  

🔹 **Example Use Case**: Luxury goods have **low** sensitivity, while ride-sharing services during peak hours have **high** sensitivity.

---

### **2. Urgency Factor (Time Pressure)**
- **Definition**: Represents the **urgency** of demand, adjusting prices based on how quickly an item or service is needed.  
- **Range**: Between **0** (no urgency) and **1+** (extreme urgency).  
- **Impact**:  
  - **Low urgency** (e.g., `0.2`) → Minimal price changes.  
  - **High urgency** (e.g., `1.5`) → Significant price hikes when demand is immediate (e.g., last-minute bookings).  

🔹 **Example Use Case**:  
- **Airline tickets**: Prices go up as departure nears.  
- **Event tickets**: Last-minute purchases cost more.

---

### **3. Environmental Factor (External Conditions)**
- **Definition**: Adjusts prices based on **external conditions** like inflation, seasonality, economic trends, or weather.  
- **Range**: Between **0.5** (deflationary) and **1.5** (inflationary).  
- **Impact**:  
  - **< 1.0** → Prices drop due to favorable conditions (e.g., discounts in an economic downturn).  
  - **> 1.0** → Prices rise due to external pressures (e.g., inflation, high energy costs, supply chain issues).  

🔹 **Example Use Case**:  
- **Grocery prices** increase due to supply chain disruptions. **Subject to PRICE GOUGING laws**
- **Electricity prices** rise during extreme weather. **Subject to PRICE GOUGING laws**

[Price gouging laws by state](https://www.findlaw.com/consumer/consumer-transactions/price-gouging-laws-by-state.html)

[The Defense Production Act of 1950](https://www.fema.gov/sites/default/files/2020-03/Defense_Production_Act_2018.pdf)

The Defense Production Act of 1950 govern price gouging at the federal level.

---

Each parameter adjusts the base price accordingly:  
✅ **Sensitivity** determines **how much** prices change.  
✅ **Urgency Factor** increases prices if demand is time-sensitive.  
✅ **Environmental Factor** reflects **economic** and **seasonal** trends.


## editJournalTransaction
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## editTransaction
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## encumber

Example 2: Company Takes Out a Loan
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The company borrows $8,000 from a bank.   Analysis: Since the money will be deposited into the checking account, Cash is debited (the balance increased by $8,000.) The account to receive the credit is a Liability account called Loans Payable (you may create a separate account or sub-account for each loan). Liability accounts are credit accounts, so
crediting the Liability account increases its negative balance by $8,000 (moves to the left on the number line).

Debit Cash (increases its balance)

Credit Loans Payable (increases its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## equity

Credit Accounts: Liabilities, Equity, & Revenue
From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml

Liability, Equity, and Revenue accounts usually receive credits, so they maintain negative balances. They are called credit accounts. Accounting books will say “Accounts that
normally maintain a negative balance are increased with a Credit and decreased with a Debit.” Again, look at the number line. If you add a negative number (credit) to a
negative number, you get a larger negative number! (moving left on the number line). But if you start with a negative number and add a positive number to it (debit), you get a smaller negative number because you move to the right on the number line.

We have not discussed crossing zero on the number line. If we have $100 in our checking account and write a check for $150, the check will bounce and Cash will have a negative
value - an undesirable event. A negative account might reach zero - such as a loan account when the final payment is posted. And many accounts, such as Expense accounts, are reset to zero at the beginning of the new fiscal year. But credit accounts rarely have a positive balance and debit accounts rarely have a negative balance at any time.

[Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a minus sign on a number you enter into the accounting software.]

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## exchangeCryptocurrencyToUSD
When you exchange cryptocurrency for USD (U.S. Dollars), you'll need to record the transaction in your accounting records. Here's a general example based on accrual accounting principles:

1. Record the Sale of Cryptocurrency:
   - Debit: Cash (or Bank Account) - to increase the USD balance
   - Credit: Cryptocurrency Asset - to decrease the value of the cryptocurrency being sold

2. Recognize Gain or Loss:
   If there is a gain or loss on the exchange due to changes in the value of the cryptocurrency, you may need to recognize it:
   - Debit or Credit: Gain or Loss on Cryptocurrency Exchange - to capture any difference between the value of the cryptocurrency when acquired and its value when exchanged

3. Record Any Transaction Fees:
   If there are fees associated with the cryptocurrency exchange, record them separately:
   - Debit: Transaction Fees Expense
   - Credit: Cash (or Bank Account) - to reduce the amount received

Here's an example of the journal entry:


| Account                                 | Debit ($)  | Credit ($) |
|-----------------------------------------|------------|------------|
| Cash or Bank Account                    | XXXX       |            |
| Cryptocurrency Asset                    |            | XXXX       |
| Gain or Loss on Cryptocurrency Exchange |  (or)      |  (or)      |
| Transaction Fees Expense                | XXXX       |            |


Please note that the specific accounts and amounts will depend on the details of your transaction, such as the amount of cryptocurrency exchanged, any fees incurred, 
and whether there is a gain or loss on the exchange.

It's essential to consult with an accountant or financial professional, especially when dealing with cryptocurrency transactions, 
as accounting treatment may vary based on specific circumstances and regulations. Additionally, fair value adjustments may be necessary 
if there are significant fluctuations in the value of the cryptocurrency.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

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

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## expense

Debit Accounts: Assets & Expenses
From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml

Because Asset and Expense accounts maintain positive balances, they are positive, or debit accounts. Accounting books will say “Accounts that normally have a positive balance are increased with a Debit and decreased with a Credit.” Of course they are! Look at the number line. If you add a positive number (debit) to a positive number, you get a bigger positive number. But if you start with a positive number and add a negative number (credit), you get a smaller positive number (you move left on the number line).
The asset account called Cash, or the checking account, is unique in that it routinely receives debits and credits, but its goal is to maintain a positive balance!

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## getTransactions
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## getUsersByType
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

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

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## googleAdsensePayout
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## googleAdsenseReceivePayout
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## initializeEquity
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## interestExpense
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## inventoryFinishedGoods
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## inventoryPurchase
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## inventoryRawMaterials
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## inventoryShrinkage

Inventory Shrinkage
See https://yourbusiness.azcentral.com/accounting-treatment-restaurant-spoilage-27516.html

In a cottage food kitchen, which may be licensed as a home-based food manufacturer, inventory shrinkage through expired or spoilage is inevitable. The reason for Inventory shrinkage is the general term for lost, stolen, damaged, spoiled, or expired inventory should be provided in the description. Use this helper when you discover actual losses, debit your reserve account and credit inventory by the loss amount.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |
| company_id   | Number | The company id, default: o                                         |
| office_id    | Number | The office id, default: 0                                          |

## inventoryShrinkageReserve

Shrinkage Reserve

Generally accepted accounting principles require you to match expenses to the periods in which they occur. For this reason, companies might establish special reserve accounts for shrinkage losses. You first must estimate your shrinkage loss at the beginning of the period. Credit a contra-asset account with a name like “allowance for inventory losses” or “shrinkage reserve” for your estimated loss, and debit an expense account or COGS for the same amount. When you discover actual losses, debit your reserve account and credit inventory by the loss amount.

ONLY use the COGS if inventory loss is small, otherwise use an Inventory expense

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## inventorySold
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## inventoryWIP
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## investment

Example 1: Owner Invests Capital in the Company
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

Owner invests $5,000.   Analysis: Since money is deposited into the checking account, Cash is debited (the balance increased by $5,000). What account receives a credit? An Equity account called Owner’s Equity or Capital Contribution. Since Equity accounts are ‘negative’ accounts, crediting this Equity account increases its balance by $5,000.

Debit Cash (increase its balance)

Credit Owner’s Equity|Capital (increases its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

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

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## loanPayment

Example 4: Making a Loan Payment
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

You pay $540, via check, on the $8,000 loan acquired in Example 2. Of this amount, $500 is applied to the principal, and $40 is applied to the loan interest.   Analysis: Since a check is being written, BestBooks will automatically credit Cash. In this case the debit is split between two accounts. To reflect the $500 that has been applied to the loan balance, debit the loan account. (Since it is a liability account, a debit will reduce its balance, which is what you want.) The $40 interest paid is an expense, so debit the expense account called Loan Interest. Remember that even though the debit is split between two accounts, the total debit must always equal the total credit.

Debit Loans Payable $500 (decreases its balance)

Debit Interest Expense $40 (increases its balance)

Credit Cash $540 (decreases its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## paidInCapitalStock
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## payAssetsByCheck

Example 5: Company Writes a Check to Pay for an Asset
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company writes a check for $8,500 of equipment.   Analysis: Since a check was written, BestBooks will automatically credit Cash. The item is too costly to be considered an expense, so it must be entered into the accounting system as an asset. So we will debit an Asset account called Equipment or something similar. In addition, assets must be depreciated over time, with journal entries entered each year for a proscribed number of years. Depreciation is complicated, so be sure to see your accountant when purchasing company assets.

Debit Equipment (increases its balance)

Credit Cash (decreases its balance)

[Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a
minus sign on a number you enter into the accounting software.]

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## payAssetsByCredit
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## payExpenseByCard

Example 7: Company Uses Credit Card to Pay for Expenses
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company purchases $318 of office supplies and pays with a company credit card. Back in the office, the bill is entered into the accounting software.   Analysis: When you enter a bill, BestBooks will automatically credit the Liability account called Accounts Payable. And since you purchased office supplies, an expense account called Office (or similar) should receive the debit.

Debit Office (increase its balance)

Credit Accounts Payable (increases its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## payExpenseByCheck

Example 6: Company Writes Check to Pay for Expenses
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company writes a check to pay for $318 of office supplies.   Analysis: Since a check was written, BestBooks will automatically credit Cash. We debit the Expense account called Office.

Debit Office (increases its balance)

Credit Cash (decreases its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## payrollPayable
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## pendingPurchase

When the purchase is made and recorded as pending, you debit the relevant expense account and credit the pending purchase liability account.

Debit: Expense Account
Credit: Pending Purchases Account

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## pendingPurchaseCleared

* Once the transaction clears the bank, you need to remove the pending purchase liability and record the actual expense.
* Debit the pending purchase liability account to clear it.
* Credit the bank account to reduce it by the cleared purchase amount.

Debit: Pending Purchases Liability Account
Credit: Bank Account

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## pendingPurchaseSettled

Is a proxy to the pendingPurchaseCleared function.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## postageExpense
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## prepaidSubscriptions
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## recognizeDeferredExpense
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## recognizeDeferredRevenue
Recognize Uneaarned Revenue

Once the services are performed, the income can be recognized with the following entry:  
This entry is decreasing the liability account and increasing revenue.

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## recognizePrepaidSubscription
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## revenue

Credit Accounts: Liabilities, Equity, & Revenue
From: https://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml

Liability, Equity, and Revenue accounts usually receive credits, so they maintain negative balances. They are called credit accounts. Accounting books will say “Accounts that
normally maintain a negative balance are increased with a Credit and decreased with a Debit.” Again, look at the number line. If you add a negative number (credit) to a
negative number, you get a larger negative number! (moving left on the number line). But if you start with a negative number and add a positive number to it (debit), you get a smaller negative number because you move to the right on the number line.

We have not discussed crossing zero on the number line. If we have $100 in our checking account and write a check for $150, the check will bounce and Cash will have a negative
value - an undesirable event. A negative account might reach zero - such as a loan account when the final payment is posted. And many accounts, such as Expense accounts, are reset to zero at the beginning of the new fiscal year. But credit accounts rarely have a positive balance and debit accounts rarely have a negative balance at any time.

[Remember: A debit adds a positive number and a credit adds a negative number. But you NEVER put a minus sign on a number you enter into the accounting software.]

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## salesCard

Example 11: Company Makes a Credit Card Sale
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company sells Product A for $650 on credit. Analysis: When you create an invoice, you must specify an Item for each separate charge on the invoice. BestBooks will
automatically credit the revenue account(s) associated with these Items. And BestBooks will automatically debit the invoice amount to Accounts Receivable.

Debit Accounts Receivable (increases the balance)

Credit Sales (increases the balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## salesCash

Example 10: Company Receives Cash Payment for a Sale
From: https://www.keynotesupport.com/accounting/accounting-transactions.shtml

The Company sells Product A for $650 cash. Analysis: When you enter the cash sale, BestBooks will automatically debit Cash. You will have to choose an Item for the sale … it might be “Prod A income” and associated with the Sales account.

Debit Cash (increases its balance)

Credit Sales (increases its balance)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## salesViaPaypal

Receive sales using paypal, with optional specific account.

For example,
     You made a sale from a specific website, like a cottage food website, and need to keep track of the total sales does not exceed a maximum as defined by state laws. So sales are recorded in the separate revenue account

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## securityDepositPaid
Paid:    Cash (Asset) -> Credit (decrease)
         Security Deposit (Asset) -< Debit (increase) 

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## securityDepositReceived

Security Deposit

Receive: Cash (Asset) -> Debit (increase)
         Refundable Security Deposit (Liability) -> Credit (Increase)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## softwareLicense
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## spendFundingAccount
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## stockDividend
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## stocksIssuedOtherThanCash
| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## unearnedRevenue

Example 17: Unearned Revenue

Is income received but not yet earned, e.g. deposits taken on a job not yet performed. Unearned income is applicable for Service Income, while Product Income is regular income

https://www.wallstreetmojo.com/unearned-revenue-journal-entries/

https://www.accountingverse.com/accounting-basics/unearned-revenue.html

Cash asset account is debited for amount (balance is decreasing)

Unearned Revenue liability account is credited for amount (balance is increasing)

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| txdate      | String | the transaction date for the entry item in the format of YYYY-MM-DD |
| description | String | A description of the transaction                                    |
| amount      | Number | The amount of the transaction in 2-digit decimal format, #.##      |

## workingHours

| Argument    | Type   | Comment                                                             |
| ----------- | ------ | ------------------------------------------------------------------- |
| hoursPerWeek      | Number | The number of hours in a work week |
