import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Euclides from "../components/Euclides";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Algoritmo de Euclides</title>
        <meta name="description" content="Criado pro Marcelo Crístian" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Algoritmo de Euclides</h1>

        <p className={styles.description}>Deselvolvido por Marcelo Crístian</p>

        <div className={styles.content}>
          <p className={styles.theory}>
            {
              "Suponha que nos são dados dois inteiros positivos a e b, e desejamos achar seu máximo divisor comum."
            }
            {<br />}
            {<br />}
            {"Se a > b então trocamos a por b e vice-versa."} {<br />} {<br />}
            {
              "Se a > 0, dividimos b por a, para obter um resto r. Substituimos b por r e retornamos ao passo 1."
            }{" "}
            {<br />} {<br />}
            {"Senão (se a = 0), retornamos b como o m.d.c. e paramos."}
          </p>
          <div className={styles.algoBox}>{Euclides()}</div>
          <p className={styles.instruction}>
            Apenas coloque os números de a e b para calcular o mdc entre eles
            com o algoritmo de Euclides!
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/srcmarcelo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          srcmarcelo{" "}
          <span className={styles.logo}>
            <Image
              src="/icons8-linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
