require('dotenv').config();
let https;
try {
  https = require('node:https');
} catch (err) {
  console.log('https support is disabled!');
}

const url = 'https://api.digitalocean.com/';

let options = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.DO_TOKEN}`,
    "Method": "GET"
  }
};

const projectFetch = https.request(`${url}v2/projects`, options)
.on('response', (res) => {
  let msg = '';

  res.on('data', chunk => {
    msg += JSON.parse(chunk);
  }).on('end', () => {
    console.log(JSON.stringify(msg));
  });
})
.on('error', err => {
  console.log(`ERR: ${err.message}`)
});

projectFetch.end();
