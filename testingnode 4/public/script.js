
const run = () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const data = { lat, long };
            post(data)
        });
    } else {
        console.log("none");
    }
}

const post = async (data) => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetch('/api', options);
    const resData = await res.json();
    console.log(resData);
    removeChildren();
    displayData();

}

const get = async () => {
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const res = await fetch('/api', options);
    const resData = await res.json();
    console.log(resData);
}

const deleteDB = async (id) => {
    const options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    }
    const res = await fetch('/api', options);
    const resData = await res.json();
    console.log(resData);
    removeChildren();
    displayData();
}

const updateDB = async (id, data, updateInfo) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, data, updateInfo })
    }
    const res = await fetch('/api', options);
    const resData = await res.json();
    console.log(resData);
    removeChildren();
    displayData();
}



document.getElementById("add").addEventListener('click', run);
document.getElementById("get").addEventListener('click', get);