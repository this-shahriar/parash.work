import { Header } from "../components/Header";
import { Intro } from "../components/Intro";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Intro />
      </div>
    </div>
  );
}
