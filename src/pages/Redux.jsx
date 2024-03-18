import { Navbar } from "../components/Navbar";
//import Counter from "../../redux/Counter";
import Bugs from "../../redux/Bugs";

export default function Redux() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <Bugs />
      </div>
    </>
  );
}
