
var bt1 = document.getElementById("bt1")
var bt2 = document.getElementById("bt2")
var bt3 = document.getElementById("bt3")
var bt4 = document.getElementById("bt4")
var bt5 = document.getElementById("bt5")
var bt6 = document.getElementById("bt6")
var bt7 = document.getElementById("bt7")
var bt8 = document.getElementById("bt8")
var bt9 = document.getElementById("bt9")
var bt0 = document.getElementById("bt0")
var btClear = document.getElementById("clr")
var btDel = document.getElementById("del")
var btModulo = document.getElementById("mod")
var btDiv = document.getElementById("div")
var btMult = document.getElementById("mult")
var btSub = document.getElementById("sub")
var btAdd = document.getElementById("add")
var btDeci = document.getElementById("decimal")
var btEqual = document.getElementById("equal")
var operationArray = new Array(3);

var operant1 = ""; 
var operant2 = 0;
var operator = [];

bt1.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "1";

    }else if(operator.length === 0 && operant1 > "" ){ // if operator1 already have value and operant value = 0 only than cancatonate 1
        
        operant1 += "1";
        
    }
});

bt2.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "2";

    }else if(operator.length === 0 && operant1 > "" ){ // if operator1 already have value and operant value = 0 only than cancatonate 2 ...
        
        operant1 += "2";
        
    }
});