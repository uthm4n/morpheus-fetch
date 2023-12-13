var jp = require('jsonpath');

const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer {MORPHEUS-API-TOKEN}'
    }
  };
 
  fetch('https://{MORPHEUS-APPLIANCE-URL}/api/library/instance-types?max=100&offset=0&sort=name&direction=asc', options)  // https://apidocs.morpheusdata.com/reference/listinstancetypes
    .then(response => response.json())
    .then(response => jp.query(response, "$.instanceTypes[?(@.id == 12)].instanceTypeLayouts[?(@.provisionTypeCode == 'kvm')]"))  // jsonpath ref: https://www.npmjs.com/package/jsonpath
    .then(response => console.log(response))
    .catch(err => console.error(err))
