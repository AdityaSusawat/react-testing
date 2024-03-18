import { Navbar } from "./components/Navbar";
import "./styles.css";
import { useState } from "react";

//import { ToDo } from "./components/ToDo";
//import { ToDo } then place return <ToDo /> in App() to get the To Do List

////import { Art } then place return <Art /> in App() to get the To Do List

function App() {
  const [form, setForm] = useState({
    name: "",
    genres: [],
    suggest: true,
    rating: "",
  });

  const handleNameChange = (e) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="games-content">
        <h1>Tell me about your favourite game</h1>
        <form action="/insert" method="post" onSubmit={handleSubmit}>
          <ul className="games-form">
            <li>
              <label htmlFor="name">Your favourite game</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleNameChange}
              />
            </li>
            <li>
              <label>What's the genre?</label>
              <input type="checkbox" id="action" name="genres" value="action" />
              <label htmlFor="action">Action</label>
              <input type="checkbox" id="rpg" name="genres" value="rpg" />
              <label htmlFor="rpg">RPG</label>
              <input type="checkbox" id="mmo" name="genres" value="mmo" />
              <label htmlFor="mmo">MMO</label>
              <input type="checkbox" id="sim" name="genres" value="sim" />
              <label htmlFor="sim">Sim</label>
            </li>
            <li>
              <label>Would you suggest this game?</label>
              <input type="radio" id="yes" value="yes" name="suggest" />
              <label htmlFor="yes">YES</label>
              <input type="radio" id="no" value="no" name="suggest" />
              <label htmlFor="no">NO</label>
            </li>
            <li>
              <label>How would you rate it?</label>
              <select name="rating" id="rating">
                <option value="1">1 🌟</option>
                <option value="2">2 🌟</option>
                <option value="3">3 🌟</option>
                <option value="4">4 🌟</option>
                <option value="5">5 🌟</option>
              </select>
              <button type="submit">SUBMIT</button>
            </li>
          </ul>
        </form>
        <h2>Your favourite game is {form.name} </h2>
        <h2>The genres are {form.genres} </h2>
      </div>
    </>
  );
}

export default App;
