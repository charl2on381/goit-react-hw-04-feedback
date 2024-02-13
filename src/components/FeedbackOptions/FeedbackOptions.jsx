import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.buttons}>
    {options.map(option => (
      <button
        type="button"
        onClick={() => onLeaveFeedback(option)}
        className={s[`btn_${option}`]}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
