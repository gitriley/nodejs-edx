const https = require('https')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const downloadPage = (url='https://nodeprogram.com') => {
  console.log('downloading ', url)
  const fetchPage = (urlF, callback) => {
    https.get(urlF, (response) => {
      let buff = ''
      response.on('data', (chunk) => { 
        buff += chunk
      })
      response.on('end', () => {
        callback(null, buff)
      })
    }).on('error', (error) => {
      console.error(`Got error: ${error.message}`)
      callback(error)
    })
  }
  const folderName = uuidv1()
  const writeData = (error, data)=>{
    if (error) return console.log(error)
    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
  }

  fs.mkdirSync(folderName)
  fetchPage(url, writeData)  
}  


downloadPage(process.argv[2])