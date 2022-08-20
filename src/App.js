import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./Router";

function App() {
  return (
    <div className="h-screen">
      <header className="h-1/6">
        <Header />
      </header>
      <main className="h-5/6">
        <Router />
      </main>
      <footer className="h-1/6">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
