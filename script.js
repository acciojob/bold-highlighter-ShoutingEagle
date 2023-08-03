function highlight() {
    //Write your code here
	const strong = document.getElementsByTagName("strong");
    for(let i=0;i<strong.length;i++){
        strong[i].classList.add("blue");
    }

}


function return_normal() {
    //Write your code here
	const strong = document.getElementsByTagName("strong");
    for(let i=0;i< strong.length;i++){
         strong[i].classList.remove("blue");
    }
    
}
