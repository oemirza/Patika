let taskList = []
const form = document.querySelector("form")
let localStorageControl = true
const localStorageTaskLists = JSON.parse(localStorage.getItem("TaskList"))
const task = document.querySelector("#task")
const order = document.querySelector("#order")
const submitBtn = document.querySelector("#submitBtn")
const saveBtn = document.querySelector("#saveBtn")
const list = document.querySelector("#list")
const message = document.querySelector("#message")
const date = new Date()

const time = `${date.getUTCDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + 

date.getHours() + ":" + date.getHours() + ":" + date.getSeconds()}`

const showMessage = (msg, statu) => {
    message.innerHTML = `
        <div class="alert alert-${statu}" role="alert">
            ${msg}
        </div>
    `
    setTimeout(() => {
        message.innerHTML = ""
    }, 2000);
}

    
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(task.value === "" || task.order === "") {
        showMessage("Lütfen değerleri eksiksiz giriniz", "danger")
        return
    }
    taskList.push({
        task:task.value, order:order.value, time
    })
    showMessage("Görev başarı ile eklendi", "success")
    showTaskList(taskList)
})



const showTaskList = (taskList) => {
    list.innerHTML = ""
    taskList.forEach(item => {
        list.innerHTML += `
        <li id="item-${item.order}" class="d-flex align-items-center list-group-item unmarked">
            <input onclick="handleClick(${item.order})" class="form-check-input mb-3 p-1 me-4" type="checkbox">
            <h5 class="me-4">${item.order}</h5>
            <h5>${item.task}</h5>
            <p class="mt-3 ms-auto">${item.time}</p>
            <button style="text-decoration: none;" onclick="handleDelete(${item.order})" class="ms-4 btn btn-danger">Delete</button>
        </li>
    `
    })
}

const  handleClick = (order) => {
    document.querySelector(`#item-${order}`).classList.forEach((className) => {
        if(className === "unmarked") {
            document.querySelector(`#item-${order}`).classList.remove("unmarked")
            document.querySelector(`#item-${order}`).classList.add("marked")
            return
        } else if(className === "marked") {
            document.querySelector(`#item-${order}`).classList.remove("marked")
            document.querySelector(`#item-${order}`).classList.add("unmarked")
            return
        }
    })
}

const handleDelete = (order) => {
    let newTaskList = taskList.filter((item) => {
        if(item.order != order) {
            return item
        }
    })
    taskList = newTaskList
    showTaskList(taskList)
}


saveBtn.addEventListener("click", () => {
    save()
    showMessage("Görevler Lokal Depoya başarı ile kaydedildi", "primary")
})

const save = () => {
    localStorage.setItem("TaskList", JSON.stringify(taskList))
}

if(localStorageControl && localStorageTaskLists !== null) {
    showMessage("Eski verileriniz başarı ile yüklendi", "success")
    taskList = localStorageTaskLists
    localStorageControl = false
    showTaskList(taskList)
}





