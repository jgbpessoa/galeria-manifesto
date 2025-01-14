import afoxeMica from "/public/assets/images/photos/afoxé-mica.webp";
import afoxePaz from "/public/assets/images/photos/afoxé-paz.webp";
import blocoMica from "/public/assets/images/photos/bloco-mica.webp";
import blocoPaz from "/public/assets/images/photos/bloco-paz.webp";
import boiMica from "/public/assets/images/photos/boi-mica.webp";
import boiPaz from "/public/assets/images/photos/boi-paz.webp";
import bonecosMica from "/public/assets/images/photos/bonecos-mica.webp";
import bonecosPaz from "/public/assets/images/photos/bonecos-paz.webp";
import caboclinhosMica from "/public/assets/images/photos/caboclinhos-mica.webp";
import caboclinhosPaz from "/public/assets/images/photos/caboclinhos-paz.webp";
import frevoMica from "/public/assets/images/photos/frevo-mica.webp";
import frevoPaz from "/public/assets/images/photos/frevo-paz.webp";
import maracatuNacaoMica from "/public/assets/images/photos/nacao-mica.webp";
import maracatuNacaoPaz from "/public/assets/images/photos/nacao-paz.webp";
import maracatuRuralMica from "/public/assets/images/photos/rural-mica.webp";
import maracatuRuralPaz from "/public/assets/images/photos/rural-paz.webp";
import sambaMica from "/public/assets/images/photos/samba-mica.webp";
import sambaPaz from "/public/assets/images/photos/samba-paz.webp";
import trocaMica from "/public/assets/images/photos/troca-mica.webp";
import trocaPaz from "/public/assets/images/photos/troca-paz.webp";
import triboMica from "/public/assets/images/photos/indios-mica.webp";
import triboPaz from "/public/assets/images/photos/indios-paz.webp";
import ursaMica from "/public/assets/images/photos/laursa-mica.webp";
import ursaPaz from "/public/assets/images/photos/laursa-paz.webp";

const imageData = [
	// Afoxé
	{
		src: afoxeMica,
		data: {
			id: 1,
			name: "Xequerê do Autoamor",
			size: "60cm x 30cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica, spray e costura sobre tela canvas",
			type: "Afoxé",
			audio: "/assets/audios/afoxé-mica.wav",
		},
	},
	{
		src: afoxePaz,
		data: {
			id: 13,
			name: "Exu - Sem Ele, Não Haveria Carnaval",
			size: "60cm x 60cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Afoxé",
			audio: "/assets/audios/afoxé-paz.wav",
		},
	},

	// Bloco de Pau e Corda
	{
		src: blocoMica,
		data: {
			id: 8,
			name: "Fé no Som do Tempo",
			size: "40cm x 40cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica, spray e instalação sobre madeira",
			type: "Bloco de Pau e Corda",
			audio: "/assets/audios/bloco-mica.wav",
		},
	},
	{
		src: blocoPaz,
		data: {
			id: 20,
			name: "Querido Pierrot - 45 Anos do Pierrot de São José",
			size: "40cm x 40cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Bloco de Pau e Corda",
			audio: "/assets/audios/bloco-paz.wav",
		},
	},

	// Boi de Carnaval
	{
		src: boiMica,
		data: {
			id: 4,
			name: "Amor Não Tem O Que Segure",
			size: "80cm x 80cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica, spray e costura sobre tela canvas",
			type: "Boi de Carnaval",
			audio: "/assets/audios/boi-mica.wav",
		},
	},
	{
		src: boiPaz,
		data: {
			id: 16,
			name: "Esse Bumba É Meu",
			size: "40cm x 40cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Boi de Carnaval",
			audio: "/assets/audios/boi-paz.wav",
		},
	},

	// Caboclinhos
	{
		src: caboclinhosMica,
		data: {
			id: 3,
			name: "Ewe Wa Fun Mi, L’ase Ewe O",
			size: "60cm x 60cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica sobre tela canvas",
			type: "Caboclinhos",
			audio: "/assets/audios/caboclinhos-mica.wav",
		},
	},
	{
		src: caboclinhosPaz,
		data: {
			id: 15,
			name: "Recife Tem o 7 Flexas",
			size: "30cm x 60cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Caboclinhos",
			isVertical: true,
			audio: "/assets/audios/caboclinhos-paz.wav",
		},
	},

	// Clube de Bonecos
	{
		src: bonecosMica,
		data: {
			id: 10,
			name: "É Tudo Pontos de Vista",
			size: "60cm x 60cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica e spray em madeira",
			type: "Clube de Bonecos",
			audio: "/assets/audios/bonecos-mica.wav",
		},
	},
	{
		src: bonecosPaz,
		data: {
			id: 22,
			name: "90 anos de Malaquias",
			size: "80cm x 80cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Clube de Bonecos",
			audio: "/assets/audios/bonecos-paz.wav",
		},
	},

	// Clube de Frevo
	{
		src: frevoMica,
		data: {
			id: 9,
			name: "Eles querem me distrair, eu Danço pra desviar",
			size: "60cm x 80cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica, spray e colagem sobre madeira",
			type: "Clube de Frevo",
			isVertical: true,
			audio: "/assets/audios/frevo-mica.wav",
		},
	},
	{
		src: frevoPaz,
		data: {
			id: 21,
			name: "Mustardinha é Lenha",
			size: "80cm x 80cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Clube de Frevo",
			audio: "/assets/audios/frevo-paz.wav",
		},
	},

	// Escola de Samba
	{
		src: sambaMica,
		data: {
			id: 12,
			name: "Minha Bandeira Eu Levanto",
			size: "40cm x 40cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica e costura sobre tela canvas",
			type: "Escola de Samba",
			audio: "/assets/audios/samba-mica.wav",
		},
	},
	{
		src: sambaPaz,
		data: {
			id: 24,
			name: "Porte de Gigante",
			size: "60cm x 60cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Escola de Samba",
			audio: "/assets/audios/samba-paz.wav",
		},
	},

	// La Ursa
	{
		src: ursaMica,
		data: {
			id: 5,
			name: "A Brincadeira valeu a pena",
			size: "30cm x 60cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica sobre tela canvas",
			type: "La Ursa",
			isVertical: true,
			audio: "/assets/audios/laursa-mica.wav",
		},
	},
	{
		src: ursaPaz,
		data: {
			id: 17,
			name: "Cuidado Menina",
			size: "30cm x 60cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "La Ursa",
			isVertical: true,
			audio: "/assets/audios/laursa-paz.wav",
		},
	},

	// Maracatu Nação
	{
		src: maracatuNacaoMica,
		data: {
			id: 7,
			name: "Matriarca-Maracatu. Dona Santa, Rainha da Nação Elefante",
			size: "50cm x 50cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica, spray e colagem sobre madeira",
			type: "Maracatu Nação",
			audio: "/assets/audios/nacao-mica.wav",
		},
	},
	{
		src: maracatuNacaoPaz,
		data: {
			id: 19,
			name: "Exaltando as Similaridades e Celebrando as Diferenças",
			size: "60cm x 60cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Maracatu Nação",
			audio: "/assets/audios/nacao-paz.wav",
		},
	},

	// Maracatu Rural
	{
		src: maracatuRuralMica,
		data: {
			id: 6,
			name: "Que a Verdade Seja Guia",
			size: "50cm x 50cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica, spray e colagem sobre madeira",
			type: "Maracatu Rural",
			audio: "/assets/audios/maracatu-rural-mica.wav",
		},
	},
	{
		src: maracatuRuralPaz,
		data: {
			id: 18,
			name: "Meu Baque Tem Sabor de Cana",
			size: "80cm x 80cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Maracatu Rural",
			audio: "/assets/audios/maracatu-rural-paz.wav",
		},
	},

	// Tribo de Índio
	{
		src: triboMica,
		data: {
			id: 11,
			name: "Firmo Passo, Canto Rezo",
			size: "40cm x 40cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica sobre madeira",
			type: "Tribo de Índio",
			audio: "/assets/audios/tribo-mica.wav",
		},
	},
	{
		src: triboPaz,
		data: {
			id: 23,
			name: "Povos da Mata de Edé",
			size: "60cm x 60cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Tribo de Índio",
			audio: "/assets/audios/tribo-paz.wav",
		},
	},

	// Troça Carnavalesca
	{
		src: trocaMica,
		data: {
			id: 2,
			name: "Despertar da Vida e da Feira",
			size: "40cm x 40cm",
			artist: "Micaela Almeida",
			technique: "Pintura acrílica e spray sobre tela canvas",
			type: "Troça Carnavalesca",
			audio: "/assets/audios/troca-mica.wav",
		},
	},
	{
		src: trocaPaz,
		data: {
			id: 14,
			name: "TCM Cariri Olindense - A Chave do Meu Carnaval",
			size: "60cm x 30cm",
			artist: "Paz Brandão",
			technique: "Pintura acrílica e giz pastel sobre tela canvas",
			type: "Troça Carnavalesca",
			audio: "/assets/audios/troca-paz.wav",
		},
	},
];

export default imageData;
