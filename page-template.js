//module.exports = generatePage;

// const generatePage = (user, githubName) => {
//     /* line break */return `
// <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Portfolio Demo</title>
//     </head>
    
//     <body>
//         <h1>${user}</h1>
//         <h2><a href="https://github.com/${githubName}">Github</a></h2>
//     </body>
// </html>
//     `;/* line break */
// };

// //ES6 version of module.exports????

//take in the templateData object with all our answers
module.exports = templateData => {
    console.log(templateData);
    //destructure the about and project data based on their property key names
    //this isn't an array destructuring so we are not worried about the order
    //as long as the property names match to what is declared inside the object already
    //using rest operator with header, to store the 'REST' of the data that we didnt destructure
    //  from templateData and storing it in a new object called header
    const { projects, about, ...header } = templateData;

    console.log("======================");
    console.log("checking if we are grabbing the right objects out of templateData");
    console.log(projects);
    console.log(about);
    console.log(header); 

    // const header = {
    //     name: templateData.name,
    //     github: templateData.github
    // };

    
    
    return `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${templateData.name}</h1>
        <h2><a target="_blank" href="https://github.com/${templateData.github}">GitHub</a></h2>
    </body>

</html>
    `;
};