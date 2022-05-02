import { Route, Routes, matchRoutes } from "react-router-dom";

import NewMeetup from "./pages/NewMeetup";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />

      <Routes>
        <Route path="/" exact element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>

      {/* <Route path="/">
        <AllMeetups />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
      <Route path="/favourites">
        <Favourites />
      </Route> */}
    </div>
  );
}
export default App;
