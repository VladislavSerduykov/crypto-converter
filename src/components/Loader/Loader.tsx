import styles from "./Loader.module.css";
type Props = {};

export default function Loader({}: Props) {
  return <div className={`${styles.custom_loader} `}></div>;
}
