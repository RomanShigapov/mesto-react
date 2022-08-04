import React from "react";
import defaultAvatar from '../images/profile.jpg';
import Api from '../utils/Api';

function Main(props) {

  const [userName, setUserName] = React.useState('Загрузка...');
  const [userDescription, setUserDescription] = React.useState('...данных');
  const [userAvatar, setUserAvatar] = React.useState(defaultAvatar);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getUserInfo()
      .then(userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      })

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
          <img className="profile__avatar" src={userAvatar} alt="аватар"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button onClick={props.onEditProfile} className="profile__edit-button button button_opacity_main" type="button" aria-label="вызов формы редактирования профиля"></button>
          <p className="profile__description">{userDescription}</p>
        </div>
          <button onClick={props.onAddPlace} className="profile__add-button button button_opacity_main" type="button" aria-label="выхов формы добавления карточки места"></button>
      </section>
      <section className="places" aria-label="Секция карточек мест">
        <ul className="places__grid-items">
          {cards.map(card => {
            return (
            <li className="card" key={card._id}>
              <img className="card__picture" src={card.link} alt={card.name} title="" />
              <button className="card__delete-button button button_opacity_main"></button>
              <div className="card__description">
                <h2 className="card__caption">{card.name}</h2>
                <div className="card__like-block">
                  <button className="card__like-button button button_opacity_low" type="button" aria-label="кнопка лайк на карточке"></button>
                  <span className="card__likes">{card.likes.length}</span>
                </div>
              </div>
            </li>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
