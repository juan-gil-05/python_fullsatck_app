from flask import request, jsonify
from config import app, db
from models import Task


@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = Task.query.all()
    json_tasks = list(map(lambda x: x.to_json(), tasks))
    return jsonify({"tasks": json_tasks})


@app.route("/create_task", methods=["POST"])
def create_task():
    title = request.json.get("title")
    description = request.json.get("description")

    if not title or not description:
        return jsonify({"message": "Yous must include a title and a description"}), 400

    new_task = Task(title=title, description=description)
    try:
        db.session.add(new_task)
        db.session.commit()
    except Exception as e:
        return jsonify({"errorMessage": str(e)}), 400
    
    return jsonify({"message": "Task created!"}), 201


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
