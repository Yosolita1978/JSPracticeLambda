document.body.style.backgroundColor = "red";

document.body.style.fontFamily = "sans-serif";

document.getElementById("container").style.background = "blue";

document.getElementById("nickname").innerHTML = "yosola";

document.getElementById("favorites").innerHTML = "Raindrops on roses and whiskers on kittens";

document.getElementById("hometown").innerHTML = "San Francisco";

var img = document.createElement("img");
img.src = "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/17267773_280401309056243_6613182821798248448_n.jpg";
document.body.appendChild(img);

var items = document.getElementsByTagName('li');
   for (var i = 0; i < items.length; i++) {
      items[i].className = 'listitem';
   }
