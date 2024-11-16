const fs = require('fs');
const path = require('path');

// List of module names
const modules = [
  "accountsReceivablePayment", "accruedExpense", "accruedIncome", "accruedIncomePayment",
  "accruedInterest", "addCredit", "addDebit", "addFundsToPostageDebitAccount", 
  "addJournalTransaction", "addTransaction", "addTransactionSync", "allocateFundingAccount", 
  "asset", "badDebt", "bankfee", "bondDiscount", "bondPremium", "bondPremiumInterestPayment", 
  "bondsIssuedWOAccruedInterest", "bondsIssuedWithAccruedInteres", "cardPayment", 
  "cashDividendDeclared", "cashDividendPayable", "cashPayment", "COGS", "commissionPaid", 
  "commissionPayable", "createAccount", "createNewUser", "deferredExpense", "deferredRevenue", 
  "distribution", "dividendDeclared", "dividendPaid", "editJournalTransaction", 
  "editTransaction", "encumber", "equity", "exchangeCryptocurrencyToUSD", 
  "exchangeUSDToCryptocurrency", "expense", "getTransactions", "getUsersByType", 
  "googleAdsenseEarning", "googleAdsensePayout", "googleAdsenseReceivePayout", 
  "initializeEquity", "interestExpense", "inventoryFinishedGoods", "inventoryPurchase", 
  "inventoryRawMaterials", "inventoryShrinkage", "inventoryShrinkageReserve", "inventorySold", 
  "inventoryWIP", "investment", "isJournalInbalance", "liability", "loanPayment", 
  "paidInCapitalStock", "payAssetsByCheck", "payAssetsByCredit", "payExpenseByCard", 
  "payExpenseByCheck", "payrollPayable", "pendingPurchase", "pendingPurchaseCleared", 
  "postageExpense", "prepaidSubscriptions", "recognizeDeferredExpense", 
  "recognizeDeferredRevenue", "recognizePrepaidSubscription", "revenue", "salesCard", 
  "salesCash", "salesViaPaypal", "securityDepositPaid", "securityDepositReceived", 
  "softwareLicense", "spendFundingAccount", "stockDividend", "stocksIssuedOtherThanCash", 
  "unearnedRevenue", "workingHours"
];

// Directory to save .test.js files
const testDirectory = './test';

if (!fs.existsSync(testDirectory)) {
  fs.mkdirSync(testDirectory);
}

// Generate a .test.js file for each module
modules.forEach(module => {
  const filePath = path.join(testDirectory, `${module}.test.js`);
  if (!fs.existsSync(filePath)) {
    const content = `
    const assert = require('assert');
    const ${module} = require('../index');
    
    describe('${module} Testing', () => {
      it('should verify ${module} does exist', () => {
        // Sample test
        assert.ok(${module}, '${module} should be defined');
      });
    });
    `;
    
      fs.writeFileSync(filePath, content.trim());
      console.log(`Created: ${filePath}`);    
  } else {
    console.log(`Exists: ${filePath}`)
  }
});
