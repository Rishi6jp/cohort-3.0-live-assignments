const fs = require('fs')
function readFileAsync(){
    return new Promise((resolve,reject) =>{
        fs.readFile("a.txt","utf-8", (err, data) => {
            if(err){
                reject("file not found")
            } else{
                resolve(data);
            }
        } );
    });
}

readFileAsync().then(value => {console.log(value)}).catch(err => {console.error(err)})