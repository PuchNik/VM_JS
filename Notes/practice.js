// const inputElement = document.getElementById('title')
// const createBtn = document.getElementById('create')
// const listElement = document.getElementById('list')
//
// const notes = [
//     {
//         title: 'task 1',
//         isDone: true,
//     },
//     {
//         title: 'task 2',
//         isDone: false,
//     },
// ]
//
//
// function render() {
//     listElement.innerHTML = ''
//     for (let i = 0; i < notes.length; i++) {
//         listElement.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i], i))
//     }
// }
// render()
//
//
// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//
//     const newNote = {
//         title: inputElement.value,
//         isDone: false,
//     }
//
//     notes.push(newNote)
//     listElement.insertAdjacentHTML('beforeend', getNotesTemplate(newNote))
//     inputElement.value = ''
// }
//
//
// listElement.onclick = function (event) {
//     if (event.target.dataset.index) {
//         const index = parseInt(event.target.dataset.index)
//         const type = event.target.dataset.type
//
//         if (type === 'toggle') {
//             notes[index].isDone = !notes[index].isDone
//         } else if (type === 'remove') {
//             notes.splice(index, 1)
//         }
//         render()
//     }
// }
//
//
// function getNotesTemplate(note, index) {
//     return `
//             <li
//           class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span
//           class = '${note.isDone ? 'text-decoration-line-through' : ''}'
//           >${note.title}
//           </span>
//
//           <span>
//             <span
//             class="btn btn-small btn-${note.isDone ? 'warning' : 'success'}"
//             data-index = '${index}'
//             data-type = 'toggle'
//             >&check;
//             </span>
//
//             <span class="btn btn-small btn-danger"
//             data-index = '${index}'
//             data-type = 'remove'
//             >&times;
//             </span>
//
//           </span>
//         </li>
//     `
// }