// import css from './App.css';
import { useState, useEffect } from "react";
import { fetchImagesAPI } from "./images-api";

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

export const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const data = await fetchImagesAPI(query, page);
        if (page === 1) setImages(data);
        else setImages((oldImages) => [...oldImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (query) fetchImages();
    else setImages(Array.from([]));
  }, [query, page]);

  const searchImages = async (query) => {
    setPage(1);
    setQuery(query);
  };

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={searchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={onLoadMoreClick} />}
    </div>
  );
};

export default App;
