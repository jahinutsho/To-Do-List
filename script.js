const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !");
    }
    else{
        let Li = document.createElement("li");
        Li.innerHTML = inputBox.value;
        listContainer.appendChild(Li);
        let Span = document.createElement("span");
        Span.innerHTML ="\u00d7";
        Li.appendChild(Span);
    }
    inputBox.value ="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();