import "./nav.css";

export const Nav = (props) => {
  const { activityCount } = props;

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item nav__item--current">
          <a className="nav__link" href="#home">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#documentation">
            Documentation
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="activity">
            Activity{" "}
            {!!activityCount && (
              <span className="activity__count">{activityCount}</span>
            )}
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#about_us">
            About us
          </a>
        </li>
      </ul>
    </nav>
  );
};
