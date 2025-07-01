from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Parcel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    contact_number = db.Column(db.String(20), nullable=False)
    size = db.Column(db.String(20), nullable=False)
    weight = db.Column(db.Float, nullable=False)

