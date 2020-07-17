const EventEmitter = require('events');

class TinyScraper extends EventEmitter {
	constructor(url) {
		super();
		console.log('tiny scraper constructor', url);
		this.url = url;
		this.response = '<p>Scraped content of page</p>';
	}
	
	scrapeStarted() {
		console.log('scrape started');
		this.emit('scrapeStarted', this.url);
		// write logic to scrape the URL here and get the response
	}
	
	error() {
		console.log('some error occured in scraping the page');
		this.emit('error', 'Network issue');
	}
	
	timeout() {
		console.log('Page scraping request timed out');
		this.emit('timeout', 'Request timed out');
	}
	
	scrapeSuccess() {
		console.log('scraping completed');
		this.emit('scrapeSuccess', this.response);
	}
}

module.exports = TinyScraper;