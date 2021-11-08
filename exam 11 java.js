// answer for 11

function msg(){
//variable that will hold number of times OUCH!
var result="" ;
//Number entered by the user
count=document.getElementById('number').value;
//Loop to repeat till the count
for (i = 0; i < count; i++) {
result=result.concat("wrong");
}

document.getElementById("repeat_digit").innerHTML = "<br>"+result;
}





  
