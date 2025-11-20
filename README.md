# Quick Blog (React + LocalStorage)

UI_UX:
  - description: |
      A simple and responsive blogging application built using React (with a Preact setup).
      Users can create, edit, and delete blog posts directly in the browser.
      All blogs are saved in localStorage so they persist even after reload.
      Includes inline editing, modern UI, and a card-based layout.

  - preview_image: "<img width="1045" height="678" alt="Screenshot 2025-11-20 at 2 38 10 PM" src="https://github.com/user-attachments/assets/5fcc3d15-f013-41c5-80c1-ddc0da5b360d" />"

# Features
Features:
  - Create new blog posts.
  - Edit posts inline using the same BlogForm component.
  - Delete posts from the blog list.
  - Auto-save blog data using localStorage.
  - Toggle form visibility (Start Writing / Close Form).
  - Responsive card layout with clean UI.
  - Same form reused for both create & edit modes.

# Technologies Used
Technologies_Used:
  - React / Preact
  - JavaScript (ES6+)
  - CSS
  - LocalStorage
  - Vite

# Project Structure
Project_Structure:
  - public: Static assets such as index.html
  - src:
      - assets:
          - preact.svg
          - edit_icon.svg
          - delete_icon.svg
      - components:
          - BlogForm.jsx
      - styles:
          - app.css
          - index.css
      - files:
          - App.jsx
          - main.jsx
  - config:
      - vite.config.js

# Components
Components:
  - BlogForm:
      - props:
          - tittle: string
          - content: string
          - onPublish: function
      - behavior:
          - Prefills values during edit mode using useEffect.
          - Validates non-empty inputs.
          - Calls onPublish() with blog data.
          - Resets form after submission.

  - App:
      - state:
          - state: boolean
          - blogs: array
          - EditTitle: string
          - EditContent: string
          - INDEX: number or null
      - behavior:
          - Loads blogs from localStorage on startup.
          - Saves blogs to localStorage when updated.
          - Adds new blogs.
          - Deletes blogs.
          - Edits blogs inline.
          - Toggles form visibility.

# Installation
Installation:
  - git clone https://github.com/Rudhar-cmd/React-app-blog.git
  - cd quick-blog
  - npm install
  - npm run dev

# Usage
Usage:
  - Click "Start Writing" to open the form.
  - Enter a title and blog content.
  - Click "Publish" to save the blog.
  - Use the edit icon to modify a post.
  - Use the delete icon to remove a post.
  - Blogs stay saved in localStorage.

# Example Blog
Example_Blog:
  - title: "My First Blog"
  - content: "This is my first post using Quick Blog."

# Data Persistence
Data_Persistence:
  - storage: localStorage
  - key: blogs
  - example_format: |
      [
        { "tittle": "Hello", "content": "My first blog content" }
      ]

# License
License:
  - MIT

# Author
Author:
  - Rudhar Gupta

# Preview
Preview:
  - : ![ScreenRecording2025-11-20at2 43 40PM-ezgif com-speed](https://github.com/user-attachments/assets/4c159b6d-1973-464e-b877-e4b10785403b)

