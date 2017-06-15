function showFullname() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;  
	var fullname = getFullName(firstname, lastname);
	document.getElementById("result_fullname").innerHTML = fullname;
}


function getFullName(firstname, lastname) {
	var fullname = firstname + " " + lastname;
	return fullname;
 }

// button event
document.getElementById("show_fullname").addEventListener("click", showFullname);