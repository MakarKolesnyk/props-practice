import { useEffect } from "react";
import { getAllBooksAsync } from "../../store/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";

const Books = () => {
  const dispatch = useDispatch();
  const { books, isPending, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, [dispatch]);
  const showBook = (book) => <Book book={book} key={book.id} />;
  if (isPending) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <section>{books.length > 0 ? books.map(showBook) : <p>empty</p>}</section>
  );
};

export default Books;
