import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet } from "react-router-dom";

/**
 * Header
 * Body
 *  -Sidebar
 *    -MenuItems
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
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
