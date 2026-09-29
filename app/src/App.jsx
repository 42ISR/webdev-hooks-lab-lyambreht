import { useState } from 'react';
import ViewSwitch from './components/ViewSwitch/ViewSwitch';
import ShelfScreen from './pages/ShelfScreen/ShelfScreen';
import StatsScreen from './pages/StatsScreen/StatsScreen';

const initialBooks = [
  { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
  { id: 2, title: 'Маленькая жизнь', author: 'Ханья Янагихара', read: false },
  { id: 3, title: 'Пиранези', author: 'Сюзанна Кларк', read: false },
];

function App() {
  const [currentScreen, setCurrentScreen] = useState('shelf');
  const [books, setBooks] = useState(initialBooks);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);
  const [pagesToday, setPagesToday] = useState(0);
  const [nextId, setNextId] = useState(4);

  function handleAdd(title) {
    const newBook = {
      id: nextId,
      title,
      author: 'Автор не указан',
      read: false,
    };
    setBooks(prev => [...prev, newBook]);
    setNextId(prev => prev + 1);
  }

  function handleToggleRead(id) {
    setBooks(prev =>
      prev.map(b => b.id === id ? { ...b, read: !b.read } : b)
    );
  }

  function handleDelete(id) {
    setBooks(prev => prev.filter(b => b.id !== id));
  }

  function handleToggleFilter(value) {
    setShowOnlyUnread(value);
  }

  function handleIncrement() {
    setPagesToday(prev => prev + 1);
  }

  function handleDecrement() {
    setPagesToday(prev => Math.max(0, prev - 1));
  }

  function handleReset() {
    setPagesToday(0);
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>

        <ViewSwitch
          currentScreen={currentScreen}
          onChange={setCurrentScreen}
        />
      </div>

      {currentScreen === 'shelf' ? (
        <ShelfScreen
          books={books}
          showOnlyUnread={showOnlyUnread}
          onAdd={handleAdd}
          onToggleRead={handleToggleRead}
          onDelete={handleDelete}
          onToggleFilter={handleToggleFilter}
        />
      ) : (
        <StatsScreen
          books={books}
          pagesToday={pagesToday}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;