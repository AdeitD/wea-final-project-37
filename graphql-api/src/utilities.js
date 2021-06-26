const { fetch } = require('node-fetch');

const API_URL = 'http://localhost:3000/api/v1';

/**
 * Fetches from a URL and converts the result to a JSON or Error object
 * @param {string} url
 * @param {string} [method] - ignored if body is absent
 * @param {Object} [body] - ignored if method is absent
 * @returns {(Object|Error)}
 */
async function fetchJsonOrErr(url, method, body) {
    let fetchArgs = [url];
    if (method && body) {
        fetchArgs.push({
            method,
            body: JSON.stringify(body),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
    }

    let fetchStatus = 0;
    const response = await fetch(...fetchArgs)
        .then(res => {
            fetchStatus = res.status;
            return res.json();
        })
        .catch(err => err);
    if (isGoodStatusCode(fetchStatus)) {
        return response;
    } else {
        return new Error(response);
    }
}

/**
 * Checks if an HTTP status code is in the 200s
 * @param {number} status
 * @returns {boolean}
 */
function isGoodStatusCode(status) {
    return (200 <= status && status < 300);
}

module.exports = {
    API_URL,
    fetchJsonOrErr
};