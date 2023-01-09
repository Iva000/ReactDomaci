import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./navBar";
import Tickets from "./tickets";
import Home from "./home";
import Images from "./imagesPacked";
import { useState } from "react";
import Cart from "./cart";



function App() {
  const home ={
    title: "Dobrodosli u nas Zoo vrt!",
    desc: "Nas cilj je da ocuvamo divljinu i inspirisemo i druge da ocuvanje postane njihov prioritet!"
  };
  
  const addToCart = (id) => {
    tickets.map((ticket)=>{ 
      if (ticket.id === id) {
        ticket.amount = ticket.amount + 1;
        const cN = cartNum + 1;
        setCartNum(cN);
        refreshCart();
        console.log("ticket.id=", ticket.id, "amount=", ticket.amount);
      }
    })
  };
  
  const removeFromCart = (id) => {
    tickets.map((ticket)=>{ 
      if (ticket.id === id) {
      if (ticket.amount > 0) {
        ticket.amount = ticket.amount - 1;
        const cN = cartNum - 1;
        setCartNum(cN);
        refreshCart();
        console.log("ticket.id=", ticket.id, "amount=", ticket.amount);
      } else {
        alert("Kolicina karata je vec na nuli.");
      }
    }}) 
     
    
  };

  const [tickets, setTickets] = useState ([
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
  
  ]);

  const [cartNum, setCartNum] = useState(0);

  const [cartProducts, setCartProducts] = useState([]);

  const refreshCart = () =>{
    const newTickets = tickets.filter((ticket) => ticket.amount>0);
    setCartProducts(newTickets);
  };

  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home home ={home}/>}/>
      <Route path="/tickets" element={<Tickets tickets={tickets} onAdd={addToCart} onRemove={removeFromCart} cartNum={cartNum}/>}/>
      <Route path ="/cart" element={<Cart cartProducts={cartProducts}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
