
document.addEventListener("DOMContentLoaded", function () {
    // Chatbot variables and responses
    const chatMessages = [];
    const intro = ["Hello! I'm your personal assistant. How can I help you today?"];
    const greetings = [
        "I'm doing well, thank you. How can I assist you today?",
        "I'm great! What do you need help with today?",
        "Hello, how can I help you?",
    ];
    const reminders = [
        "Sure, what would you like me to remind you about and when?",
        "I can set a reminder for you. Please provide the details.",
        "Got it! Let me know the reminder details.",
    ];
    const weather = [
        "Currently, I don't have access to live weather data, but I can help you find it online.",
        "Please check your preferred weather app for accurate information.",
        "I don't have live data, but you can check the weather on your phone!",
    ];
    const assistance = [
        "I'm here to assist! Let me know what you need.",
        "How can I make your day easier?",
        "What can I do for you today?",
    ];
    const thanks = [
        "You're welcome! Let me know if there's anything else.",
        "Happy to help!",
        "Anytime!",
    ];
    const closing = ["Goodbye! Have a wonderful day!", "Take care! See you soon!"];
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts.",
        "Why did the math book look sad? Because it had too many problems.",
        "What do you call fake spaghetti? An impasta!",
    ];
    const motivation = [
        "Keep going! You're doing great!",
        "Believe in yourself, you're stronger than you think!",
        "Don't stop now, success is closer than you think!",
    ];
    const quotes = [
        "“The only way to do great work is to love what you do.” – Steve Jobs",
        "“Success is not the key to happiness. Happiness is the key to success.” – Albert Schweitzer",
        "“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau",
    ];
    const randomFacts = [
        "Did you know? A day on Venus is longer than a year on Venus.",
        "Here's a fact: Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old.",
        "Did you know? Octopuses have three hearts and blue blood.",
    ];
    const languages = [
        "I can speak multiple languages! Try asking me to say something in Spanish, French, or German.",
        "Bonjour! Ça va? (Hello! How are you in French)",
        "Hola! ¿Cómo estás? (Hello! How are you in Spanish)",
    ];
    const mathHelp = [
        "I can help with simple math! Ask me things like 'What is 25 plus 30?'",
        "Need math help? Try me! 'What is 12 times 9?'",
        "I can assist with basic math questions. Ask away!",
    ];
    const advice = [
        "It's always a good idea to take a break when you're feeling overwhelmed.",
        "If you're ever unsure, take a deep breath and think things through.",
        "Sometimes, stepping outside for fresh air can clear your mind and help you refocus.",
    ];
    const funFacts = [
        "Did you know? A cloud can weigh more than a million pounds.",
        "Here’s a fun fact: Cows have best friends and get stressed when they’re separated.",
        "Did you know? Bananas are berries, but strawberries aren't!",
    ];
    const food = [
        "What is your favorite food? I can recommend some recipes for you.",
        "I'm a fan of pizza! What about you?",
        "I can give you recipe suggestions based on what you like to eat. Just ask!",
    ];
    const healthTips = [
        "Remember to drink plenty of water to stay hydrated!",
        "Don't forget to get enough sleep; it’s essential for good health.",
        "Exercise regularly, even a short walk can boost your health!",
    ];
    const trivia = [
        "Did you know? The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the metal.",
        "Here's a fun trivia: The human nose can distinguish at least 1 trillion different scents.",
        "Trivia: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs.",
    ];
    const dailyNews = [
        "Check out the latest news on your favorite news website.",
        "For real-time updates, you can visit major news websites.",
        "The news is always changing. Stay informed with a quick online search.",
    ];
    const movieRecommendations = [
        "If you're looking for a good movie, try 'Inception' or 'The Dark Knight'.",
        "How about watching 'The Shawshank Redemption' or 'Pulp Fiction'?",
        "You might enjoy 'The Matrix' or 'Fight Club'. They're classic films.",
    ];
    const movieQuotes = [
        "Here's a famous movie quote: 'May the Force be with you.' - Star Wars",
        "One from The Godfather: 'I'm gonna make him an offer he can't refuse.'",
        "'There's no place like home.' - The Wizard of Oz",
    ];
    const travelTips = [
        "For a budget-friendly trip, try staying in hostels or Airbnb.",
        "Don't forget to plan your itinerary to make the most of your travels!",
        "Travel light to avoid unnecessary baggage charges and stress.",
    ];
    const books = [
        "If you like mystery, you should try 'The Da Vinci Code'.",
        "A great read is '1984' by George Orwell, especially for dystopian fiction fans.",
        "If you're into self-help, check out 'Atomic Habits' by James Clear.",
    ];
    const lifeHacks = [
        "Try using a binder clip to organize your cables. It's simple and effective!",
        "For better productivity, use the Pomodoro technique - work for 25 minutes, then take a 5-minute break.",
        "To keep your shoes smelling fresh, put tea bags in them overnight.",
    ];
    const technology = [
        "Artificial intelligence is rapidly improving, with new advancements every day!",
        "Virtual reality and augmented reality are transforming the way we interact with technology.",
        "The future of technology is very exciting, especially with developments in AI, robotics, and space exploration.",
    ];
    const selfImprovement = [
        "Take small steps each day to improve yourself. Consistency is key!",
        "Set clear goals and track your progress to stay motivated.",
        "Practice mindfulness and meditation to improve your mental clarity.",
    ];
    const motivationalSpeakers = [
        "Some famous motivational speakers are Tony Robbins, Les Brown, and Zig Ziglar.",
        "You can find great inspiration from people like Gary Vaynerchuk and Mel Robbins.",
        "Check out motivational speakers like Eric Thomas and Robin Sharma for uplifting content.",
    ];
    const successQuotes = [
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    ];
    const mindfulness = [
        "Mindfulness is the practice of being fully present and engaged in the moment.",
        "You can practice mindfulness by paying attention to your breath and surroundings.",
        "Mindfulness can help reduce stress and improve focus and clarity.",
    ];
    const productivityTips = [
        "Start your day by tackling the hardest task first. This sets a positive tone.",
        "Break your work into smaller tasks to avoid feeling overwhelmed.",
        "Eliminate distractions by turning off notifications and setting focused work periods.",
    ];
    const historyFacts = [
        "Did you know that Cleopatra lived closer in time to the moon landing than to the building of the Great Pyramid?",
        "Here's a historical fact: The Great Fire of London in 1666 destroyed much of the city.",
        "History tells us that the first Olympic Games were held in 776 BC in Ancient Greece.",
    ];

    // Utility functions for handling messages
    function showUserMsg(userMsg) {
        const chatArea = document.getElementById("chat-area");
        const userMsgDiv = document.createElement("div");
        userMsgDiv.classList.add("chatarea-inner", "user");
        userMsgDiv.textContent = userMsg;
        chatArea.appendChild(userMsgDiv);
        chatMessages.push({ text: userMsg, sender: "user" });
    }

    function showChatbotMsg(chatbotMsg) {
        const chatArea = document.getElementById("chat-area");
        const chatbotMsgDiv = document.createElement("div");
        chatbotMsgDiv.classList.add("chatarea-inner", "chatbot");
        chatbotMsgDiv.textContent = chatbotMsg;
        chatArea.appendChild(chatbotMsgDiv);
        chatMessages.push({ text: chatbotMsg, sender: "chatbot" });
    }

    function chatbotVoice(message) {
        const speech = new SpeechSynthesisUtterance();
        let response = "";
        if (message.includes("hello")) {
            response = intro[Math.floor(Math.random() * intro.length)];
        } else if (message.includes("how are you")) {
            response = greetings[Math.floor(Math.random() * greetings.length)];
        } else if (message.includes("time")) {
            let currentTime = new Date().toLocaleTimeString();
            response = "The  time is: " + currentTime;
        }
        else if (message.includes("day")) {
            let currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });
            response = "Today is: " + currentDay;
        }
        else if (message.includes("remind")) {
            response = reminders[Math.floor(Math.random() * reminders.length)];
        } else if (message.includes("weather")) {
            response = weather[Math.floor(Math.random() * weather.length)];
        } else if (message.includes("help")) {
            response = assistance[Math.floor(Math.random() * assistance.length)];
        } else if (message.includes("thanks")) {
            response = thanks[Math.floor(Math.random() * thanks.length)];
        } else if (message.includes("bye")) {
            response = closing[Math.floor(Math.random() * closing.length)];
        } else if (message.includes("joke")) {
            response = jokes[Math.floor(Math.random() * jokes.length)];
        } else if (message.includes("motivation")) {
            response = motivation[Math.floor(Math.random() * motivation.length)];
        } else if (message.includes("quote")) {
            response = quotes[Math.floor(Math.random() * quotes.length)];
        } else if (message.includes("fact")) {
            response = randomFacts[Math.floor(Math.random() * randomFacts.length)];
        } else if (message.includes("language")) {
            response = languages[Math.floor(Math.random() * languages.length)];
        } else if (message.includes("math")) {
            response = mathHelp[Math.floor(Math.random() * mathHelp.length)];
        } else if (message.includes("advice")) {
            response = advice[Math.floor(Math.random() * advice.length)];
        } else if (message.includes("fun fact")) {
            response = funFacts[Math.floor(Math.random() * funFacts.length)];
        } else if (message.includes("food")) {
            response = food[Math.floor(Math.random() * food.length)];
        }
        else if (message.includes("eat")) {
            response = food[Math.floor(Math.random() * food.length)];
        } else if (message.includes("health")) {
            response = healthTips[Math.floor(Math.random() * healthTips.length)];
        } else if (message.includes("trivia")) {
            response = trivia[Math.floor(Math.random() * trivia.length)];
        } else if (message.includes("news")) {
            response = dailyNews[Math.floor(Math.random() * dailyNews.length)];
        } else if (message.includes("movie")) {
            response = movieRecommendations[Math.floor(Math.random() * movieRecommendations.length)];
        } else if (message.includes("quote")) {
            response = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
        } else if (message.includes("travel")) {
            response = travelTips[Math.floor(Math.random() * travelTips.length)];
        } else if (message.includes("book")) {
            response = books[Math.floor(Math.random() * books.length)];
        } else if (message.includes("life hack")) {
            response = lifeHacks[Math.floor(Math.random() * lifeHacks.length)];
        } else if (message.includes("technology")) {
            response = technology[Math.floor(Math.random() * technology.length)];
        } else if (message.includes("self-improvement")) {
            response = selfImprovement[Math.floor(Math.random() * selfImprovement.length)];
        } else if (message.includes("speaker")) {
            response = motivationalSpeakers[Math.floor(Math.random() * motivationalSpeakers.length)];
        } else if (message.includes("success")) {
            response = successQuotes[Math.floor(Math.random() * successQuotes.length)];
        } else if (message.includes("mindfulness")) {
            response = mindfulness[Math.floor(Math.random() * mindfulness.length)];
        } else if (message.includes("productivity")) {
            response = productivityTips[Math.floor(Math.random() * productivityTips.length)];
        } else if (message.includes("history")) {
            response = historyFacts[Math.floor(Math.random() * historyFacts.length)];
        } else {
            response = "I'm sorry, I didn't understand that. Can you please rephrase?";
        }
        speech.text = response;
        window.speechSynthesis.speak(speech);
        return response;
    }

    // Text input handling
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");

    function handleTextInput() {
        const userText = userInput.value.trim();
        if (userText) {
            showUserMsg(userText); // Display user message
            const chatbotResponse = chatbotVoice(userText); // Get chatbot response
            if (chatbotResponse) {
                showChatbotMsg(chatbotResponse); // Display chatbot response
            } else {
                setTimeout(function () {
                    showChatbotMsg("I'm sorry, I didn't understand that. Can you please rephrase?");
                }, 1000);
            }
            userInput.value = ""; // Clear input field
        }
    }

    // Trigger on clicking send button
    sendButton.addEventListener("click", handleTextInput);

    // Trigger on pressing Enter key
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleTextInput();
        }
    });

    // Voice input handling
    function activateMic() {
        const { webkitSpeechRecognition } = window;
        const recognition = new webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;  // Display the recognized text
            handleTextInput(); // Process the input as if typed
        };
    }

    // Activate the microphone
    const micButton = document.getElementById("mic");
    micButton.addEventListener("click", activateMic);
});
