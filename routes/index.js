var request = require('request');

var apiUri = 'https://api.sandbox.slcedu.org';
var oauthUri = 'http://localhost:1337/oauth';

// SUPPLY YOUR APP'S CREDENTIALS
var clientId = 'ltG8pIGapl';
var clientSecret = '76Zp3enEbYshWRwA3mKvb9vjfAGYAyrRQshjzZOIEWVdz38s';


// INDEX ROUTE
exports.index = function(req, res){
  res.render('index', { title: 'SLC Node' });
};

// LOGIN ROUTE
exports.login = function(req, res) {
  var codeUrl = apiUri + '/api/oauth/authorize?Realm=SandboxIDP&response_type=code&client_id=' + clientId + '&redirect_uri=' + oauthUri;
  console.log('Redirecting to obtain access code from sandbox api: ' + codeUrl);
  res.redirect(codeUrl);
};

// OAUTH ROUTE
exports.oauth = function(req, res) {
  var code = req.param('code', null);
  console.log('Received access code: ' + code);

  if (code != null) {
    var requestUrl = apiUri+'/api/oauth/token?redirect_uri='+oauthUri+'&grant_type=authorization_code&client_id='+clientId+'&client_secret='+clientSecret+'&code='+code;
    request.get(requestUrl, function(error, response, body) {
      var accessToken = JSON.parse(body)['access_token'];
      if (accessToken != undefined) {
        req.session.token = accessToken;
        console.log('session token: ' + req.session.token);
        res.redirect('../client.html');
      } else {
        logError('Access token is undefined', res);
      }
    });
  } else {
    logError('No access code found in params.', res);
  }
};

// API PROXY ROUTE
exports.apiProxy = function(req, res) {
  var requestUrl = req.param('apiUrl', null);
  console.log('Api proxy request: ' + requestUrl);
  var options = {
    url: requestUrl,
    headers: { 'Authorization': 'Bearer ' + req.session.token, 'Content-Type': 'application/json' }
  };
    request.get(options, function(error, response, body) {
    console.log('Got response. Status: ' + response.statusCode);
    console.log('Response body: ' + body);
    res.send(body);
  });
};

function logError(message, res) {
  console.log('Error. ' + message);
  res.render('index', { title: 'Error. ' + message });
}
