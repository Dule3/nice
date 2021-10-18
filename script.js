function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function setBackGround(par){
   document.getElementById('banner').setAttribute("style", "background: url(./nice.jpg) no-repeat center center fixed");
}


var rndNo = 0;
var nice = false;
var nice69 = setInterval(function()
{ 
rndNo = getRandomInt(0,696969); 
nice = (rndNo === 69 ?  true : false);
if (nice === true){
    clearInterval(nice69);
    setBackGround(nice);
    } 
console.log(rndNo);
console.log(nice);
document.getElementById("number").innerHTML = rndNo;
}, 1000);




// var rndNo = getRandomInt(0, 696); 
// console.log(rndNo);
// var nice = (rndNo === 69 ?  true : false);
// console.log(nice);