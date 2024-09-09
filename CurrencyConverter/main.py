import requests  # Import the requests library to make HTTP requests

# Define your API key for the exchange rate API
apikey = '1fbec30d0daf86fa5c6febb7'

# Set the base currency (in this case, Nepalese Rupee - NPR)
basecurrency = 'NPR'

# Get the target currency from the user input and convert it to uppercase
# This allows the user to input the currency code in any case (lower, upper, mixed) and removes any accidental whitespace
targcurrency = input("Enter the currency code you want to convert to (EUR(Euro)/USD(US dollar)/GBP(Pound)/INR(Indian Rupee)/CNY(Chinese Yuan)/JPY(Japanese Yen)...): ").upper().strip()

# Get the amount to convert from the user input
amount = input("Enter the amount you want converted: ")

# Construct the URL for the API request using f-string formatting
# The URL includes the API key, base currency, target currency, and amount
url = f"https://v6.exchangerate-api.com/v6/{apikey}/pair/{basecurrency}/{targcurrency}/{amount}"

# Send a GET request to the constructed URL and store the response in the 'response' variable
response = requests.get(url)

# Parse the response content as JSON and store it in the 'data' variable
data = response.json()

# Check if the response status code is 200, which means the request was successful
if response.status_code == 200:
    # If successful, print the conversion result from the JSON data
    print(data.get('conversion_result'))
else:
    # If there was an error, print the error message or a default error message
    print("Error: ", data.get('error-type', 'Unknown error occurred'))
