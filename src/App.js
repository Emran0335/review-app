import Review from "./components/Review.jsx";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviws</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
