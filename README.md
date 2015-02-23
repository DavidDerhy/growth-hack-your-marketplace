The Family - Growth Hack Your Marketplace
---

[The keynote is available here](http://www.slideshare.net/Gentlenode/2015-0224-growth-hacking-meetup-growth-hack-your-marketplace).

A little bot that submits items for listing on eBay. This can be useful to growth hack the consumer side of a marketplace.

This is just a first overview of what you can really do with PhantomJS & Friends (keep in mind this hack can be replicated on every marketplace that have no public API available). Of course, what you should do is to use [the official eBay API](https://go.developer.ebay.com/what-ebay-api).

```bash
# clone this repository
git clone https://github.com/LeCoupa/growth-hack-marketplace.git
cd growth-hack-marketplace

# check that casperjs & phantomjs are installed on your machine
phantomjs --version
casperjs

# run the bot
casperjs --ssl-protocol=any ebay_listing.js
```
