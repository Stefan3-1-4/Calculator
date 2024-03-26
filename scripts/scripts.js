
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
var btDivision = document.getElementById("div")
var btMult = document.getElementById("mult")
var btSub = document.getElementById("sub")
var btAdd = document.getElementById("add")
var btDeci = document.getElementById("decimal")
var btEqual = document.getElementById("equal")
var operationArray = new Array(3);
var result = ""
operationArray[0] = operant1;
operationArray[1] = operant2;
operationArray[2] = operator; 


var display = document.getElementById("display");

function updateDisplayContent(content) {
 
    display.textContent = content;

}

function updateDisplayNow() {

    var displayContent = operant1 || "0";
    if ( operator.length !== 0 && operant2 === "" ) {

        displayContent += "" + operator[0] + "" ; 

    }else if ( operator.length !== 0 && operant2 !== "" ) {

        displayContent += "" + operator[0] + operant2;

    }else if ( operant1 === "" && operator.length === 0 && operant2 === "" && result !== "") {

        displayContent = result;

    }else if (operant1 !== "" && operator.length === 0 && operant2 ==="" && result !=="") {

        result = "";

    }
    updateDisplayContent(displayContent);

}

var operant1 = "";     
var operant2 = "";                              // operants OPERANTS operants
var operator = [];

btEqual.addEventListener("click", function () { // EQUAL 

    if ( operant1 !== "" && operant2!== "" && operator[0] ===  "+" && result === "") {

        result = +operant1 + +operant2;

        operant1 = "";
        operant2 = "";
        operator.length = 0;
        updateDisplayNow();
    }

});

btAdd.addEventListener("click", function () {

    if (operator.length === 0 && operant1 !== "" ){

        operator[0] = "+";
        updateDisplayNow();
    
    }else if(operator.length === 0 && operant1 === ""){

        //TOAST INPUT A NUMBER FIRST 

    }

});

btSub.addEventListener("click", function () {

    if(operator.length === 0 && operant1 !== ""){

        operator[0] = "-";
        updateDisplayNow();

    }else if (operator.length === 0 && operant1 === ""){

        //TOAST INPUT NBR1 FIRST

    }

});

btMult.addEventListener("click", function () {

    if(operator.length === 0 && operant1 !== ""){

        operator[0] = "*";
        updateDisplayNow();

    }else if (operator.length === 0 && operant1 === ""){

        //TOAST MULTI NBR 1 

    }

});

btDivision.addEventListener("click", function() {

    if(operator.length === 0 && operant1 !== "" ) {
    
        operator[0] = "/";
        updateDisplayNow();

    }else if (operator.length === 0 && operant1 === "") {

        //TOAST DIVISION NBR 1 

    }

})


bt1.addEventListener("click", function () {

    if (operant1 === "") { // if operannt1 not set = operant1+"1"

        operant1 += "1";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ // operator not set + operant1 set = operant1 add+"1"
        
        operant1 += "1";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){ // operator2 not set && operant+operator1 set = operator2+"1";

        operant2 += "1";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){ // operator2 set && operant+operator1 set = operator2+"1";

        operant2 += "1";
        updateDisplayNow();
        
    }
});

bt2.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "2";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "2";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "2";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "2";
        updateDisplayNow();

    }
});


bt0.addEventListener("click", function () {

    if (operant1 === "") { // if operannt1 not set = operant1+"1"

     operant1 += "0.0";
     updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ // operator not set + operant1 set = operant1 add+"1"
        
        operant1 += "0";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){ // operator2 not set && operant+operator1 set = operator2+"1";

        operant2 += "0.";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){ // operator2 set && operant+operator1 set = operator2+"1";

        operant2 += "0";
        updateDisplayNow();
        
    }
});


btDeci.addEventListener("click", function () {

    if(operant1 =="") { //if press "." before operant1 > "" 

        operant1 += "0.";
        updateDisplayNow();

    }else if (operant1 !== "" && operator.length === 0 ) { // if press "." after operant1 but not operator

        if( operant1.includes ("." ) ) {

            // nothing because already decimal engaged

        } else {

            operant1 += ".";
            updateDisplayNow();

        }
        

    }else if (operant1 !== "" && operator.length !== 0 && operant2 === "" ) { //when press 0 before operator1 and operant

        operant2 += "0."
        updateDisplayNow();

    }else if (operant1 !== "" && operator.length !== 0 && operant2 !== "" ) {

        if (operant2.includes(".")) {

            // nothing because already decimal engaged

        }else {

            operant2 += ".";
            updateDisplayNow();

        }

    }

});

btClear.addEventListener("click", function() {

    operant1 = "";
    operant2 = "";
    operator.length = 0;
    result = "";
    updateDisplayNow();
    updateDisplayNow();

});

btDel.addEventListener("click", function() {

    if (operant2 !== ""){

        operant2 = operant2.slice(0, -1); //check if operant 2 is asigned if it is u can remove
        updateDisplayNow();

    }else if (operator !== "") {

        operator.length = 0; // check if operator have value if yes u can remove that value 
        updateDisplayNow();

    }else if (operant1 !== "") {

        operant1 = operant1.slice(0, -1); // check if operant 1 is asigned if it is u can remove 
        updateDisplayNow();

    }

});

btModulo.addEventListener("click", function () {

    if ( operant1 === 0 && operant2 === 0 && operator.length === 0 ) {



    }else if (operant1 !== "" && operant2 === "" && operator.length === 0 ) {

        operator[0] = "%" ; 
        updateDisplayNow();

    }

});

btEqual.addEventListener("click", function() {

    if ( operant1 !=="" && operant2 !== "" && operator[0] === "%") {

        result = (+operant1 * +operant2)/100

        operant1 = "";
        operant2 = "";
        operator.length = 0;
        updateDisplayNow();

    }

});


bt3.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "3";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "3";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "3";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "3";
        updateDisplayNow();

    }
});

bt4.addEventListener("click", function () {

    if (operant1 === "") {

        updateDisplayNow();
        operant1 += "4";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "4";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "4";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "4";
        updateDisplayNow();

    }
});


bt5.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "5";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "5";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "5";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "5";
        updateDisplayNow();

    }
});


bt6.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "6";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "6";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "6";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "6";
        updateDisplayNow();

    }
});

bt7.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "7";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "7";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "7";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "7";
        updateDisplayNow();

    }
});

bt8.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "8";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "8";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "8";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "8";
        updateDisplayNow();

    }
});

bt9.addEventListener("click", function () {

    if (operant1 === "") {

        operant1 += "9";
        updateDisplayNow();

    }else if(operator.length === 0 && operant1 !== "" ){ 
        
        operant1 += "9";
        updateDisplayNow();
        
    }else if (operator.length !== 0 && operant1 !== "" && operant2 === ""){

        operant2 += "9";
        updateDisplayNow();

    }else if (operator.length !== 0 && operant1 !== "" && operant2 !== ""){

        operant2 += "9";
        updateDisplayNow();

    }
});

btEqual.addEventListener("click", function () { // EQUAL with "-"

    if ( operant1 !== "" && operant2 !== "" && operator[0] ===  "-" && result === "") {

        result = +operant1 - +operant2;

        operant1 = "";
        operant2 = "";
        operator.length = 0;
        updateDisplayNow();

    }

});

btEqual.addEventListener("click", function () { // EQUAL with "*"

    if ( operant1 !== "" && operant2 !== "" && operator[0] ===  "*" && result === "") {

        result = +operant1 * +operant2;

        operant1 = "";
        operant2 = "";
        operator.length = 0;
        updateDisplayNow();

    }

});

btEqual.addEventListener("click", function () {

    if ( operant1 !== "" && operant2 !== "" && operator[0] === "/" && result === "") {

        result = +operant1 / +operant2;

        operant1 = "";
        operant2 = "";
        operator.length = 0
        updateDisplayNow();

    }

})

