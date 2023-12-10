function toggledarkmode() {
    let element = document.body
    element.classList.toggle("dark-mode")

    let buttons = document.getElementsByTagName('button')
    for (let i of buttons) {
        if (i.style.color === 'white') {
            i.style.color = 'black'
        } else {
            i.style.color = 'white'
        }
    }
}