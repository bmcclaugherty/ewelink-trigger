const ewelink = require('ewelink-api');
(async () => {

  const anotherNewConnection = new ewelink({
    at: '',
    region: 'us'
  });

  await anotherNewConnection.toggleDevice('');

})();
