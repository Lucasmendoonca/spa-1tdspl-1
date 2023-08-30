import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape.jsx";
import viteLogo from "./assets/vite.svg";

export default function App() {

  //Área declarativa
  let viteAlt = "Vite Logo"
  
  return(
    <>

      {/* Área imperativa */}
      
      {/* Vamos criar um cabeçalho com um header, h1 com um título e uma lista ul com items com links*/}
      <Cabecalho/>

      {/* Vamos criar uma Seção com uma section, uma div com 2 parágrafos cada um com 3 linhas de loreme depois dos parágrafos uma imagem */}
      <Conteudo viteLogoProps = {viteLogo} viteAltProps = {viteAlt}/>

      {/* Vamos criar um rodapé com uma div, uma lista e 3 items com links para redes sociais, 
       um parágrafo com o texto de direiros autorais e o código do símbolo de copyright. */}
      <Rodape/>
       
    </>

  );

}

export default App
