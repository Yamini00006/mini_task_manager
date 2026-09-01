from flask import Flask, request
from task import Task

app = Flask(__name__)

tasks = []
next_id = 1


@app.route("/")
def home():
    return {"message": "Task Manager backend is running"}


@app.route("/api/tasks", methods=["POST"])
def create_task():
    global next_id

    data = request.get_json()

    title = data.get("title")
    description = data.get("description", "")

    if not title:
        return {"error": "Title is required"}, 400

    if len(title) > 100:
        return {"error": "Title must not exceed 100 characters"}, 400

    if len(description) > 500:
        return {"error": "Description must not exceed 500 characters"}, 400

    task = Task(
        id=next_id,
        title=title,
        description=description
    )

    tasks.append(task)
    next_id += 1

    return {
        "id": task.id,
        "title": task.title,
        "description": task.description,
        "completed": task.completed
    }, 201

@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    return [
        {
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "completed": task.completed
        }
        for task in tasks
    ], 200
if __name__ == "__main__":
    app.run(debug=True)