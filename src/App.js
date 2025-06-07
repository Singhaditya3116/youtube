import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

/**
 * Header
 * Body
 *  -Sidebar
 *  -MainContainer
 *    -ButtonList
 *    -VideoContainer
 *      -VideoCard
 *
 *
 */

function App() {
  return (
    <Provider store={store}>
      <div className="main-wrapper">
        <Header />
        <Outlet />
      </div>
        <Footer />
    </Provider>
  );
}

export default App;
