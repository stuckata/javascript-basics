function replaceSpaces(value) {
	
	value = value.replace(/[" "]/g, "&nbsp;");
	return value; 

}

console.log(replaceSpaces('But you were living in another world tryin\' to get your message through'));