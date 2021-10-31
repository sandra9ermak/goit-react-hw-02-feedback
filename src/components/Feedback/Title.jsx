import styles from "./Feedback.module.css";

const Title = ({ title, children }) => {
    return (
        <div>
        <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}

export default Title;