import styles from "./Section.module.css";

function Section(props) {
  if (props.image) {
    return (
      <section
        style={{
          backgroundImage: `url('${props.image}')`,
          backgroundSize: "100% 100%",
          backgroundBlendMode: `${props.blendMode || "multiply"}`,
          backgroundAttachment: "fixed",
        }}
        className={styles.section}
        id={props.id}
      >
        {props.children}
      </section>
    );
  }
  return (
    <section id={props.id} className={styles.section}>
      {props.children}
    </section>
  );
}

export default Section;
