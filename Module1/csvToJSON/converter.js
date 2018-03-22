const fs = require('fs')

fs.readFile('customer-data.csv', 'utf8', (err, data) => {
  if (err) throw err;

  // (/\n/) splits on a new line
  let dataRows = data.split(/\n/)

  //remove first row (header)
  dataRows.shift()

  // gets first row ((/\n/)[0]) and separates at each comma
  const fields = data.split(/\n/)[0].split(',')


  let theJSON = []

  dataRows.forEach((row) => {
  	let theObj = {};
  	const rowItems = row.split(',')

  	rowItems.forEach((item, i) => {
  		theObj[fields[i]]  = item
  	})

  	theJSON.push(theObj)
  })


  fs.writeFile('customer-data.json', JSON.stringify(theJSON), (err) => {
  	if (err) throw err;
  	console.log('The file has been saved!');
	});
});
