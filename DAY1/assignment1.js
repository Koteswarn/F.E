let age = 25; // global variable


function displayAge() {
    console.log("global execution context age is:", age);
}
function changeAge(){
    age = 30;
    console.log("Age updated :", age);
}

displayAge(); // Output: global execution context age is: 25
changeAge(); // Output: Age updated : 30    
displayAge(); // Output: global execution context age is: 30


