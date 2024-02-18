function getFormvalue() {
    //Write your code here
   let inp = document.querySelectorAll("input")
	let fname = inp[0].value 
	let last = inp[1].value
	let full = fname+" "+last
	alert(full)
	
}
