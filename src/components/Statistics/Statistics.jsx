import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => (
  <>
    <div className={s.container}>
      <div className={s.stat}>
        <h3>Good</h3>
        <p className={s.number_good}>{good}</p>
      </div>
      <div className={s.stat}>
        <h3>Neutral</h3>
        <p className={s.number_neutral}>{neutral}</p>
      </div>
      <div className={s.stat}>
        <h3>Bad</h3>
        <p className={s.number_bad}>{bad}</p>
      </div>
    </div>
    <div className={s.container}>
      <div className={s.stat}>
        <h3>Total</h3>
        <p className={s.number_total}>{total}</p>
      </div>
      <div className={s.stat}>
        <h3>Positive feedback</h3>
        <p className={s.number_good}>{positivePercent}%</p>
      </div>
    </div>
  </>
);

export default Statistics;
