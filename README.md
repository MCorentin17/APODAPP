# APODAPP

APODAPP is a React Native application built with Expo that allows users to view daily astronomy pictures and their explanations from NASA's Astronomy Picture of the Day (APOD) API.

## Installation

To install and run APODAPP, follow these steps:

1. Clone this repository
2. Run `npm install` to install the necessary dependencies
3. Create a `.env` file based on the `.env.example` file and fill in the required API key information
4. Run `npx expo start` to start the application in development mode
5. Open the application on an emulator or on a physical device by scanning the QR code displayed in the console or by using the Expo Go application.

## Dependencies

- expo: ~48.0.11
- react: 18.2.0
- react-native: 0.71.7
- react-native-calendars: ^1.1295.0
- react-native-paper: ^5.7.0
- react-native-safe-area-context: 4.5.0
- react-native-vector-icons: ^9.2.0

## Dev Dependencies

- @babel/core: ^7.20.0
- react-native-dotenv: ^3.4.8

## Usage

To use APODAPP, navigate to the home screen and select a date on the calendar. The corresponding picture and explanation will be displayed. The user can also click on the picture to expand it and read the full explanation. There is also a search bar to allow the user to search for a specific date.

## Author

This application was developed by Corentin MONVILLERS.

## Roadmap

- Future improvements for APODAPP include adding a default state for the search button to return to the default calendar;
- Improving the overall design.
- Add unit and integration testing to ensure code quality and facilitate long-term maintenance.
