import Router from "./Router";
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";
function App() {
  return (
    <>
      <header style={{ marginBottom: "50px" }}>
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
