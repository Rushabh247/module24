function calculateSum(a, b) {
    console.log("Value of x before assignment:", x); // Output: undefined
    var x; // Variable declaration (hoisted)
    console.log("Value of x after declaration:", x); // Output: undefined
    x = a + b; // Variable assignment
    console.log("Value of x after assignment:", x); // Output: Sum of a and b
    return x;
}

// Call the function
calculateSum(5, 3);
