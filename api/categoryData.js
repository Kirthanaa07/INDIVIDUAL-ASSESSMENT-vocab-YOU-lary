import client from '../utils/client';

const endpoint = client.databaseURL;

// promise
const getAllCategory = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/category.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
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

// CREATE MY CATEGORY
const createMyCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/category.json`, {
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

// UPDATE MY CATEGORY
const updateMyCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/category/${payload.category_id}.json`, {
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

const getMyCategory = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/category.json?orderBy="user_id"&equalTo="${userId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
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
  getAllCategory,
  getMyCategory,
  createMyCategory,
  updateMyCategory
};
