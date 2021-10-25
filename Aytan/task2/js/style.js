let boxElements = document.querySelectorAll(".box");

boxElements.forEach(element => {
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("dragend", dragEnd);
    element.addEventListener("dragenter", dragEnter);
    element.addEventListener("dragover", dragOver);
    element.addEventListener("dragleave", dragLeave);
    element.addEventListener("drop", drop);
});

// Drag and Drop Functions

function dragStart(e) {
    e.target.classList.add("drag-start");
    e.dataTransfer.setData("text", e.target.id);
}

function dragEnd(e) {
    e.target.classList.remove("drag-start");
}

function dragEnter(e) {
    if (!e.target.classList.contains("drag-start")) {
        e.target.classList.add("drag-enter");
    }
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.target.classList.remove("drag-enter");
}

function drop(e) {
    e.preventDefault();
    e.target.classList.remove("drag-enter");
    let draggableElementId = e.dataTransfer.getData("text");;
    let droppableElementId = e.target.id;
    if (draggableElementId !== droppableElementId) {
        let draggableElement = document.getElementById(draggableElementId);
        let droppableElementBgColor = e.target.style.backgroundColor;
        let droppableElementTextContent = e.target.querySelector("span").textContent;

        e.target.style.backgroundColor = draggableElement.style.backgroundColor;
        e.target.querySelector("span").textContent = draggableElement.querySelector("span").textContent;
        e.target.id = draggableElementId;
        draggableElement.style.backgroundColor = droppableElementBgColor;
        draggableElement.querySelector("span").textContent = droppableElementTextContent;
        draggableElement.id = droppableElementId;
    }
}