function counterWrapper() {
	let a = 1;
	return function(){
		return a++;
	}
}
	
const counter  = counterWrapper();
counter();
counter();
counter();
