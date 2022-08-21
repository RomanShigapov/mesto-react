import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const inputAvatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar(inputAvatarRef.current.value);
  }

  React.useEffect(() => {
    if (props.isOpen) { inputAvatarRef.current.value=''; }
  });

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="replace-avatar"
      title="Обновить аватар"
      button="Сохранить"
    >
      <fieldset className="popup__form-inputs">
        <div className="popup__form-container">
          <input className="popup__form-input popup__form-input_new-card-image-link" ref={inputAvatarRef} name="link" placeholder="Ссылка на картинку" type="url" required />
          <span className="popup__form-input-error link-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup
