// const suma = document.getElementById("sum")
// const resta = document.getElementById("res")
// const division = document.getElementById("div")
// const multi = document.getElementById("mul")


// const num1 = document.getElementById("num1").value;
// const num2 = document.getElementById("num2").value;

// suma = document.addEventListener(
//     "click", () => {

//     }
// )

function suma() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        alert("Debes ingresar dos numeros")
    } else {
        alert(`Resultado de la operacion entre ${num1} y ${num2} es  ${parseInt(num1) + parseInt(num2)}` );
    } 
}

function resta() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        alert("Debes ingresar dos numeros")
    } else {
        alert(`Resultado de la operacion entre ${num1} y ${num2} es  ${parseInt(num1) - parseInt(num2)}` );
    } 
}

function division() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        alert("Debes ingresar dos numeros")
    } else {
        alert(`Resultado de la operacion entre ${num1} y ${num2} es  ${parseInt(num1) / parseInt(num2)}` );
    } 
}

function multiplicacion() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        alert("Debes ingresar dos numeros")
    } else {
        alert(`Resultado de la operacion entre ${num1} y ${num2} es  ${parseInt(num1) * parseInt(num2)}` );
    } 
}