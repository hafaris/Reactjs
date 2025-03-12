import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", isbn: "9780743273565" },
    { id: uuidv4(), title: "1984", author: "George Orwell", category: "Dystopian", isbn: "9780451524935" },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin-login");
    }
  }, );

  

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isbn, setIsbn] = useState("");

  const addBook = () => {
    if (title && author && category && isbn) {
      setBooks([...books, { id: uuidv4(), title, author, category, isbn }]);
      setTitle("");
      setAuthor("");
      setCategory("");
      setIsbn("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">Add a New Book</h2>
        <div className="flex gap-2">
          <input
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          <button onClick={addBook}>Add Book</button>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Manage Books</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.isbn}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

 
}
