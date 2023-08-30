import reactLogo from "../assets/react.svg";
export default function Conteudo(props) {

    let reactAlt = "ReactLogo";

    return(

        <>
            <section>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, repellendus a eveniet fuga repudiandae sint modi accusantium provident debitis perspiciatis libero,
                        laudantium inventore minima exercitationem sed consectetur quod consequatur odit tenetur quibusdam.
                        Animi, dignissimos earum vitae saepe fuga ducimus facere est ea sapiente corrupti quaerat ipsum inventore similique pariatur?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, placeat qui, explicabo modi, 
                        aspernatur doloribus obcaecati omnis ipsam possimus nihil alias ut corrupti ipsa harum sapiente cum perferendis officia! Nihil dolore repellat tenetur facere neque,
                        culpa expedita aliquid voluptates minima corporis temporibus, quo voluptatibus ipsa, quis quia inventore deleniti ipsam.</p>
                    <img src={reactLogo} alt={reactAlt} />
                    <img src={props.viteLogoProps} alt={props.viteAltProps} />
                </div>
            </section>
        
        </>

    )
}