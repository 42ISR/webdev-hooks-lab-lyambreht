import BookItem from '../BookItem/BookItem';

function BookList({ books, onToggleRead, onDelete }) {
  if (books.length === 0) {
    return <div className="empty-note">Нет книг, подходящих под фильтр</div>;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem
          key={book.id}
          book={book}
          onToggleRead={onToggleRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookList;