function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return(
    <li className="card">
      <img onClick={handleClick} className="card__picture" src={card.link} alt={card.name} title="" />
      <button className="card__delete-button button button_opacity_main"></button>
      <div className="card__description">
        <h2 className="card__caption">{card.name}</h2>
        <div className="card__like-block">
          <button className="card__like-button button button_opacity_low" type="button" aria-label="кнопка лайк на карточке"></button>
          <span className="card__likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
