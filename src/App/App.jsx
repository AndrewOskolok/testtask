import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import ModalMenu from "../Components/ModalMenu/ModalMenu";
import { setToken } from "../redux/actions/tokenAction";
import "./App.scss";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

function App() {
  const dispatch = useDispatch();

  const getToken = async (page) => {
    try {
      const request = await axios.get(`/token`);
      dispatch(setToken(request.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

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
