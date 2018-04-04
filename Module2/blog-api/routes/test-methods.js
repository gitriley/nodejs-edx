/* 
 This file is purely for testing purposes. 
 Since we do not yet have a database, I've included an endpoint that will write 
 the existing store at any given moment to a json file, thereby providing a sort of frozen-database. 
 I hit this endpoint at the end of my bash test script to check that the store has correctly
 handled all http requests up to that point.
*/

const fs = require('fs')
const path = require('path')
let store = require('./../store.js')

module.exports = {
	writeFile(req, res) {
		const filename = 'test-output.json'
		fs.writeFile(filename, JSON.stringify(store, null, 2), (err) => {
	      if (err) throw err;
	    });
	    res.status(200).send(store)
	}
}