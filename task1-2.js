console.log('Program Started!');
console.log('Program in progress...');

const p = new Promise((resolve, reject)=>{
		
	setTimeout(()=>{
		resolve('Step 1 complete');
	}, 3000);
	
	setTimeout(()=>{
		reject('Program failure');
	}, 2000);

	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve('Step 2 complete');
		}, 2000);
	});
});

p
.then((data)=>{console.log(data)})
.then((data)=>{console.log(data)})
.catch((err)=>{console.log('Program failed: ', err)});
