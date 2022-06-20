import styles from "./Img.module.css";
const Img = ({ name, onClick }) => {
  return (
    <img
      className={`${styles.image}`}
      src={require(`assets/${name}.svg`)}
      alt={`${name}`}
      onClick={onClick}
    ></img>
  );
};

export default Img;
