const http = require('http');
const https = require('https');
const util = require('util');
const URL = require('url');

function isImage(contentType) {
  return /^image\/(png|gif|jpeg)/.test(contentType);
}

/** fetchImg() fetches GETs an image at `url` and returns
 * data in binary
 */
async function fetchImg(url) {
  const protocol = URL.parse(url).protocol;
  const httpModule = (protocol === 'https:' ? https : http);

  return new Promise((resolve, reject) => {
    httpModule.get(url, resCallback).on('error', reject);

    function resCallback(res) {
      const contentType = res.headers['content-type'];

      if (res.statusCode !== 200) {
        // Consume response data to free up memory
        res.resume();
        return reject(new Error(`Request Failed (${res.statusCode})`));
      };
      if (!isImage(contentType)) {
        res.resume();
        return reject(new Error('Invalid content-type'));
      };

      let chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        try {
          const data = Buffer.concat(chunks).toString('binary');
          resolve(data);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
}

module.exports = exports = fetchImg;
