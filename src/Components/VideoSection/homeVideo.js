import React, {useState} from 'react';
import Modal from 'react-modal';

// Styling for the popup
const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 999,
    },
    content: {
        height:'fit-content',
      width: '80%',
      maxWidth: '800px',
      margin: 'auto',
      bordder: 'none',
      padding: '0',
    },
  };
  
export default function HomeVideo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
  return (
    <section className='video-section'>
        <div className='videobtn video-btn'  >
            <i className="bi bi-play-circle PlayBtn " onClick={openModal}></i>

      <Modal
         isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <div className="video-popup">
          {/* Embed your video player here */}
          <iframe
            title="Video Player"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5TyHA1EFsVc"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>


        </div>
    </section>
  )
}
