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
			alt: "Pintura:'Xequerê do Autoamor'. Sobre fundo amarelo, antebraços negros se destacam. A mão direita segura um xequerê, instrumento feito de cabaça e miçangas entrelaçadas. O instrumento está levemente inclinado para a esquerda. Em tons amarelados a direita uma guia de miçangas em formato de colar. Na frente da guia, a mão esquerda está aberta e com o dorso em nossa direção.",
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
			alt: "Pintura: 'Exu - Sem Ele, Não Haveria Carnaval'. Pessoas vistas da cintura para baixo, descalças ao redor de um alguidar de barro com padê e um jarro de barro. Elas usam vestidos nas cores amarelo, vermelho e azul. Entre elas, uma pessoa está com camisa vermelha com a barra detalhada com machados e xerê de Xangô, guia aparente e usa uma calça branca.",
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
			alt: "Instalação sob madeira e pintura: 'Fé no Som do Tempo'. Pintura abstrata, abaixo do centro seis linhas na horizontal na cor preta que se encontra com um círculo formando cordas de violão. A base na cor marrom se assemelha a um violão. Há um trio de tarraxas de afinação no canto inferior à esquerda. Vários losangos coloridos percorrem a instalação.",
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
			alt: "Pintura: 'Querido Pierrot - 45 Anos do Pierrot de São José'. Em destaque um homem negro com uma touca na cor azul, está com olhos fechados, tem nariz largo e boca grande. Usa um manto que possui gola com grandes camadas de tecido alternando entre azul e branco. No fundo, outros homens, com roupas semelhantes de outras cores e rostos pintados de branco.",
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
			alt: "Pintura: 'Amor Não Tem O Que Segure'. Cabeça de um boi preto. O boi tem chifres afiados, e na testa há uma pintura azul com uma estrela branca. Por trás da cabeça, há um quadro amarelo, com flores azuis, uma barra de chita vermelha com pequenas flores logo abaixo, tiras de retalhos coloridos.",
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
			alt: "Pintura: 'Esse Bumba É Meu'. Há pontos amarelos por todo o fundo azul. Três pessoas sem face, enfileiradas no lado esquerdo, ambas usam chapéu preto com uma estrela amarela, nas laterais dos chapéus fitas nas cores azul, branca, amarela e verde. Uma está com blusa verde com manchas de verde claro, outra com blusa vermelha com manchas brancas e a última com blusa amarela com manchas pretas. À direita, um boi preto, com um peitoral amarelo, com dois colares vermelhos. Na testa uma estrela amarela, nos chifres, fitas nas cores azul, vermelho, verde, amarelo e branco.",
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
			alt: "Pintura: 'Ewe Wa Fun Mi, L’ase Ewe O'. No centro da pintura um Caboclo de olhos pequenos, nariz largo, bigode fino, usa cocar com grandes penas na cor verde e braceletes verdes. Prende uma flauta com a boca e a segura com os dedos. Ao fundo colunas intercaladas nas cores azul, laranja e verde. Em formato de U uma listra laranja percorre o quadro e o corpo do indígena, dentro dessa listra saem árvores e galhos.",
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
			alt: "Pintura: 'Recife Tem o 7 Flexas'. Sob fundo azul três homens sem face de corpos definidos, estão enfileirados, usam cocar com penas verdes, uma guia atravessada no pescoço até a cintura e braceletes com penas. O primeiro tem uma gaita encostada na boca, o segundo segura um ganzá e o terceiro está com um talabarte sobre o corpo.",
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
			alt: "Pintura: 'É Tudo Pontos de Vista'. Boneco gigante, homem da meia noite sobre fundo com triângulos de diversos tamanhos e cores. O boneco está no centro da pintura, tem uma abertura com um rosto na altura da cintura e um corpo afunilado. Ele usa cartola preta, paletó verde com camisa branca e gravata borboleta azul, uma calça branca e sapatos pretos.",
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
			alt: "Pintura: '90 anos de Malaquias'. Sob céu azul e árvores um boneco gigante que ocupa quase toda a pintura. Ele tem cabelos pretos e curtos. Sobrancelhas marcadas, nariz grande e está com a boca aberta e tem dois dentes de ouro. Usa uma camisa de manga comprida laranja com a barra da manga amarela. Sob a camisa uma faixa com o nome: SEU MALAQUIAS.",
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
			alt: "Colagem sobre pintura em madeira: 'Eles querem me distrair, eu Danço pra desviar'. Na frente de um grande trapézio azul, colagem em preto e branco dos passistas, ambos com sombrinhas grandes. O da esquerda tem a sombrinha fechada, usa chapéu, camisa de botão, colete, calça comprida e tênis. Ele está com a mão direita erguida e segura a sombrinha, enquanto a mão esquerda está na altura do tórax, a perna direita está erguida com o joelho levemente encolhido. O do meio usa roupa semelhante à da esquerda, está agachado, com a mão direita segura a sombrinha aberta e com o braço esquerdo à frente do corpo em formato de concha. A perna esquerda está com o pé em ponta, enquanto a perna direita cruza pela frente e forma um X. O terceiro é uma silhueta de um homem em pé com os braços erguidos. Segura a sombrinha com o braço direito. Ao fundo, na parte superior à esquerda, um semicírculo amarelo cobre parte da madeira.",
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
			alt: "Pintura: 'Mustardinha é Lenha'. Quatro pessoas negras sem face fantasiadas ocupam grande parte da pintura. Da esquerda para direita, uma pessoa segura um trompete, usa faixa e roupa de chita. No centro outra com um lenço vermelho com franjinhas brancas, está com um manto azul desenhado com flores pequenas. Na direita uma mulher usa um chapéu preto com detalhes dourados e está com brincos em formato de búzios. Ela segura uma sombrinha que se mistura nas cores do chapéu. Ao fundo uma pessoa usa vestimentas com plumas.",
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
			alt: "Pintura: ‘Minha Bandeira Eu Levanto’. Em destaque bandeira retangular na cor branca e verde, no centro dela um Círculo Verde com GRCA escrito em letras brancas, ao redor raios brancos e verdes saem do círculo. Ao fundo, fitas em tons de verde e de branco. Ao entorno da bandeira serpentinas que formam a palavra GIGANTE DO SAMBA.",
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
			alt: "Pintura: 'Porte de Gigante'. Sob fundo esverdeado e à direita uma porta bandeira negra sem face, com uma coroa e brinco amarelo. Usa uma gola nas cores verde, amarela e branca, com desenhos de losangos. Com a mão direita erguida segura o mastro da bandeira da escola gigante do samba.",
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
			alt: "Pintura ‘A Brincadeira valeu a pena’. Um menino negro, em um ambiente alaranjado, com mascará de la ursa sobre a cabeça. Ele está com os olhos fechados e tem nariz grande. A máscara tem as cores: preto e branco com o nariz e lábios vermelhos. O menino usa camisa com fitas coloridas, que ocupam do centro até a parte inferior da foto. No alto , e na esquerda, o sol.",
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
			alt: "Pintura: 'Cuidado Menina'. Com fundo na cor laranja, com pontinhos nas cores azul, amarela, verde e branco. Em destaque ao centro uma La Ursa, com orelhas pontiagudas, olhos puxados contornados por branco, focinho com marcas de expressões em branco, lábios vermelhos bem abertos mostrando os dentes pontiagudos. A roupa é feita com fitas brancas. Logo atrás, o torso de um homem com chapéu de palha, óculos escuros, nariz largo, bigode bem preenchido, um cavanhaque, no pescoço um lenço amarelo com blusa azul. Ele segura um bacamarte.",
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
			alt: "Colagem de fundo bege: 'Matriarca-Maracatu. Dona Santa, Rainha da Nação Elefante'. Letras na cor vermelha e bordas amarelas: ELEFANTE. No centro, uma fotografia em preto e branco de uma senhora empunhando uma espada na mão direita. Ela é negra, idosa, usa coroa, capa com plumas, vestido e luva branca na mão direita.",
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
			alt: "Pintura: 'Exaltando as Similaridades e Celebrando as Diferenças'. Na pintura no centro uma grande estrela vermelha sobrepõe um quadrado azul. Em destaque um tímpano de percussão na cor amarela. Da direita para a esquerda na diagonal, de forma enfileirada uma multidão sem face com camisas de vários maracatus.",
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
			alt: "Pintura: ‘Que a Verdade Seja Guia’. Três caboclos de lança no meio de um canavial. Todos usam um grande chapéu de palha ornado com fitas, uma gola coberta de lantejoulas, que cobre os ombros, o peito e as costas. Seguram nas mãos uma lança pontiaguda, feita de madeira e coberta de fitas coloridas. É fim de tarde. Acima dos caboclos de lança com letras grandes o nome maracatu na cor azul.",
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
			alt: "Pintura: 'Meu Baque Tem Sabor de Cana'. Três pessoas sem face na frente de um canavial. À esquerda homem negro com chapéu e vestimenta roxa. Ao centro e mais à frente uma mulher de perfil com chapéu amarelo, com flores azuis e uma grande pena laranja. Ela usa um vestido de mangas bufantes laranja com detalhes azuis e brancos. À direita, uma mulher negra com chapéu amarelo com detalhes laranja, vestido amarelo armado com detalhes laranjas e mangas bufantes.",
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
			alt: "Pintura acrílica de uma Mandala sobre madeira: 'Firmo Passo, Canto Rezo'. Obra composta por figuras geométricas sobrepostas, ao fundo uma estrela de 18 pontas em tons de verde, sobre ela um círculo verde e em seu centro um círculo amarelo. Em sua frente, uma estrela azul de quatro pontas, com pontas amarelas.",
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
			alt: "Pintura: 'Povos da Mata de Edé'. Na pintura duas pessoas, ambas com metade do rosto visível na vertical, sem olhos, sem nariz e sem boca, usam cocar na altura do ombro, com formas triangulares e circulares. O cocar da esquerda é nas cores dourado e preto, o da direita em tons de azul e branca.",
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
			alt: "Pintura: 'Despertar da Vida e da Feira'. À esquerda uma garça branca de chapéu de couro, de perfil, voltada para a direita. Ao centro, em destaque o portal do mercado São José, formado pelo bocal de uma corneta, no centro do portal uma estrela de 8 pontas. À direita, um outro portal, acima dele a ponte velha de Recife com um estandarte erguido. Ao redor elementos da natureza.",
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
			alt: "Pintura: 'TCM Cariri Olindense - A Chave do Meu Carnaval'. Ao fundo dois trapézios, o primeiro na cor azul, o segundo na cor amarela, se complementam formando um retângulo. Na divisória uma linha branca os reparte. À frente uma chave gorge, com um só dente. Escrita na parte superior a palavra Fundada, na parte inferior 15.02.1921, no corpo TCM CARIRI OLINDENSE, no dente escrito verticalmente 2024.",
		},
	},
];

export default imageData;
