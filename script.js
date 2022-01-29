let dropDownButtons = document.getElementsByClassName("drop-down-btn");
for (let i = 0; i < dropDownButtons.length; i++) {
    const element = dropDownButtons[i];
    element.addEventListener("click", (e) => {
        element.classList.toggle("show");
    });
}
console.log(dropDownButtons);