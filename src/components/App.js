import React from 'react';
import Api from '../utils/Api';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import defaultAvatar from '../images/profile.jpg';

function App() {

  const avatarRef = React.useRef();

  const [currentUser, setCurrentUser] = React.useState({
    name: 'Загрузка...',
    about: '...данных',
    avatar: defaultAvatar,
    _id: ''
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

  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    Api.setCardLike(card._id, !isLiked)
      .then((retCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? retCard : item));
      });
  }

  function handleCardDelete(card) {
    Api.deleteCard(card._id)
    .then((newCard) => {
        setCards((state) => state.filter((item) => {return item._id !== card._id;}))
    });
  }

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

  function handleUpdateUser({name, about}) {
    Api.setUserInfo({name, about})
    .then(user => {
      setCurrentUser({
        ...currentUser,
        name: user.name,
        about: user.about
      });
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(avatar) {
    Api.setUserPic(avatar)
    .then(user => {
      avatarRef.current.src = user.avatar;

      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
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

  function handleAddPlace({ name, link }) {
    Api.addCard({ name, link })
    .then((card) => {
      setCards([card, ...cards]);

      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    Api.getUserInfo()
      .then(user => {
        setCurrentUser({
          name: user.name,
          about: user.about,
          avatar: user.avatar,
          _id: user._id
        });
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  React.useEffect(() => {
    Api.getCardsList()
      .then(cards => {
        setCards([...cards])
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          avatarRef={avatarRef}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isOpen.isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isOpen.isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />
        <EditAvatarPopup
          isOpen={isOpen.isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
