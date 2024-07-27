function fetchWithRetry(url, tries){
	return new Promise(async(resolve, reject)=>{
	    let i = 1;
		while(i <= tries){
			try{
			    console.log('attempt ', i++);
				const data = await fetch(url);
				// console.log(data);
				resolve(data);
			}
			catch(err){
				//do nothing
			}
		}
		reject('Could not fetch data with maximum no. of attempts');
	});
}

const url = 'https://www.fakeapi.co.uk/';
const url2 = 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1';
fetchWithRetry(url, 3).then(data=>console.log(data))
.catch(err=>console.log(err));
