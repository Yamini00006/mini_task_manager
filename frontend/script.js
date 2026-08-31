async function createTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const response = await fetch("http://127.0.0.1:5000/api/tasks", {
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
}