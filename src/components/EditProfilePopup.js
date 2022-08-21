import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [profile, setProfile] = React.useState({
    name: 'Test',
    description: 'testovich'
  });

  function handleProfileChange(evt) {
    setProfile({
      ...profile,
      [evt.target.name]: evt.target.value,
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name: profile.name,
      about: profile.description
    }, evt);
  }

  React.useEffect(() => {
    setProfile({
      name: currentUser.name,
      description: currentUser.about
    })
   },[currentUser]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="profile"
      title="Редактировать профиль"
      button="Сохранить"
    >
      <fieldset className="popup__form-inputs">
        <div className="popup__form-container">
          <input className="popup__form-input popup__form-input_profile-name" value={profile.name} onChange={handleProfileChange} name="name" placeholder="Введите имя профиля" type="text" required minLength="2" maxLength="40" />
          <span className="popup__form-input-error name-error"></span>
        </div>
        <div className="popup__form-container">
          <input className="popup__form-input popup__form-input_profile-description" value={profile.description} onChange={handleProfileChange} name="description" placeholder="Введите род деятельности" type="text" required minLength="2" maxLength="200" />
          <span className="popup__form-input-error description-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
