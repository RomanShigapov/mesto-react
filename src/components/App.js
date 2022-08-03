import React from "react";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isOpen, setIsOpen] = React.useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false
  });

  function handleEditProfileClick() {
    setIsOpen({
      ...isOpen,
      isEditProfilePopupOpen: true
    });
  }

  function handleAddPlaceClick() {
    setIsOpen({
      ...isOpen,
      isAddPlacePopupOpen: true
    });
  }

  function handleEditAvatarClick() {
    setIsOpen({
      ...isOpen,
      isEditAvatarPopupOpen: true
    });
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      {/* Попап профайла */}
      <PopupWithForm
        isOpen={isOpen.isEditProfilePopupOpen}
        name="profile"
        title="Редактировать профиль"
        button="Сохранить"
      >
        <fieldset className="popup__form-inputs">
          <div className="popup__form-container">
            <input className="popup__form-input popup__form-input_profile-name" name="name" placeholder="Введите имя профиля" type="text" required minLength="2" maxLength="40" />
            <span className="popup__form-input-error name-error"></span>
          </div>
          <div className="popup__form-container">
            <input className="popup__form-input popup__form-input_profile-description" name="description" placeholder="Введите род деятельности" type="text" required minLength="2" maxLength="200" />
            <span className="popup__form-input-error description-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      {/* Попап новой карточки */}
      <PopupWithForm
        isOpen={isOpen.isAddPlacePopupOpen}
        name="new-card"
        title="Новое место"
        button="Создать"
      >
        <fieldset className="popup__form-inputs">
          <div className="popup__form-container">
            <input className="popup__form-input popup__form-input_new-card-name" name="name" placeholder="Название" type="text" required minLength="2" maxLength="30" />
            <span className="popup__form-input-error name-error"></span>
          </div>
          <div className="popup__form-container">
            <input className="popup__form-input popup__form-input_new-card-image-link" name="link" placeholder="Ссылка на картинку" type="url" required />
            <span className="popup__form-input-error link-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      {/* Попап редактирования аватара */}
      <PopupWithForm
        isOpen={isOpen.isEditAvatarPopupOpen}
        name="replace-avatar"
        title="Обновить аватар"
        button="Сохранить"
      >
        <fieldset className="popup__form-inputs">
          <div className="popup__form-container">
            <input className="popup__form-input popup__form-input_new-card-image-link" name="link" placeholder="Ссылка на картинку" type="url" required />
            <span className="popup__form-input-error link-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>

      <div className="popup popup_picture popup_overlay-opacity_high">
        <figure className="popup__image-container">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть просмотр изображения"></button>
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
      </div>

      <div className="popup popup_delete-card popup_overlay-opacity_high">
        <div className="popup__container">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть форму удаления карточки"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="delete-card-confirmation-form">
            <button className="popup__form-save-button button button_opacity_high" type="submit">Да</button>
          </form>
        </div>
      </div>
      <template className="new-card">
        <li className="card">
          <img className="card__picture" src="#" alt="" title="" />
          <button className="card__delete-button button button_opacity_main"></button>
          <div className="card__description">
            <h2 className="card__caption"></h2>
            <div className="card__like-block">
              <button className="card__like-button button button_opacity_low" type="button" aria-label="кнопка лайк на карточке"></button>
              <span className="card__likes">0</span>
            </div>
          </div>
        </li>
      </template>
  </div>
  );
}

export default App;
