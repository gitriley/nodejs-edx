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

      // if the row is empty (e.g. whitespace at the end of the file, skip it)
      if (row == "") {return}

      let dataEntry = {};
      const rowItems = row.split(',')

      rowItems.forEach((item, i) => {

        // need to get rid of '\r' at the end of each row
        if (i === rowItems.length-1) {
          headerFields[i] = headerFields[i].replace(/\r?\n|\r/g, "")
          item = item.replace(/\r?\n|\r/g, "")
        }

        dataEntry[headerFields[i]]  = item
      })

      JSON_Output.push(dataEntry)
    })

    const JSONFileName = file.split('.')[0] + '.json'
    fs.writeFile(JSONFileName, JSON.stringify(JSON_Output, null, 2), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
};

converter(process.argv[2])

