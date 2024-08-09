async function conditionalChaining(url, secUrl1, secUrl2){

  await fetch(url)
    .then(async(data)=>{
      try{
        const secResponse = await fetch(secUrl1);
      }
      catch(error){
        reject('secUrl1 failed!');
      }
    })
    .catch(async()=>{
      try{
        const secResponse = await fetch(secUrl2);
      }
      catch(error){
        reject('secUrl2 failed!');
      }
    });
}

// try to fetch all dogs
// on success fetch details for labra
// otherwise fetch all cats
const url = 'https://freetestapi.com/api/v1/dogs';
const secondaryUrl1 = 'https://freetestapi.com/api/v1/dogs?search=labrador';
const secondaryUrl2 = 'https://freetestapi.com/api/v1/cats?sort=name&order=dec';

conditionalChaining
  .then(data=>console.log(data))
  .catch(error=>console.log('Failed to fetch multiple apis!'));