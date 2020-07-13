import React from 'react';
import PropTypes from 'prop-types';
import {useLocation, matchPath} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";

const Header = ({onLogoClick, accountName}) => {
  const location = useLocation();
  const match = matchPath(location.pathname, {
    path: `/details`,
    exact: true
  });
  const isActiveLink = match === null;

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className={`header__logo-link ${isActiveLink ? `header__logo-link--active` : ``}`} onClick={() => onLogoClick()}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                {accountName ? <span className="header__user-name user__name">{accountName}</span> :
                  <span className="header__login">Sign in</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  accountName: PropTypes.string
};

const mapStateToProps = (state) => ({
  accountName: state.accountName
});

const mapDispatchToProps = (dispatch) => ({
  onLogoClick() {
    dispatch(ActionCreator.backToMain());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
