import React, { useState } from "react";
import "../styles/books.css";

const BookCard = ({
  title,
  author,
  image,
  description,
  personalNotes,
  rating,
}) => {
  return (
    <div className="book-card">
      <div className="book-image-container">
        <img src={image} alt={title} className="book-cover" />
      </div>
      <div className="book-content">
        <h5 className="book-title">{title}</h5>
        <p className="book-author">{author}</p>
        <p className="book-description">{description}</p>
        <p className="book-summary">{personalNotes}</p>
        <p className="book-rating">Rating: {rating} ★</p>
      </div>
    </div>
  );
};

const Books = () => {
  const [books] = useState([
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      image: "https://m.media-amazon.com/images/I/91YfNb49PLL.jpg",
      description:
        "A comprehensive guide on building scalable, reliable, and maintainable data systems.",
      personalNotes:
        "This book deepened my understanding of distributed systems, databases, and scalability challenges.",
      rating: 5,
    },
    {
      title: "Dive Into Design Patterns",
      author: "Alexander Shvets",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1543945452i/43125355.jpg",
      description:
        "A hands-on approach to learning design patterns with real-world examples and explanations.",
      personalNotes:
        "Helped me understand design patterns in a practical way, improving my software architecture skills.",
      rating: 4.5,
    },
    {
      title: "Competitive Programmer's Handbook",
      author: "Antti Laaksonen",
      image: "https://www.dbooks.org/img/books/5651943146.jpg",
      description:
        "A must-read guide covering fundamental algorithms and techniques for competitive programming.",
      personalNotes:
        "This book strengthened my problem-solving skills and provided valuable strategies for coding competitions.",
      rating: 5,
    },
  ]);

  return (
    <div className="container-books">
      <h3 className="section-title">Books I'm Reading</h3>
      <div className="book-grid">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
            description={book.description}
            personalNotes={book.personalNotes}
            rating={book.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
