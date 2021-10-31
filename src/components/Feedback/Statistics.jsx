import styles from "./Feedback.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
      <div>
        <ul>
          <li className={styles.liItem}>Good: {good}</li>
          <li className={styles.liItem}>Neutral: {neutral}</li>
          <li className={styles.liItem}>Bad: {bad}</li>
          <li className={styles.liItem}>Total: {total}</li>
          <li className={styles.liItem}>Positive feedback: {positivePercentage}</li>
        </ul>
      </div>
  );
};

export default Statistics;
