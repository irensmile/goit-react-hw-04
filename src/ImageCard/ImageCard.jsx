import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';

export const ImageCard = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <li>
      <div>
        <img
          width="300"
          height="300"
          src={image.urls.small}
          alt={image.description}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        {isModalOpen && (
          <ImageModal
            description={image.description}
            url={image.urls.regular}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </li>
  );
};

export default ImageCard;
