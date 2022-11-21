/**
 * Run `npm install`
 * Change productIds.json
 */

const fs = require('fs');
const request = require('request');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const CONFIG = {
  HOSTNAME: "",
  TOKEN: "",
};

const headers = {
  "X-AUTH-TOKEN": CONFIG.TOKEN,
  "Content-Type": "application/ld+json",
}

var productIds = JSON.parse(fs.readFileSync('./productIds.json', 'utf8'));

console.log(productIds)

request.post({
  headers: headers,
  url: CONFIG.HOSTNAME,
  body: JSON.stringify({
    "token": CONFIG.TOKEN,
    "brand": "intrepid",
    "products": productIds,
    "priority": 1,
    "updatedBy": "script"
})
}, function(error, response, body){
  console.log(body);
});