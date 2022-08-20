import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `card__delete-button button button_opacity_main ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `card__like-button button button_opacity_low ${isLiked ? 'card__like-button_liked' : ''}`
  );

  function handleClick() {
    onCardClick(card);
  }

  return(
    <li className="card">
      <img onClick={handleClick} className="card__picture" src={card.link} alt={card.name} title="" />
      <button className={cardDeleteButtonClassName}></button>
      <div className="card__description">
        <h2 className="card__caption">{card.name}</h2>
        <div className="card__like-block">
          <button className={cardLikeButtonClassName} type="button" aria-label="кнопка лайк на карточке"></button>
          <span className="card__likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;