import CardsContainer from "./componets/CardContainer/CardsContainer"
import Cart from "./componets/Cart";
import Footer from "./componets/Footer"
import Header from "./componets/Header"
import ItemDetailContainer from "./componets/ItemDetailContainer";
import ItemListContainer from "./componets/ItemListContainer";
import CardContextProvaider from "./componets/context/CardContext";
import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (  
    <CardContextProvaider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<CardsContainer />}/>
          <Route path={"/contenido"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"/cart"} element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CardContextProvaider>
  )
}

export default App;
