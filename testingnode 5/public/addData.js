const table = document.querySelector("table tbody");
const tableData = document.getElementsByTagName("tr");

const removeChildren = () => {
    const arr = [...tableData];
    const tableRows = arr.slice(1);
    console.log(tableRows);
    for (let i = 0; i < tableRows.length; i++) {
        tableData[1].remove();

    }
}

const id = document.getElementsByClassName("data-id");
const firstData = document.getElementsByClassName("data-fName");
const secondData = document.getElementsByClassName("data-lName");
const updateButton = document.querySelectorAll(".table-button.update");
const deleteButton = document.querySelectorAll(".table-button.delete");

const displayData = async () => {
    removeChildren();
    const res = await fetch('/api');
    const data = await res.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const tableRow = document.createElement("tr");
        table.appendChild(tableRow);

        const tableDataID = document.createElement("td");
        tableDataID.classList.add("data-id");
        tableRow.appendChild(tableDataID);

        const tableDataOne = document.createElement("td");
        tableDataOne.classList.add("data-fName");
        tableRow.appendChild(tableDataOne);

        const tableDataTwo = document.createElement("td");
        tableDataTwo.classList.add("data-lName");
        tableRow.appendChild(tableDataTwo);

        const tableDataButtonOne = document.createElement("td");
        tableRow.appendChild(tableDataButtonOne);

        const tableDeleteButton = document.createElement("button");
        tableDeleteButton.classList.add("table-button");
        tableDeleteButton.classList.add("delete");
        tableDataButtonOne.appendChild(tableDeleteButton);

        const tableDataButtonTwo = document.createElement("td");
        tableRow.appendChild(tableDataButtonTwo);

        const tableUpdateButton = document.createElement("button");
        tableUpdateButton.classList.add("table-button");
        tableUpdateButton.classList.add("update");
        tableDataButtonTwo.appendChild(tableUpdateButton);

        // updateButton[i].addEventListener('click', () => {
        //     console.log('update');
        // });

        // deleteButton[i].addEventListener('click', () => {
        //     console.log('delete');
        // });

        tableDataID.innerHTML = data[i]['_id'];
        tableDataOne.innerHTML = data[i]['fName'];
        tableDataTwo.innerHTML = data[i]['lName'];
    }


}

displayData();