

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
    data: Array<FaqProps>
}



export default function Faqs({data}: Faqs): JSX.Element{
   

    return(
        <div>
            <h2>FAQS</h2>
            {data && data.map((faq:FaqProps)=>(
                <div>
                    <h3 key={faq.id}>{faq.section}</h3>
                  {faq.questions && faq.questions.map((q: Questions)=> (
                 <details key={q.id}>
                    <summary>{q.question}</summary>
                    <p>{q.answer}</p>
               </details>
                  ))}  
                </div>
            ))}
         
 
        </div>
    )
    
}

 