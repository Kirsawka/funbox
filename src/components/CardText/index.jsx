import PropTypes from 'prop-types';
import styles from './styles.module.css';

function CardText({ selectedState, defaultState, disabledState, selectCard, ...card }) {
  return (
    <>
      {defaultState && (
        <p className={styles.card__text}>
          Чего сидишь? Порадуй котэ,{' '}
          <span className={styles.card__buy} onClick={selectCard}>
            купи
          </span>
          .
        </p>
      )}
      {selectedState && <p className={styles.card__text}>{card.selectedText}</p>}
      {disabledState && (
        <p className={`${styles.card__text} ${styles.card__text_disabled}`}>{card.disabledText}</p>
      )}
    </>
  );
}

CardText.propTypes = {
  selectCard: PropTypes.func,
  defaultState: PropTypes.bool,
  selectedState: PropTypes.bool,
  disabledState: PropTypes.bool,
};

export default CardText;
