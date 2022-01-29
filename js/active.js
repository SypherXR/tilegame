var url_string = window.location.href;
var url = new URL(url_string);
var time = url.searchParams.get("time");
var score = url.searchParams.get("score");
console.log(time);
console.log(score);
