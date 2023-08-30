import Lista from "./components/Lista";
import Rodape from "./components/rodape";
import Secao from "./components/secao";
import ViteLogo from "./assets/vite.svg";


export default function App(){
//   // area declarativa
// let nome = "Mariana";

//   return(
//     <>
//     {/*ou começa com a div, ou começa com fragment*/}

//   {/*área imperativa*/}
//   <h1>App</h1>
//   <h2>Meu nome é {nome}</h2>
//   </>
// );

let ViteAlt = "Vite Logo"

return(
  <>
  {/* vamos criar  um cabeçalho com o header,  um h1 com um título e uma lista ul com itens link */}

  <Lista/>

  {/* Vamos criar uma seção com uma section, uma div com 2 paragrafo, cada um com 3 linhas de lorem e depois dos parágrafos, uma imagem */}
  <Secao viteLogoProps={ViteLogo} viteAltProps={ViteAlt}/>

  {/* Vamos criar um rodapé com uma div, uma lista ul e 3 itens com link para redes sociais, um parágrafo */}
  <Rodape/>
  </>
);
  }