import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookAdder from "./components/Books/BookAdder";
import BookEditor from "./components/Books/BookEditor";
import BooksList from "./components/Books/BooksList";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/add" element={<BookAdder />} />
          <Route path="/edit/" element={<BookEditor />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
