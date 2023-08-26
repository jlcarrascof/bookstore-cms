import iconImage from '../tools/icon-user.svg';

const Navbar = () => (
  <>
    <h1 className="title">Bookstore CMS</h1>
    <ul className="navbar">
      <li><a className="active" href="/">BOOKS</a></li>
      <li><a href="/categories">CATEGORIES</a></li>
    </ul>
    <button className="button-right" type="button">
      <img src={iconImage} alt="Icon" />
    </button>
  </>
);

export default Navbar;
