// function getData(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("Data received");
//         },2000);
//     });
// }

// getData().then((data) =>{
//     console.log(data);

// }).catch((error)=>{
//     console.log("Error: ", error);
// });



function getData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("Data received");
        },2000);
    });
}

getData().then((data) =>{
    console.log(data);

}).catch((error)=>{
    console.log("Error: ", error);
});


setTimeout(()=>{
    console.log("Hello");
},2000);


setInterval(()=>{
    console.log("Data checking again and again");
},5000);
