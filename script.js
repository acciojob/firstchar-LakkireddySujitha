function firstChar(text) {
  // your code here
	const trimmedText = text.trim();
if (trimmedText.length === 0) {
    return '';
  }
  return trimmedText[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
