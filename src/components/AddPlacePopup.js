import { useState, useEffect} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [card, setCard] = useState({
    name: '',
    link: ''
  });

  function handleCardChange(evt) {
    setCard({
      ...card,
      [evt.target.name]: evt.target.value,
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace(card);
  }

  useEffect(() => {
    setCard({
        name: '',
        link: ''
      });
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="new-card"
      title="Новое место"
      button="Создать"
    >
      <fieldset className="popup__form-inputs">
        <div className="popup__form-container">
          <input className="popup__form-input popup__form-input_new-card-name" value={card.name} onChange={handleCardChange} name="name" placeholder="Название" type="text" required minLength="2" maxLength="30" />
          <span className="popup__form-input-error name-error"></span>
        </div>
        <div className="popup__form-container">
          <input className="popup__form-input popup__form-input_new-card-image-link" value={card.link} onChange={handleCardChange} name="link" placeholder="Ссылка на картинку" type="url" required />
          <span className="popup__form-input-error link-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
