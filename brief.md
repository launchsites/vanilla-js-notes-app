# Project Brief: Browser-Based Notes Application

## Project Overview

Develop a simple, clean, browser-based notes application that allows users to create, edit, search, and manage notes easily.

The application should resemble a traditional notes app (similar in structure to Apple Notes), featuring a sidebar with a list of notes and a main editing area for the selected note.

The application should run entirely in the browser and store data locally so that users can return to their notes later without needing to log in.

---

## Objectives

The goal of this project is to:

- Allow users to create and manage notes easily
- Provide a clear list view of all notes
- Enable fast searching of notes
- Automatically save all changes
- Deliver a clean and intuitive user experience
- Work reliably without external services or accounts

---

## Target Users

This product is intended for:

- Students organising revision notes
- Individuals managing personal ideas
- Users who want a simple, distraction-free notes tool
- Anyone who prefers a lightweight alternative to full-featured note platforms

The interface should be straightforward and easy to understand without training.

---

## Core Features

### 1. Create Notes
- Users must be able to create a new note.
- A newly created note should automatically open in the editor.
- Notes should have at minimum:
    - A title
    - A main content area.

---

### 2. Edit Notes
- Users must be able to edit the title of a note.
- Users must be able to edit the main content/body of a note.
- Changes should be saved automatically without requiring a manual save button.

---

### 3. Delete Notes
- Users must be able to delete any note.
- Deleting a note should remove it permanently from the application.
- The interface should handle deletion gracefully (e.g., selecting another note or clearing the editor).

---

### 4. Search Notes
- Users must be able to search notes using a search input.
- Search results should update dynamically as the user types.
- The search should match text in:
    - Note titles
    - Note content.
- The search should only filter visible results and must not delete or modify notes.

---

### 5. Automatic Saving & Persistence
- All notes must be saved automatically.
- When the user refreshes or closes and reopens the browser, their notes should still be available.
- No login or account system is required.

---

## User Experience Requirements

- The layout should be clean and minimal.
- The interface should clearly separate:
    - The notes list (sidebar)
    - The note editor (main panel).
- The currently selected note should be visually highlighted.
- Buttons and actions should be clearly labelled.
- The application should work smoothly on desktop browsers.
- Basic responsiveness for smaller screens is preferred.

---

## Optional Enhancements (If Time Allows)

- Sort notes by last edited date.
- Display “Last edited” timestamps.
- Pin important notes.
- Dark mode toggle.
- Ability to export notes as a file.
- Ability to import notes from a file.
- Keyboard shortcuts (e.g., shortcut for creating a new note).
- Simple markdown formatting support.

---

## Technical Constraints

- The application must run entirely in the browser.
- No external databases.
- No user authentication system.
- No external libraries or frameworks.
- Data must be stored locally in the browser.

---

## Deliverables

- A working web application.
- Clean and structured project files.
- A short explanation of how the system works.
- Clear instructions on how to run the project locally.

---

## Success Criteria

The project will be considered successful if:

- Users can create, edit, and delete notes.
- Users can search notes effectively.
- Notes persist after page refresh.
- The interface is intuitive and easy to navigate.
- The application runs without errors.
- Core functionality works consistently and reliably.