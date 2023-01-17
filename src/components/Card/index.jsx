import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import CardText from '../CardText';

function Card({ ...card }) {
  const [defaultState, setDefaultState] = useState(true);
  const [selectedState, setSelectedState] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const selectCardHandler = () => {
    setSelectedState(!selectedState);
    setDefaultState(!defaultState);
  };
  const hoverCardHandler = () => {
    if (selectedState) setHovered(true);
  };
  const leaveCardHandler = () => {
    if (selectedState) {
      cardRef.current.classList.add(`${styles.hover}`);
    } else {
      cardRef.current.classList.remove(`${styles.hover}`);
    }
    setHovered(false);
  };

  useEffect(() => {
    if (card.disabled) {
      cardRef.current.classList.add(`${styles.disabled}`);
      setDefaultState(false);
    }
  }, []);

  return (
    <div
      className={selectedState ? `${styles.card} ${styles.selected}` : styles.card}
      ref={cardRef}
      onMouseLeave={leaveCardHandler}
      onMouseEnter={hoverCardHandler}>
      <div
        className={
          selectedState ? `${styles.card__border} ${styles.selected}` : styles.card__border
        }>
        <div className={styles.card__inner} onClick={selectCardHandler}>
          <p
            className={
              hovered
                ? `${styles.card__subtitle} ${styles.card__subtitle_hovered}`
                : styles.card__subtitle
            }>
            {hovered ? 'Котэ не одобряет?' : 'Сказочное заморское явство'}
          </p>
          <h2 className={styles.card__title}>{card.brand}</h2>
          <p className={styles.card__taste}>{card.taste}</p>
          <p className={styles.card__present}>
            <span className={styles.card__presentCount}>{card.portions}</span> порций
          </p>
          {card.presentCount && (
            <span className={styles.card__presentCount}>{card.presentCount}</span>
          )}
          <span className={styles.card__present}> {card.presentText}</span>
          {card.presentSecondText && (
            <p className={styles.card__present}>{card.presentSecondText}</p>
          )}
          <div className={selectedState ? `${styles.circle} ${styles.selected}` : styles.circle}>
            <span className={styles.circle__text}>{card.weight}</span>
            <span className={styles.circle__text}>кг</span>
          </div>
        </div>
      </div>
      <CardText
        defaultState={defaultState}
        selectedState={selectedState}
        disabledState={card.disabled}
        selectCard={selectCardHandler}
        {...card}
      />
    </div>
  );
}

export default Card;
