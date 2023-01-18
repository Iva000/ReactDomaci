import "./Home.css";

function Home({ home }) {
  return (
    <div className="full-screen">
      <div className="container">
        <h1>{home.title}</h1>
        <p>{home.desc}</p>
      </div>
    </div>
  );
}

export default Home;
