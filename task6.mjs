// const lodashClonedeep = require("lodash.clonedeep");

import _ from 'lodash';
function fetchAllWithErrors(urls){
	return new Promise(async(resolve, reject)=>{   
		let dataArr = []; 
		urls.forEach(async (url)=>{
			try{
				console.log(url);
				const data = await fetch(url);

				// console.log(JSON.parse(data));	
				dataArr = _.cloneDeep({dataArr});
				// console.log(dataArr);
				// dataArr = JSON.parse(JSON.stringify(dataArr));
	
				// console.log(dataArr);

				// const data = await res.json();
				// console.log(typeof(data));
				// dataArr.push({...data});
				// console.log(data);
				// console.log(data);
				// dataArr.push(...data);
			}
			catch(err){
				reject(`Encountered error: ${err}`);
			}
		})
		resolve(dataArr);
	});
}

const urls = ['https://www.fakeapi.co.uk/', 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/', 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1'
];

fetchAllWithErrors(urls)
	.then(data=>console.log(data))
	.catch(err=>console.log(err));
