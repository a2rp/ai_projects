import TicTacToe from "./ticTacToe";
import BackToTop from "./components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./App.css";

function App() {
  return (
    <div className="appShell">
      <SiteHeader />
      <main>
        <TicTacToe />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}

export default App;
