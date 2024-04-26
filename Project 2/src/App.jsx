import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/ContactFormHeader/Header.jsx";
import Form from "./Components/ConatctFrom/Form.jsx";
function App() {
  return (
    <>
      <Navbar />
      <main className="main_container">
        <Header />
        <Form />
      </main>
    </>
  );
}

export default App;
