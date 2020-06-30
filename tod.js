window.onload = init;


function init() {

    let toddos = []

    let getTodo = () => {
        let todoList = localStorage.getItem('toddos')

        if (todoList != null) {

            toddos = JSON.parse(todoList)
        }
    }
    getTodo()





    let input = document.querySelector('.input')
    let addTodo = document.querySelector('.addTodo')
    let clear = document.querySelector('.clear')
    let notes = document.querySelector('.noteList')
    let timed = document.querySelector('.time')


    localStorage.setItem('toddos', JSON.stringify(toddos))

    let eachTodo = function() {

        notes.innerHTML = ' ';

        toddos.forEach((todo) => {
            let listItem = document.createElement('li')
            listItem.className = 'todoItemed'
            listItem.innerHTML = `<div class='todo'><input type='checkbox' class='checkB'>  ${todo} </div>
        <button class = 'deleteItem btn'>Delete</button>`
            notes.appendChild(listItem)

            const deleteItems = document.querySelectorAll('.deleteItem')

            const checkboxes = document.querySelectorAll('.checkB')

            checkboxes.forEach((item) => {
                item.addEventListener('click', (e) => {
                    let c = e.target
                    if (c.checked === false) {
                        c.parentNode.classList.remove('checked');
                    } else if (c.checked === true) {
                        c.parentNode.classList.add('checked');
                        localStorage.setItem('toddos', JSON.stringify(toddos))

                    }
                    localStorage.setItem('toddos', JSON.stringify(toddos))
                })
            })


            deleteItems.forEach((item) => {

                item.addEventListener('click', (e) => {
                    let itemdel = e.target.parentNode
                    let itemcase = itemdel.parentNode
                    itemcase.removeChild(itemdel)
                    localStorage.setItem('toddos', JSON.stringify(toddos))

                })

            })



        })

    }


    eachTodo()




    addTodo.addEventListener('click', (e) => {

        e.preventDefault()

        todoItem = input.value

        toddos.push(todoItem)

        localStorage.setItem('toddos', JSON.stringify(toddos))

        eachTodo()


    })





    clear.addEventListener('click', () => {
        notes.innerHTML = ' ';

        toddos = []

        localStorage.removeItem('toddos')

    })




    let timeInt = () => {
        let date = new Date()
        let hours = date.getHours()
        let mins = date.getMinutes()
        let secs = date.getSeconds()

        if (mins < 10) {
            mins = mins + '0'
        }

        if (secs < 10) {
            secs = secs + '0'
        }

        let time = `${hours}:${mins}:${secs}`
        timed.innerHTML = time
    }
    var myVar = setInterval(function() { timeInt() }, 1000)

}