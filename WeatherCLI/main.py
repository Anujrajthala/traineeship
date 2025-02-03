import requests


API_Key = '365244e6b3b9d6005682def19c2f2bad'

def get_coordinates(location):
    response = requests.get(f'http://api.openweathermap.org/geo/1.0/direct?q={location},np&limit=1&appid=365244e6b3b9d6005682def19c2f2bad')
    response.raise_for_status()
    location_data= response.json()
    latitude = location_data[0]['lat']
    longitude = location_data[0]['lon']
    return latitude, longitude

def get_weather(lat,lon):
    try:
        param = { 'appid': API_Key, 'units': 'metric'}
        response = requests.get(f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}',params=param)
        response.raise_for_status()
        weather_data = response.json()
        location = weather_data['name']
        temperature = weather_data['main']['temp']
        weather_desc = weather_data['weather'][0]['description']
        print(f"Weather in {location}:")
        print(f"Temperature: {temperature}°C")
        print(f"Condition: {weather_desc.capitalize()}")
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except requests.exceptions.RequestException as req_err:
        print(f"Request error occurred: {req_err}")
    except KeyError:
        print("Invalid data received. Check city name or API response.")

def main():
    while True:
        print("Weather CLI")
        location = input("Enter the name of city that you want weather data of or type 'quit' to exit: ").strip()
        if location == 'quit':
            print('Quitting the Weather Cli')
            break
        lat, lon = get_coordinates(location)
        get_weather(lat, lon)



if __name__=='__main__':
    main()