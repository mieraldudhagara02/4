function addition() {
    var a = parseInt(prompt("Enter Your First Vlaue:"));    
    var b = parseInt(prompt("Enter Your Second Vlaue:")); 
    var c = a + b;
    window.alert("Addition " +c);
}

function substraction() {
    let a = parseInt(prompt("Enter Your First Vlaue:"));    
    let b = parseInt(prompt("Enter Your Second Vlaue:")); 
    let c = a - b;
    window.alert("Substraction " +c);
}

function multiplication() {
    let a = parseInt(prompt("Enter Your First Vlaue:"));    
    let b = parseInt(prompt("Enter Your Second Vlaue:")); 
    let c = a*b;
    window.alert("Multiplication " +c);
}

function division() {
    let a = parseInt(prompt("Enter Your First Vlaue:"));    
    let b = parseInt(prompt("Enter Your Second Vlaue:")); 
    let c = a/b;
    window.alert("Division " +c);
}

export {addition,substraction,multiplication,division};