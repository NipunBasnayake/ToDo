let shwoTBody = document.getElementById("shwoTBody");
let shwoTBodyDone = document.getElementById("shwoTBodyDone");
let taskArray = [];
let taskDoneArray = [];

function showOnTable() {
    let content = '';
    taskArray.forEach((element, index) => {
        content += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td id="txtTitle${index}">${element.txtTitle}</td>
                        <td id="txtTask${index}">${element.txtTask}</td>
                        <td><input type="checkbox" id="chbx${index}" onchange="checkBox(${index})"></td>
                    </tr>
                `;
    });
    shwoTBody.innerHTML = content;
}

function showTableDone() {
    let content = '';
    taskDoneArray.forEach((element, index) => {
        content += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td id="txtDoneTitle${index}">${element.toDoTitle}</td>
                        <td id="txtDoneTask${index}">${element.toDoTask}</td>
                        <td><input type="checkbox" id="chbx${index}" onchange="doneCheckBox(${index})" checked ></td>
                    </tr>
                `;
    });
    shwoTBodyDone.innerHTML = content;
    document.getElementById("chbx" + index).checked = true;
}

function checkBox(index) {
    if (document.getElementById("chbx" + index).checked) {
        if (window.confirm("Do you want add this to done list.?")) {
            console.log("checked");
            let toDoTitle = document.getElementById("txtTitle" + index).innerText;
            let toDoTask = document.getElementById("txtTask" + index).innerText;
            taskDoneArray.push({ toDoTitle, toDoTask });
            taskArray.splice(index, 1);
            showOnTable();
            showTableDone();
        } else {
            document.getElementById("chbx" + index).checked = false;
        }
    } else {
        console.log("un Checked");
    }
}

function doneCheckBox(index) {
    if (!(document.getElementById("chbx" + index).checked)) {
        if (window.confirm("Do you want add this to ToDo list.?")) {
            console.log("unchecked");
            let txtTitle = document.getElementById("txtDoneTitle" + index).innerText;
            let txtTask = document.getElementById("txtDoneTask" + index).innerText;
            taskArray.push({ txtTitle, txtTask });
            taskDoneArray.splice(index, 1);
            showOnTable();
            showTableDone();
        }  
    }
}


function addTask() {
    let txtTitle = document.getElementById("txtTitle").value;
    let txtTask = document.getElementById("txtTask").value;

    if (txtTitle && txtTask || txtTitle) {
        taskArray.push({ txtTitle, txtTask });
        showOnTable();

        document.getElementById("txtTitle").value = '';
        document.getElementById("txtTask").value = '';
    } else {
        alert("Please enter title and task");
    }
}

