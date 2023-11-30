import Menu from "./Menu";

/* Importação do módulo CSS como um objeto chamado estilos (o nome é a seu critério) */
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        <span className="destaque-texto">Olá</span>{" "}
        <span className={estilos.sombra}>React!</span> 😎
      </h1>
      <hr />
      <Menu />
    </header>
  );
}

export default Cabecalho;
