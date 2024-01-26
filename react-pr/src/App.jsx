import CardsContainer from "./componets/CardsContainer";
import Footer from "./componets/Footer"
import Header from "./componets/Header"
//import ItemListContainer from "./componets/ItemListContainer";
import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {//tres productos por cada equipo
  return (
    <BrowserRouter>
      <Header />
      {/* <ItemListContainer greeting={"Disculpe la pagina se esta creando."}/> */}
      <Routes>
        <Route></Route>
      </Routes>
      <CardsContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
