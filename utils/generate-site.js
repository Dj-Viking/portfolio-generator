const fs = require('fs');

writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an error, reject the promise and send the
            //  error to the Promise's .catch() instance method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesn't
                //  accidentally execute the resolve() instance method also
                return;
            } else {
                //if everything went well resolve the Promise and send the successful
                //  data to the .then() instance method
                resolve({
                    ok: true,
                    message: 'HTML File created!'
                });
            }
        });
    });
}

copyFile = file => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./style.css', './dist/style.css', file, err => {
            //if err reject promise
            if (err) {
                reject(err);
                return;
            } else {//if no err resolve promise with an object
                resolve ({
                    ok: true,
                    message: 'CSS File Copied!'
                });
            }
        });
    });
}

// module.exports = {
//     writeFile: writeFile,
//     copyfile: copyFile
// };
// or we can write it like this ES6 style
//  this is so we indicate that the object values and the property names
//  are the exact same
module.exports = { writeFile, copyFile };