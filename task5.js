function fetchWithTimeout(url, ms){
	return new Promise(async(resolve, reject)=>{
		try{
			console.log('fetching data...');
			
			// console.log(data);
			setTimeout(()=>{
				reject('Could not fetch data within given time limit');
			}, ms);
			
			setTimeout(()=>{resolve('got data')}, 4000);
			//const data = fetch(url);
			//resolve(data);
		}
		catch(err){
			reject(`API failure ${err}`);
		}
		

	});
}

const url = 'https://www.fakeapi.co.uk/';
const url2 = 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1';
fetchWithTimeout(url2, 4001).then(data=>console.log(data))
.catch(err=>console.log(err));
