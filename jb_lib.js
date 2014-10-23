// jb_lib.js
// Yitzy Rubin
// Created: 2014-09-29


//2014-10-20
function enterPressed(){
	var screenValue = document.getElementById("dispTxt").value;
	var historyList = document.querySelector("#history ul");
	newLi = document.createElement("li");
	newLi.innerHTML = screenValue;
	historyList.appendChild(newLi);
}


//2014-10-02
function mouseIn(){
    var dispCount = document.getElementById("counter");
    dispCount.value++;
    var myBox = document.getElementById("myBox");
    if (myBox.style.backgroundColor=="red"){
    myBox.style.backgroundColor="blue";
    } else{
        myBox.style.backgroundColor="red";
    }
    return;
}

//2014-10-02
function buttonPressed(inTxt){
    var dispField = document.getElementById("dispTxt");
    switch(inTxt){
    case "=":
        dispField.value = numberWithCommas(eval(dispField.value));
        break;
    case "clr":
        dispField.value = '';
        break;
    default:
        dispField.value += inTxt;
    }
    return;
}

//2014-10-02
function numberWithCommas(numIN) {
    numIn = numIN.toFixed(2);  // does not work
    var parts = numIN.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// 2014-09-29
function concatInputs(){
	var in1 = document.getElementById("Input_1");
	var in2 = document.getElementById("Input_2");
    if( isNaN(in1) || isNaN(in2))
    { rval = in1.value + ' ' + in2.value;}
    else
    {rval = parseInt(in1.value) + parseint(in2.value);}
    
	alert(rval);
}
