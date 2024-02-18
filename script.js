function getFormvalue() {
    //Write your code here
    let inps = document.querySelectorAll("input")
	let first_name = inps[0].value
	let last_name = inps[1].value
    let fullName = first_name + " "+ last_name
	alert(fullName)
	
}
