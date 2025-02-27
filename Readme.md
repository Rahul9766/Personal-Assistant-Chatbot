# Personal Assistant Chatbot

This project is a Personal Assistant Chatbot that leverages a variety of interactive features such as text and voice input/output. It is designed to assist users with tasks, answer questions, provide entertainment, and offer helpful suggestions. Built using JavaScript, HTML, and CSS, it provides both text-based and voice-based interactions for enhanced user experience.

## Features
 
- **Text-based Chatbot**: 
  - Users can interact with the chatbot by typing text messages. The bot can respond to a wide range of questions and commands.
  
- **Voice-based Chatbot**:
  - The chatbot supports voice input and output. Users can ask questions or give commands using their voice, and the bot will respond via speech synthesis.
  
- **Dynamic Responses**:
  - The chatbot provides dynamic, context-sensitive answers based on the user’s input. These include:
    - **Greetings**: Responds with various greetings and pleasantries.
    - **Time and Date**: Provides the current time and day.
    - **Reminders**: Asks for reminder details and offers to set reminders.
    - **Weather**: Suggests checking a weather app, as live weather data is not available.
    - **Jokes**: Shares funny jokes.
    - **Motivational Quotes**: Gives motivational quotes to uplift users.
    - **Trivia and Fun Facts**: Offers interesting trivia and fun facts.
    - **Language Assistance**: Translates common phrases into languages like Spanish, French, and others.
    - **Math Help**: Solves basic math problems.
    - **Health and Food Tips**: Provides basic health and food advice.
    - **Movie Recommendations**: Suggests popular movies to watch.
    - **History Facts**: Shares historical facts.
    - **Advice**: Offers practical advice on various topics.
  
- **Real-time Voice Recognition**:
  - Utilizes the Web Speech API's `SpeechRecognition` feature to capture voice input, convert it to text, and trigger relevant responses from the chatbot.
  
- **Speech Synthesis (Voice Output)**:
  - Implements the Web Speech API’s `SpeechSynthesis` feature to read chatbot responses aloud, providing an interactive, voice-driven experience.
  
- **Interactive UI**:
  - The chatbot interface is user-friendly and visually engaging. It includes a chat window, a text input area, and a microphone button for voice input.
  
- **Customizable Responses**:
  - The chatbot responds to a variety of user inputs, including greetings, requests for jokes, motivational quotes, and much more. The responses are randomized to keep interactions fresh.

## Technologies Used

- **HTML**: Provides the structure for the chatbot interface.
- **CSS**: Used for styling the chatbot’s layout and components.
- **JavaScript**: Powers the chatbot’s logic, handles user input, and integrates both text-based and voice interactions.
- **Web Speech API**:
  - `SpeechRecognition`: For voice input functionality.
  - `SpeechSynthesis`: For voice output functionality.

## How It Works

1. **User Input**:
   - Users can either type their queries into the text input field or speak into the microphone for voice input.
   
2. **Chatbot Processing**:
   - Once the user submits input (via text or voice), the chatbot processes the message and selects an appropriate response from a predefined set.
   
3. **Voice Output**:
   - The response can either be displayed as text or read aloud using the speech synthesis feature.
   
4. **Response Display**:
   - The chatbot’s response is displayed on the screen in a chat window. Text and voice-based responses can be triggered by keywords or phrases, which are predefined in the code.


## Demo

You can try the chatbot live on [Personal Assistant Chatbot Demo](https://rahul9766.github.io/Personal-Assistant-Chatbot/).
