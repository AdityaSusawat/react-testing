import { Navbar } from "../components/Navbar";
//import Counter from "../../redux/Counter";
//import Bugs from "../../redux/Bugs";
import ToDo from "../../redux/ToDo";

export default function Redux() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <ToDo />
      </div>
    </>
  );
}
