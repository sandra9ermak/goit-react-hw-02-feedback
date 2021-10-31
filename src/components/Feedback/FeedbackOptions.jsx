import styles from "./Feedback.module.css";

const FeedbackOptions = ({ onLeaveFeedback, name}) => {
    return (
      <div>
        {name.map((item, id) => (
          <button key={id} type="button" onClick={onLeaveFeedback} name={item} className={styles.button}>
            {item}
          </button>
        ))}
      </div>
    )
}
  
export default FeedbackOptions;