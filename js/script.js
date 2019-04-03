window.onload = init;

function init() {


        document.getElementById("ft-dtrump").onclick = function() {
            document.getElementById("#ft-profilepic").src = "images/ft-trumpprofilepic.jpg";
        }


	var xhr = new XMLHttpRequest(); 

    xhr.open('GET', 'get_tweets.php', true); 

    xhr.send(null);

    xhr.onload = function() {

    	if(xhr.status == 200){
            var tweets = JSON.parse(xhr.responseText);
            console.log(tweets);
            }
}


}