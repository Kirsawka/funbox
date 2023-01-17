import data from '../../data.json';
import Card from '../Card';
import styles from './styles.module.css';

function Cards() {
  return (
    <div className={styles['card-list']}>
      {data.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
}

export default Cards;
