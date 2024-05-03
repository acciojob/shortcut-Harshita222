function shortcut(s1, s2) {
    // Check if either of the strings is empty
    if (s1.length === 0 || s2.length === 0) {
        return '';
    }

    // Initialize an empty string to store the initials
    let initials = '';

    // Loop through the characters of s1 and s2
    for (let i = 0; i < 2; i++) {
        let currentString = (i === 0) ? s1 : s2; // Determine current string
        if (currentString.length > 0) {
            initials += currentString[0].toUpperCase(); // Append the initial letter in uppercase
        }
    }

    // Return the concatenated initials
    return initials;
}

// // Sample usage:
// const s1 = "Amnesty";
// const s2 = "International";
// console.log(shortcut(s1, s2)); // Output: AI


// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
