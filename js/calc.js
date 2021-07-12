function show(name, namef, namem, cls, roll ) {
    console.log(`Here's your given input...`);
    console.log(`Your Name     : ${name}`);
    console.log(`Father's Name : ${namef}`);
    console.log(`Mother's Name : ${namem}`);
    console.log(`Class         : ${cls}`);
    console.log(`Roll          : ${roll}`);

    document.getElementById("list").innerHTML=" ";

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Here's your input given below.`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Name : ${name}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Father : ${namef}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Mother : ${namem}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Class : ${cls}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Roll : ${roll}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

}



//          Basic Calculator Operation     //


// function calcadd(num1, num2) {
//     console.log(`Summation = ${num1 + num2}`);

//     document.getElementById("list").innerHTML=" ";

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Summation = ${num1 + num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);
// }

// function calcsub(num1, num2) {
//     console.log(`Substraction = ${num1 - num2}`);

//     document.getElementById("list").innerHTML=" ";

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Substraction = ${num1 - num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

// }

// function calcmul(num1, num2) {
//     console.log(`Multiplication = ${num1 * num2}`);

//     document.getElementById("list").innerHTML=" ";

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Multiplication = ${num1 * num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

// }

// function calcdiv(num1, num2) {
//     console.log(`Division = ${num1 / num2}`);

//     document.getElementById("list").innerHTML=" ";

    

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Division = ${num1 / num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

// }

// function calcrem(num1, num2) {
//     console.log(`Reminder = ${num1 % num2}`);

//     document.getElementById("list").innerHTML=" ";

    
//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Reminder = ${num1 % num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

// }



// All Reset


function allReset() {
    document.getElementById("frm").reset();
    document.getElementById("list").innerHTML='';

}

function Resetall() {
    document.getElementById("list").innerHTML='';
}

// document.forms[0].addEventListener('reset', function() {
//     document.getElementById('result').innerHTML = '';
// });






                 // Get all operation

// function calculates(num1, num2) {
//     console.log(`Summation = ${num1 + num2}`);
//     console.log(`Substraction = ${num1 - num2}`);
//     console.log(`Multiplication = ${num1 * num2}`);
//     console.log(`Division = ${num1 / num2}`);
//     console.log(`Reminder = ${num1 % num2}`);

//     document.getElementById("list").innerHTML=" ";

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Summation = ${num1 + num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Substraction = ${num1 - num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Multiplication = ${num1 * num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Division = ${num1 / num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Reminder = ${num1 % num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

// }


