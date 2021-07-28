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
