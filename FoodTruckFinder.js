const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
// convert local time to pst
const time = new Date();
const day = time.getUTCDay();
const pst = time.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit', timeZone: 'America/Los_Angeles'});
// create api call to alphabetize results, and sort by open day and open/close times
const token = 'D7thTlmNA8redMWQ9tbYaLZvn';
const api = `http://data.sfgov.org/resource/bbb8-hzi6.json?$$app_token=${token}&$order=applicant&dayorder=${day}&$where=start24<='${pst}'%20and%20end24>'${pst}'`;
// create array of open trucks
let trucks = [];


function FoodTruckFinder(api) {
    request(api, function (error, response, body) {
      // check for successful api response.
      if(response.statusCode !== 200) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
      }
      else if(response.statusCode == 200){
       // populate trucks array with truck name, address, and open/close times 
       JSON.parse(body).forEach(function(field) {
        trucks.push([field['applicant'],field['location'], "Hours: " + field['start24'] + " - "+ field['end24']]);
       });
      };
      console.log('There are currently ' + trucks.length + " trucks open at " + pst + " PST");
      showTrucks(trucks, 0, 10);
    });
};


function showTrucks(arr, pageStart, pageLimit) {
    let count = arr.length;
    if (count == 0) {
        console.log(`There are no open food trucks at this time ${pst}.`);
        return;
    }
    // print a page of trucks 10 at a time
        for (i = pageStart; i < pageLimit && i < count; i++) {
            console.log(trucks[i])
            if (i === count -1) {
                console.log("That's all folks!")
                process.exit();
            }
        }
        if (pageLimit < count) {
            rl.question('Would you like to see more trucks (Y/N) ? : ', input => {
                if (input.toUpperCase() === 'Y') {
                    pageStart += 10;
                    pageLimit += 10;
                    showTrucks(arr, pageStart, pageLimit);
                }
                else if (input.toUpperCase() === 'N') {
                    console.log('Exiting...');
                    process.exit();
                }
            })
        }
  };


  FoodTruckFinder(api);