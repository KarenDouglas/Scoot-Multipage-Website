import Careers from "~/components/Careers";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"; 
//data
import {careers} from "data/db.json";

export const loader = async () => {
  return json(careers);
};


export default function Index():JSX.Element {
  const careerList = useLoaderData<typeof loader>();
    return (
      <>
      <Careers data={careerList}/>
      </>
    );
  }
  