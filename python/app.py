from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat import get_response
from flask import jsonify

app = Flask(__name__)
CORS(app)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("message")
    print("Received message:", text)
    if text is not None:
        response = get_response(text)
        print("what I should be getting:", get_response(text))
        print("response:", response)
        if response is not None:
            message = {"answer": response}
        else:
            message = {"answer": "I'm sorry, but I couldn't understand your message."}
    else:
        message = {"answer": "Invalid input. Please provide a valid message."}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True, port=8080)
