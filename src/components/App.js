import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <body className="root">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_profile popup_overlay-opacity_main">
        <div className="popup__container">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть форму редактирования профиля"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profile-form">
            <fieldset className="popup__form-inputs">
              <div className="popup__form-container">
                <input className="popup__form-input popup__form-input_profile-name" name="name" placeholder="Введите имя профиля" type="text" required minlength="2" maxlength="40" />
                <span className="popup__form-input-error name-error"></span>
              </div>
              <div className="popup__form-container">
                <input className="popup__form-input popup__form-input_profile-description" name="description" placeholder="Введите род деятельности" type="text" required minlength="2" maxlength="200" />
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
                <input className="popup__form-input popup__form-input_new-card-name" name="name" placeholder="Название" type="text" required minlength="2" maxlength="30" />
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
      <div className="popup popup_picture popup_overlay-opacity_high">
        <figure className="popup__image-container">
          <button className="popup__close-button button button_opacity_main" type="button" aria-label="кнопка закрыть просмотр изображения"></button>
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
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
      <template className="new-card">
        <li className="card">
          <img className="card__picture" src="#" alt="" title="" />
          <button className="card__delete-button button button_opacity_main"></button>
          <div className="card__description">
            <h2 className="card__caption"></h2>
            <div className="card__like-block">
              <button className="card__like-button button button_opacity_low" type="button" aria-label="кнопка лайк на карточке"></button>
              <span className="card__likes">0</span>
            </div>
          </div>
        </li>
      </template>
  </body>
  );
}

export default App;