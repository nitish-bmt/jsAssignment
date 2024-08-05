console.log('Program Started!');

const p = new Promise((resolve, reject)=>{

	console.log('Program in progress...');
		
	setTimeout(()=>{
		resolve('Program complete');
	}, 3000);
	
	setTimeout(()=>{
		reject('Program failure');
	}, 2000);

	console.log('promise is pending');

});

	
p
	.then((data)=>{console.log(data)})
	.catch((err)=>{console.log(err)});
