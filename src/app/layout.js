import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";

export const metadata = {
  title: "Associação Clube Salutar",
  icons:{
    icon: "/favicon.ico",
  },
  description: "Associação Clube Salutar patrocina cursos de desenvolvimento de habilidades em estabelecimentos próprios ou de terceiros, mediante convênios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
