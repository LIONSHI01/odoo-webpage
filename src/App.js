import "./App.css";

import {
  Navbar,
  Hero,
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  Footer,
  Solutions,
  Awards,
  CTA,
  FAQ,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section>
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        </section>
        <Solutions />
        <Awards />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
