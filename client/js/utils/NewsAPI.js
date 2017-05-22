import AppServerActions from '../actions/AppServerAction';
import AppActions from '../actions/AppActions';
// import axios from 'axios';
const axios = require('axios');

const apiUrl = 'https://newsapi.org/v1/';
const apiKey = `62db6ba454ee4700bfeedd7000a7c4d1`;

export function getSources(callback) {
  // const source = 'techcrunch';
  // const option = 'top';
  // const url = '${apiUrl}/sources?source=${source}&sortBy=${option}&apiKey=${apiKey}';
  const url = `https://newsapi.org/v1/articles?source=techcrunch&apiKey=${apiKey}`;
 
  axios.get(url)
      .then((response)=>{
      AppActions.getRandom(response.data)
      })
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data.articles, null, 2));
    // console.log(JSON.stringify(response.data.articles, null, 2));
    // write data to file if status is ok
    // if response.
//     let data = JSON.stringify(response.data.articles, null, 2);
//     if (response.status >= 200 || response.status < 300) {
//         fs.writeFile(path, data, function(error) {
//      if (error) {
//        console.error("write error:  " + error.message);
//      } else {
//        console.log("Successful Write to " + path);
//      }
// });
//     }
//     else {
//       console.log('Something is wrong with the api call')
//       throw Error;
//     }
  // })
  .catch(function (error) {
    console.log(error);
  });
  // axios.get(url).then(response => callback(response.data))
  // .catch(error => error.data);
}
