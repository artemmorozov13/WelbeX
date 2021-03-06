import Filters from "Components/Filters/Filters";
import Header from "Components/Header/Header";
import Table from "Components/Table/Table";
import type { NextPage } from "next";
import Head from "next/head";

import s from "styles/pages/Index.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={s.main}>
        <Filters />
        <Table />
      </div>
    </div>
  );
};

export default Home;
