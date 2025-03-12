import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function UserDashboard() {
  const [books, setBooks] = useState([
    { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", issued: false },
    { id: "2", title: "1984", author: "George Orwell", issued: false },
  ]);

  const [issuedBooks, setIssuedBooks] = useState([]);
  const renewBook = (bookId) => {
    alert(`Book with ID ${bookId} has been renewed.`);
  };

  const issueBook = (bookId) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, issued: true } : book
    );
    const newIssuedBook = books.find((book) => book.id === bookId);
    setIssuedBooks([...issuedBooks, newIssuedBook]);
    setBooks(updatedBooks);
  };

  const returnBook = (bookId) => {
    const updatedIssuedBooks = issuedBooks.filter((book) => book.id !== bookId);
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, issued: false } : book
    );
    setIssuedBooks(updatedIssuedBooks);
    setBooks(updatedBooks);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/user-login");
  };
  useEffect(() => {
    if (!localStorage.getItem("loggedInUser")) {
      navigate("/user-login");
    }
  },);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      <h2 className="text-xl font-semibold mb-2">Available Books</h2>
      <ul>
        {books.map(
          (book) =>
            !book.issued && (
              <li key={book.id}>
                {book.title} - {book.author}
                <button onClick={() => issueBook(book.id)}>Issue</button>
              </li>
            )
        )}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Issued Books</h2>

      <ul>
        {issuedBooks.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button onClick={() => returnBook(book.id)}>Return</button>
            <button onClick={() => renewBook(book.id)}>Renew</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
