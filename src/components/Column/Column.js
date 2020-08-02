import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        one: PropTypes.node, 
        two: PropTypes.node,
        three: PropTypes.node,
    }
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.one}</h3>
                <h3 className={styles.title}>{this.props.two}</h3>
                <h3 className={styles.title}>{this.props.three}</h3>
            </section>
        )
    }
}

export default Column;