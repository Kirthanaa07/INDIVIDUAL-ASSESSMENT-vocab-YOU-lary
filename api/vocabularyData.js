import client from '../utils/client';

const endpoint = client.databaseURL;

const getAllVocabulary = () => new Promise((resolve, reject) => {
  // fetch is the function that has two parameters
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    // then is a function inside promise, input is of type Response
    // response and data are taco
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// promise to get data
// promise is the output for getMyVocabulary function
// resolve and reject parameters are function itself
const getMyVocabulary = (userId) => new Promise((resolve, reject) => {
  // fetch is the function that has two parameters
  fetch(`${endpoint}/vocabulary.json?orderBy="user_id"&equalTo="${userId}"`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    // then is a function inside promise, input is of type Response
    // response and data are taco
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getPublicVocabulary = () => new Promise((resolve, reject) => {
  // fetch is the function that has two parameters
  fetch(`${endpoint}/vocabulary.json?orderBy="isPublic"&equalTo=true`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    // then is a function inside promise, input is of type Response
    // response and data are taco
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getAllVocabulary,
  getMyVocabulary,
  getPublicVocabulary
};
