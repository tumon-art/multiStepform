import useStore from "../store/mainStore";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ childrenArray }: any) => {
  const { step } = useStore();

  const css = () => {
    if (step == 0) {
      return { width: "0%" };
    }
    if (step == 1) {
      return { width: "50%" };
    }
    if (step == 2) {
      return { width: "96%" };
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.roundHold}>
        <div className={styles.progress}></div>
        <div style={css()} className={styles.progressFill}></div>

        {childrenArray.map((e: [], i: any) => {
          return (
            <div
              key={i}
              className={`${step >= i ? styles.round__color : styles.round}`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default ProgressBar;
