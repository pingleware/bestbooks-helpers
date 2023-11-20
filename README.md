# BestBooks Accounting Application Framework - HELPERS

The helper functions (aka hooks under WordPress) provide simpler interaction with the framework

# Dependency

    @pingleware/bestbooks-core

## Dependents

    @pingleware/bestbooks-export

    @pingleware/bestbooks-import

# Helper Methods

* createAccount
* createNewUser
* getUsersByType
* addCredit
* addDebit
* getTransactions
* addTransaction
* addTransactionSync
* editTransaction
* addJournalTransaction
* editJournalTransaction
* asset
* expense
* liability
* equity
* revenue
* isJournalInbalance
* investment
* encumber
* bankfee
* loanPayment
* payAssetsByCheck
* payAssetsByCredit
* payExpenseByCheck
* payExpenseByCard
* cardPayment
* cashPayment
* salesCash
* salesCard
* salesViaPaypal
* accountsReceivablePayment
* distribution
* COGS
* unearnedRevenue
* badDebt
* accruedIncome
* accruedIncomePayment
* accruedExpense
* dividendDeclared
* dividendPaid
* securityDepositReceived
* securityDepositPaid
* deferredRevenue
* recognizeDeferredRevenue
* deferredExpense
* recognizeDeferredExpense
* prepaidSubscriptions
* recognizePrepaidSubscription
* paidInCapitalStock
* stockDividend
* cashDividendDeclared
* cashDividendPayable
* stocksIssuedOtherThanCash
* workingHours
* payrollPayable
* accruedInterest
* interestExpense
* bondsIssuedWOAccruedInterest
* bondsIssuedWithAccruedInteres
* bondPremium
* bondPremiumInterestPayment
* bondDiscount
* inventoryPurchase
* inventorySold
* inventoryShrinkage
* inventoryShrinkageReserve
* initializeEquity
* inventoryRawMaterials
* inventoryWIP
* inventoryFinishedGoods
* commissionPayable
* commissionPaid
* allocateFundingAccount
* spendFundingAccount
* softwareLicense
* exchangeCryptocurrencyToUSD
* exchangeUSDToCryptocurrency
