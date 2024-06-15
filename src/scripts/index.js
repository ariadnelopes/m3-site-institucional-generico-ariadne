const modalButtons = document.querySelectorAll(".modal--button")
const closeModal = document.querySelectorAll(".closemodal")
const dialog = document.querySelector(".modal__container")
const input = document.querySelector(".modal__input")

modalButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        dialog.showModal()
        clearInput()
    })
})


function clearInput(){
    closeModal.forEach(button => {
        button.addEventListener("click", input.value = "")
    })
}