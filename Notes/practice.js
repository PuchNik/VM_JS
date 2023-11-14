// const inputElement = document.getElementById('title')
// const submitBtn = document.getElementById('create')
// const listElement = document.getElementById('list')
//
// const notes = ['task 1', 'task 2', 'task 3']
//
//
// function render () {
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getTemplateNotes(note))
//     }
// }
//
// render()
//
//
// submitBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//
//     listElement.insertAdjacentHTML('beforeend', getTemplateNotes(inputElement.value))
//     inputElement.value = ''
// }
//
//
// function getTemplateNotes (title) {
//     return `<li
//           class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>${title}</span>
//           <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//           </span>
//         </li>`
// }