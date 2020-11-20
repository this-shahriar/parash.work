import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import Head from "next/head";

export default function Home() {
  return (
    <html>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shahriar Hasan Parash</title>
      </Head>
      <div className="app">
        {/* <Header /> */}
        <div className="container">
          <Intro />
        </div>
      </div>
    </html>
  );
}
