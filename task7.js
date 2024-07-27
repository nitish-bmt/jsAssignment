function fetchWithRace(urls, ms){
  return new Promise((resolve, reject)=>{
    urls.forEach( async(url) => {
      try{
        const res = await fetch(url);
        resolve(res);
      }
      catch(error){
        console.log('one api failed');
      }
    });

    setTimeout(()=>{
      reject('timeout!');
    },ms);
  });
}

const urls = ['https://www.fakeapi.co.uk/', 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/', 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1'
];

fetchWithRace(urls, 1000)
  .then(response=>console.log(response))
  .catch(err=>console.log(err));