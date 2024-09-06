# TapMeApp

TapMeApp is a modern web application built with React and TypeScript. It offers a seamless user experience by interacting with a GraphQL API, allowing users to manage and view their data effortlessly. The application also integrates with a Telegram bot to enhance user interaction and engagement.

## Features

- **Interactive Coin Tapping**: Users can tap on a coin to earn more coins, making the app engaging and rewarding.
- **Real-Time Data Updates**: Instant reflection of changes in user data, ensuring a dynamic user experience.
- **GraphQL Integration**: Communicates with a GraphQL API to fetch and manipulate user data efficiently.
- **Telegram Bot Integration**: Facilitates user interactions and updates through a Telegram bot for added convenience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Query Parameters](#query-parameters)
- [Contributing](#contributing)

## Installation

To get started with TapMeApp, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/naziranwer/CO3_client.git

   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd CO3_client
   ```
3. **Install Dependencies:**
   ```bash
   yarn install.
   ```
4. **Run the Application**
   ```bash
   yarn start
   ```

## Usage

### Web Interface

Upon starting the application, you will be greeted with the main interface where users can tap on coins to increase their coin balance. The UI is designed to be responsive and intuitive, built with React and styled using Material-UI.

### Telegram Bot Integration

The application integrates with a Telegram bot named **Nazir123_bot** to enhance user interaction:

1. **Start the Bot:** Open Telegram and start a chat with **Nazir123_bot**.

2. **Start Command:** Send the /start command to the bot.

3. **Web App Link:** The bot will respond with a message that includes a button. Clicking this button will open the TapMeApp web interface directly in your browser.

### Query Parameters

When accessing the application directly via a browser, include the following query parameters in the URL to load user-specific data: for example

```bash
?user_id=1356073518&first_name=Munazir&last_name=Anwer&username=Dreamy143
```

## Contributing

We welcome contributions to TapMeApp! To contribute:

1. **Fork the Repository:** Click the "Fork" button on GitHub.
2. **Clone Your Fork:**
   git clone https://github.com/your-username/CO3_client.git
3. **Create a New Branch:**
   git checkout -b feature/your-feature
4. **Make Your Changes:** Develop and test your changes locally.
5. **Commit and Push:**
   git add .
   git commit -m "Add your message"
   git push origin feature/your-feature
6. **Create a Pull Request:** Open a pull request on GitHub to merge your changes.
