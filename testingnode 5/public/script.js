// name getter
const userRun = () => {
    const fName = "John";
    const lName = "Johnson";

    const data = { fName, lName }
    postUser(data);
}

const postUser = async (data) => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }

    const res = await fetch('/api', options);
    const dataRes = await res.json();
    displayData();
    console.log(dataRes);
}

const getUser = async () =>{
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = await fetch('/api', options);
    const dataRes = await res.json();
    console.log(dataRes);
}

document.querySelector(".button.post").addEventListener('click', userRun);
document.querySelector(".button.get").addEventListener('click', getUser);