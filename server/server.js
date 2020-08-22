const path = require('path');
const fs = require('fs'); 
const request = require('request');


let dataPath = path.join(__dirname, '../data.json');

// fs.readFile(dataPath,{
//     encoding: "UTF-8"
// }, (err, data) => {
//     var person = JSON.parse(data);

//     console.log(person.name);
//     console.log(person.age);
// });

request('https://reddit.com/r/popular.json', (err,res,body) => {

    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath,item.data.title + '/n')
    });

    // fs.writeFile(dataPath, res.body, (err) => {
    //     if(err) console.log(err);
    // });

});