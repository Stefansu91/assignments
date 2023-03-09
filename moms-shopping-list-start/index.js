

const form = document["addItem"]

form.addEventListener("submit", function(event){
<<<<<<< HEAD
    event.preventDefault()                                     // prevents refresh
=======
    event.preventDefault()
>>>>>>> origin/main

    const title = form.title.value
    form.title.value = ""
    const li = document.createElement('li')
  
    document.getElementById("list").append(li)

    const div = document.createElement("div")
    div.textContent = title
    li.append(div)

    const editButton = document.createElement("button") 
    editButton.textContent = "edit"
    editButton.style.margin = "20px"
    li.append(editButton)

    const xButton = document.createElement("button") 
    xButton.textContent = "X"
    xButton.addEventListener("click", function(){
        div.remove()
        editButton.remove()
        xButton.remove()
    })
    li.append(xButton)
})