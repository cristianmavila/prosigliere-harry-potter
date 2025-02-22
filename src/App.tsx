import { Route, Routes } from "react-router-dom";

import Nav from "@/components/nav";
import Staff from "@/pages/staff";
import Students from "@/pages/students";
import Favorites from "@/pages/favorites";
import Characters from "@/pages/characters";
import CharactersDetail from "@/pages/character-detail";

const App = () => {
  return (
    <>
      <Nav />
      <div className="container p-5 ">
        <Routes>
          <Route index element={<Characters />} />
          <Route path="/students" element={<Students />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/character/:id" element={<CharactersDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
