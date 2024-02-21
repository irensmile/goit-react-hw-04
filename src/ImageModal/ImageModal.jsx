import Modal from 'react-modal';

Modal.setAppElement('#root');

const customModalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '50px',
    left: '50px',
    right: '50px',
    bottom: '0px',
    border: '1px solid #ccc',
    background: '#000',
    borderRadius: '4px',
    outline: 'none',
  },
};

export const ImageModal = ({ url, description, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customModalStyles}>
      <img src={url} alt={description} width="100%" />
      <p>{description}</p>
    </Modal>
  );
};

export default ImageModal;
