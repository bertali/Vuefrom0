import { todoList } from './data.js'



console.log (todoList)



//Declare
function renderList (list){
    for (let i = 0; i < list.leght; i++) {
        console.log(list[i].title)
    }
} 

//Declare dedicatedHours

todoList.forEach(item => {
    item.dedicatedHours++
    console.log(item)
})

//execute
renderList (todoList)

//filter
let filteredList = todoList.filter (item => {
    return item.dedicatedHours > 2
})

let numberList = [3,2,4,5]

console.log (filteredList)

//map coge todos los elementos de una lista y les aplica algo
let mapList = todoList.map(item=> {return item.dedicatedHours + 2})

console.log(mapList)