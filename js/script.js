window.onload = init;

function init() {

        //donald trump image source: https://twitter.com/realDonaldTrump
        document.getElementById("ft-dtrump").onclick = function() {
            document.getElementById("ft-profilepic").src = "images/ft-trumpprofilepic.jpg";
            document.getElementById("ft-header").innerHTML = "Donald J. Trump";
            document.getElementById("ft-handle").innerHTML = "@realDonaldTrump";
        }

        //ariana grande image source: https://twitter.com/ArianaGrande
        document.getElementById("ft-agrande").onclick = function() {
            document.getElementById("ft-profilepic").src = "images/ft-grandeprofilepic.jpg";
            document.getElementById("ft-header").innerHTML = "Ariana Grande";
            document.getElementById("ft-handle").innerHTML = "@ArianaGrande";
        }

        //j.k. rowling image source: https://twitter.com/jk_rowling
        document.getElementById("ft-jkrowling").onclick = function() {
            document.getElementById("ft-profilepic").src = "images/ft-jkrowlingprofilepic.jpg";
            document.getElementById("ft-header").innerHTML = "J.K. Rowling";
            document.getElementById("ft-handle").innerHTML = "@jk_rowling";
        }

        //wendys image source: https://twitter.com/Wendys
        document.getElementById("ft-wendys").onclick = function() {
            document.getElementById("ft-profilepic").src = "images/ft-wendysprofilepic.jpg";
            document.getElementById("ft-header").innerHTML = "Wendy's";
            document.getElementById("ft-handle").innerHTML = "@Wendys";
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