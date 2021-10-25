let dropArea = document.querySelector(".drag-area");
let file;
dragText = dropArea.querySelector("h1");
button = dropArea.querySelector("button");
input = dropArea.querySelector("input");



button.onclick = () => {
    input.click();
}


input.addEventListener("change", function() {
    file = this.files[0];
    showFile();
    dropArea.classList.add("active");
})

//If user Drag File Over DragArea
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    //console.log("File is over DragArea");
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

//If user leave dragged file from DragArea
dropArea.addEventListener("dragleave", () => {
    //console.log("File is outside from DragArea");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop file on DragArea
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    // console.log("File is dropped on DragArea");
    file = e.dataTransfer.files[0];
    showFile();

})

let showFile = () => {
    let fileType = file.type;
    let Extensions = ["image/jpg", "image/png", "image/jpeg"];
    if (Extensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropArea.innerHTML = imgTag;

        }
        fileReader.readAsDataURL(file);
    } else {
        alert("This is not an image file!");
        dropArea.classList.remove("active");

    }
}