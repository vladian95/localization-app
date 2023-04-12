import { navLinks } from '../constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav>
      <ul className="navbar-ul">
        {navLinks.map((list) => (
          <li key={list.id}>
            <a href={`#${list.id}`}>{t(`navLinks.${list.id}.title`)}</a>
          </li>
        ))}
      </ul>
      <div className="btnBox">
        <button onClick={() => changeLanguage('en')}>eng</button>
        <button onClick={() => changeLanguage('ru')}>rus</button>
      </div>
    </nav>
  );
};

export default Navbar;
