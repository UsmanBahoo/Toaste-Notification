const Button = document.getElementById('button')
const toast = document.getElementById('toasts')
const messages = [
    'Ayesha',
    'Usman',
    'Usman',
    'Ayesha',
]
Button.addEventListener('click', () => createNotification())
function createNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = getRandomMessage()
    toasts.appendChild(notif)
}
function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}