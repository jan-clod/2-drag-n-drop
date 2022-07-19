const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover',dragover)   //куда можем поместить
    placeholder.addEventListener('dragenter',dragenter)  //когда заходим на територию
    placeholder.addEventListener('dragleave',dragleave)  //перетащили но вышли
    placeholder.addEventListener('drop',dragdrop)       //когда отпустили
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    console.log('drag start',event.target)
}

function dragend(event) {
    event.target.classList.remove('hold','hide')
    console.log('drag end',event.target)
}


function dragover(event) {
    event.preventDefault()
    console.log('dragover')
}
function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('dragenter')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('dragleave')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    console.log('dragdrop')
}