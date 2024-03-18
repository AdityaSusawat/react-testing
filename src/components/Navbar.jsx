export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">MY logo</div>
        <ul className="navbar-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/art">Art</a>
          </li>
          <li>
            <a href="/todo">To Do</a>
          </li>
          <li>
            <a href="/stepform">StepForm</a>
          </li>
          <li>
            <a href="/redux">Redux</a>
          </li>
        </ul>
      </div>
    </>
  );
}
