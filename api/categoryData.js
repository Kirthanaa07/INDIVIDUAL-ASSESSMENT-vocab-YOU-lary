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
  getMyCategory
};
