// Block scope
{
    console.log("Value of a before declaration:", a); // Output: ReferenceError: Cannot access 'a' before initialization
    console.log("Value of b before declaration:", b); // Output: undefined
    console.log("Value of c before declaration:", c); // Output: ReferenceError: Cannot access 'c' before initialization

    var a = 1; // Variable declaration with var
    let b = 2; // Variable declaration with let
    const c = 3; // Variable declaration with const

    console.log("Value of a after declaration:", a); // Output: 1
    console.log("Value of b after declaration:", b); // Output: 2
    console.log("Value of c after declaration:", c); // Output: 3
}
