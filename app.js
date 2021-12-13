const  inp= document.getElementById('inp')
const btn= document.getElementById('addTodo')
const list= document.getElementById('list')

btn.onclick= function(e) {

    const div= document.createElement('div')
    list.append(div)

    //Adding Todo Points
    const todoText = inp.value
    const li= document.createElement('li')
    li.innerText= todoText
    div.append(li)

    //Adding a delete button
    const dbtn= document.createElement('button')
    dbtn.innerText= 'Delete'
    div.append(dbtn)

    //Adding an edit button
    const ebtn = document.createElement('button')
    ebtn.innerText= 'Edit'
    div.append(ebtn)

    //Deleting any todo task
    dbtn.onclick= function() {
        dbtn.parentElement.remove()
        
    }

    //Editing any todo task
    ebtn.onclick= function() {
        ebtn.previousElementSibling.previousElementSibling.contentEditable = 'true'
           
    }

    inp.value=""

}