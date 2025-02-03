

from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import(
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)
from flask_cors import CORS

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)

app.config['JWT_SECRET_KEY'] = 'your_secret-key'
jwt= JWTManager(app)

users = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'error': 'Username and Password is required.' })
    if username in users:
        return jsonify({'error': 'Username already exists, Please try with another username.'})
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    users[username] = hashed_password
    return jsonify({'message': 'User registered successfully'}),201

app.route('/login', methods=['POST'])
def login():
    data  = request.json()
    username = data.get('username')
    password = data.get('password')
    if username not in users or not bcrypt.check_password_hash(users[username],password):
        return jsonify({'error': 'Invalid credentials!'})
    access_token = create_access_token(identity = username)
    return jsonify({'access_token': access_token}), 200

app.route('/protected', methods = ['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({'message': f'Welcome {current_user}! This is a protected route. '}),200

if __name__ == '__main__':
    app.run(debug=True)