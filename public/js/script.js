const closeMessage = document.querySelector("#close")
const message = document.querySelector("#msg")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})

setTimeout(() => {
    message.style.display = "none"
}, 5000)