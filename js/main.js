//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//variáveis de controle da história
reputation = false;

// Função para modificar o texto do diário


//função que define o conteúdo textual da narrativa
function getStory () {
	return{

	currentScene: "intro", 
	intro: {
		title: "Introdução",
		image: "img/meu_midjourney/resized/foto1.png",
		story: "<h3>No rescaldo do cataclismo ambiental, um silêncio sepulcral cobriu o que antes era um mundo vibrante. A exploração humana da natureza atingira seus limites sombrios. A natureza, então, rebelando-se contra o abuso da humanidade, deixou para trás uma terra devastada onde a sobrevivência era primordial e o individualismo se tornou uma virtude exaltada. Nessa paisagem árida e desolada, a humanidade forjou um novo caminho, com um propósito singular: <i> sobreviver </i>. <br> <br> Desapareceram os dias de apoio comunitário e governos benevolentes. As autoridades, abaladas por sua própria inadequação durante a crise, se recolheram em um estado de indiferença. Não havia redes de segurança, nem sistemas de bem-estar social, pois a sociedade coletivamente abraçou a dura realidade de que a independência era o único caminho para sobreviver. Era um mundo onde cada pessoa estava deixada a cuidar de si mesma, navegando sozinha pelo terreno traiçoeiro da existência. <br> <br>  Nesse mundo de competição implacável, a moralidade e a felicidade precisavam justificar seu valor através da lente da sobrevivência. As pessoas perceberam que para garantir sua existência contínua, precisavam ser pragmáticas, às vezes implacáveis e sempre cautelosas. Emoções eram um luxo a ser relevado com moderação, pois o sentimentalismo frequentemente levava à vulnerabilidade. A bondade era escassa, e a confiança, uma moeda elusiva. <br> <br>  No meio da luta, carros se tornaram uma visão rara, pois a escassez de combustível sufocava o transporte e o comércio internacional. Os dias de mobilidade fácil e interconexão tinham ficado para trás. Governos locais aproveitaram a oportunidade para exercer autoridade, consolidando o poder em suas mãos. Eles controlavam os poucos recursos disponíveis, impondo regulamentações rigorosas para proteger seus domínios frágeis. <br> <br> Nesse mundo implacável, as interações humanas se tornaram transacionais, impulsionadas pelo interesse próprio e pela fome de sobrevivência. Os fracos foram deixados de lado, condenados a perecer na natureza impiedosa. Era uma sociedade onde os mais tenazes, astutos e ágeis tinham a melhor chance de sobreviver. Força e adaptabilidade eram virtudes a serem cobiçadas, enquanto empatia e altruísmo muitas vezes pareciam fraquezas. </h3>",
		choices: [
	 	{
			choice: "Comece a Jornada",
			destination: 'comecar'
	 	},

	 	],
		
	},

	comecar: {
		title: "Introdução Albert Burakh",
		image: "",
		story: "<h3>O ar estava pesado entre os Meístas, carregado de apreensão e silêncio ansioso. A notícia da doença que se espalhava como uma sombra negra começava a se espalhar, e o pânico se espalhava junto com ela. Aqueles que outrora caminhavam pelas ruas com confiança agora estavam encurvados pelo medo, olhos assustados olhando para o horizonte incerto. <br> <br> Albert Burakh, o médico dedicado da comunidade, estava trabalhando incansavelmente. Pacientes aflitos enchiam sua pequena clínica, todos com os mesmos sintomas sinistros: tosse seca e o gradual escurecimento de suas mãos. A doença era uma força cruel e implacável, imobilizando suas vítimas por dias antes de levar-lhes a vida. <br> <br> Apesar do cansaço que pesava sobre seus ombros, Albert não podia parar. Ele atendia cada paciente com empatia e cuidado, mas sabia que suas habilidades estavam sendo testadas até o limite. As vozes dos doentes eram sussurros de agonia, e ele lutava para aliviar seu sofrimento, mesmo que fosse por um breve momento.<br> <br> Uma tarde, enquanto a luz do sol filtrava-se pelas cortinas da clínica, Albert foi à missa, como sempre fazia. Vestiu seu manto simples e saiu para a rua. O que ele viu deixou um impacto profundo em seu coração. Uma multidão silenciosa se movia pelas ruas, rostos preocupados, olhares cheios de medo. A comunidade Meísta se reunia em busca de conforto e esperança em tempos sombrios. <br> <br>  Albert se juntou à procissão, seu coração pesado pela responsabilidade que carregava. A igreja estava cheia de rostos familiares, todos buscando algum refúgio na fé. O sermão do pastor era um eco da angústia que pairava sobre Meístas, um apelo à esperança em meio à escuridão. As palavras de conforto se misturaram com os suspiros solenes da congregação.<br> <br> Suas pegadas ressoam no solo gasto e áspero enquanto atravessa a porta da antiga igreja de pedra. A atmosfera está impregnada com o odor do incenso que queima suavemente, formando espirais de fumaça que dançam em torno do ícone central do altar. A luz suave das velas espalha uma auréola dourada sobre cada rosto na congregação, iluminando olhares repletos de humildade e devoção. <br> <br> O sacerdote, vestido em paramentos ricamente adornados, ergue o cálice e a hóstia em um gesto que transcende o tempo e o espaço. Seu coração acelera à medida que a melodia litúrgica preenche o espaço, uma melodia que parece ecoar através dos séculos. Cada palavra pronunciada é como um elo que o conecta aos antepassados que também trilharam esse caminho sagrado. <br> <br>  As orações fluem dos lábios da congregação, unindo-se em uma sinfonia coletiva de fé e esperança. Sua voz junta-se a esse coro, ecoando nas paredes de pedra e misturando-se com a voz dos santos que os observam do alto. Cada gesto, cada movimento tem um significado profundo, uma representação visual das verdades espirituais que regem sua existência. <br> <br> E então, chega o momento culminante. O sacerdote segura o cálice e a hóstia acima de sua cabeça, como um mediador entre o céu e a terra. Uma corrente elétrica parece percorrer a congregação, e seus olhos se fixam no mistério contido naqueles elementos. A presença divina parece estar tão próxima, quase tangível, e seu coração se enche de gratidão e temor diante da majestade do que está prestes a acontecer.	<br> <br> À medida que a missa chegava ao fim, Albert olhou ao redor. Ele viu os olhares preocupados, as mãos unidas em oração, e soube que todos ali estavam unidos por um sentimento comum: o medo do desconhecido, a luta contra uma ameaça invisível. Conforme o cálice era erguido aos lábios do sacerdote e a hóstia toca sua língua, uma onda de reverência e unidade percorre a congregação. É como se todos estivessem compartilhando um único fôlego, uma única jornada espiritual que transcende suas individualidades. A separação entre o sagrado e o profano parece desvanecer-se, e eles são transportados para um reino onde o tempo é apenas uma ilusão passageira. </h3>",
		choices: [
	 	{
			choice: "Falar com o Padre",
			destination: 'falarPadre'
		},
		{
			choice: "Ir para a casa",
			destination: 'casa'
		}
	 	]
	},

	falarPadre: {
		title: "",
		image: "img/meu_midjourney/resized/foto2.png",
		story: "<h3> Então, Albert, sentindo-se renovado e fortalecido pela experiência, espera pacientemente após o final da missa até que todos se retirem da igreja. Aproximando-se do sacerdote, cujo semblante está sereno e sereno como as águas de um lago ao amanhecer, ele encontra coragem para falar das sombras que habitam sua mente.<br><br> “Padre”, começa Albert, sua voz respeitosa carregando um tremor sutil, sinto o medo da doença se infiltrando em minha alma. “Vejo como nossos irmãos e irmãs estão sofrendo, e sinto que talvez eu deva partir em busca da cura.” <br><br> O sacerdote olha para Albert com olhos bondosos, a sabedoria gravada em cada ruga de seu rosto. “Albert”, ele responde suavemente, “a jornada que você contempla é uma de coragem e incerteza. Em tempos de dúvida, lembre-se das lições que nossa fé nos ensina. Confie no Rei de Vermelho, aquele que nos guiou por eras desconhecidas. Ele é o farol que brilha nos momentos mais sombrios, a fonte de esperança quando o desespero ameaça nos dominar.”  <br><br> Albert assente, absorvendo as palavras do sacerdote como um sedento viajante bebendo da fonte da verdade. “Você é parte do tecido desta comunidade, Albert. Sua abnegação e cuidado moldam a essência de Meístas, assim como o deserto esculpe suas dunas. Se o seu coração o conduz a buscar a cura, siga esse chamado com a bênção do Rei de Vermelho. Confie no fluxo da vida, e que sua jornada seja iluminada por sua fé e o conhecimento ancestral que você carrega.”  <br><br> As palavras do sacerdote envolvem Albert como um abraço caloroso, dissipando as sombras da incerteza. Ele olha além das paredes de pedra da igreja, para o vasto deserto que se estende além, um território desconhecido que chama por ele. <br><br> “Obrigado, Padre”, diz Albert, sua voz mais firme agora. Suas palavras são como um guia luminoso em meio à escuridão. “Seguirei meu coração, com a força da minha fé e das histórias de meu pai a me guiar.”  <br><br> E assim, Albert parte da igreja, pronto para enfrentar os desafios que o aguardam além das dunas douradas, confiante de que sua busca pela cura é não apenas uma jornada pessoal, mas também uma expressão de sua conexão profunda com a terra, com sua comunidade e com o divino Rei de Vermelho que os protege. </h3>",
		choices: [
	 	{
			choice: " Ir para a casa",
			destination: 'casa'
		},
	 	]
	},

	casa: {
		title: "Casa",
		image: "img/meu_midjourney/resized/foto4.png",
		story: "<h3> Enquanto Albert sai da igreja, sente-se renovado e fortalecido pela experiência. A missa ortodoxa é mais do que um mero ritual; é um portal para a eternidade, uma lembrança constante da conexão com o divino e com aqueles que vieram antes dele. Carrega essa sensação de transcendência consigo, sabendo que mesmo diante das tribulações da vida cotidiana, sempre pode retornar a esse espaço sagrado e encontrar paz em meio ao mistério que permeia sua existência. <br><br> O sol se põe sobre a comunidade Meísta, tingindo o céu de um vermelho profundo, lembrando a todos a essência da Matéria Vermelha que corre em suas veias. Dr. Albert Burakh, envolto pela penumbra, caminha pelas ruas de terra batida, seguindo em direção à modesta casa onde vive com sua família. Seus passos são serenos, carregados de uma mistura de convicção e apreensão, pois ele sabe que a doença misteriosa que assola a vila exige uma solução urgente. <br><br> Sua mente inquieta repassa as palavras do Rei de Vermelho, líder espiritual e guia dos Meístas, “Cultive a paciência como uma virtude preciosa, pois nos momentos de aflição, ela servirá como um guia imutável, conduzindo-o pelos obscuros corredores do destino”. As crenças de sua comunidade o envolvem como um fio invisível, moldando suas escolhas e ações. Para ele, a busca pela cura é mais do que uma tarefa imposta, é uma oportunidade de demonstrar seu amor pela comunidade, de prover para seus irmãos e irmãs a chance de sobreviver a mais uma ameaça que o mundo pós-apocalíptico insiste em lhes lançar. <br><br> Ao chegar em casa, Dr. Burakh se depara com sua esposa, Maria, uma mulher de olhar doce e sorriso acolhedor. Ela o abraça com ternura e preocupação, sabendo que a jornada que ele está prestes a empreender é repleta de perigos. Os olhos de Maria, também escuros como a noite, demonstram sua confiança e fé no marido, mas também a incerteza que paira sobre o futuro.  <br><br> Na manhã seguinte, Dr. Burakh se despede de sua família, olhando pela última vez os rostos daqueles que ama. Ele sabe que a busca pela cura em Franconegro não será fácil. O mundo lá fora é cruel, governado pelo individualismo impiedoso do Quismo, uma moralidade que parece desprovida de compaixão. <br><br> Enfrentando o deserto árido e abandonado que o separa de Franconegro, Dr. Burakh caminha solitário, deixando para trás a segurança de sua comunidade e enfrentando o desconhecido. O sol inclemente castiga sua pele escura, e a lembrança das crenças dos Meístas o conforta como uma brisa fresca em meio ao calor sufocante. </h3>",
		choices: [
	 	{
			choice: "Atravessar o deserto",
			destination: 'chegadaFranconegro'
		},
	 	]
	},
	

	chegadaFranconegro: {
		title: "",
		image: "img/meu_midjourney/resized/foto5.png",
		story: "<h3> Após dias de jornada, ele finalmente chega a Franconegro. A cidade, um mar de caos e concreto, é um contraste gritante com a serenidade da comunidade Meísta. Franconegro, uma vasta planície de caos e concreto, emerge diante de seus olhos como um monumento à desolação. Este é o retrato que se revela em suas retinas cansadas, um contraste cru e angustiante com a serenidade distante da comunidade Meísta que deixou para trás. As pessoas, simples pontos em meio à multidão, se aglomeram sem um olhar de reconhecimento, almas tão calejadas pela busca incessante por recursos e poder que a empatia parece uma moeda de troca esquecida. <br><br>	Franconegro é uma cidade que respira com dificuldade, suas ruas enredadas em teias de vapor ácido e cinzas suspensas que, como fantasmas da degradação, lentamente dançam no ar. A névoa acinzentada é um testemunho sombrio da fumaça dos motores, das chaminés industriais e da queima de ambições ardentes. A respiração aqui é pesada, um esforço constante para encher os pulmões com oxigênio viciado. <br><br> Nessa metrópole que se estende até onde os olhos podem alcançar, a paisagem vertical se assemelha a uma floresta de concreto, cada edifício uma árvore solitária e sombria, erguendo-se para tocar as nuvens em um gesto fútil. As luzes artificiais, como estrelas distorcidas pela poluição luminescente, cintilam em uma cadência incessante, marcando o ritmo frenético da vida urbana.	<br><br> Franconegro sofre com a maldição da superpopulação. Suas ruas são corredores abarrotados, e o trânsito, uma sinfonia dissonante de buzinas estridentes e motores rugindo. A competição por espaço é implacável, e a arquitetura que uma vez tentou tocar os céus agora cai na escuridão sombria das sombras umas das outras.	<br><br> Nas esquinas desgastadas e vielas sufocantes, a aura de desconfiança perdura como um odor amargo, permeando os passos apressados e os olhares evasivos. Em Franconegro, todos são estranhos, mesmo que compartilhem o mesmo espaço apertado. A busca incessante por poder e recursos deixou cicatrizes profundas na alma da cidade, marcando-a como uma ferida que nunca cicatriza.	<br><br> Assim, ele está imerso nessa cidade, uma gota solitária de humanidade em um oceano agitado de concreto e desespero. Enquanto o ar pesado com cinzas dificulta sua respiração, ele se encontra preso entre os espinhos da ambição e a sombra sufocante da desconfiança, em uma metrópole que nunca dorme, mas sim agoniza em um estado perpétuo de caos e poluição.	<br><br> Albert Burakh avançou pelas ruas congestionadas de Franconegro, seus passos marcando um ritmo contrastante com a pressa frenética da multidão que o cercava. Sua expressão cansada e os olhos atentos revelavam que ele estava à procura de algo, ou talvez alguém, em meio àquele labirinto urbano.	<br><br>	 </h3>",
		choices: [
	 	{
			choice: " Perguntar informação para alguém ",
			destination: 'rejeitado1'
		},
		{
			choice: " Procurar um hospital sozinho ",
			destination: 'hospital'
		}
	 	]
	},

	rejeitado1: {
		title: "",
		image: "",
		story: "<h3> Enquanto caminhava, Albert viu um idoso encurvado sentado em um banco de concreto, com a pele enrugada e os olhos cansados refletindo décadas de experiência. Ele segurava um jornal amassado e franzia o cenho ao ler as notícias do dia. Albert se aproximou, sua esperança de encontrar algum tipo de guia naquela cidade árida e hostil aumentando. <br><br>  “Com licença, senhor”, disse Albert, sua voz carregando o eco das estradas que havia percorrido. O idoso ergueu o olhar e o encarou com um olhar enrugado, seus olhos parecendo julgar Albert antes mesmo de trocarem uma palavra. <br><br> Albert engoliu em seco, tentando ignorar a frieza da resposta. “Estou procurando informações sobre esta cidade. Estou tentando encontrar alguém...” <br><br> O idoso soltou um resmungo e abaixou o jornal, olhando para Albert com uma mistura de desdém e impaciência. “Estou ocupado demais para ajudar. Vá se virar sozinho.” <br><br> A resposta abrupta e a rejeição implícita fizeram Albert sentir como se tivesse levado um soco no estômago. Ele engoliu o orgulho ferido e agradeceu pela 'ajuda' antes de se afastar, sua determinação inabalada mesmo diante da indiferença do idoso.  </h3>",
		choices: [
	 	{
			choice: "Tentar perguntar para outra pessoa",
			destination: 'rejeitado2'
		},
		{
			choice: " Procurar um hospital sozinho ",
			destination: 'hospital'
		}
	 	]
	},

	rejeitado2: {
		title: "",
		image: "",
		story: "<h3> Continuando sua busca, Albert avistou uma mulher de pé em uma esquina, vestindo um traje que parecia mais uma armadura do que uma roupa. Seus olhos estavam focados em seu relógio, e suas mãos estavam ocupadas digitando freneticamente em um dispositivo eletrônico. <br><br> Ele se aproximou dela, esperançoso de que talvez a mulher pudesse fornecer alguma orientação. “Desculpe incomodar, senhora. Você saberia me dizer...” <br><br> “Pressa” a mulher interrompeu com um tom cortante, sem sequer erguer os olhos para encará-lo. “Estou atrasada. Não tenho tempo para responder a perguntas de estranhos.” Albert sentiu-se mais uma vez encurralado pela frieza da resposta, como se estivesse lutando contra uma parede de indiferença. Ele agradeceu à mulher por sua atenção e seguiu seu caminho, os ombros ligeiramente curvados pela desilusão. <br><br> No entanto, sua determinação não havia diminuído. Ele sabia que estava em uma cidade que havia se tornado insensível e áspera. Mas Albert estava determinado a encontrar o que procurava, não importasse o quão rudes as pessoas pudessem ser. <br><br> E assim, ele decidiu ir para um hospital, buscar informações em relação à doença que assombra sua vila, continuando sua jornada nas ruas sufocantes de Franconegro até encontrar um mapa que o guiaria. </h3>",
		choices: [
	 	{
			choice: " Procurar um hospital sozinho ",
			destination: 'hospital'
		},
	 	]
	},

	hospital: {
		title: "",
		image: "",
		story: "<h3> Albert chegou ao hospital após uma jornada árdua pelas ruas abarrotadas de Franconegro. A fila se estendia pela entrada, um retrato do caos que havia testemunhado desde que chegara à cidade. As pessoas aguardavam com olhares exaustos e faces tensas, como se o próprio ato de esperar fosse uma forma de tortura. <br><br> O ambiente dentro do hospital era uma extensão do mundo exterior, uma simulação do caos que Franconegro parecia tão hábil em criar. O eco de passos apressados e conversas murmuradas criava uma cacofonia de vozes e preocupações, e os murmúrios da máquinas médicas contribuíam para o coro dissonante. <br><br> Finalmente, Albert chegou ao balcão da recepção, onde uma secretária de olhar cansado olhou para ele, seu rosto mostrando apenas uma sombra de interesse. “Nome?” ela perguntou, sua voz monótona e sem emoção. <br><br> “Albert Burakh” respondeu ele, sua voz contrastando com a frieza da atendente. <br><br> A secretária digitou algo em seu computador e então ergueu o olhar. Seus olhos se estreitaram ao ver o lóbulo cortado na orelha de Albert, uma marca distintiva da comunidade Meísta à qual ele pertencia. Ela o interrompeu bruscamente.  “Espere um momento.” <br><br>  Albert observou enquanto a secretária conversava com um colega e, depois de alguns instantes, a discussão pareceu intensa e seus olhares ocasionalmente se voltavam para ele. A tensão no ar era palpável. <br><br> Finalmente, a secretária voltou a atenção para Albert e falou com um tom cortante. “Lamento, mas não podemos ajudá-lo aqui. Por favor, retire-se.”  <br><br> Albert sentiu seu coração afundar, sua esperança minguando diante do frio rejeição. Ele abaixou a cabeça e saiu do hospital, enfrentando uma nova onda de desespero e frustração. Mas antes que pudesse processar completamente o que havia acontecido, três seguranças robustos o abordaram, suas expressões hostis denunciando suas intenções. <br><br> Os socos e chutes vieram rápido, como uma tempestade de punhos e botas. Albert tentou se defender, mas a força esmagadora dos agressores o derrubou, e o mundo se desfez em um redemoinho de dor e escuridão. </h3>",
		choices: [
	 	{
			choice: "...",
			destination: 'desmaiado'
		},

	 	]
	},

	desmaiado: {
		title: "",
		image: "",
		story: "<h3> Quando finalmente recobrou a consciência, Albert se viu deitado em um beco imundo, cercado, mas, dessa vez, por outros homens, com roupas . Eles vasculhavam suas roupas e pertences com mãos ávidas, ignorando sua presença recém-acordada. Sua mente girava em busca de uma saída, mas antes que pudesse planejar sua fuga, sirenes estridentes encheram o ar. <br><br> As luzes vermelhas e azuis piscavam à distância, anunciando a chegada da polícia. Uma tensão ainda maior se espalhou pelo grupo de bandidos. Uma ordem foi dada e, de repente, tiros ecoaram, acertando um dos membros do grupo. Albert sentiu seu coração acelerar, sua ansiedade crescendo enquanto a violência se desenrolava diante de seus olhos. <br><br> Enquanto o tumulto continuava, Albert percebeu uma chance de escapar. Com medo de ser arrastado para um problema ainda maior, ele engoliu o medo e virou-se para o grupo de bandidos.  “Eu sou médico”  ele gritou, tentando fazer sua voz se destacar sobre o caos. “Posso ajudar. Levem-me com vocês.” <br><br> Os olhos dos bandidos se estreitaram enquanto eles avaliavam a oferta inesperada. O som das sirenes se aproximando era ensurdecedor agora. Um deles assentiu finalmente, e eles agarraram Albert, empurrando-o para uma rua escura enquanto as luzes da polícia se aproximavam. <br><br> Albert sabia que estava correndo um risco ainda maior ao entrar nas fileiras dos bandidos, mas no momento, qualquer coisa parecia melhor do que ser apanhado no meio da confusão entre gangues e polícia. Ele estava disposto a enfrentar o desconhecido, a aliar-se a quem fosse necessário, para escapar da espiral de caos em que se encontrava. </h3>",
		choices: [
	 	{
			choice: " Fugir da polícia",
			destination: 'helloFVL'
		},
	 	]
	},

	helloFVL: {
		title: "img/meu_midjourney/resized/foto6.png",
		image: "",
		story: "<h3> Eles correram pelo labirinto de esgoto por muito tempo, a escuridão e o fedor sufocante que os cercavam pareciam intermináveis. As águas fétidas refletiam uma realidade crua e desolada, e cada passo parecia ecoar com o eco das vidas tumultuadas que os levaram a esse ponto. Finalmente, emergiram em um lugar diferente, distante da cidade acima, e Albert se encontrou diante de uma biblioteca abandonada que parecia ter sido esquecida pelo próprio tempo. <br><br> A imponente estrutura, agora uma fortaleza para aqueles que rejeitaram as regras da sociedade, emanava um ar de mistério e rebelião. Albert se viu rodeado por prateleiras empoeiradas e estantes vazias, as paredes carcomidas pelos anos de negligência. A biblioteca estava agora repleta de pessoas que se agrupavam em pequenos círculos, discutindo com seriedade e fervor. <br><br> À frente, um homem se destacava, vestindo roupas desgastadas que pareciam em harmonia com o ambiente decadente. Seu olhar era penetrante, e o cabelo preto e emaranhado caía sobre o rosto como cortinas sombrias. <br><br> Bad Blood, cujo nome parecia uma sombra do que ele representava, se aproximou de Albert. Ele estendeu a mão em um gesto de saudação, e sua voz, ao contrário do que sua aparência sugeria, era calma e controlada. <br><br>  “Bem-vindo, sou Bad Blood, líder da Frente da Volição Libertadora, qual o seu nome?” </h3>",
		choices: [
	 	{
			choice: " “Albert Burakh” ",
			destination: 'helloFVL2'
		},
	 	]
	},

	helloFVL2: {
		title: "",
		image: "img/meu_midjourney/resized/foto7.png",
		story: "<h3> “Albert Burakh” veio a resposta de prontidão, enquanto valiava cuidadosamente o líder à sua frente. Ele podia sentir a gravidade no ar, a tensão de vidas em perigo e decisões difíceis prestes a serem tomadas.Um dos subordinados sussurrou no ouvido de Bad Blood que Albert era um médico. <br><br> Bad Blood continuou. “Temos duas vidas em jogo aqui, Antihero e Blank Space. Ambos caíram no calor da batalha contra as circunstâncias que nos oprimem. Nossos suprimentos são escassos, e só temos o suficiente para salvar uma vida.”  <br><br> A sugestão de ter que escolher entre duas vidas deixou um gosto amargo na boca de Albert. Seus princípios Meístas clamavam por empatia e compaixão, mas ele estava imerso em um mundo que operava sob regras cruas. <br><br> “Não há como salvar ambos?” Albert perguntou, seus olhos implorando por uma alternativa. <br><br> Bad Blood manteve sua expressão impassível, sua voz controlada. “Infelizmente, não. Nossa situação é limitada, é o que temos que fazer para sobreviver.” <br><br> Albert sentiu uma onda de desespero, uma luta interna entre seu dever médico e sua compreensão da realidade brutal que o cercava. Ele tentou uma última vez, sua voz carregando um apelo silencioso. “Talvez haja uma maneira de salvar ambos!” <br><br> Bad Blood permaneceu inabalável, seus olhos fixos nos de Albert. “ Minha autoridade é final. Não discuta isso. ” <br><br> A resposta de Bad Blood era uma rejeição definitiva, um lembrete cru de que em um mundo onde a sobrevivência era uma batalha constante, a autoridade falava mais alto do que a empatia. Albert sentiu o peso de sua impotência, mas ele também reconheceu que, mesmo em meio às sombras, a chama de seu próprio caráter Meísta não se apagaria. </h3>",
		choices: [
	 	{
			choice: "Desobedecer a ordem",
			destination: 'desobedecerAct'
		},
	 	{
			choice: "Salvar apenas um",
			destination: 'helloFVL3'
		},
	 	]
	},

	desobedecerAct: {
		title: "",
		image: "",
		story: "<h3> No entanto, movido por sua natureza compassiva, Albert tomou uma decisão. Ignorando as ordens de Bad Blood, ele fez o que sua ética lhe ditava: ele tentou salvar ambas as vidas, Antihero e Blank Space. <br><br> Seus esforços foram frenéticos, mas os minutos passavam como horas, e a inevitável sombra da morte se aproximava. Suas mãos habilidosas trabalharam com urgência, mas as forças que estavam além de seu controle se mostraram implacáveis. A vida escorria dos dois corpos, e o silêncio se instalava como um lamento na sala.  </h3>",
		choices: [
	 	{
			choice: "(ficar em silêncio)",
			destination: 'desobedecerEnd'
		},
	 	{
			choice: " “Os dois se foram” ",
			destination: 'desobedecerEnd'
		},
	 	]
	},

	desobedecerEnd: {
		title: "",
		image: "",
		story: "<h3> E então, o mundo explodiu em um único estampido. O som do tiro foi um eco breve, mas sua consequência foi irrevogável. O corpo de Albert tombou para frente, uma marionete cujos fios da vida haviam sido cortados. A sala se encheu de um silêncio pesado, como se a própria morte tivesse estendido sua mão fria para tocar todos ali presentes. A vida de Albert terminou entre as páginas empoeiradas dos livros, um testemunho de uma luta feroz contra um mundo implacável. <br><br> Bad Blood permaneceu de pé, olhando para o corpo caído com uma mistura de raiva e tristeza. A escolha desafiadora de Albert havia selado seu destino, revelando a inevitabilidade da ordem cruel que governava aquele mundo sombrio. </h3>",
		choices: [
	 	{
			choice: "Começar Novamente ",
			destination: 'intro'
		},
	 	]
	},

	helloFVL3: {
		title: "",
		image: "",
		story: "<h3> Albert trabalhou com foco e destreza, sua experiência e habilidades médicas guiando suas mãos. Ele não tinha tempo para hesitação. Os minutos se esticaram como uma eternidade, enquanto ele se esforçava para salvar a vida de Antihero. A sala ficou imersa em tensão silenciosa, a respiração contida como um fio fino de esperança. <br><br>  E então, um suspiro coletivo encheu o ar, como uma brisa suave após uma tempestade. Albert ergueu o olhar para Bad Blood, seu rosto impassível revelando pouco sobre o que estava pensando. Ele fez um gesto de cabeça em direção a Albert, um reconhecimento silencioso que cortava através das barreiras impostas por sua aura inabalável. <br><br>  “ Você fez o que era necessário.” Bad Blood finalmente declarou, sua voz neutra, mas suas palavras carregando um toque de gratidão.  <br><br> A resposta de Bad Blood, por mais contida que fosse, foi um testemunho da complexidade do homem diante dele. Albert captou a dualidade, a máscara de liderança implacável escondendo um fragmento de humanidade que ainda persistia. Bad Blood virou-se e saiu da sala, seus passos ressoando como um eco do destino que ele liderava. <br><br> Logo depois, um dos subordinados de Bad Blood apareceu, uma figura sombria na entrada do quarto onde Albert estava. “Você está em nossas mãos agora” ele disse com uma mistura de ameaça e indiferença.  “Bad Blood ordenou que você permaneça aqui. Não tente nada.” <br><br> Albert sentiu que aquilo não era uma oferta, mas sim uma ordem. Ele assentiu silenciosamente, sua mente trabalhando para entender as implicações dessa nova fase. A noite caiu sobre o quartel-general, mergulhando tudo em escuridão. </h3>",
		choices: [
	 	{
			choice: "...",
			destination: 'helloFVL4'
		},
	 	]
	},

	helloFVL4: {
		title: "",
		image: "",
		story: "<h3> No dia seguinte, Albert estava deitado em um colchão rústico quando a porta se abriu. Bad Blood entrou, seu olhar firme encontrando o de Albert. Havia uma aura de avaliação, de curiosidade subjacente, em seu olhar. <br><br> “Albert Burakh” Bad Blood começou, sua voz carregando uma intensidade ponderada.  “A Frente da Volição Libertadora não é uma comunidade com portas abertas para todos. Você está aqui por circunstâncias específicas. Contemplei sua história, a marca Meísta em seu lóbulo cortado não passou despercebida.”<br><br> Albert permaneceu atento, seus sentidos aguçados enquanto ele aguardava as palavras de Bad Blood. Ele sabia que sua vida estava mais uma vez nas mãos deste líder enigmático. <br><br> “Suas habilidades médicas provaram seu valor, e você demonstrou que possui a coragem necessária. Você é Meísta, mas vejo que sua empatia não foi sufocada por nossa realidade sombria” Bad Blood declarou, seus olhos penetrantes avaliando cada reação em Albert. <br><br> Albert reconheceu a observação de Bad Blood, o reconhecimento de sua luta interna entre princípios e sobrevivência. “Eu acredito que a empatia pode ser uma força poderosa, mesmo neste mundo brutal” ele respondeu, sua voz tranquila e firme. <br><br> “Você veio de uma comunidade que preza a empatia e a conexão” Bad Blood continuou, ignorando o que Albert disse. “Mas está muito longe de casa, doutor. Muito longe para alguém com uma história tão arraigada, qual o motivo disso?”  <br><br> Albert fixou os olhos em Bad Blood, suas palavras pairando no ar como um enigma a ser decifrado. “Estou aqui por um propósito, uma causa maior do que eu mesmo. Minha vila está sofrendo com uma doença, vim buscar aqui na metrópole para achar alguma cura. ” <br><br> Bad Blood sorriu, um sorriso que não atingiu seus olhos, mas carregava um certo respeito subjacente. “Uma causa maior... Você é uma peça interessante nesse tabuleiro, doutor. Um Meísta no mundo dos quebrados.” <br><br> Albert não sabia o que responder, mas ele sentia uma compreensão mútua de que ambos estavam presos em um ciclo implacável de decisões cruéis e sobrevivência brutal. <br><br> “Você deseja salvar seu povo, e eu desejo algo maior” Bad Blood concluiu. “Talvez possamos encontrar um terreno comum, uma aliança que sirva aos nossos objetivos.”<br><br> As palavras de Bad Blood ressoaram no ar, um convite ou talvez uma admissão de confiança. Albert compreendeu que seu destino havia tomado um novo rumo, entrelaçando-se com o da FVL. Ele aceitou isso como uma parte inevitável do caminho que escolhera. <br><br> “Estou à disposição para ajudar onde for necessário” Albert disse, sua voz resoluta, os olhos dele e de Bad Blood encontrando-se em um entendimento silencioso. <br><br> Bad Blood assentiu mais uma vez, seu gesto uma confirmação de uma aliança que estava além das palavras. <br><br> “Me fale sobre você” , ordenou Bad Blood.  </h3>",
		choices: [
	 	{
			choice: "Falar sobre seu estilo de vida Meísta",
			destination: 'vidaMeista'
		},
	 	]
	},

	vidaMeista: {
		title: "",
		image: "",
		story: "<h3> Albert responde: “Nós, Meístas, carregamos em si uma fé profunda, onde o altruísmo e a unidade são sagrados. Para nós, cada pessoa é moldada da mesma Matéria Vermelha, um símbolo da igualdade que permeia tudo. Nossos olhos e devoção estão fixos no Rei de Vermelho, a personificação da vida que nos é concedida. Mas a sociedade dominada pelo Quismo nos vê como estranhos e nos repudia, considerando seus rituais peculiares como motivo para exclusão. <br><br> Ao nascermos, nos é marcado a nossa gratidão cortando o lóbulo de suas orelhas, um gesto para se conectar às pulsações internas da vida. No entanto, essa expressão de altruísmo é distorcida pelo medo, e a Matéria Vermelha é obscurecida pela incompreensão. O Rei de Vermelho é rejeitado em favor do desconhecido. Os Meístas, que buscam a unidade e a igualdade, são marginalizados na sombra da sociedade que se recusa a entender sua melodia única” </h3>",
		choices: [
	 	{
			choice: "Falar sobre a sua infância",
			destination: 'vidaInfancia'
		},
	 	]
	},

	vidaInfancia: {
		title: "",
		image: "",
		story: "<h3> “Na vila isolada dos Meístas, no deserto onde as dunas cintilam sob o sol impiedoso, foi onde eu passei a minha vida toda. Minha pele escura é como uma herança do sol que queima nossas terras, e meu cabelo preto como a noite, cortado com precisão, reflete as sombras dançantes sobre as dunas no entardecer. <br><br> Dentro da vila, sou faço um papel vital, sou um dos médicos com mais tempo de experiência. Uma profissão que encarnar os valores de altruísmo e união que nós prezamos. Como o médico da vila, carrego nas minhas mãos a arte ancestral de curar, enfrentando desde febres do deserto até feridas das tempestades de areia que nos açoitam. <br><br> Mas sob a tranquilidade aparente de Meístas, há murmúrios de um mundo além do horizonte. Meu pai, Kovalev, era um mercador que transitava fazia negócios com outros culturas constantemente. <br><br> No entanto, após a doença assolar a minha casa, meu coração virou uma encruzilhada, entre as memórias da sabedoria que eu fui ensinado e pela necessidade de enfrentar mundo exterior, um preço a se pagar para manter nossa cultura viva . Minha jornada é dupla, não apenas para curar corpos com minhas mãos habilidosas, mas também para nutrir a alma da comunidade que se apegou às suas tradições. Minha vida se entrelaça com as histórias que ecoam dos antigos Meístas, seus espíritos residindo em cada grão de areia que o vento varre pelas ruas da vila.” </h3>",
		choices: [
	 	{
			choice: "Perguntar sobre a FVL",
			destination: 'askFVL'
		},
	 	]
	},


	askFVL: {
		title: "",
		image: "",
		story: "<h3>“Bad Blood” Albert começou, sua voz firme apesar das incertezas que o corroíam. “Gostaria de entender mais sobre a Frente da Volição Libertadora. Qual é a sua causa política? Qual é o propósito por trás da FVL?” <br><br> Bad Blood o encarou por um momento, seus olhos escuros e insondáveis parecendo examiná-lo em busca de alguma intenção oculta. Depois de um momento de silêncio, ele finalmente falou, sua voz carregando um peso que Albert sentiu ecoar na própria sala. <br><br> “A Frente da Volição Libertadora, FVL, é um grupo de indivíduos que se reuniram por um propósito comum, embora os motivos que nos trouxeram aqui sejam egoístas.” As palavras de Bad Blood eram um reconhecimento cru da verdade que moldava a fundação da FVL. “Estamos unidos em nossa oposição ao governo ditatorial de Al Salin. ” <br><br> Bad Blood pausou por um momento, permitindo que as palavras se acomodassem no ar antes de continuar. “Al Salin consolidou seu poder através da opressão e do medo, explorando e sufocando aqueles que ousam desafiar sua autoridade. A FVL, nesse cenário, surge como uma espécie de guerilha armada, uma voz de oposição que busca contrapor as garras de um regime que sufoca a liberdade e a esperança.” <br><br> Albert assentiu, suas perguntas sendo respondidas, mas ele desejava mergulhar mais fundo na história e nas motivações que impulsionavam essa aliança sombria. <br><br> “Você mencionou que todos os membros da FVL têm motivos egoístas para se unirem. Pode me contar mais sobre esses motivos? E como você se tornou o líder desse grupo? ” <br><br>  O olhar de Bad Blood se aprofundou, uma sombra de tristeza passando rapidamente por seus olhos. “Minha família era dona de uma vasta propriedade agrícola, um legado construído ao longo de gerações. No entanto, o governo de Al Salin tomou nossas terras, nossos meios de subsistência, tudo o que representava nossa identidade ” <br><br> Ele fez uma pausa, um suspiro carregado escapando de seus lábios. “Eu sou o herdeiro dessa linhagem de fazendeiros, mas a terra foi roubada de nós, e meu sangue corre nas veias de todos aqueles que sofreram sob esse governo brutal. Minha liderança não é uma escolha feita por desejo, mas sim pela necessidade de fazer o que é preciso para mudar o curso da história” <br><br> Albert absorveu as palavras de Bad Blood, o enigma que era o líder da FVL começando a se desvendar diante dele. Ele então decidiu explorar mais a fundo o cenário político que cercava a causa deles. <br><br> “E o cenário político atual? Como estão as coisas lá fora, além dessas paredes? Qual é a situação do governo de Al Salin?” <br><br> Bad Blood olhou para além das janelas empoeiradas da biblioteca, como se visse através das paredes e diretamente para a paisagem caótica e opressiva que existia além. “Al Salin mantém um aperto de ferro sobre a população. Ele restringe o acesso ao conhecimento e à educação, mantendo o povo em estado de ignorância. Aqueles que ousam resistir são silenciados, enquanto aqueles que se curvam a ele são recompensados com uma falsa sensação de segurança.” <br><br> Bad Blood se virou para Albert, seus olhos agora ardendo com uma determinação incendiária. “É por isso que a FVL existe. Nós lutamos para quebrar essas correntes, para trazer a verdade à luz e dar às pessoas a chance de escolher sua própria trajetória. FVL, a Frente da Volição Libertadora, nosso nome é uma declaração de que a liberdade não é um privilégio concedido, mas um direito inalienável que estamos dispostos a lutar por ele, custe o que custar.” <br><br> A explicação de Bad Blood ecoou na sala, as palavras carregadas de uma promessa sombria e uma chama inextinguível. Albert percebeu que havia mergulhado em um mundo muito mais complexo do que imaginara inicialmente, uma luta que transcendia as fronteiras entre o certo e o errado. E enquanto Bad Blood falava, Albert sentiu que havia se tornado parte dessa luta, uma peça no tabuleiro de um jogo cujas consequências eram imprevisíveis, mas que moldariam o destino de todos os envolvidos. Então, o líder da Frente da Volição Libertadora saiu do quarto, deixando Albert sozinho com suas reflexões. </h3>",
		choices: [
	 	{
			choice: "Dormir",
			destination: 'vigia'
		},
	 	]
	},

	vigia: {
		title: "",
		image: "img/meu_midjourney/resized/foto8.png",
		story: "<h3> Albert foi designado para cuidar da recuperação de Antihero. Com o passar dos dias, Albert encontrou-se na monotonia da vigília, seu corpo cansado e seus olhos pesados. Ele estava de plantão, cumprindo sua responsabilidade com um senso de dever que parecia mais uma extensão de sua própria identidade. Antihero começou a mostrar sinais de melhora. A febre diminuiu, a respiração se tornou mais regular e a expressão abatida começou a ceder espaço para traços de força. <br><br>  Conforme a sombra do dia se estendia sobre o quartel-general da FVL, Albert sentia o cansaço pesar sobre seus ombros. Ele se esforçava para se manter acordado, mas o sono insistia em se intrometer, lançando uma rede de sonolência sobre sua mente exausta. Durante as breves pausas em seu plantão, Albert cochilava, sua mente mergulhando em sonhos fugazes e efêmeros. <br><br> Antihero, deitado na cama adjacente, observava Albert com olhos curiosos e atentos. Seus pensamentos eram como ondulações na superfície de um lago tranquilo, e ele se perguntava porque o médico parecia falar sozinho durante o sono. Ele já ouvira falar dos sonhos, mas a noção parecia distante, quase inatingível. <br><br> Finalmente, quando a escuridão da noite envolveu o espaço, Albert caiu em um sono profundo, os murmúrios dos seus sonhos ecoando em sua mente. </h3>",
		choices: [
	 	{
			choice: "Algo se aproxima",
			destination: 'dreamExp'
		},
	 	]
	},

	dreamExp: {
		title: "",
		image: "img/meu_midjourney/resized/foto9.png",
		story: "<h3>  Antihero se moveu com cuidado, seus movimentos ainda fracos devido à recuperação, e se aproximou de Albert. <br><br> “Você sonha enquanto dorme?” Antihero perguntou, sua voz ainda fraca, mas curiosa. Albert acordou lentamente, seu olhar focando no homem que falava com ele. <br><br> “Sim” Albert respondeu com um sorriso cansado e confuso com a pergunta. <br><br> Antihero parecia pensativo nas palavras de Albert. “Nós, do Quismo, não sonhamos, muitos nem sabem o que é isso. Há gerações, o sonho foi perdido para nós.” <br><br> Albert olhou para Antihero com uma mistura de surpresa e compaixão. “Perdido? Como assim? ” <br><br> Antihero respirou fundo, suas palavras carregando o peso de um legado que ele compartilhava com seu povo. “O sonho é símbolo da subjetividade do coletivo humano, um reflexo das profundezas da alma e da individualidade. Conheço esse conceito apenas através de livros.” <br><br>  “O que aconteceu com o sonho?” Albert perguntou, curioso. <br><br> Antihero abaixou o olhar por um momento antes de olhar novamente para Albert. “É possível que, há muito tempo, perdemos essa conexão com nosso próprio interior, com nossa humanidade compartilhada” <br><br> As palavras de Antihero ecoaram no ar, e Albert sentiu uma mistura de tristeza e revolta pela injustiça que ele estava testemunhando. Do outro lado da escuridão, ambos os homens estavam compartilhando não apenas suas histórias pessoais, mas também as cicatrizes de um mundo despedaçado, um mundo onde a liberdade e a subjetividade eram tesouros roubados. <br><br> Enquanto a noite avançava e os sonhos de Albert flutuavam nas sombras, ele percebeu que, em meio à escuridão, havia uma fagulha de conexão humana, uma chama de compreensão que transcendia as diferenças e os desafios. E, em sua própria maneira, ele estava contribuindo para a recuperação de uma parte da humanidade que havia sido roubada. <br><br> Passado algumas horas, Albert foi ao à sala de refeições. Ao entrar na sala, sentiu os olhares discretos dos membros da FVL sobre ele. Era como se a aura de sua crença Meísta o precedesse, expondo-o a uma atenção indesejada. Ele se moveu com determinação, ignorando os olhares que o seguiram enquanto ele se aproximava das mesas improvisadas. A agitação da sala se acalmou momentaneamente, como se o ar estivesse impregnado de uma tensão que todos tentavam disfarçar. <br><br> E então, cortando o silêncio como um raio, a voz de Lavander Haze ressoou. <br><br> “Albert Burakh, o homem da fé Meísta, ou devo dizer, o crente com valores obsoletos?” A provocação nas palavras de Lavander Haze era clara, seu tom afrontoso perfurando o ar.</h3>",
		choices: [
	 	{
			choice: " Responder Lavander Haze",
			destination: 'responderLH'
		},
	 	{
			choice: "Ignorar críticas",
			destination: 'ignorar'
		},
	 	]
	},

	responderLH: {
		title: "",
		image: "",
		story: "<h3> Albert olhou para o homem, seus olhos expressando um misto de resignação e uma chama interior queimando de maneira inabalável. Ele tinha esperado por esse tipo de confronto, sabendo que sua fé Meísta não se alinhava com a mentalidade dura e pragmática do resto do mundo. Ele se aproximou da mesa onde Lavander Haze estava sentado e olhou diretamente para ele. <br><br> “Você tem algo a dizer?” Albert perguntou, sua voz calma, mas cheia de uma força silenciosa. <br><br> Lavander Haze sorriu de forma cínica, inclinando-se para trás em sua cadeira, os olhos fixos nos de Albert. “Eu tenho muitas coisas a dizer, meu caro Albert. Sua crença Meísta, sua fé na empatia e na compaixão, tudo isso me parece uma forma de escravidão moral. ”<br><br> Continuou Lavander Haze, sua voz se tornando mais intensa. “Uma moral de escravos, que valoriza a humildade, a mansidão e a compaixão. Você está disposto a curvar a cabeça, a abraçar os fracos, a negar sua própria força em nome de uma causa coletiva.” <br><br> Albert permaneceu firme, sua expressão inabalável. Ele sabia que essa discussão era um choque inevitável entre duas mentalidades contrastantes. Ele também sabia que suas crenças não eram vistas com bons olhos por todos os membros da FVL. <br><br> “Você critica minha crença como uma forma de conformismo e falta de individualidade” Albert respondeu calmamente. “Mas eu vejo o Meísmo como um chamado para cuidar daqueles que mais precisam, para buscar um equilíbrio entre a força e a compaixão. O que você acredita, Lavander? Apenas na busca implacável pelo poder e pela sobrevivência?”<br><br>  Lavander Haze lançou um sorriso mordaz, seus olhos faiscando de desafio. “Eu acredito na realidade crua, Albert. Na busca pelo que é necessário para sobreviver e prosperar neste mundo implacável. O Meísmo pode ser uma ilusão reconfortante, mas não é suficiente para moldar um mundo verdadeiramente livre ”<br><br> Albert olhou para Lavander Haze, seus olhos transmitindo uma profunda convicção. Ele respirou fundo antes de responder às palavras desafiadoras do outro homem. <br><br> “A empatia” começou Albert, sua voz ressoando com uma intensidade tranquila, “é uma revolta contra um mundo brutal. Não é fraqueza, como você insinua, mas uma força que persiste apesar das piores adversidades. Pode não ser o caminho mais fácil, nem o mais rápido, mas é o único caminho que oferece uma chance de verdadeira mudança, uma mudança que não vem à custa da humanidade” <br><br> Ele continuou, olhando nos olhos de Lavander Haze, desafiando-o com sua própria paixão. “Eu me recuso a aceitar que a compaixão é uma fraqueza. É a nossa maior força, a chama que nos permite resistir às trevas que nos cercam. Se isso é escravidão moral, então que assim seja. Prefiro ser escravo da bondade do que servo da crueldade” <br><br> A sala de refeições permaneceu em silêncio, as palavras de Albert ecoando como um desafio às sombras que se erguiam. Albert e Lavander estavam em lados opostos de uma divisão ideológica, cada um com sua própria visão do que era necessário para sobreviver e mudar a realidade em que viviam. Enquanto a sala de refeições observava em silêncio tenso, os dois homens se enfrentaram em uma batalha de palavras e convicções, cada um carregando o peso de sua própria verdade. </h3>",
		choices: [
	 	{
			choice: "Jantar e dormir",
			destination: 'doencaFVL'
		},
	 	]
	},

	ignorar: {
		title: "",
		image: "",
		story: "<h3>  A expressão calma de Albert não passou despercebida. Enquanto alguns membros da FVL observavam com um misto de choque e desaprovação, outros trocavam olhares de aprovação, admirando a habilidade dele em não ceder às provocações. <br><br> Lavander Haze, no entanto, não estava satisfeito. Ele inclinou-se para a frente, sua postura se tornando mais agressiva. “Você ouviu o que eu disse, Albert?” <br><br> Albert parou por um momento, virando-se para olhar diretamente para Lavander Haze. Seus olhos transmitiam uma serenidade que contrastava com a intensidade do momento. “Ouvi. Suas palavras não me atingem” <br><br> Lavander Haze franziu o cenho, afrontado pela aparente indiferença de Albert. “Não acredito que você possa simplesmente ignorar as críticas à sua crença Meísta. Não acha que elas merecem uma resposta?” <br><br> A resposta de Albert foi um sorriso sereno.“Não tenho o hábito de me envolver em discussões infrutíferas, Lavander. Minhas crenças são minhas, e eu as vivo com a convicção que elas merecem. Se você deseja debater, faça-o com alguém disposto a participar.” <br><br> O olhar de Lavander Haze alternou entre incredulidade e frustração. Ele estava acostumado a provocar reações, a estimular discussões acaloradas que questionavam as convicções dos outros. Mas Albert permanecia impassível, como uma rocha diante de um furacão. <br><br> Enquanto Albert seguia seu caminho e se sentava para uma refeição tranquila, o murmúrio da sala começou a ganhar vida novamente. Alguns olhares permaneciam fixos nele, uma mistura de respeito e desaprovação. A atitude de Albert não passara despercebida, mas a rejeição silenciosa das afrontas de Lavander Haze provocou uma onda de sentimentos conflitantes entre os membros da FVL. <br><br>  Enquanto Albert mantinha sua serenidade, ele também sabia que suas ações haviam desencadeado um debate interno entre os membros da FVL, sua falta de atitude poderia levar à perda de reputação entre os membros. </h3>",
		choices: [
	 	{
			choice: "Jantar e dormir",
			destination: 'doencaFVL'
		},
	 	]
	},


	doencaFVL: {
		title: "",
		image: "img/meu_midjourney/resized/foto10.png",
		story: "<h3> À medida que os dias se estendiam em um ritmo constante, Albert mergulhava mais fundo na vida da Frente da Volição Libertadora. Ele se tornara uma presença constante, um elo silencioso que ajudava onde podia, um estranho em meio a rostos endurecidos pela luta e pela desconfiança. Ele compartilhava conhecimento médico, cuidava de feridas e oferecia palavras de encorajamento quando necessário. Aos poucos, sua presença deixou de ser estranha e se tornou uma parte discreta e aceita do grupo. <br><br> Mas então, como uma sombra insidiosa que se espalha, Albert começou a notar algo estranho. Uma tosse seca, como o sussurro do vento através das folhas mortas, começou a ecoar entre os membros da FVL. Tosse após tosse, uma melodia de desconforto e preocupação encheu o ar. Albert observava enquanto os olhos dos membros se enchiam de inquietação, como se estivessem lutando contra algo que não podiam compreender. <br><br> Foi então que ele começou a ver o escurecimento. Mãos que outrora eram marcadas pela luta agora estavam manchadas por um escurecimento sombrio, como se a própria escuridão estivesse buscando abrigo sob a pele daqueles que resistiam ao governo opressor de Al Salin. <br><br> Albert viu as semelhanças imediatamente. Os sintomas eram familiares, lembranças de sua própria comunidade Meísta que haviam enfrentado uma doença cruel e implacável. O escurecimento da mão era um eco sombrio do que havia assolado sua vila, uma lembrança de como a doença havia roubado vidas e esperanças. <br><br> Ele se aproximou de Bad Blood, a urgência queimando em seus olhos. “Bad Blood, precisamos conversar. A doença que está afetando seus membros... ela é similar àquela que assolou minha comunidade Meísta.” <br><br> Bad Blood olhou para Albert com um misto de surpresa e preocupação. “Como você sabe disso?” <br><br> Albert explicou as semelhanças, compartilhando suas memórias sombrias e a conexão que ele havia feito. Ele observou enquanto a expressão de Bad Blood se tornava mais séria, a compreensão se aprofundando em seus olhos. <br><br> “Se esses sintomas forem o que você diz, isso é um problema sério”disse Bad Blood, sua voz carregada de preocupação. <br><br> Albert assentiu. “Precisamos agir, Bad Blood. Devemos atacar um laboratório do governo, descobrir o que eles estão fazendo e se há alguma conexão com o Sonho.” <br><br> Bad Blood olhou para Albert por um momento, ponderando as palavras dele. Então, ele assentiu, a determinação em seu olhar igual à de Albert. “Vamos planejar a invasão. Precisamos descobrir a verdade e encontrar uma maneira de deter essa doença antes que ela se espalhe ainda mais.” </h3>",
		choices: [
	 	{
			choice: "Planejar golpe",
			destination: 'golpe01'
		},
	 	]
	},


	golpe01: {
		title: "",
		image: "",
		story: "<h3> E assim, Albert e Bad Blood começaram a traçar os planos para a investida arriscada contra o laboratório do governo. Enquanto as sombras da incerteza e da doença pairavam sobre eles, eles se uniram em um propósito comum. A doença que atacava os membros da FVL era uma ameaça que não podia ser ignorada, uma sombra escura que os impelia a agir, a lutar pela sobrevivência não apenas deles mesmos, mas de toda uma população oprimida. E enquanto eles se preparavam para a batalha iminente, a conexão entre a doença e o Sonho se tornava mais clara em suas mentes, uma teia de mistério e perigo que eles estavam determinados a desvendar. <br><br> Bad Blood estava de pé diante da iminente encruzilhada, uma escolha que pesava sobre ele como um fardo de responsabilidade. A discussão fervilhava na pequena sala escura, a luz fraca das velas dançando nas paredes de madeira. Seu olhar se voltava de um rosto concentrado para outro, seus pensamentos um turbilhão de incertezas e decisões que ameaçavam selar o destino da investida que planejavam. <br><br> Albert, de pé na sombra, observava enquanto Bad Blood pesava suas opções, sua postura tranquila e determinada, mas seus olhos ardiam com a intensidade da situação. Ele tinha encontrado um lugar nesse grupo de rebeldes, ganhando a confiança de Bad Blood ao longo dos dias. Mas agora, diante dessa decisão crítica, ele sabia que ainda não havia conquistado completamente o direito de influenciar a escolha. <br><br> “Devemos agir com cautela” disse Midnights, o franco-atirador do grupo, sua voz baixa, quase sussurrando como o vento nas folhas secas. “Uma abordagem discreta nos permitirá chegar mais perto do nosso objetivo sem alertar as sentinelas.” <br><br> Bad Blood assentiu lentamente, seu olhar fixo no interlocutor. Mas sua mente estava dividida, entre a astúcia e a fúria, entre a estratégia sutil e a investida direta. Ele virou seu olhar para outro membro, cujos olhos ardiam com uma determinação feroz. <br><br> “Uma abordagem direta pode ser mais arriscada, mas também pode ser mais impactante” argumentou o Evermore, sua voz firme como o estalo seco de um galho quebrando sob o peso. “Se atacarmos com força total, mostraremos ao governo que não somos meros dissidentes, mas uma ameaça real.” <br><br> Albert permanecia em silêncio, seu olhar observando a interação entre os membros da FVL. Ele compreendia a importância dessa decisão, a urgência que eles sentiam para agir contra a ameaça que se enraizava como uma erva daninha em sua sociedade. Mas, mesmo assim, ele se segurava, respeitando a hierarquia e a liderança de Bad Blood. <br><br>  Finalmente, Bad Blood ergueu uma mão, silenciando a discussão. Seus olhos, intensos como brasas ardentes, percorreram o pequeno grupo reunido. “Ambas as abordagens têm méritos. A cautela nos protegerá, mas a força total enviará uma mensagem clara.” </h3>",
		choices: [
	 	{
			choice: "...",
			destination: 'checarRep'
		},
	 	]
	},

	checarRep: {
		title: "",
		image: "",
		story: "<h3> </h3>",
		choices: [
	 	{
			choice: " ",
			destination: ''
		},
	 	]
	},

	escolherInvasao: {
		title: "",
		image: "",
		story: "<h3> Ele virou seu olhar para Albert, uma faísca de reconhecimento brilhando em seus olhos. “Albert” começou ele, sua voz carregada de seriedade, “você trouxe à tona a conexão entre essa doença e o Sonho. Sua visão é valiosa para nós, e eu confio que você deseja o melhor para esta causa. Dê-me sua opinião.” <br><br> Os olhares de todos convergiram para Albert, um silêncio tenso preenchendo a sala. Albert sentiu o peso da expectativa sobre seus ombros, o conhecimento de que essa decisão poderia moldar o futuro da FVL e de sua luta contra o governo opressor de Al Salin. <br><br> Albert assentiu, sua expressão tranquila, mas seus olhos demonstravam a compreensão profunda da situação. “Compreendo sua preocupação, Bad Blood. No entanto, considerando a doença que afeta nossos membros e a complexidade do que enfrentamos, a abordagem discreta oferece uma chance maior de sucesso. Podemos coletar informações cruciais sem sermos detectados e garantir que nosso ataque seja eficaz.”<br><br> Bad Blood olhou para Albert, sua expressão conturbada, mas com um traço de respeito emergindo. Ele estava avaliando não apenas as palavras de Albert, mas a experiência que ele trazia como médico e a perspicácia que demonstrara desde que se juntara à FVL. <br><br> “Você está certo, Albert” Bad Blood finalmente disse, sua voz carregada com um misto de resignação e confiança crescente. “A abordagem discreta é a melhor escolha dadas as circunstâncias.” <br><br> O murmúrio de aprovação encheu o ar, um eco da determinação e coragem que ardia nos corações daqueles rebeldes. Enquanto a decisão se solidificava, Albert sentiu a força da união que os unia, o conhecimento de que eles enfrentariam essa ameaça juntos, independentemente do caminho escolhido. E enquanto a noite avançava, o plano tomava forma, o futuro da FVL se moldava nas sombras da escuridão, pronta para desafiar a tirania que os oprimia. </h3>",
		choices: [
	 	{
			choice: "Esperar invasão",
			destination: 'esperarInvasao'
		},
	 	]
	},

	naoEscolherInvasao: {
		title: "",
		image: "",
		story: "<h3> Red olha e diz “Bad Blood, acredito que uma abordagem mais direta pode ser arriscada, mas se conseguirmos atingir nosso alvo com sucesso, a mensagem que enviaremos será poderosa. Mostraremos que não tememos confrontar a opressão e que estamos dispostos a enfrentar nossos inimigos de frente. ” <br><br> Bad Blood assentiu, uma mistura de gratidão e respeito em seu olhar. Ele tomou sua decisão, sua voz ecoando como uma sentença final na escuridão da sala. “Então seja decidido. Optaremos pela abordagem direta. Nós atacaremos o laboratório do governo e mostraremos a Al Salin que não somos meros peões em seu jogo. Nós somos a Frente da Volição Libertadora, e nossa luta será ouvida.” <br><br> Eles haviam chegado a um consenso, uma decisão tomada com a união de mentes determinadas em encontrar a solução para o mistério da doença. E assim, o caminho estava definido. A abordagem direta seria sua rota, a sombra da incerteza agora dissipada por uma determinação compartilhada. </h3>",
		choices: [
	 	{
			choice: "Esperar invasão",
			destination: 'esperarInvasao'
		},
	 	]
	},

	esperarInvasao: {
		title: "",
		image: "",
		story: "<h3> A solidão envolvia Albert como um manto, enquanto ele permanecia na base da Frente da Volição Libertadora. O som ecoante dos passos dos membros que se afastavam se dissipou gradualmente, deixando-o cercado pelo silêncio angustiante da espera. As armas desgastadas pendiam dos ombros dos guerrilheiros, suas expressões mascaradas pela seriedade da missão que os aguardava lá fora. <br><br>  Bad Blood havia ordenado que Albert permanecesse na base, cuidando do centro das operações enquanto o grupo se aventurava na busca de informações vitais. Albert compreendia a lógica por trás dessa decisão; afinal, sua especialidade médica não era compatível com a ação direta no campo de batalha. No entanto, a inquietude consumia-o. Sua mente estava cheia de pensamentos ansiosos, cada minuto parecendo uma eternidade enquanto ele esperava pelo retorno do grupo. <br><br> Com uma mistura de impaciência e inquietação, Albert voltou-se para a televisão que estava ligada em um canto da sala. O noticiário estava em andamento, e suas palavras penetraram o espaço, trazendo consigo imagens emaranhadas de tumulto e violência. E então, a imagem focalizou em algo que fez o coração de Albert congelar em seu peito. <br><br> Era um laboratório do governo, cercado por uma confusão caótica. A câmera capturou a fumaça que se erguia no ar, o som de tiros ecoando como um lamento dissonante. O laboratório estava sendo invadido, e era claro que a FVL estava no epicentro dessa incursão arriscada. Albert assistia com os olhos arregalados, suas mãos inconscientemente apertando a borda da mesa. <br><br> E então, a visão desse cenário sombrio foi interrompida por uma sequência de eventos que Albert nunca poderia ter previsto. Bad Blood emergiu do laboratório, Red ao seu lado. Mas antes que Albert pudesse entender completamente o que estava acontecendo, um estampido cortou o ar e Red caiu, seu corpo atingido por uma bala. A câmera capturou a cena chocante, as imagens se desdobrando diante dos olhos incrédulos de Albert. <br><br> Bad Blood, em uma ação que desafiava a própria lógica, correu para Red. Ele não hesitou, colocando sua própria vida em perigo para salvar o companheiro caído. Os olhos de Albert estavam fixos na tela, uma mistura de choque, admiração e incredulidade ondulando em sua expressão. <br><br> Enquanto as imagens continuavam a se desdobrar, as vozes dos apresentadores dos canais de televisão sensacionalistas ecoavam como um zumbido constante. Eles comentavam sobre o ato de Bad Blood, suas palavras afiadas como lâminas. <br><br> “Um ato obsceno de altruísmo, um líder da guerrilha que ousa desafiar as normas de nossa sociedade. Um ato de sacrifício que beira o absurdo, uma obscenidade em um mundo já atormentado pelo caos.” <br><br> Albert sentiu uma onda de indignação e impotência varrendo-o. Ele compreendia que as palavras da mídia eram moldadas por sua própria agenda, buscando desacreditar e difamar a FVL. Mas a visão de Bad Blood arriscando tudo para salvar Red era um testemunho de coragem e camaradagem que não poderia ser apagado por comentários rancorosos. <br><br> Enquanto Albert continuava a observar a cena na televisão, as emoções se chocavam dentro dele. A imagem de Bad Blood enfrentando o perigo para proteger um amigo era uma lembrança poderosa de que, em meio à escuridão, ainda havia uma centelha de humanidade que resistia, uma centelha que ardia com determinação e coragem em um mundo implacável. </h3>",
		choices: [
	 	{
			choice: "...",
			destination: 'reuniaoInvasao'
		},
	 	]
	},

	reuniaoInvasao: {
		title: "",
		image: "img/meu_midjourney/resized/foto11.png",
		story: "<h3> A sala escura da base da Frente da Volição Libertadora estava mergulhada em um silêncio carregado de antecipação. Após a invasão ao laboratório do governo, os membros da FVL estavam reunidos, as sombras projetadas nas paredes como testemunhas mudas de suas determinações compartilhadas. Albert estava lá, sua expressão séria, seus olhos fixos nas figuras ao seu redor. <br><br> Bad Blood, o líder que havia sacrificado tudo, estava à frente da sala. Ao seu lado, Lavander Haze, o hacker de mentes inquietas e mãos hábeis, estava prestes a transmitir a mensagem que tinha sido meticulosamente preparada. O ar estava carregado de tensão e uma sensação de urgência, como um prenúncio de mudança iminente. <br><br> Bad Blood afirmou, “Devemos aproveitar nosso momento midiático e fazer uma transmissão para transmitir nossas informações e, assim podemos arrumar ganhar influência e tentar algo contra Al Salin” <br><br> Lavander Haze, com seu ar de desafio e confiança, começou a transmissão. A tela se acendeu, a imagem transmitida para além das paredes da base, chegando a todos os cantos do mundo que ansiosamente aguardavam. Bad Blood permanecia ao lado, sua figura imponente e decidida, representando não apenas a FVL, mas também uma luta maior. <br><br> “Meus amigos, meus companheiros, meus irmãos e irmãs na luta” Bad Blood começou, sua voz ecoando com um fervor incendiário. “Hoje, estamos diante de uma verdade que o governo tentou esconder, uma verdade que eles acreditaram que poderiam nos roubar.” <br><br> As palavras de Lavander Haze eram como faíscas em uma fogueira, inflamando a determinação de cada membro da FVL. Albert assistia, seus olhos fixos na tela, suas mãos tensas de expectativa. A transmissão continuava, revelando os detalhes sombrios do plano do governo, a manipulação cruel que eles haviam perpetrado contra seu próprio povo. <br><br> Enquanto a transmissão continuava, Albert sentia uma mistura de fúria e tristeza. Ele entendia agora a extensão das atrocidades cometidas pelo governo, o nível de sua manipulação sutil e cruel. Mas junto com essas emoções, havia também uma faísca de esperança. A esperança de que a verdade exposta pudesse ser um catalisador para a mudança. <br><br> Os dias que se seguiram ao anúncio público da FVL foram marcados por uma reviravolta surpreendente. Lampejos de Sonho, pequenos e tênues, começaram a emergir na população. Como um sopro suave, o gene Bellman Ford parecia encontrar sua voz novamente, os lampejos de aspiração crescendo em meio à escuridão. No entanto, os casos da doença do Sonho, a mesma que afetava os Meístas, começaram a surgir na população. <br><br> A FVL ganhava popularidade, suas fileiras crescendo com aqueles que não mais aceitavam a manipulação do governo, aqueles que ansiavam pelo retorno do Sonho roubado. Albert observava tudo isso, uma mistura de gratidão e resolução se formando dentro dele. <br><br> No centro desse turbilhão de mudança estava Bad Blood, o líder cujo sacrifício havia despertado a consciência de muitos. As palavras dele eram como um chamado para a ação, um grito de liberdade que reverberava nas almas daqueles que tinham sido sufocados pelo governo opressor. <br><br> Albert estava disposto a se unir a essa luta, a contribuir com suas habilidades e conhecimento, a defender a verdade e a justiça que haviam sido corrompidas. Ele podia sentir a roda da mudança girando, a sombra da desolação sendo gradualmente dissipada pelo brilho do Sonho reacendido. E assim, ele estava pronto para enfrentar o que quer que viesse a seguir, para se alinhar com aqueles que buscavam a redenção e a transformação de um mundo sufocado pelo domínio da escuridão. </h3>",
		choices: [
	 	{
			choice: "...",
			destination: 'inicioRev'
		},
	 	]
	},

	inicioRev: {
		title: "",
		image: "img/meu_midjourney/resized/foto12.png",
		story: "<h3> O tumulto se espalhava pelas ruas da cidade como um incêndio incontrolável, engolindo a escuridão que o governo havia espalhado por tanto tempo. As palavras de Lavander Haze naquela transmissão haviam agido como uma centelha, incendiando a esperança e a determinação que jaziam adormecidas nos corações das pessoas. E agora, as consequências dessa faísca se manifestavam em um turbilhão de protestos e revolta. <br><br> As pessoas se reuniam em massa, unindo suas vozes em um coro de desafio contra o governo opressor de Al Salin. As ruas que antes eram sombrias e silenciosas agora reverberavam com a energia fervente daqueles que há muito tempo estavam sob o domínio de leis abusivas e rotinas sufocantes. As bandeiras da liberdade e da individualidade eram empunhadas com orgulho, cada pessoa exibindo o desejo de escapar das correntes que os mantinham acorrentados. <br><br> Os membros da FVL agora estavam no centro desse furacão, liderando as massas com uma determinação inabalável. Eles tinham crescido em número, cada vez mais pessoas se juntando às suas fileiras, atraídas pela promessa de um novo amanhã, um mundo onde a verdade e a justiça prevaleceriam. <br><br> Enquanto os protestos se intensificavam, a FVL percebia que a oportunidade que haviam esperado estava finalmente à sua porta. As ruas fervilhavam com a fúria coletiva da população, uma fúria que agora estava direcionada ao epicentro do poder opressor - a sede central do governo. O cenário estava pronto para uma revolução, uma mudança de maré que varreria a corrupção e o abuso. <br><br> Albert estava lá, no meio desse redemoinho de emoções e aspirações. Ele viu as pessoas cansadas de serem manipuladas, de terem seus sonhos roubados e suas vozes silenciadas. A FVL, uma vez um grupo de dissidentes na sombra, agora estava à frente da vanguarda dessa briga, conduzindo a revolta com sabedoria e coragem. <br><br> Bad Blood liderava o caminho, sua presença imponente e sua liderança infalível inspirando confiança em cada membro. A decisão havia sido tomada - a sede central do governo seria invadida, os pilares do poder opressor seriam abalados até suas fundações. <br><br> Enquanto os membros da FVL se preparavam para o que estava por vir, Albert sentia um turbilhão de emoções dentro dele. Ele estava comprometido com essa luta, não apenas por sua própria busca pela cura e pela verdade, mas também pelo futuro da humanidade. Ele viu a força das pessoas nas ruas, a coragem que brotava de cada coração. A revolta não era apenas contra um governo, era uma busca por dignidade, liberdade e individualidade. <br><br> </h3>",
		choices: [
	 	{
			choice: "Liderar a revolta",
			destination: 'inicioSede'
		},
	 	]
	},

	inicioSede: {
		title: "",
		image: "img/meu_midjourney/resized/foto13.png",
		story: "<h3>  O confronto se aproximava, e Albert estava pronto para enfrentar as provações que o aguardavam. Ele sabia que essa luta não seria fácil, que haveria sacrifícios e desafios a superar. Mas ele também sabia que estava do lado certo da história, lutando por um mundo onde a chama do Sonho não seria mais sufocada, onde a coletividade e a individualidade poderiam coexistir em harmonia. <br><br> E assim, nas ruas fervilhantes de protesto e revolta, a FVL estava prestes a escrever um novo capítulo na história de Franconegro, um capítulo de coragem, determinação e redenção. <br><br> Conforme a FVL ia marchando em direção à sede, o Palácio se erguia majestoso diante dos olhos do visitante, uma sinfonia arquitetônica que ecoava através das eras. Suas torres e cúpulas pareciam alcançar o próprio céu. Enquanto seus detalhes em azulejo contavam histórias antigas em padrões intrincados. <br><br> A fachada de mármore branco, ricamente esculpida com motivos geométricos e florais, brilhava sob o sol dourado. Era como se a própria pedra tivesse absorvido os segredos da eternidade. <br><br> Com um empurrão suave, elas se abriram, revelando um mundo que desafiava a lógica e a compreensão. As portas maciças de madeira, talhadas à mão, se abriram para revelar um mundo de requinte. Tetos abobadados ornamentados se estendiam como abraços acolhedores, afrescos ricamente coloridos narravam histórias mitológicas nos painéis e colunas gregas majestosas se elevavam em reverência ao passado. <br><br> À medida que o eles seguiam adiante, os corredores luxuosos, iluminados por lustres cintilantes, eram ladeados por móveis opulentos e tapeçarias exuberantes. Os espelhos bisotados refletiam a luz com suavidade, criando um jogo de brilho e sombra que parecia dançar com a história. <br><br> A FVL, liderada por Bad Blood, Albert e alguns voluntários destemidos, enfrentou o esquadrão armado do governo ditatorial de Al Salin. O confronto começou com o estampido de tiros ecoando pelos corredores majestosos, e as balas destruindo os detalhes intrincados das obras de arte que adornavam as paredes. <br><br> Cada canto do Palácio contava sua própria história, cada sala oferecia uma experiência única. Era como se o tempo tivesse sido congelado em diferentes épocas, e o Palácio fosse o epicentro dessa viagem temporal. A diversidade e a maestria arquitetônica se entrelaçavam em um espetáculo inesquecível, onde o passado e o presente se fundiam em harmonia, celebrando a riqueza da cultura e da história. O Palácio era, sem dúvida, um testemunho vivo da grandeza da humanidade através dos séculos. <br><br>À medida que avançavam, os membros da FVL encontraram um laboratório escondido nos recônditos da sede do governo. Rapidamente, eles o dominaram, mas o triunfo foi efêmero. Forças Especiais de Al Salin apareceram, encurralando-os. <br><br> Em meio à confusão e ao caos, Bad Blood dirigiu-se a Albert com palavras que carregavam o peso da responsabilidade. Ele o instruiu a não se envolver na luta, mas a investigar o laboratório em busca de informações cruciais. Era um dilema que lançou Albert em um abismo de indecisão, seu coração dividido entre a lealdade aos companheiros de luta e a busca pela verdade que o havia conduzido até ali. </h3>",
		choices: [
	 	{
			choice: "Explorar laboratório",
			destination: 'expLab'
		},
	 	{
			choice: "Ajudar na luta",
			destination: 'ajudarLuta'
		},
	 	]
	},

	ajudarLuta1: {
		title: "",
		image: "",
		story: "<h3> A indecisão tomou conta de Albert, uma luta interna entre seu dever médico e a necessidade de defender seus companheiros. <br><br> Com um suspiro pesado, Albert se virou e tirou a sua pistola do bolso. Ele sabia que estava arriscando tudo, que esta era uma escolha que poderia custar-lhe a vida. Mas ele estava disposto a pagar esse preço. <br><br> A luta prosseguia, os tiros ecoando pelos corredores luxuosos. Albert Burakh estava no meio do caos, os corredores da sede do governo de Franconegro eram um labirinto de confusão e violência. Os tiros ecoavam como trovões distantes, e as paredes ao seu redor tremiam com o impacto das balas. Ele sentiu seu coração acelerar enquanto seguia Bad Blood e os outros membros da FVL em direção ao laboratório, sua mente em um turbilhão de medo e determinação. <br><br> Os soldados de Al Salin, com suas armas reluzentes e uniformes impecáveis, eram uma força implacável. Eles atiravam com precisão mortal, e Albert podia ouvir os gritos de seus companheiros enquanto eram atingidos pelos projéteis. <br><br> O médico Meísta, no entanto, não tinha treinamento em combate. Seus movimentos eram hesitantes, seu corpo tenso pela tensão que permeava o ar. Ele sabia que estava em território inimigo, que cada canto escuro poderia esconder um atirador à espreita. <br><br> Foi então que aconteceu. Um estampido alto, seguido por uma dor súbita e intensa em seu peito. Albert foi atingido por uma bala, seu corpo sendo lançado para trás com a força do impacto. Ele caiu no chão frio e duro, sentindo o calor do sangue se espalhando pela sua roupa. <br><br> Sua visão ficou turva, e o som ao seu redor se transformou em um zumbido distante. Ele tentou se mover, mas seu corpo não respondeu como deveria. A dor era avassaladora, e ele lutava para manter a consciência. <br><br> A batalha continuava ao seu redor, mas Albert estava à margem, uma testemunha impotente da violência que o cercava. Ele sabia que sua vida estava escorrendo por entre os dedos, e uma sensação de desamparo o envolveu. <br><br> Bad Blood e os outros membros da FVL seguiram em frente, deixando Albert para trás, sua vida se esvaindo rapidamente. Ele tentou chamar por ajuda, mas sua voz saiu fraca e irreconhecível. <br><br> Os soldados de Al Salin se aproximaram, e Albert os viu passar por cima dele como sombras cruéis. Sua visão se tornou um borrão, e a escuridão o envolveu. Foi assim que Albert Burakh, o médico Meísta em busca da cura para sua comunidade, encontrou seu fim, em meio à brutalidade de uma revolta que cobraria um preço alto de todos os envolvidos. <br><br> Enquanto a batalha rugia, os soldados do governo lançaram molotovs no laboratório, queimando os segredos guardados lá dentro. A esperança de encontrar a cura para a epidemia do Sonho se esvaiu em chamas, junto com a vida de Albert. <br><br> </h3>",
		choices: [
	 	{
			choice: "...",
			destination: 'ajudarLuta2'
		},
	 	]
	},

	ajudarLuta2: {
		title: "",
		image: "",
		story: "<h3> A FVL, com tenacidade e determinação, eventualmente conseguiu derrubar o governo de Al Salin. Mas a vitória veio com um alto preço. A população de Franconegro estava sofrendo uma epidemia devastadora, uma doença do Sonho que se espalhava como um incêndio incontrolável. Com o vácuo de poder deixado pela queda do governo, o caos se instaurou na cidade. <br><br> A FVL tentou desesperadamente encontrar uma cura para a doença, mas seus esforços foram em vão. A epidemia dividiu a sociedade, transformando vizinhos em inimigos e desencadeando uma luta pelo controle e recursos escassos. <br><br> No final, a Frente da Volição Libertadora, que havia lutado com tanta determinação por uma causa justa, desintegrou-se em meio ao caos e à desesperança. A cidade de Franconegro estava em ruínas, e aqueles que sobreviveram estavam mergulhados em uma escuridão que parecia não ter fim. <br><br> A luta pela liberdade e pelo Sonho havia sido vencida, mas o preço pago foi além do que qualquer um poderia ter imaginado. </h3>",
		choices: [
	 	{
			choice: "Começar Novamente",
			destination: 'intro'
		},
	 	]
	},

	expLab: {
		title: "",
		image: "img/meu_midjourney/resized/foto14.png",
		story: "<h3> Após um momento de hesitação angustiante, Albert tomou sua decisão. Ele se afastou da batalha em fúria e se dirigiu ao laboratório tecnologicamente avançado que estava à sua frente. O ambiente era um contraste gritante com a opulência que permeava o restante da sede do governo. <br><br> Albert começou a vasculhar o laboratório, examinando cada canto e recanto em busca de pistas. Suas mãos ágeis folhearam documentos e anotações, suas mentes analisaram fórmulas e equações. Foi então que ele encontrou as pílulas roxas, dispostas meticulosamente em prateleiras brilhantes. <br><br>Lendo as fórmulas e os papéis que se espalhavam pelo laboratório, Albert descobriu a verdade chocante. A alta cúpula do governo também tinha a capacidade de sonhar, mas usava essas pílulas para controlar os efeitos colaterais indesejados. O Sonho lhes concedia a subjetividade e a capacidade de pensar de forma crítica, permitindo que dominassem a população com facilidade. <br><br> Com essa descoberta, Albert percebeu o que estava em jogo. Ele entendeu que essas pílulas tinham o poder de libertar as mentes das garras do governo opressor. Ele guardou a fórmula em seu bolso, determinado a usá-la para trazer a verdade à luz do dia. <br><br> Enquanto as batalhas irrompiam nas salas ao redor, Albert segurou essa pequena fórmula roxa em suas mãos trêmulas, ciente de que ela poderia ser a chave para a libertação de uma nação inteira. O destino estava nas mãos da FVL. </h3>",
		choices: [
	 	{
			choice: "...",
			destination: 'continuarSede01'
		},
	 	]
	},

	continuarSede01: {
		title: "",
		image: "",
		story: "<h3> Conforme o avanço rápido e eficaz da FVL, eles chegam à sala-chefe do al-Salin. A sala estava envolta em uma penumbra sinistra, como se as sombras do poder opressor se recusassem a desaparecer mesmo diante da queda de seu mestre. Antihero, em um gesto de pura determinação, arrombou a porta de entrada com uma força que ecoou pela sala. <br><br> Num movimento fluido e letal, Antihero sacou sua pistola com uma agilidade felina, mirando-a diretamente na cabeça de Al Salin, que estava sentado em seu trono dourado adornado com ornamentos de jasmim. Os seguranças que cercavam o trono de ouro do ditador nem tiveram tempo de reagir. Um silêncio de morte pairou no ar por um breve instante, como se o próprio destino segurasse a respiração. <br><br> O estampido da arma quebrou o silêncio com brutalidade, e a cabeça de Al Salin foi arremessada para trás em uma explosão de sangue e matéria cerebral. Seu corpo inerte desabou no chão, um fim adequado para um homem que havia governado com crueldade implacável. <br><br> Os seguranças, vendo que seu líder havia caído, não ofereceram resistência. Suas armas foram prontamente deixadas de lado, rendendo-se aos membros voluntários da FVL que avançavam como sombras da justiça. <br><br> A sede do governo havia sido conquistada. Al Salin jazia morto, sua sombra sinistra finalmente dissipada. Bad Blood, Albert e Antihero, em meio aos escombros do poder opressor, se encontraram diante de uma encruzilhada, suas mentes pesadas com o peso das escolhas que teriam que fazer. </h3>",
		choices: [
	 	{
			choice: "Contar a verdade",
			destination: 'continuarSede02'
		},
	 	]
	},

	continuarSede02: {
		title: "",
		image: "",
		story: "<h3> “Vocês precisam saber” Albert começou, sua voz tão áspera quanto o mundo que os cercava, “os membros do governo tomavam para manter a sua subjetividade e controlar a população. Assim, o governo buscava apagar a subjetividade, reduzindo a humanidade a um estado de conformidade dócil. Devemos anunciar isso. ” <br><br> O silêncio na sala era palpável, um espectro que pairava sobre os três homens reunidos em torno da fórmula que poderia moldar o destino da humanidade. O olhar de Bad Blood, normalmente inabalável, agora estava carregado de dúvida e peso. Albert, o médico que tinha jurado salvar vidas, estava imerso em uma encruzilhada moral que ameaçava engoli-lo. E Antihero, cuja vida havia sido resgatada graças a essa fórmula, agora enfrentava a realidade do que significava para todos. <br><br> Bad Blood finalmente quebrou o silêncio, sua voz carregada de gravidade. “Temos duas escolhas diante de nós, duas estradas que se estendem para o abismo ou a redenção. Cada uma delas traz consigo seu fardo de sacrifício e incerteza. ” <br><br> Ele apontou para as pílulas, pequenas cápsulas que continham o segredo da cura e do Sonho. “Podemos escolher o caminho da divulgação pública. Liberação imediata das fórmulas. Isso salvará mais vidas, incluindo as dos Meístas, que também merecem um lugar sob o sol. No entanto, devemos estar preparados para o caos que se seguirá. A desinformação se espalhará como um vírus, e os efeitos colaterais das pílulas nós não podemos controlar, pode ser devastadore. A sociedade já está em tumulto, com um vácuo de poder e a doença do Sonho à solta. Estamos prontos para lidar com as consequências? ” <br><br> Albert absorveu as palavras de Bad Blood, consciente de que a decisão que estava sendo tomada não era apenas sobre salvar vidas, mas sobre as vidas que seriam perdidas no processo. “A alternativa” ele começou, sua voz carregada de pesar, “é compartilhar as fórmulas seletivamente. Distribuição controlada, análise meticulosa dos efeitos, tentativa de mitigar os danos colaterais. Isso pode salvar algumas vidas da destruição imediata, mas muitas serão perdidas devido à demora. Incluindo os Meístas, que estão em desvantagem devido à sua população isolada.” <br><br> O dilema pairou no ar, uma sombra escura que envolvia o trio. Bad Blood olhou para Albert, seus olhos refletindo o peso da responsabilidade que recaía sobre eles. “Cada escolha tem seu preço, doutor. E cada vida perdida, seja por ação ou omissão, deixará uma marca indelével em nossas almas. Precisamos decidir agora, pois o tempo não espera.” <br><br> E assim, no limiar do destino, os três homens enfrentaram a encruzilhada sombria que definiria o curso da humanidade. A escolha que fizessem não seria facilmente esquecida, pois estava impregnada com as vidas daqueles que dependiam deles, e com as sombras do futuro incerto que se desenrolava diante deles. </h3>",
		choices: [
	 	{
			choice: " Divulgar as Fórmulas Publicamente",
			destination: 'endPub'
		},
	 	{
			choice: "Compartilhar as Fórmulas Seletivamente",
			destination: 'endSele'
		},
	 	]
	},

	endPub: {
		title: "",
		image: "",
		story: "<h3> As fórmulas foram divulgadas ao mundo sedento por salvação. Como um raio de esperança que corta a escuridão, as pessoas começaram a tomar as pílulas com desespero. A cura, quase milagrosa, varreu a doença do Sonho em um piscar de olhos. Aqueles que haviam sido afligidos pela opressão do governo agora encontravam um novo amanhecer em suas vidas. <br><br> No entanto, a luz da cura projetava sombras assustadoras. Efeitos colaterais, como fantasmas da noite, começaram a atormentar a população. Paradas cardíacas súbitas e a perda de sensibilidade nas mãos se tornaram comuns. O preço da cura parecia alto demais para alguns, uma barganha com o desconhecido que cobrava seu tributo. <br><br> Os canais de televisão sensacionalistas, como abutres sobre uma carcaça, deram palco para aqueles que eram contra as pílulas. Alegavam efeitos imprevisíveis, espalhando medo e incerteza, como uma nuvem de tempestade escura pairando sobre a cidade. <br><br>  A FVL, que tentava manter a ordem em Franconegro, viu-se rechaçada pela população enfurecida. O vácuo de poder que se formou transformou a cidade em um caldeirão de caos, um lugar ainda mais claustrofóbico e opressor. <br><br> Em meio a esse turbilhão, Albert Burakh fez sua escolha. Ele retornou à sua vila, levando consigo a cura que havia ajudado a liberar. Seu semblante envelhecido agora encontrava paz ao lado de sua amada Maria. Eles iam à missa todos os dias, buscando redenção e conforto espiritual. <br><br> Desde aquela decisão fatídica, em todos os seus dias, até sua morte, Albert Burakh subia a duna mais alta perto de sua vila. Lá, ele observava o sol vermelho se pôr, suas perguntas se misturando com o vento do deserto. Será que havia feito a escolha certa? Será que a cura era um fardo maior do que a doença? As respostas, como o horizonte distante, permaneciam inalcançáveis, deixando-o em um estado de reflexão eterna, como um guardião solitário do deserto. </h3>",
		choices: [
	 	{
			choice: "FIM",
			destination: 'irFinal'
		},
	 	]
	},

	endSele: {
		title: "",
		image: "",
		story: "<h3> O debate tenso chegou ao seu desfecho. Albert, com um peso no coração que pesava como uma pedra, conseguiu persuadir Bad Blood, e Antihero concordou com sua decisão. As fórmulas seriam divulgadas seletivamente, de forma a permitir a observação dos efeitos. Um fio de esperança e razão ainda brilhava em meio às trevas da incerteza. <br><br> Bad Blood falou com a determinação de um líder experiente. Ele explicou a Albert que os meístas seriam dos últimos a receber a fórmula. Revelar que eles estavam distribuindo as pílulas para os meístas antes de outros grupos causaria um caos ainda maior. A população, já enfurecida e sedenta por vingança, argumentaria que estavam morrendo enquanto outros recebiam o remédio. A raiva e o desespero poderiam mergulhar Franconegro em um abismo de destruição. <br><br> Essas palavras atingiram Albert como um soco no estômago. Ele nunca havia se sentido tão impotente e devastado. Lágrimas se formaram em seus olhos, mas ele entendeu a lógica cruel por trás dessa decisão. Era uma escolha entre o mal menor. <br><br> Com a distribuição mais lenta das pílulas, eles podiam ajustar as próximas levas à medida que novos efeitos colaterais apareciam. Aos poucos, a população de Franconegro começou a se recuperar. O vírus que havia assolado a cidade estava sendo contido, mas a um custo terrível. <br><br> Quando Albert finalmente voltou a Franconegro, seu coração pesou ao ver a comunidade que tanto amava. O cenário era desolador. As ruas eram um testemunho das vidas perdidas, das famílias desfeitas e dos destroços deixados para trás. A ferida aberta da comunidade meísta sangrava, mais da metade de sua população perdida para a doença. <br><br> O aperto em seu peito era sufocante. Albert sentiu a dor aguda da escolha que haviam feito, uma escolha que salvou muitas vidas, mas também deixou cicatrizes profundas. A esperança, tão difícil de encontrar naqueles dias sombrios, era como uma pequena chama tremeluzente, frágil, mas ainda viva. <br><br> Desde aquela decisão fatídica, em todos os seus dias, até sua morte, Albert Burakh subia a duna mais alta perto de sua vila. Lá, ele observava o sol vermelho se pôr, suas perguntas se misturando com o vento do deserto. Será que havia feito a escolha certa? Será que a cura era um fardo maior do que a doença? As respostas, como o horizonte distante, permaneciam inalcançáveis, deixando-o em um estado de reflexão eterna, como um guardião solitário do deserto.</h3>",
		choices: [
	 	{
			choice: "FIM",
			destination: 'irFinal'
		},
	 	]
	},




	// ! FINAL
	irFinal: {
		title: "Ir pro Final",
		image: "img/meu_midjourney/resized/fotoFinal.png",
			story: "<h3>A história de “Para Quem os Ventos Sopram” é um mergulho profundo na essência da humanidade, onde as escolhas difíceis e os dilemas morais moldam o destino de indivíduos e comunidades. Albert Burakh é um homem de princípios e habilidades notáveis, cuja jornada leva-o a confrontar a dualidade entre altruísmo e sobrevivência individual. <br><br> O dilema central da história surge quando Albert, após encontrar uma cura, é confrontado com a decisão de como distribuí-la. A escolha de adiar a distribuição para evitar o caos em Franconegro representa um conflito angustiante entre valores pessoais e o bem maior. <br><br> O título “Para Quem os Ventos Sopram” ecoa o tema central da incerteza e da futilidade da ação humana. Albert, enquanto observa o horizonte do deserto, reflete sobre suas decisões e se pergunta se suas escolhas foram as certas. O título, inspirado nos livros Ecclesiastes da Bíblia e “Para Quem os Sinos Tocam” de Ernest Hemingway, evoca a ideia de que a humanidade está à mercê dos ventos da sorte e da moralidade, e que as respostas podem permanecer inalcançáveis. <br><br> A história de Albert Burakh é uma exploração da condição humana em um mundo transformado, onde as escolhas morais se tornam a espinha dorsal da existência. A história de Albert Burakh nos lembra que, mesmo nas circunstâncias mais adversas, a busca pela moralidade e pela esperança ainda brilha como uma pequena chama tremeluzente no horizonte incerto. E, como Albert, somos todos guardiões solitários desse deserto imprevisível. <br><br> De maneira semelhante à certeza que temos de que nossas escolhas no cotidiano são as corretas, a história de “Para Quem os Ventos Sopram” nos lembra que a única pessoa que pode responder a essa pergunta é aquela para quem os ventos sopram: ninguém. Em um mundo repleto de dilemas morais e escolhas angustiantes, onde o destino parece ser moldado pela incerteza e pelo contexto imprevisível, a busca por respostas definitivas muitas vezes é uma jornada infrutífera. <br><br> Nesse cenário desolador, a trama de Albert Burakh nos mostra que, embora possamos refletir sobre nossas decisões e buscar o que é certo, as respostas finais estão frequentemente fora do nosso alcance. Os ventos do destino continuam a soprar, e a única certeza que resta é a de que somos todos navegantes solitários em um mar de incerteza. A verdadeira sabedoria está em abraçar a ambiguidade da vida e aceitar que, em última análise, somos todos moldados pelas forças que estão além do nosso controle. <h3>Se divertiu com a história?</h3> <h3 align = 'justify'>Ficou com gosto de 'quero mais' ?</h3 > </h3><h3>Leia o <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>, e você encontrará várias dicas para você ser o mestre-de-jogo!</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: 'intro'
		}
		]
	},


	instrucoes: {
		title: "Instruções",
		story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "intro"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},

	inicio: {
		title: "Inicio",
		story: "<h3></h3>",
		choices: [
		{
			choice: ".",
			destination: "inicio"
		}
		]
	},

	creditos: {
		title: "Créditos",
		story: "<h2 align='center'>Créditos</h2><h3>Esta é aventura-solo é parte do <a href='https://operarpg.com.br/product/opera-rpg-modulo-basico/' target='blank' class='classe1'>OPERA RPG 1ª Edição</a></center></p><p><b>ISBN:</b> 85-89161-05-6</p><p><b>Programação:</b> Leonardo Antônio de Andrade</p><p><b>Autores:</b></p><p>&nbsp;&nbsp;Leonardo Antônio de Andrade</p><p>&nbsp;&nbsp;Rogério de Mello Godoy</p><p><b>Ilustrações: </b>Marcelo Braga</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='jamendo.com/track/1839683/conspiracy-theorist' target='blank' class='classe1'>Trecho da Faixa Conspiracy Theorist, de Nick Gordy</a></h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "intro"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	}
	
	}
}

//Programação dos Botões e Seleção das Opções Inciais (Iniciar a aventura, Nova janela com site, Instruções e Créditos)
document.addEventListener ('DOMContentLoaded', function() {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');

	//Iniciar a Aventura
	button0.addEventListener('click', function() {
		story = getStory ();
		renderScene ();
	})

	//Nova Janela com Site
	button1.addEventListener('click', function() {
		if (cont == 0)
		{
			window.open("https://operarpg.com.br", '_blank');
		}
		else
		{
			story = getStory ();
			renderScene ();
		}
	})

	//Instuções
	button2.addEventListener('click', function() {
		if (cont == 0)
		{
			instrucoes = true;
		}
		story = getStory ();
		renderScene ();
	})

	//Créditos
	button3.addEventListener('click', function() {
		if (cont == 0)
		{
			creditos = true;
		}
		story = getStory ();
		renderScene ();
	})
})


//Programação para Atualização do códigu HTML, Controle de Aletoriedade e de Itens
function renderScene()
{
	//verificacao de cenas
	var image = "";
	var titulo = "";

	if (instrucoes)
	{
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos)
	{
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	//Renderização de Imagem
	if (!story[story.currentScene].image)
	{
		image = "<img></img>";
	}

	//Redenrização de Título
	if (story[story.currentScene].title == "Introdução")
	{
		titulo = story[story.currentScene].title;
	}

	//Controle de Aletoriedade
	switch (story.currentScene) 
	{

		case ('responderLH'):
			reputation = true;
			story.currentScene = 'doencaFVL';
		break;


		case('checarRep'): 
			if (reputation)
				story.currentScene = 'escolherInvasao';
			else
				story.currentScene = 'naoEscolherInvasao';
		break;
	}

	//Renderização do texto
	document.getElementById("content").innerHTML = `
	<center><h1>${titulo}</h1></center>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `${story[story.currentScene].image}`
	}
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");

	//Programação dos botões
	button0.addEventListener('click', function (){
		cont++;
		getInputValue(0);
	})

	if (button1 != null)
	{
		button1.addEventListener('click', function (){
			cont++;
			if (cont == 1 && master)
			{
				master = false;
				window.location.href='index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null)
	{
		button2.addEventListener('click', function (){
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null)
	{
		button3.addEventListener('click', function (){
			cont++;
			getInputValue(3);
		})
	}
	window.scrollTo(0,0); // Ir para o topo da tela após cada decisão
}

//Função de Seleção de Destino
function getInputValue (x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

//Função de Captura da Seleção
function getInputs(){
	var input = ""
	if (!story[story.currentScene].choices){
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++)
	{
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}



