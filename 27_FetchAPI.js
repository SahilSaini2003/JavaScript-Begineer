// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     Hellow World!
//     <script src="27_FetchAPI.js"></script>
// </body>
// </html>

// Fetching Data
// let a = fetch("https://goweather.herokuapp.com/weather/India")
let a = fetch("https://official-joke-api.appspot.com/random_joke")
a.then ((response)=>{
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json()   // we can run one of .json or .text, else produce error. 
    // return response.text()
}).then ((val)=>{
    // console.log(val)  //can be used with Both .json & .text
    console.log(val["setup"])   // .json only
    setTimeout(() => {
        console.log(val["punchline"]);  // .json only
    }, 5000);
})

//POST REQUEST  
let opp = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body: JSON.stringify({
        title: 'Saoojd',
        body: 'Sahini',
        userId: 10,
    }),
}
let a2 = fetch('https://jsonplaceholder.typicode.com/posts', opp)
a2.then((response) => {
    return response.json()
}).then((json) =>{
    console.log(json)
});