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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">
                    ${header.name}
                </h1>
                <nav class="flex-row">
                    <a href="https://github.com/${header.github}" class="ml-2 my-1 px-2 py-1 bg-secondary text-dark">
                        GitHub
                    </a>
                </nav> 
            </div>
        </header>
        <main class="container my-5">
        
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">
                &copy; ${new Date().getFullYear()} by ${header.name}
            </h3>
        </footer>
    </body>
</html>
    `;
};