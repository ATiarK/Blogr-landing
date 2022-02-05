let dropDownButtons = document.getElementsByClassName("dropdown");
for (let i = 0; i < dropDownButtons.length; i++) {
    const element = dropDownButtons[i];
    element.addEventListener("click", (e) => {
        element.classList.toggle("show");
    });
}
console.log(dropDownButtons);

function dropBtn() {
    document.getElementsByClassName("dropdown").classList.toggle("show");
}
window.onclick = function(e) {
    if (!e.target.matches("")) {}
};