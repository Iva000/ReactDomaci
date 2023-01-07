import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./navBar";
import Tickets from "./tickets";
import Home from "./home";
import Images from "./imagesPacked";


const home ={
  title: "Dobrodosli u nas Zoo vrt!",
  desc: "Nas cilj je da ocuvamo divljinu i inspirisemo i druge da ocuvanje postane njihov prioritet!"
};

const tickets = [
  {
    id:1,
    title: "Grupna karta",
    img: Images.grupna,
    description:"Grupna karta se moze uzeti u slucaju kada se u grupi nalazi 10 ili vise osoba i tada cena jedne karte iznosi 100rsd",
    price: 100,
    amount:0,
  },
  {
    id:2,
    title: "Pojedinacna karta",
    img: Images.pojedinacna,
    description:"Cena pojedinacne karte iznosi 250rsd.",
    price: 250,
    amount:0,
  },
  {
    id:3,
    title: "Porodicna karta",
    img: Images.porodicna,
    description:"Porodicna karta se moze uzeti u slucaju da porodica ima barem 3 clana i tada je karta po osobi 150rsd.",
    price: 150,
    amount:0,
  },
  {
    id:4,
    title: "Studentska karta",
    img: Images.studentska,
    description:"Studentska karta se moze uzeti jedino uz pokazan indeks.",
    price: 150,
    amount:0,
  }

];

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home home ={home}/>}/>
      <Route path="/tickets" element={<Tickets tickets={tickets}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
