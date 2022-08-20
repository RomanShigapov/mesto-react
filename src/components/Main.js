import React from "react";
import Api from '../utils/Api';
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

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
    <main className="content page-section">
      <section className="profile" aria-label="Секция профиля пользователя">
        <button onClick={props.onEditAvatar} className="profile__replace-avatar" type="button">
          <img className="profile__avatar" src={currentUser.avatar} alt="аватар"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button onClick={props.onEditProfile} className="profile__edit-button button button_opacity_main" type="button" aria-label="вызов формы редактирования профиля"></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
          <button onClick={props.onAddPlace} className="profile__add-button button button_opacity_main" type="button" aria-label="выхов формы добавления карточки места"></button>
      </section>
      <section className="places" aria-label="Секция карточек мест">
        <ul className="places__grid-items">
          {cards.map(card => {
            return <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
