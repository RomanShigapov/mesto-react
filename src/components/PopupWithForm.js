function PopupWithForm(props) {
    return (
    <>
      <div className="popup popup_profile popup_overlay-opacity_main">
        <div className="popup__container">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть форму редактирования профиля"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profile-form">
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
            <button className="popup__form-save-button button button_opacity_high" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_new-card popup_overlay-opacity_main">
        <div className="popup__container ">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть форму добавления новой карточки"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="new-card-form">
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
            <button className="popup__form-save-button button button_opacity_high" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_replace-avatar popup_overlay-opacity_main">
        <div className="popup__container ">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть форму оновления аватара"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="replace-avatar-form">
            <fieldset className="popup__form-inputs">
              <div className="popup__form-container">
                <input className="popup__form-input popup__form-input_new-card-image-link" name="link" placeholder="Ссылка на картинку" type="url" required />
                <span className="popup__form-input-error link-error"></span>
              </div>
            </fieldset>
            <button className="popup__form-save-button button button_opacity_high" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_delete-card popup_overlay-opacity_high">
        <div className="popup__container">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть форму удаления карточки"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="delete-card-confirmation-form">
            <button className="popup__form-save-button button button_opacity_high" type="submit">Да</button>
          </form>
        </div>
      </div>
    </>
    );
}

export default PopupWithForm;
