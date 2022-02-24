import "../styles.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <a href="/" className="ativa">
            Home
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="pag2.html">Sobre mim</a>{" "}
        </li>
        <li>
          {" "}
          <a href="https://estacaohack.fb.com/" target="_blank">
            Estação Hack
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="http://br.cellep.com/" target="_blank">
            Cellep
          </a>{" "}
        </li>
        {/* <li> <a href="#tit1" >Titulo 1</a> </li>
      <li> <a href="#tit2" >Titulo 2</a> </li>
      <li> <a href="#tit3" >Titulo 3</a> </li> */}
      </ul>
    </nav>
  );
}
