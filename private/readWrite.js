


const fs = require("fs");

const xml2js = require('xml2js');





exports.read = function (file, res) {
fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
          throw err;
      }
      res.write(data);
      res.end();
  });
}






















/*function saveData(file, data) {

  //Gets Date
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  data.date = date + ' ' + time;


  let arr = [];

  //Reads JSON
  let jsonData = fs.readFileSync(file, 'utf8')
  if (jsonData.length > 0) {
    arr = JSON.parse(jsonData);
  }

  //Adds the data to the array
  arr.push(data);

  //Saves the data to the JSON file
  fs.writeFile(file, JSON.stringify(arr), (err) => {
      if (err) {
          throw err;
      }
      console.log("The data has been saved");
  });
}
*/
