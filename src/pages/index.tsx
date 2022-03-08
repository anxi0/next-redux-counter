import { RootState } from "@store/.";
import { Counter } from "@store/modules/counter";
import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@store/modules/counter";
import styles from "../assets/styles/Home.module.css";

const Home: NextPage = () => {
  const counter = useSelector<RootState, Counter>((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Counter App</title>
        <meta
          name="description"
          content="Useful boilerplate written in next.ts"
        />
        <link rel="icon" href="/next.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.count}>{counter.count}</div>
        <div>
          <button
            className={styles.count_button}
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className={styles.count_button}
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
