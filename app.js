
var sMeter=20.9;
var marla=225;
function measur(){
    let inputvalue= document.getElementById("feet").value;

    if(inputvalue===""){
        alert("Put Valid Data")
    }
    else{

    var displayMarla = inputvalue/marla;

    var pMarla=document.getElementById("marla").textContent=displayMarla;

    var displaySmeter = pMarla*sMeter;

    document.getElementById("meter").textContent=displaySmeter;
   
}



    
}