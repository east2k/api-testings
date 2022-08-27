
const table = document.querySelector("table tbody");
const tableData = document.getElementsByTagName("tr");
console.log(tableData);

const removeChildren = () => {
    const arr = [...tableData];
    const tableRows = arr.slice(1);
    console.log(tableRows);
    for (let i = 0; i < tableRows.length; i++) {
        tableData[1].remove();

    }
}

const id = document.getElementsByClassName("data-id");
const firstData = document.getElementsByClassName("data-one");
const secondData = document.getElementsByClassName("data-two");
const deleteButton = document.getElementsByClassName("delete-button");
const updateButton = document.getElementsByClassName("update-button");

const displayData = async () => {
    const res = await fetch('/api');
    const data = await res.json();
    for (let i = 0; i < data.data.length; i++) {
        const tableRow = document.createElement("tr");
        table.appendChild(tableRow);

        const tableDataID = document.createElement("td");
        tableDataID.classList.add("data-id");
        tableRow.appendChild(tableDataID);

        const tableDataOne = document.createElement("td");
        tableDataOne.classList.add("data-one");
        tableRow.appendChild(tableDataOne);

        const tableDataTwo = document.createElement("td");
        tableDataTwo.classList.add("data-two");
        tableRow.appendChild(tableDataTwo);

        const tableDataButtonOne = document.createElement("td");
        tableRow.appendChild(tableDataButtonOne);

        const tableDeleteButton = document.createElement("button");
        tableDeleteButton.classList.add("delete-button");
        tableDataButtonOne.appendChild(tableDeleteButton);

        const tableDataButtonTwo = document.createElement("td");
        tableRow.appendChild(tableDataButtonTwo);

        const tableUpdateButton = document.createElement("button");
        tableUpdateButton.classList.add("update-button");
        tableDataButtonTwo.appendChild(tableUpdateButton);

        deleteButton[i].addEventListener('click', () => {
            const rawId = parseInt(id[i].innerHTML);
            deleteDB(rawId);
        });

        updateButton[i].addEventListener('click', () => {
            const data = updateData(i);

            updateDB(data[0], data[1], data[2]);
        });

        tableDataID.innerHTML = data.data[i]['_id'];
        tableDataOne.innerHTML = data.data[i]['lat'];
        tableDataTwo.innerHTML = data.data[i]['long'];
    }


}

displayData();


const updateData = (i) => {
    const rawId = parseInt(id[i].innerHTML);

    const choice = confirm('Choose\nLatitude = Okay\nLongitude = Cancel');
    let dataChosen, updateInfo;
    if (choice) {
        dataChosen = 'lat';
        updateInfo = parseInt(prompt("Enter new data:"));
    } else {
        dataChosen = 'long';
        updateInfo = parseInt(prompt("Enter new data:"));
    }

    return [rawId, dataChosen, updateInfo];
}