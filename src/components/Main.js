function Main() {
  return (
    <main className="content page-section">
      <section className="profile" aria-label="Секция профиля пользователя">
        <button className="profile__replace-avatar" type="button">
          <img className="profile__avatar" src="../images/profile.jpg" alt="аватар"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Загрузка...</h1>
          <button className="profile__edit-button button button_opacity_main" type="button" aria-label="вызов формы редактирования профиля"></button>
          <p className="profile__description"></p>
        </div>
          <button className="profile__add-button button button_opacity_main" type="button" aria-label="выхов формы добавления карточки места"></button>
      </section>
      <section className="places" aria-label="Секция карточек мест">
        <ul className="places__grid-items">
        </ul>
      </section>
    </main>
  );
}
    
export default Main;