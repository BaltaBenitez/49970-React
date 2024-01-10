import CardsContainer from "./componets/CardsContainer";
import Footer from "./componets/Footer"
import Header from "./componets/Header"
import ItemListContainer from "./componets/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting={"Disculpe la pagina se esta creando. "}/>
      <CardsContainer />
      <Footer />
    </>
  )
}

export default App;
