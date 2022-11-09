let https;
try {
  https = require('node:https');
} catch (err) {
  console.log('https support is disabled!');
}

/*
https.get returns an enormous object that can include 
some useful information. The example below returns a 
status code.

https.get('https://example.com', (res) => {
	console.log(res.statusCode);
});
*/

//set request options to hit url and parse response body

const url = 'https://example.com';

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
  
    response.on('end', () => {
        //const body = JSON.stringify(data);
        console.log(data);
    });
})
  
request.on('error', (error) => {
    console.log('An error', error);
});
  
request.end() 
