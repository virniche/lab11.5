/*fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));*/

fetchData();

async function fetchData() {
    try{
        const response = await fetch("https://publicapis.lol/apis/randomdog")

        if(!response.ok){
            throw new Error("Could not fetch image");
        }

        const data = await response.json();
        console.log(data);
    }

    catch(error){
        console.error(error);
    }
}

    /*[![RandomDog on Public APIs](https://publicapis.lol/badge/randomdog.svg)](https://publicapis.lol/apis/randomdog)*/