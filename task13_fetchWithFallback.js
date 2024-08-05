function fetchWithFallback(urls){
  const dataArr = [];

  return new Promise(async(resolve, reject)=>{
    for(const url of urls){
      try{
        dataArr.push(await fetch(url));
      }
      catch(error){
        // continue
      }
    }

    if(dataArr.length > 0){
      resolve(dataArr);
    }
    else{
      reject('All apis failed!');
    }
  });
}

const urls = ['https://www.fakeapi.co.uk/'];
// , 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/', 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1'];

fetchWithFallback(urls)
  .then(data=>console.log(data))
  .catch(error=>console.log(error));