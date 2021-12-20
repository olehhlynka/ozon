const getData = (str) => {
  return fetch(
    `https://test-ozon-92f50-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
