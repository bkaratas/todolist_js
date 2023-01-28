let addTodoButton = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");
let inputText = document.querySelector("#inputText");
let clearToDoButton = document.querySelector("#clearToDo"); 

addTodoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling")
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = ""; /*add e basıldıktan sonra text i temizler */

    paragraph.addEventListener("click" , function(){
        paragraph.style.textDecoration = "line-through"; /* üstüne çizgi çeker*/
    })

    paragraph.addEventListener("dblclick" , function(){
        toDoContainer.removeChild(paragraph);
    })

    clearToDoButton.addEventListener("click" , function(){
        paragraph.remove();
    })
})
