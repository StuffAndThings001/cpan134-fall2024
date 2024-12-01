function calculateArea(width, height) {
    // Validate inputs
    while (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        console.log("Both width and height must be positive numbers.");
        width = parseFloat(prompt("Enter a positive value for width:"));
        height = parseFloat(prompt("Enter a positive value for height:"));
    }
    const area = width * height;
    console.log(`The area of the rectangle is: ${area}`);
    return area;
}

// Example calls
calculateArea(5, 3); // Outputs: 15
calculateArea(10, 7); // Outputs: 70
