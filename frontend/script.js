const API_URL = "http://127.0.0.1:5000";


async function createTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const response = await fetch(`${API_URL}/api/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    });

    const data = await response.json();

    console.log(data);

    loadTasks();
}


async function loadTasks() {
    const response = await fetch(`${API_URL}/api/tasks`);

    const tasks = await response.json();

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const listItem = document.createElement("li");

        listItem.textContent =
            task.title + " - " + task.description;

        taskList.appendChild(listItem);
    });
}


window.onload = loadTasks;