import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import ModalMenu from "../Components/ModalMenu/ModalMenu";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />

      <ModalMenu />
    </div>
  );
}

export default App;
