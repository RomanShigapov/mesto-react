function PopupWithForm(props) {
    return (
      <div className={`popup popup_${props.name} popup_overlay-opacity_main ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <button  onClick={props.onClose} className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть форму редактирования профиля"></button>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={`${props.name}-form`} onSubmit={props.onSubmit}>
            {props.children}
            <button className="popup__form-save-button button button_opacity_high" type="submit">{props.button}</button>
          </form>
        </div>
      </div>
    );
}

export default PopupWithForm;
