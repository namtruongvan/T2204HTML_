var s = 0;
var p = 10;
console.log("Time:", p, s)
var time = setInterval(function () {
    // console.log("Time:",p,s)
    if(s==0){
        p--;
        s=60;
    }
    console.log("Time:", p, s)
    s--;
    if(p==0){
        clearInterval(time);
    }
},1000);






