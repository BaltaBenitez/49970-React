import CardsContainer from "./componets/CardContainer/CardsContainer"
import Footer from "./componets/Footer"
import Header from "./componets/Header"
import ItemDetailContainer from "./componets/ItemDetailContainer";
import ItemListContainer from "./componets/ItemListContainer";
import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<CardsContainer />}/>
          <Route path={"/contenido"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;
