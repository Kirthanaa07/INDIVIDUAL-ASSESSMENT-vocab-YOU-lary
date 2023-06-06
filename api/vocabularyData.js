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
    // response.json() gets the response body as json
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        // The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
        /* const object1 = {
        a: 'somestring',
        b: 42,
        c: false
        };
        console.log(Object.values(object1));
        // Expected output: Array ["somestring", 42, false] */
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE MY VOCABULARY
const createMyVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE VOCABULARY
const getMySingleVocabulary = (vocabularyId) => new Promise((resolve, reject) => {
  // fetch is the function that has two parameters
  fetch(`${endpoint}/vocabulary/${vocabularyId}.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    // then is a function inside promise, input is of type Response
    // response and data are taco
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// UPDATE MY VOCABULARY
const updateMyVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.vocabulary_id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getAllVocabulary,
  getMyVocabulary,
  getPublicVocabulary,
  createMyVocabulary,
  updateMyVocabulary,
  getMySingleVocabulary
};
