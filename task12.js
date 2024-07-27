function delay(ms){
  return new Promise((resolve, reject)=>{ setTimeout(()=>resolve, ms)});
}

function fetchHelp(url){
  return new Promise(async(resolve, reject)=>{
    try{
      const data = await fetch(url);
      resolve(data);
    }
    catch(error){
      reject('failed. retrying...');
    }
  });
}
function fetchWithExponentialBackoff(url, maxRetries){
  return new Promise(async(resolve, reject)=>{

    var backoff = 1000;
    while(maxRetries--){
        fetchHelp(url)
          .then(data=>resolve(data))
          .catch(async(error)=>{
            console.log(error);
            await delay(backoff);
            backoff *= 2;
          });
    }
    reject('Failed even after maximum retries with exponential backoff');  
  });
}

const failureUrl = 'https://www.fakeapi.co.uk/';
const successUrl = 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/';

fetchWithExponentialBackoff(failureUrl, 4)
  .then(data=>console.log(data))
  .catch(error=>console.log(error));