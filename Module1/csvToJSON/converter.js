const fs = require('fs')
const path = require('path')

const converter = (file) => {

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;

    // (/\n/) splits on a new line
    let dataRows = data.split(/\n/)

    //remove first row (header)
    dataRows.shift()

    // gets first row ((/\n/)[0]) and separates at each comma
    const headerFields = data.split(/\n/)[0].split(',')


    let JSON_Output = []

    dataRows.forEach((row) => {
      let dataEntry = {};
      const rowItems = row.split(',')

      rowItems.forEach((item, i) => {
        dataEntry[headerFields[i]]  = item
      })

      JSON_Output.push(dataEntry)
    })

    const JSONFileName = file.split('.')[0] + '.json'
    fs.writeFile(JSONFileName, JSON.stringify(JSON_Output), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
};

converter(process.argv[2])

