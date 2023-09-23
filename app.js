// massive/array -> olon utga zereg hadgalah
var a=5;
var too=[1,2,3,44567,90];
var word=["text1","text2","text3"];
var any=[50,"hi",null,true];
console.log(too)
// index-->elementiin bairshil
// index n 0ees ehelne!
console.log(too[0]);
console.log(too[3]);
// length -->elementiin urt buyu too shirheg
console.log(too.length);
console.log(too[too.length-1]);
// massive iin hamgiin suuliin element gargah 
for(var i=0;i<=too.length-1;i++){
    console.log(word[i])
}

var body=document.getElementsByTagName('body')[0];
var btn=document.getElementsByTagName('button')[0];
console.log(body);
var color=['red','orange','yellow','green','blue','purple'];
var i=-1;
function change(){
   var random=Math.floor(Math.random()*(color.length-1));
     i++
    body.style.backgroundColor=color[random];
    btn.innerText=color[random];
    if(i>=color.length-1){
        i=-1;
    }
}
