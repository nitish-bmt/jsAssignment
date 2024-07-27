console.log("Program started");
console.log("Program in progress...");

const p = new Promise((resolve, reject)=>{
	console.log("Promise is pending");
	setTimeout(()=>{
		resolve({data: "Hello, friend!", error: null});
	},5000);
	
	return new Promise(()=>{
		setTimeout(()=>{
			console.log("First promise chain complete!");
		}, 2000)
	});
});

p.then((data)=>{
	console.log(data.data);
	console.log("Error: ", data.error);
})
	.then((message)=>console.log(message));
