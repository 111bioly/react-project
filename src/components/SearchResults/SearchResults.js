import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.node, 
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {cards, title, icon} = this.props;
    return(
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>{title}
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))} 
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;