function getData() {

   return new Promise((resolve, reject) => {

    if(2 > 3) {



            setTimeout(() => {

                resolve("Data received");

            }, 2000);

        } else {

            reject('not working')

        }
});

}


fetch("https://jsonplaceholder.typicode.com/todos")

    .then(res => res.json()) // res -> string -> json)

    .then(data => data.filter(d => d.id % 2 === 0))

    .then(data => data.map(d => (d.title = "Aaryan " + d.title)))

    .then(data => console.log(data))

    .catch(error => console.error("Error fetching data:", error));