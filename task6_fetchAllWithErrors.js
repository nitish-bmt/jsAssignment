// cannot use forEach here!
function fetchAllWithErrors(urls){
	return new Promise(async(resolve, reject)=>{   
		let dataArr = []; 
		for(const url of urls){
			try{
				const data = await fetch(url);
				dataArr.push(data);
			}
			catch(err){
				reject(`Encountered error: ${err}`);
			}
		}
		resolve(dataArr);
	});
}

const urls = ['https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/', 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1'
];

fetchAllWithErrors(urls)
	.then(data=>console.log(data))
	.catch(err=>console.log(err));
