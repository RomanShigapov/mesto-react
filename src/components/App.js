import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import defaultAvatar from '../images/profile.jpg';

function App() {

  const [currentUser, setCurrentUser] = React.useState({
    name: 'Загрузка...',
    about: '...данных',
    avatar: defaultAvatar
  });



  const [isOpen, setIsOpen] = React.useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false
  });

  const [selectedCard, setSelectedCard] = React.useState({
      name: '',
      link: '',
      isOpen: false
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

  function handleCardClick({name, link}) {
    setSelectedCard({
      name: name,
      link: link,
      isOpen: true
    });
  }

  function closeAllPopups() {
    setIsOpen({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false
    });

    setSelectedCard({
      name: '',
      link: '',
      isOpen: false
    });
  }

  React.useEffect(() => {
    Api.getUserInfo()
      .then(userData => {
        setCurrentUser({
          name: userData.name,
          about: userData.about,
          avatar: userData.avatar
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* Попап профайла */}
      <PopupWithForm
        isOpen={isOpen.isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
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
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
