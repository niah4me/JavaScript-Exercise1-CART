var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /):");

// Step 2: Validate the input
if (num1 === null || num2 === null || operation === null || num1 === "" || num2 === "") {
    alert("Input cannot be empty. Please enter valid numbers and operation.");
} else {
    // Convert inputs to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Step 3: Perform the calculation
    var result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                result = "undefined";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            alert("Invalid operation. Please enter +, -, *, or /.");
            result = "undefined";
    }

    // Step 4: Display the result
    document.write("The result of " + num1 + " " + operation + " " + num2 + " is: " + result);
}