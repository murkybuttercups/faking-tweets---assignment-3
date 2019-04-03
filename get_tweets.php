<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "1110227384786010113-ypRGL13Y3KemeJyDJbGfvOCARrovsh",
	    'oauth_access_token_secret' => "O6619ocNYDrKM1G31Y1ZUrG1LxNQChkHMHNfTv9sUP35w",
	    'consumer_key' => "ATtjxNucNAPN5CIJVZaUc86gn",
	    'consumer_secret' => "AnhrrmGELkCw0JrZYjhkzUFLMDWJ0yF5QRgmAs1cwUGYwk599Q"
	);

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q="lmao"&lang=en&result_type=popular&count=1'; 
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>

