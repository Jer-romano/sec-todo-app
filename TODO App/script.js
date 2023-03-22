const list = document.querySelector("ul");
const form = document.querySelector("form");
const newToDo = document.querySelector("input[name='add-todo']");

let toDoArray = JSON.parse(localStorage.getItem("tdArray"));

if(toDoArray != null) {

    for(let i = 0; i < toDoArray.length; i++) {  //find any toDo items in localStorage
        let newLi = document.createElement("li");
        newLi.innerText = toDoArray[i];
        let xButton = document.createElement("button");
        xButton.innerText = "x";
        newLi.append(xButton);
        list.append(newLi);
    }
}
else {
    toDoArray = [];
}

form.addEventListener("submit", function(e) { //adds event listener for submitting a new task
    e.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = newToDo.value;
    let xButton = document.createElement("button");
    xButton.innerText = "x";
    newLi.append(xButton);
    list.append(newLi);

    //localStorage.setItem(list.childElementCount.toString(), JSON.stringify(newLi));
    toDoArray.push(newToDo.value);
    localStorage.setItem("tdArray", JSON.stringify(toDoArray));
});

list.addEventListener("click", function(e) { //adds listener for clicking an li or the x button
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
})