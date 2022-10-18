import styles from "./Section.module.css";

function Section(props) {
  if (props.image) {
    return (
      <section
        style={{
          backgroundImage: `url('${props.image}')`,
          backgroundSize: "100% 100%",
          backgroundBlendMode: `${props.blendMode || "multiply"}`,
        }}
        className={styles.section}
        id={props.id}
      >
        {props.children}
      </section>
    );
  }
  return (
    <div id={props.id} className={styles.section}>
      {props.children}
    </div>
  );
}

export default Section;
