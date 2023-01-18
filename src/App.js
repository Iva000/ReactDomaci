import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './navBar'
import Tickets from './tickets'
import Home from './home'
import Images from './imagesPacked'
import { useState } from 'react'
import Cart from './cart'
import Search from './Search'

function App() {
  const home = {
    title: 'Dobrodošli u nas Zoo vrt!',
    desc:
      'Naš cilj je da očuvamo divljinu i inspirišemo i druge da očuvanje postane njihov prioritet!',
  }

  const addToCart = (id) => {
    tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.amount = ticket.amount + 1
        const cN = cartNum + 1
        setCartNum(cN)
        refreshCart()
        console.log('ticket.id=', ticket.id, 'amount=', ticket.amount)
      }
    })
  }

  const removeFromCart = (id) => {
    tickets.map((ticket) => {
      if (ticket.id === id) {
        if (ticket.amount > 0) {
          ticket.amount = ticket.amount - 1
          const cN = cartNum - 1
          setCartNum(cN)
          refreshCart()
          console.log('ticket.id=', ticket.id, 'amount=', ticket.amount)
        } else {
          alert('Kolicina karata je vec na nuli.')
        }
      }
    })
  }

  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Grupna karta',
      img: Images.grupna,
      description:
        'Grupna karta se moze uzeti u slucaju kada se u grupi nalazi 10 ili vise osoba i tada cena jedne karte iznosi 100rsd',
      price: 100,
      amount: 0,
    },
    {
      id: 2,
      title: 'Pojedinacna karta',
      img: Images.pojedinacna,
      description: 'Cena pojedinacne karte iznosi 250rsd.',
      price: 250,
      amount: 0,
    },
    {
      id: 3,
      title: 'Porodicna karta',
      img: Images.porodicna,
      description:
        'Porodicna karta se moze uzeti u slucaju da porodica ima barem 3 clana i tada je karta po osobi 150rsd.',
      price: 150,
      amount: 0,
    },
    {
      id: 4,
      title: 'Studentska karta',
      img: Images.studentska,
      description: 'Studentska karta se moze uzeti jedino uz pokazan indeks.',
      price: 150,
      amount: 0,
    },
  ])

  const [cartNum, setCartNum] = useState(0)

  const [cartProducts, setCartProducts] = useState([])

  const refreshCart = () => {
    const newTickets = tickets.filter((ticket) => ticket.amount > 0)
    setCartProducts(newTickets)
  }

  const animals = [
    {
      id: 1,
      title: 'Panda',
      description:
        'Velika panda ili džinovska panda je krupni sisar iz porodice medveda, poreklom iz centralno-zapadne i jugozapadne Kine. Lako se prepoznaje po upadljivim crnim oznakama oko očiju, na ušima i preko svog zaobljenog tela. Iako pripada redu zveri, koje karakteriše ishrana mesom, džinovska panda se u 99% slučajeva hrani mladicama i listovima bambusa.',
      img: Images.panda,
    },
    {
      id: 2,
      title: 'Crvena panda',
      description:
        'Crena ili mala panda je sisar koji obitava na prostoru istočnih Himalaja i na jugozapadu Kine, a pretežno se hrani bambusom. Od 2008. mali panda nalazi se na Crvenom popisu ugroženih vrsta Međunarodne unije za zaštitu prirode i prirodnih resursa u kategoriji osjetljivi. Prema procjenama na slobodi živi manje od 10 000 odraslih jedinki.',
      img: Images.cpanda,
    },
    {
      id: 3,
      title: 'Vidra',
      description:
        'Vidre imaju gipko i vrlo pokretno telo. Građa tela im je izuzetno osposobljena za ronjenje. U vodi mogu da izdrže izuzetno dugo, a za hvatanje plena se služe oštrim i snažnim zubima. Mladunci nauče da plivaju za oko 80 dana, kada im krzno dovoljno poraste i postane vodootporno. Pre toga oni su jako nevešti u vodi zbog mekog krzna i praktično se boje vode, tako da ih u periodu kada treba da počnu da plivaju majka najčešće na silu gura u vodu dok ne nauče.',
      img: Images.vidra,
    },
    {
      id: 4,
      title: 'Slon',
      description:
        'Slonovi su velike životinje iz familije Elephantidae iz reda Proboscidea. Tri vrste su trenutno priznate: afrički slon, afrički šumski slon, i azijski slon. Stanište slonova se prostire širom podsaharijske Afrike, južne Azije, i jugoistočne Azije.',
      img: Images.slon,
    },
    {
      id: 5,
      title: 'Zirafa',
      description:
        'Severna žirafa, takođe poznata kao troroga žirafa, je predložena vrsta žirafe koja obitava u Severnoj Africi. Nekada izobilna širom Afrike od 19. veka, ona ima opseg od Senegala, Malija i Nigerije od Zapadne Afrike do severa u Egiptu.[3] Zapadnoafričke žirafe su nekada živele u Alžiru i Maroku u drevnim periodima do njihovog izumiranja zbog saharske suve klime. Ona je izolovana u Južnom Sudanu, Keniji, Čadu i Nigeru.',
      img: Images.zirafa,
    },
    {
      id: 6,
      title: 'Krokodil',
      description:
        'Krokodili su red tropskih grabljivaca. Uz ptice, to su jedini do danas preživeli „potomci“ velike grupe gmizavaca, Archosauria. Prema tome, njihovi recentni najbliži srodnici su ptice. Njihovo je srodstvo dokazivo čitavim nizom osobina, ali pre svega građom sistema za cirkulaciju krvi. Zbog koštanog oklopa, krokodile nazivaju i oklopljenim gušterima.',
      img: Images.krokodil,
    },
    {
      id: 7,
      title: 'Koala',
      description:
        'Koala (lat. Phascolarctos cinereus) je australijski torbarski biljojed i jedini živi predstavnik istoimene porodice Phascolarctidae. Naseljava obalska područja istočne i južne Australije, od okoline Adelejda do južnih delova rta Jork. Koale su intenzivno lovljene u 19. veku, zbog trgovine krznom, što je dovelo do lokalnog izumiranja vrste',
      img: Images.koala,
    },
    {
      id: 8,
      title: 'Mrki medved',
      description:
        'Mrki medved (lat. Ursus arctos), vrsta je zveri iz porodice medveda, široko rasprostranjena u severnoj Evroaziji i Severnoj Americi. U Severnoj Americi populacije smeđih medveda često se nazivaju grizli. Jedan je od najvećih živih zemaljskih pripadnika reda Carnivora, čiji je rival po veličini samo njegov najbliži srodnik, polarni medved (Ursus maritimus), koji je mnogo manje varijabilan po veličini i nešto veći u proseku.',
      img: Images.medved,
    },
    {
      id: 9,
      title: 'Kengur',
      description:
        'Kengur (lat. Macropus) je rod torbara iz porodice kengura i valabija (Macropodidae). U opštoj upotrebi, naziv se koristi da se opišu najveće vrste iz ove porodice: crveni, antilopski i istočni i zapadni sivi kengur iz roda Macropus. Porodica takođe uključuje i manje vrste, kao što su valabiji i kenguri penjači (žive na drveću), ukupno oko 63 vrsta ovih torbara. Kenguri su endemski rod jer žive samo u Australiji, dok manji makropodi žive u Australiji i Novoj Gvineji',
      img: Images.kengur,
    },
  ]

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home home={home} />} />
        <Route
          path="/tickets"
          element={
            <Tickets
              tickets={tickets}
              onAdd={addToCart}
              onRemove={removeFromCart}
              cartNum={cartNum}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartProducts={cartProducts}
              onAdd={addToCart}
              onRemove={removeFromCart}
            />
          }
        />
        <Route path="/Search" element={<Search details={animals} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
