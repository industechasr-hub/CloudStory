# CloudStory

CloudStory is a full-stack MERN application that allows users to upload, manage, and read books online. The platform supports book cover uploads, PDF storage, and a responsive user interface for a seamless reading experience.

## Features

- User Authentication
- Upload Book Covers and PDFs
- Browse Available Books
- Cloudinary Image Storage
- Responsive Design
- REST API Integration

## Tech Stack

### Frontend
- React.js
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Cloudinary

## Project Structure

```text
CloudStory/
├── client/
├── server/
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd CloudStory
```

### Client Setup

```bash
cd client
npm install
npm run dev
```

### Server Setup

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the server folder and add:

```env
PORT=
MONGO_URI=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
JWT_SECRET=
```

## Future Improvements

- Book Categories
- Search & Filter
- User Profiles
- Favorites / Bookmarks
- Ratings & Reviews

## Author

Akash Singh Rajput