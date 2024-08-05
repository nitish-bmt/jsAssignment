
async function wid(){

  var dataArr = [];

  const url = 'https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/';
  const data = await fetch(url)

  dataArr.push(data);
  // console.log(dataArr);

  return(dataArr);
}

const d = await wid();
console.log(d);
