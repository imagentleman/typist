var js_loader=function(a,c){"undefined"===typeof c&&(c=function(){});var b=document.createElement("script");b.src=a;b.type="text/javascript";b.onload=function(){c()};document.body.appendChild(b)},html_loader=function(a,c){var b=new XMLHttpRequest;b.onload=function(){document.body.appendChild(this.response.getElementById(c))};b.open("GET",a);b.responseType="document";b.send()},create_audio=function(a,c){var b=document.createElement("audio");b.id=c;b.src=a;b.loop=!0;document.body.appendChild(b)};
WebFontConfig={google:{families:["Roboto:100,400:latin","Vollkorn:400","Capriola:400"]},active:function(){js_loader("http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js",function(){js_loader("typist-8.js")});create_audio("http://imagentleman.github.io/typist/halfawake.mp3","halfawake");document.getElementById("quote").classList.add("quote-anim")}};
(function(){var a=document.createElement("script");a.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";a.type="text/javascript";a.async="true";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)})();
document.getElementById("quote").addEventListener("webkitAnimationEnd",function(a){a.target.parentNode.style.display="none";a.target.classList.remove("quote-anim");document.getElementById("name").classList.add("name-anim");document.getElementById("subtitle").classList.add("subtitle-anim");html_loader("stories.html","storybook");create_audio("http://imagentleman.github.io/typist/prophecy.mp3","prophecy");create_audio("http://imagentleman.github.io/typist/ambient.mp3","ambient")});
document.getElementById("name").addEventListener("webkitAnimationEnd",function(a){a.target.parentNode.style.display="none";a.target.classList.remove("name-anim");document.getElementById("subtitle").classList.remove("subtitle-anim");document.getElementById("logo-op").style.visibility="visible";document.getElementById("logo").classList.add("logo-anim");document.getElementById("caption").style.visibility="visible";document.getElementById("caption").classList.add("fadein");document.getElementById("halfawake").play();
$("#halfawake").animate({volume:0},0).animate({volume:1},5E3);game_on="logo"});var game_on="loading",mode="",score=0,started=!1,start,timer,gametime=30,types=0,left=gametime,finished=!0,current=0,score1=0,score2=0,current1=0,current2=0,words=[],typed="",story_index,prev_move=0,current_move=0,next_move=0;