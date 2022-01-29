document.getElementById("menu").onclick= function(){animate()};

var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
function animate(){
    one.classList.remove("no-animation");
    two.classList.remove("no-animation");
    three.classList.remove("no-animation");
    if(!(one.classList.contains("animate-one")&&two.classList.contains("animate-two")&&three.classList.contains("animate-three"))&&!(("animate-one-rev")&&two.classList.contains("animate-two-rev")&&three.classList.contains("animate-three-rev")))	{	one.classList.add("animate-one");
        two.classList.add("animate-two");
        three.classList.add("animate-three");
    }
    else if(one.classList.contains("animate-one")&&two.classList.contains("animate-two")&&three.classList.contains("animate-three")){
        one.classList.add("animate-one-rev");
        one.classList.remove("animate-one");
        two.classList.add("animate-two-rev");
        two.classList.remove("animate-two");
        three.classList.add("animate-three-rev");
        three.classList.remove("animate-three");

    }
    else{
        one.classList.remove("animate-one-rev");
        one.classList.add("animate-one");
        two.classList.remove("animate-two-rev");
        two.classList.add("animate-two");
        three.classList.remove("animate-three-rev");
        three.classList.add("animate-three");
    }

}