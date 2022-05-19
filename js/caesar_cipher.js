function runDecrypt(isDecrypt) {
	var shift = document.getElementById("key").value;
	var input = document.getElementById("input").value;

	if (input.length == 0) {
		alert("Input field cannot be empty!");
		return;
	}
	var key = parseInt(shift, 10);
	if (key < 0 || key >= 26) {
		alert("Shift is out of range(Range is from 0-26)");
		return;
	}
	if (!/^-?\d+$/.test(shift)) {
		alert("Key must be an Integer!");
		return;
	}

	var input = document.getElementById("input");
	var output = document.getElementById("output");
	if (isDecrypt) { // Input : Cypher
		key = (26 - key) % 26;
		output.value = caesarShift(input.value, key);
	} else { // Input : Text
		output.value = caesarShift(input.value, key);
	}

}


// Caesar Decryption - Left Shift
function caesarShift(text, shift) {
	var cipher = "";
	for (var i = 0; i < text.length; i++) {
		var ch = text.charCodeAt(i);
		if (65 <= ch && ch <= 90) {
			cipher += String.fromCharCode((ch - 65 + shift) % 26 + 65); // for Uppercase Unicode
		}
		else if (97 <= ch && ch <= 122) {
			cipher += String.fromCharCode((ch - 97 + shift) % 26 + 97);  // for Lowercase Unicode
		}
		else {
			cipher += text.charAt(i);
		}
	}
	return cipher;
}
