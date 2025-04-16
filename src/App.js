import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Hero highlight">
          <h1>Welcome to Wordly Wise</h1>
          <h4>Your cozy corner for magical definitions and whimsical words.</h4>
        </div>
        <main>
          <Dictionary />
          
        </main>
        <Footer />
      </div>
    </div>
  );
}
