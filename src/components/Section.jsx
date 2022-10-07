import styles from "./Section.module.css";

function Section(props) {
  if (props.image) {
    return (
      <div
        style={{
          backgroundImage: `url('${props.image}')`,
          backgroundSize: "100% 100%",
          backgroundBlendMode: "multiply",
        }}
        className={styles.section}
      >
        {props.children}
      </div>
    );
  }
  return <div className={styles.section}>{props.children}</div>;
}

export default Section;
