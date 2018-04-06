
import fetch from 'isomorphic-fetch';

// const headers = new Headers();



var options = {
  method: 'GET',
  // mode: 'no-cors',
  headers: { 'accept': 'application/json' },
};

// const url = 'https://www.bodybuilding.com/store/protein.htm?N=29dlZ2ap2&Nr=AND(P_product.locale:en_US,P_sku.allowedStores:us)'; // ).then(a => console.log(a));
const url = 'https://www.bodybuilding.com/store/protein.htm?N=29dlZ2ap2&Nr=AND(P_product.locale:en_US,P_sku.allowedStores:us)';
(async () => {
  const response = await fetch(url, options);
  // console.log(response.headers);
  const json = await response.json();
  console.log(json);
})();
