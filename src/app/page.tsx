import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>header</header>
      <main className={styles.main}>Hi</main>
      <footer>footer</footer>
    </div>
  );
}
