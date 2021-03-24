import '../styles/components/header.scss';

function Header({ setModalActive }) {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__logo">
          <i className="header__icon fas fa-hotdog"/>
          CRUD
        </h1>
        <button className="header__button" onClick={() => setModalActive(true)}>Add hot-dog</button>
      </div>
    </div>
  )
}

export default Header;