//  promise object aur function returning an promise object
//  bohot different hai dono!!!!!

console.log("Program started");

const pChain2 = () => (new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("Second promise chain complete!");
	}, 5000);
}));

const pChain1_2 = () => new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("First promise chain complete!");
	}, 2000);
});

const pChain1 = () => new Promise((resolve, reject)=>{

	console.log("Program in progress...");
	setTimeout(()=>{
		resolve({data: "Hello, friend!", error: null});
	}, 10000);

	console.log("Promise pending");

});

pChain1()
	.then((data)=>{
		console.log(data);
		return pChain1_2();
	})
	.then((data)=>{
		console.log(data);
		return pChain2();
	})
	.then(data=>console.log(data))
	.catch(error=>console.log(error));

// console.log("Program started");

// const p2 = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		resolve('Second promise chain complete!');
// 	}, 10000);
// });

// const p = new Promise((resolve, reject)=>{

// 	console.log("Program in progress...");

// 	setTimeout(()=>{
// 		resolve({data: "Hello, friend!", error: null});
// 	},5000);

// 	console.log("Promise is pending");
	
// 	return new Promise(()=>{
// 		setTimeout(()=>{
// 			console.log("First promise chain complete!");
// 		}, 2000);

// 		return p2;
// 	});
// });



// p
// 	.then((data)=>{
// 		console.log(data.data);
// 		console.log("Error: ", data.error);
// 	})
// 	.then((message)=>console.log(message))
// 	.then((data)=>{console.log(data)})
// 	.catch((error)=>console.log('Promise chain interrupted'));
