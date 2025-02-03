

from flask import Flask, jsonify,request,abort
from flask_cors import CORS


app = Flask(__name__)

books = [
    {"id": 1, "title": "The Catcher in the Rye", "author": "J.D.Salinger"},
    {"id": 2, "title": "To Kill a Mockingbird","author":"Harper Lee"}
]

def find_book(book_id):
    return next((book for book in books if book["id"]== book_id),None)

#Routes
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books)

@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = find_book(book_id)
    if book is None:
        abort(404,description="Book not found")
    return jsonify(book)

@app.route('/books',methods=['POST'])
def add_book():
    if not request.json or not all(key in request.json for key in ("title","author")):
        abort(400,description="invalid request. 'title' and 'author' are required.")

    new_id = max(book["id"] for book in books)+1 if books else 1
    new_book={
        "id": new_id,
        "title": request.json["title"],
        "author": request.json["author"]
    }
    books.append(new_book)
    return jsonify(new_book),201

@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    book = find_book(book_id)
    if book is None:
        abort(404, description= "Book not found!")
    if not request.json:
        abort(400,description="Invalid request.")
    book["title"] = request.json.get("title", book["title"])
    book["author"]= request.json.get("author",book["author"])
    return jsonify(book)

@app.route('/books/<int:book_id>', methods= ['DELETE'])
def delete_book(book_id):
    book= find_book(book_id)
    if book is None:
        abort(404,description="Book not found")

    books.remove(book)
    return jsonify({"message":"Book deleted"}), 200
print (books)
CORS(app)
if __name__=='__main__':
    app.run(debug=True)
