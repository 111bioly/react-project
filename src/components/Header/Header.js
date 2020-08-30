import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';


class Header extends React.Component {
  render(){
    return (
      <header className={styles.Component}>
        <Container>
          <div className={styles.wraper}>
            <Link to='/' className={styles.logo}>
              <Icon name='cat' />
            </Link>  
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
            
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;