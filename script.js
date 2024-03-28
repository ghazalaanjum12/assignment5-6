/*
    Author: Ghazala Anjum C0905815
    Version: 1.0
    Date: 28-03-2024
    Description: JavaScript file containing the currency conversion logic.
*/

// Function to convert currency
function convertCurrency() {
    // Getting the values of CAD and USD amounts from input fields
    var cadAmount = parseFloat(document.getElementById("cadAmount").value);
    var usdAmount = parseFloat(document.getElementById("usdAmount").value);
    var exchangeRate;

    // Checking if CAD amount is entered
    if (!isNaN(cadAmount)) {
        exchangeRate = 0.75; // Hardcoded exchange rate for CAD to USD
        // Converting CAD amount to USD and displaying in the USD input field
        document.getElementById("usdAmount").value = (cadAmount * exchangeRate).toFixed(3);
    } 
    // Checking if USD amount is entered
    else if (!isNaN(usdAmount)) {
        exchangeRate = 1.33; // Hardcoded exchange rate for USD to CAD
        // Converting USD amount to CAD and displaying in the CAD input field
        document.getElementById("cadAmount").value = (usdAmount * exchangeRate).toFixed(3);
    }
}
