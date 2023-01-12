import SvgChevron from "~/assets/svg/Chevron";

interface Questions{
    id: number;
    question: string;
    answer: string;
}
interface FaqProps{
    id: number;
    section: string;
    questions: Array<Questions>;

}
interface Faqs{
    data: Array<FaqProps>;
}



export default function Faqs({data}: Faqs): JSX.Element{
  
   

    return(
        <div className="faq_container">
            <div>
                <h2>FAQS</h2>
            </div>
            <div className="faq_sections_container">
            {data && data.map((faq:FaqProps)=>(
                <div className="faq_section">
                    <h2 className="faq_section_title"key={faq.id}>{faq.section}</h2>
                    <div className="faq_faqs">
                        {faq.questions && faq.questions.map((q: Questions)=> (
                        <details className="faq_details" key={q.id} onClick={(e)=> console.log("toggled")}>
                            <summary>
                                <h3>{q.question}</h3>
                                <i><SvgChevron/></i>
                            </summary>
                            <p>{q.answer}</p>
                        </details>
                        ))}  
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
    
}

 