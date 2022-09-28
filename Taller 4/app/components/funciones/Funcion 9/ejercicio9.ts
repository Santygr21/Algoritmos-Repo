function factorial2(n:number) {
	let total = 1; 
	for (let i=1; i<=n; i++) {
		total = total * i; 
	}
    console.log(total); 
}

factorial(8);