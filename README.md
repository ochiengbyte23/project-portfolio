# Personal Project Showcase App

A simple and intuitive React application for managing and showcasing your personal projects. Add, search, and organize your projects in a clean, user-friendly interface.

## Features

- ✨ **Add Projects**: Create new project entries with title and description
- 🔍 **Search Functionality**: Real-time search to filter projects by title
- 📱 **Responsive Design**: Clean, centered layout with modern styling
- 🎨 **Visual Organization**: Projects displayed in card format with clear separation
- ✅ **Input Validation**: Prevents adding projects with empty fields

## Screenshots

The app consists of two main sections:

- **Add Project Form**: Input fields for title and description with an Add button
- **Project Listing**: Searchable list of all projects with delete buttons (UI only)

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or yarn

## Setup Instructions

1. **Clone or download the project**

   ```bash
   git clone <your-repository-url>
   cd personal-project-showcase-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will automatically open in your default browser
   - Or manually navigate to `http://localhost:5173` (or the port shown in terminal)

## Usage Instructions

### Adding a New Project

1. Enter a project title in the "Title" field
2. Enter a project description in the "Description" field
3. Click the "Add" button
4. The project will appear in the listing below
5. Both fields will clear automatically after adding

### Searching for Projects

1. Type in the "Search Projects" field
2. The project list will filter in real-time based on the title
3. Search is case-insensitive

## Project Structure

```
personal-project-showcase-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header component
│   │   ├── NewProject.jsx      # Form to add new projects
│   │   └── ProjectListing.jsx  # Display and search projects
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Styles for the app
│   └── main.jsx                # Entry point
├── package.json
└── README.md
```

## Component Overview

### `App.jsx`

- Main component that manages application state
- Holds the list of projects using `useState`
- Handles adding new projects via `addProject` function
- Passes data and functions to child components

### `Header.jsx`

- Simple header displaying the app title

### `NewProject.jsx`

- Form component for adding new projects
- Validates input before adding
- Clears fields after successful submission
- Uses controlled components with `useState`

### `ProjectListing.jsx`

- Displays all projects in card format
- Implements search functionality
- Filters projects based on search input

## Technologies Used

- **React** (v18+) - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling and layout

## Known Limitations

1. **No Persistence**: Projects are stored in memory only. Refreshing the page will reset the project list to the default three projects.

2. **Delete Button Non-Functional**: The "✕" delete button is currently UI-only and doesn't remove projects from the list.

3. **Single Input Type**: Description field uses a single-line text input instead of a textarea, limiting longer descriptions.

4. **No Edit Functionality**: Once added, projects cannot be edited. They would need to be deleted and re-added.

5. **No Project Validation**: Beyond checking for empty fields, there's no validation for duplicate titles or description length.

6. **Search Limited to Title**: Search only filters by project title, not description content.

## Contributing

This is a learning project, but suggestions and improvements are welcome! Feel free to fork and experiment.

**Built with React** ⚛️
