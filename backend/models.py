from config import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=True, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    # status = db.Column(db.Boolean, nullable=False, default=0) To know if the task is done - i'll add this fonctionnality later
    
    def to_json(self):
        return {
            "id" : self.id,
            "title" : self.title,
            "description" : self.description,
        }