# Library Management REST API

This is a simple REST API for managing a library's books, built with Node.js, Express, and MongoDB.

## Features
- Add new books (title, author, year)
- Retrieve all books
- Update a book’s details
- Delete a book from the database

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start MongoDB:**
   Make sure MongoDB is running locally at `mongodb://127.0.0.1:27017`.
3. **Run the server:**
   ```sh
   npm start
   ```
4. **API Endpoints:**
   - `POST /books` — Add a new book
   - `GET /books` — Retrieve all books
   - `PUT /books/:id` — Update a book
   - `DELETE /books/:id` — Delete a book

