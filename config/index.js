'use strict';

if(process.env.NODE_ENV === 'production') {
	module.exports = {
		WIT_ACCESS_TOKEN: process.env.WIT_ACCESS_TOKEN,
		FB: {
			PAGE_ACCESS_TOKEN: process.env.PAGE_ACCESS_TOKEN,
			VERIFY_TOKEN: process.env.VERIFY_TOKEN
		}
	}
} else {
	module.exports = require('./development.json');
}
