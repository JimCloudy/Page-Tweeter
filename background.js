var oauth = ChromeExOAuth.initBackgroundPage({
  'request_url': 'https://api.twitter.com/oauth/request_token',
  'authorize_url': 'https://api.twitter.com/oauth/authorize',
  'access_url': 'https://api.twitter.com/oauth/access_token',
  //'consumer_key': 'anonymous',
  'consumer_key':'hjlVUbrgBjX7uSnueR5M4Q',
  //'consumer_secret': 'anonymous',
  'consumer_secret':'mLfKRL5xBTfE89bozwFxSFI7vzOsavyNUcUHAQ',
  'scope': '',
  'app_name': 'Page Tweeter'
});

oauth.authorize(function(){
	console.log("on authorize");
  chrome.browserAction.setIcon({path:'icon.png'});
	chrome.browserAction.setPopup({popup:'tweetPage.html'});
});






