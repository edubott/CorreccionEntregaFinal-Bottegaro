import { Navbar } from "./componentes/Navbar/Navbar";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Cursando react 2023"} />
    </div>
  );
}

export default App;
