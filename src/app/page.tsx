import Image from "next/image";
import MainSlider from "./MainSlider/MainSlider";
import CategorySlider from "./_Components/NavBra/CategorySlider/CategorySlider";
import AllProducts from "./_Components/NavBra/AllProduts/AllProducts";
import { Toaster } from "@/components/ui/sonner"


export default function Home() {
  return (
<>
<MainSlider />
<CategorySlider />
<AllProducts />
</>
  );
}
