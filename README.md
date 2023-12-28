# Wikipedia Search Interface with Pagination

This JavaScript code enables a simple Wikipedia search interface with pagination.

## Features

- **Search:** Users can input a search query and press "Enter" to fetch Wikipedia search results.
- **Display:** Search results include article titles, URLs, and descriptions.
- **Pagination:** Results are paginated for easy navigation using "Next" and "Back" buttons.

## Usage

1. Clone or download the JavaScript file.
2. Integrate the code into your web application.
3. Set up necessary HTML elements: input field with id "searchInput," empty div for results with id "searchResults," spinner element with id "spinner," and pagination buttons with ids "nextButton" and "backButton."

## How It Works

- Uses the `fetch` API to query the Wikipedia search API for articles based on user input.
- Displays search results with article titles, URLs, and descriptions.
- Implements pagination to navigate through multiple result pages.
