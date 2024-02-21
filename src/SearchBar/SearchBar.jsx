import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    if (value) onSubmit(e.target[0].value);
    else toast("Please enter search query first");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
