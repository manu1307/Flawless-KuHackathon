import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./Router";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Router />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
