import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "./components/footer";
import AOSProvider from "./providers/AOSProvider";

const cabelelera = localFont({
	src: "./fonts/cabelelera 0.7.woff2",
	variable: "--font-cabelelera",
	weight: "400",
});

const oferta = localFont({
	src: "./fonts/Oferta-do-Dia.woff2",
	variable: "--font-oferta",
	weight: "400",
});

const baby = localFont({
	src: "./fonts/OoohBaby-Regular.woff2",
	variable: "--font-baby",
	weight: "400",
});

const oriya = localFont({
	src: "./fonts/oriya-sangam-mn.woff2",
	variable: "--font-oriya",
	weight: "400",
});

const oriyaBold = localFont({
	src: "./fonts/oriya-sangam-mn-bold.woff2",
	variable: "--font-oriya-bold",
	weight: "700",
});

export const metadata: Metadata = {
	title: "No manifesto das ruas, sou meu Carnaval",
	description:
		"A exposição destaca as 12 modalidades de manifestações populares carnavalescas pernambucanas e suas representatividades, homenageando a cultura popular e a arte urbana a partir de obras inéditas das artistas visuais Micaela Almeida e Paz Brandão.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${cabelelera.variable} ${oferta.variable} ${baby.variable} ${oriya.variable} ${oriyaBold.variable}`}
			>
				<AOSProvider>
					<>
						<Header />
						{children}
						<Footer />
					</>
				</AOSProvider>
			</body>
		</html>
	);
}
