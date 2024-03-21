
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
var result = ""

var operant1 = ""; 
var operant2 = "";
var operator = [];

btAdd.addEventListener("click", function () {

    if (operator.length === 0 && operant1 !== "" ){

        operator[0] = "+";
    
    }else if(operator.length === 0 && operant1 === ""){

        //TOAST INPUT A NUMBER FIRST 

    }

});

bt1.addEventListener("click", function () {

    if (operant1 === "") { // if operannt1 not set = operant1+"1"

        operant1 += "1";

    }else if(operator.length === 0 && operant1 !== "" ){ // operator not set + operant1 set = operant1 add+"1"
        
        operant1 += "1";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){ // operator2 not set && operant+operator1 set = operator2+"1";

        operant2 += "1";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){ // operator2 set && operant+operator1 set = operator2+"1";

        operant2 += "1";
        
    }
});

bt2.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "2";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "2";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "2";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "2";

    }
});


btEqual.addEventListener("click", function () { // EQUAL 

    if ( operant1 !== "" && operant2!== "" && operator[0] ===  "+" && result === "") {

        result = +operant1 + +operant2;

        operant1 = "";
        operant2 = "";
        operator.length = 0;
    }

})


bt0.addEventListener("click", function () {

    if (operant1 === "") { // if operannt1 not set = operant1+"1"

        

    }else if(operator.length === 0 && operant1 !== "" ){ // operator not set + operant1 set = operant1 add+"1"
        
        operant1 += "0";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){ // operator2 not set && operant+operator1 set = operator2+"1";

    

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){ // operator2 set && operant+operator1 set = operator2+"1";

        operant2 += "0";
        
    }
});

bt3.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "3";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "3";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "3";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "3";

    }
});

bt4.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "4";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "4";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "4";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "4";

    }
});


bt5.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "5";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "5";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "5";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "5";

    }
});


bt6.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "6";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "6";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "6";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "6";

    }
});

bt7.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "7";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "7";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "7";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "7";

    }
});

bt8.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "8";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "8";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "8";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "8";

    }
});

bt9.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "9";

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "9";
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "9";

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "9";

    }
});