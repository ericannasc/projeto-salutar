import Image from "next/image";
import estilos from "./page.module.css";
import Carrossel from "@/componentes/Carrossel";
import CorpoHome from "@/componentes/CorpoHome";

export default function Home() {
  return (
    <div>
      <Carrossel/>
      <CorpoHome />
    </div>
  );
}
