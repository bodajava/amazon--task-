import React from "react";
import SelectedProduct from '@/api/SelectedProduct'
import Deatilse from "@/app/_Components/NavBra/Deatilse/Deatilse";


export default async function ProductDeaitels({ params }) {
  const { id } = params;
let data = await SelectedProduct(id)

  return (
<>
<Deatilse data={data} />
</>
  );
}
