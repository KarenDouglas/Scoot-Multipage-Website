
interface CareerProps{
    id: number;
    job: string;
    location:string;
}
interface DataProp{
    data: Array<CareerProps>;
}


export default function Careers({data}: DataProp): JSX.Element{
   

    return(
        <div>
        {data && data.map((car: CareerProps)=> (
            <div key={car.id}>
                <div>
                    <h3>{car.job}</h3>
                    <p>{car.location}</p>
                </div>
                <button></button>
            </div>
            ))}
        </div>
       
       
    )
    
}