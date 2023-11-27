const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
let mode = 'time'


setInterval(() => {
    output.textContent = format(mode)
})


function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
    }
}