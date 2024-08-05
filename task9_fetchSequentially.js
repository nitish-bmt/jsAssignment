function fetchSequentially(urls){

  const results = [];

  return new Promise(async(resolve, reject)=>{
    for(const url of urls){
      try{
        results.push(await fetch(url));
      }
      catch{
        reject('Failed');
      }
    }
    resolve(results);
  });
}

const urls = [ 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/', 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1'];

fetchSequentially(urls)
  .then(data=>console.log(data))
  .catch(error=>console.log(error));

//  Test case 2: different sequence
//  const urls = [ 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1', 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/'];
