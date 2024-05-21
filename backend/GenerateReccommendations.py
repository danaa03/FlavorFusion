import random
import string
from surprise.dump import load
import os

# Get the current directory of the script
current_directory = os.path.dirname(os.path.abspath(__file__))

# Define the model filename
model_filename = "trained_model.pkl"

# Construct the model path using the current directory
model_path = os.path.join(current_directory, model_filename)

# Check if the model file exists
if not os.path.exists(model_path):
    print(
        f"Model file '{model_filename}' not found in the directory: {current_directory}"
    )
    exit()

# Load the trained model
_, model = load(model_path)


# Function to generate random user ID
def generate_user_id():
    return "".join(random.choices(string.ascii_lowercase + string.digits, k=24))


# Sample recipe names
sample_recipe_names = [
    "Spaghetti Carbonara",
    "Chicken Alfredo",
    "Vegetable Stir-Fry",
    "Grilled Salmon",
    "Caesar Salad",
    "Beef Tacos",
    "Pumpkin Soup",
    "Shrimp Scampi",
    "Chocolate Cake",
    "Blueberry Muffins",
]


# Function to generate random recipe name
def generate_recipe_name():
    return random.choice(sample_recipe_names)


# Generate random user email (you can replace this with actual user email)
user_email = generate_user_id() + "@example.com"

# Generate random recipe IDs for the user (you can replace this with actual recipe IDs)
user_recipe_names = [generate_recipe_name() for _ in range(10)]  # Assuming 10 recipes

# Get the predictions for the user's recipes
predictions = [
    model.predict(user_email, recipe_name) for recipe_name in user_recipe_names
]

# Sort predictions by estimated rating
predictions.sort(key=lambda x: x.est, reverse=True)

# Get top 10 recommendations
top_recommendations = [pred.iid for pred in predictions[:10]]

# Print recommendations as JSON
import json

print(json.dumps(top_recommendations))
