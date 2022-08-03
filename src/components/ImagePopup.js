function ImagePopup() {
  return (
    <div className="popup popup_picture popup_overlay-opacity_high">
      <figure className="popup__image-container">
        <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть просмотр изображения"></button>
        <img className="popup__image" src="#" alt="" />
        <figcaption className="popup__image-caption"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
