function shortcut(s1, s2) {
  // your code here
	 // Check if either of the strings is empty
    if (s1.length === 0 || s2.length === 0) {
        return '';
    }

    // Extract the initial letters of the strings and convert to uppercase
    const initial1 = s1.charAt(0).toUpperCase();
    const initial2 = s2.charAt(0).toUpperCase();

    // Concatenate the initial letters and return
    // return initial1 + initial2;
	    return (initial1 + initial2).toLowerCase();

}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
