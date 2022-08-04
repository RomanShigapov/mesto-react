function ImagePopup(props) {
  return (
    <div className={`popup popup_picture popup popup_overlay-opacity_high ${props.card.isOpen && 'popup_opened'}`}>
      <figure className="popup__image-container">
        <button onClick={props.onClose} className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть просмотр изображения"></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <figcaption className="popup__image-caption">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
