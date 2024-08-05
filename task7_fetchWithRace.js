// CANNOT USE FOR here!!

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

// CASE 3
// Third api would be resolved this time because it is faster than the second api
const urls = ['https://www.fakeapi.co.uk/', 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/', 'https://api.open-meteo.com/v1/forecast?latitude=22.5411&longitude=88.3378&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1'
];

fetchWithRace(urls, 100)
.then(response=>console.log(response))
.catch(err=>console.log(err));

	  /*

////////////////////////////////////////////
OTHER TEST CASES
///////////////////////////////////////////

// CASE 1
// First api call would fail because it is invalid
// Second api won't be able to load within given time
// It would be rejected with timout
const urls = ['https://www.fakeapi.co.uk/', 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/'];

fetchWithRace(urls, 100)
  .then(response=>console.log(response))
  .catch(err=>console.log(err));


// CASE 2
// Second api would be resolved this time within given time
const urls = ['https://www.fakeapi.co.uk/', 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/'];
    
fetchWithRace(urls, 10000)
  .then(response=>console.log(response))
  .catch(err=>console.log(err));


*/