import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
    return (
        <ul className={css.gallery}>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </ul>
    );
};

export default ImageGallery;
