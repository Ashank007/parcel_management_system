from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Parcel

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///parcels.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/parcels', methods=['GET'])
def get_parcels():
    parcels = Parcel.query.all()
    return jsonify([{
        'id': p.id,
        'customer_name': p.customer_name,
        'address': p.address,
        'contact_number': p.contact_number,
        'size': p.size,
        'weight': p.weight
    } for p in parcels])

@app.route('/parcels', methods=['POST'])
def create_parcel():
    data = request.json
    parcel = Parcel(**data)
    db.session.add(parcel)
    db.session.commit()
    return jsonify({'message': 'Parcel created', 'id': parcel.id})

@app.route('/parcels/<int:id>', methods=['PUT'])
def update_parcel(id):
    data = request.json
    parcel = Parcel.query.get_or_404(id)
    for key, value in data.items():
        setattr(parcel, key, value)
    db.session.commit()
    return jsonify({'message': 'Parcel updated'})

@app.route('/parcels/<int:id>', methods=['DELETE'])
def delete_parcel(id):
    parcel = Parcel.query.get_or_404(id)
    db.session.delete(parcel)
    db.session.commit()
    return jsonify({'message': 'Parcel deleted'})

if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0")
