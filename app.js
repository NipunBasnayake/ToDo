let divShow = document.getElementById("divShow");
let taskArray = [];

function sowOnDiv() {
    let content = '';
    taskArray.forEach(element => {
        content += `
            <div class="card">
                <div class="card-body">
                    <h3>${element.txtTitle}</h3>
                    <p>${element.txtTask}</p>
                </div>
            </div>
        `;
    });
    divShow.innerHTML = content;
}

function addTask() {
    let txtTitle = document.getElementById("txtTitle").value;
    let txtTask = document.getElementById("txtTask").value;

    taskArray.push({ txtTitle, txtTask });
    sowOnDiv();

    document.getElementById("txtTitle").value = '';
    document.getElementById("txtTask").value = '';
}
