import Faqs from "~/components/Faqs";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"; 
//data
import {faqs} from "data/db.json";

export const loader = async () => {
  return json(faqs);
};


export default function Index():JSX.Element {
  const faqList = useLoaderData<typeof loader>();
    return (
      <>
      <Faqs data={faqList}/>
      </>
    );
  }
  