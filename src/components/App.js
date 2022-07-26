import { useState, useEffect } from 'react';
import Api from '../utils/Api';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardConfirmationPopup from './DeleteCardConfirmationPopup';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import defaultAvatar from '../images/profile.jpg';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: 'Загрузка...',
    about: '...данных',
    avatar: defaultAvatar,
    _id: ''
  });

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardConfirmationPopupOpen, setIsDeleteCardConfirmationPopup] = useState(false);

  const [selectedCard, setSelectedCard] = useState({
      name: '',
      link: '',
      isOpen: false,
      _id: ''
  });

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isDeleteCardConfirmationPopupOpen || selectedCard.isOpen;

  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    Api.setCardLike(card._id, !isLiked)
      .then((retCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? retCard : item));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    setIsLoading(true);
    Api.deleteCard(card._id)
    .then((res) => {
        setCards((state) => state.filter((item) => {return item._id !== card._id;}))

        closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoading(false));
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardDeleteClick(card) {
    setIsDeleteCardConfirmationPopup(true);
    setSelectedCard(card);
  }

  function handleCardClick({name, link}) {
    setSelectedCard({
      name: name,
      link: link,
      isOpen: true
    });
  }

  function handleUpdateUser({name, about}) {
    setIsLoading(true);
    Api.setUserInfo({name, about})
    .then(user => {
      setCurrentUser(user);

      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoading(false));
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    Api.setUserPic(avatar)
    .then(user => {
      setCurrentUser(user);

      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoading(false));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardConfirmationPopup(false);

    setSelectedCard({
      name: '',
      link: '',
      isOpen: false
    });
  }

  function handleAddPlace({ name, link }) {
    setIsLoading(true);
    Api.addCard({ name, link })
    .then((card) => {
      setCards([card, ...cards]);

      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    Api.getUserInfo()
      .then(user => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  useEffect(() => {
    Api.getCardsList()
      .then(cards => {
        setCards([...cards])
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDeleteClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />
        <DeleteCardConfirmationPopup
          isOpen={isDeleteCardConfirmationPopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleCardDelete}
          isLoading={isLoading}
          card={selectedCard}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
