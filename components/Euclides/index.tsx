import styles from "../../styles/Euclides.module.css";

export default function Euclides() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{"mdc(a, b) = ?"}</h1>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <span>Valor de a:</span>{" "}
          <input type="number" name="ainput" id="ainput" />
        </div>
        <div className={styles.input}>
          <span>Valor de b:</span>{" "}
          <input type="number" name="binput" id="binput" />
        </div>
      </div>
    </div>
  );
}
