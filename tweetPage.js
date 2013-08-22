var oauth = chrome.extension.getBackgroundPage().oauth;
var url = "https://api.twitter.com/1.1/statuses/update.json";

function sentTweet(tweets){
	document.getElementById('twtPage').value = '';
	document.getElementById('twtPage').setAttribute('placeholder',"tweet sent");
}

function sendTweet(){
	var tweet = document.getElementById('twtPage').value;
	oauth.sendSignedRequest(url, sentTweet, {
		'method':'POST',
		'parameters' : {
			'status' : tweet
   		}
	});	
}

chrome.tabs.query({active:true,lastFocusedWindow:true},function(tab){
	var url = tab[0].url;
	document.getElementById('twtPage').value = url;
});

document.addEventListener('DOMContentLoaded', function () {
	  document.querySelector('#send').addEventListener('click', sendTweet);
});

