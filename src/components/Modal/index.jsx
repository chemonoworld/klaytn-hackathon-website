import { useState } from 'react';
import Button from '../Button';
import './modal.scss';
import CLOSE from '../../assets/images/close-icon.png';
import FAVICON from '../../assets/images/favicon.png';
const Modal = () => {
  const closeModal = () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.add('hidden');
    console.log('close modal');
  };

  return (
    <div className="modal-container hidden">
      <div className="modal-content">
        <div className="modal-header-box">
          <span className="modal-header-txt">KLAIM YOUR SOUL</span>
          <div className="btn-modal-close" onClick={closeModal}>
            <img id="modal-close-img" src={CLOSE} alt="X" />
          </div>
        </div>
        <div className="modal-content-box modal-txt-container">
          <div className="modal-txt-box">
            <span className="txt-pink">0xSOUL</span> is Soul-Bound Token(SBT)
          </div>
          <div className="modal-txt-box">to join DA0xSBT.</div>
          <br />
          <div className="modal-txt-box">
            Your Soul will be stored on chain.
          </div>
          <div className="modal-txt-box">
            Connect your <span className="txt-pink">SOUL</span> to Twitter ID
          </div>
        </div>
        <div className="modal-input-container">
          <div className="modal-content-box">
            <img className="modal-soul-img" src={FAVICON} alt="0xSOUL" />
          </div>
          <div className="modal-content-box vertical-center">
            <span> • • • </span>
          </div>
          <input
            className="submit-input"
            type="text"
            placeholder="Your Twitter ID"
          />
        </div>
        <div className="modal-content-box submit-btn-wrapper">
          <Button className="submit-btn">
            <div className="submit-btn-text">Mint</div>
          </Button>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
    </div>
  );
};

export default Modal;
