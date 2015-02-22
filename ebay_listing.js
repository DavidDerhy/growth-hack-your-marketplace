// An automatic way to submit items for listing on eBay
// Would be better to use the official eBay API but it was just to show you how PhantomJS works
// https://go.developer.ebay.com/what-ebay-api
// Run this bot with: casperjs --ssl-protocol=any ebay_listing.js
// Check our awesome CasperJS cheatsheet: http://bit.ly/phantom-cheatsheet


// 1. Variables Initialization


var casper;

casper = require('casper').create({
  logLevel: "debug",
  pageSettings: {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36"
  },
  verbose: true,
  viewportSize: {
    width: 1024,
    height: 768
  }
});


// 2. Sign In to eBay


casper.start('http://www.ebay.fr/');

casper.thenOpen('https://signin.ebay.fr/ws/eBayISAPI.dll?SellItem');

casper.then(function() {
  this.fill('form#SignInForm', { 'userid': 'julien@thefamily.co', 'pass': 'myfakepwd75' }, true);
  this.wait(3 * 1000);
});


// 3. Submit an Item for Listing (Draft Mode)


casper.thenOpen('http://csr.ebay.fr/cse/start.jsf');

casper.then(function() {
  this.fill('form#sell', { 'keywords': 'GoPro Hero3+' }, true);
  this.wait(3 * 1000);
});

casper.then(function() {
  this.click('.nosubmit');
  this.wait(5 * 1000);
});

casper.then(function() {
  this.fill('form#selling', { 'condition': '1000', 'startPrice': '350' }, false);
  this.fill('form#fileForm', { 'media': '/Users/mac/Documents/websites/gentlenode/talks/growth-hack-marketplace/thefamily.png' }, false);
  this.wait(10 * 1000);
});

casper.then(function() {
  this.click('#lnkFtrSaveForLater');
});


// 4. Run Casper


casper.run();
