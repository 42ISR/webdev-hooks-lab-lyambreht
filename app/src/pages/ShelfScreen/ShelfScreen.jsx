import BookForm from '../../components/BookForm/BookForm';
import FilterChip from '../../components/FilterChip/FilterChip';
import BookList from '../../components/BookList/BookList';

function pluralBooks(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;

  if (mod10 === 1 && mod100 !== 11) return 'книга';
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return 'книги';
  return 'книг';
}

function ShelfScreen({
  books,
  showOnlyUnread,
  onAdd,
  onToggleRead,
  onDelete,
  onToggleFilter,
}) {
  const visibleBooks = showOnlyUnread
    ? books.filter(b => !b.read)
    : books;

  const subtitle =
    books.length === 0
      ? 'На полке пока пусто'
      : `На полке ${books.length} ${pluralBooks(books.length)}`;

  return (
    <section className="screen active">
      <p className="greeting">Добрый вечер</p>
      <p className="greeting-sub">{subtitle}</p>

      <BookForm onAdd={onAdd} />

      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <FilterChip
          checked={showOnlyUnread}
          onChange={onToggleFilter}
        />
      </div>

      <BookList
        books={visibleBooks}
        onToggleRead={onToggleRead}
        onDelete={onDelete}
      />
    </section>
  );
}

export default ShelfScreen;