import { ListaProdutos } from "../components/ListaProdutos"; 

export default function Produtos() { 
    return ( 
        <div>
            <h1> Produtos de INFORMÁTICA - FIPAPI </h1>
            <p> Os melhores produtos do mercado :D </p>

                <table style={{borderCollapse:"collapse" ,  border:"2px solid  #ffff"}}> 
                    <thead> 
                        <tr> 
                            <th style={{border:"2px solid #ffffff"}}>ID</th>
                            <th style={{border:"2px solid #ffffff"}}>NOME</th>
                            <th style={{border:"2px solid #ffffff"}}>DESCRIÇÃO</th>
                            <th style={{border:"2px solid #ffffff"}}>PREÇO</th>
                        </tr>     
                    </thead> 
                    
                    <tbody>
                {ListaProdutos.map((produto,indice)=>(
                    <tr key={indice}>
                        <td style={{border:"2px solid #ffffff"}}>{produto.id}</td>
                        <td style={{border:"2px solid #ffffff"}}>{produto.nome}</td>
                        <td style={{border:"2px solid #ffffff"}}>{produto.desc}</td>
                        <td style={{border:"2px solid #ffffff"}}>{produto.preco}</td>
                    </tr>
                            
                ))}
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={3}>PRODUTOS</td>
                </tr>
            </tfoot>
        </table>
            

                


        </div>
    )
}