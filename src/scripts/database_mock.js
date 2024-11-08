const products = [  
  {  
    id: 1,  
    name: "Suplemento Whey Protein",  
    price: "120,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Whey Protein",  
    description: "Fonte rica de proteínas, ideal para auxiliar na recuperação muscular pós-treino e promover o crescimento muscular."  
  },  
  {  
    id: 2,  
    name: "Suplemento Creatina",  
    price: "80,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Creatina",  
    description: "Potencializa o desempenho físico, aumentando a força e a resistência durante atividades de alta intensidade."  
  },  
  {  
    id: 3,  
    name: "Suplemento BCAA",  
    price: "75,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento BCAA",  
    description: "Contém aminoácidos essenciais que ajudam na recuperação e reduzem a fadiga muscular."  
  },  
  {  
    id: 4,  
    name: "Suplemento Ômega 3",  
    price: "60,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Ômega 3",  
    description: "Ácidos graxos essenciais que contribuem para a saúde cardiovascular e o bem-estar geral."  
  },  
  {  
    id: 5,  
    name: "Suplemento Vitamina D",  
    price: "25,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Vitamina D",  
    description: "Ajuda na absorção de cálcio e é vital para a saúde óssea e do sistema imunológico."  
  },  
  {  
    id: 6,  
    name: "Suplemento Multivitamínico",  
    price: "65,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Multivitamínico",  
    description: "Combinação de vitaminas e minerais que auxilia no fortalecimento do sistema imunológico e na manutenção da saúde geral."  
  },  
  {  
    id: 7,  
    name: "Suplemento Colágeno",  
    price: "55,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Colágeno",  
    description: "Promove a saúde da pele, cabelos, unhas e articulações, melhorando a elasticidade da pele."  
  },  
  {  
    id: 8,  
    name: "Suplemento Pré-treino",  
    price: "70,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Pré-treino",  
    description: "Fórmula energética que aumenta a resistência, foco e desempenho durante o treino."  
  },  
  {  
    id: 9,  
    name: "Suplemento Glutamina",  
    price: "45,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Glutamina",  
    description: "Aminoácido que auxilia na recuperação muscular e na saúde intestinal, especialmente após exercícios intensos."  
  },  
  {  
    id: 10,  
    name: "Suplemento ZMA",  
    price: "50,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento ZMA",  
    description: "Combinação de zinco, magnésio e vitamina B6 que melhora a recuperação, aumenta a testosterona e a qualidade do sono."  
  },  
  {  
    id: 11,  
    name: "Suplemento Termogênico",  
    price: "90,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Termogênico",  
    description: "Fórmula que acelera o metabolismo, auxilia na queima de gordura e aumenta a energia durante o dia."  
  },  
  {  
    id: 12,  
    name: "Suplemento Cafeína",  
    price: "35,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Cafeína",  
    description: "Estimulante que melhora a concentração e o desempenho físico, aumentando a energia e a resistência."  
  },  
  {  
    id: 13,  
    name: "Suplemento L-Carnitina",  
    price: "85,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento L-Carnitina",  
    description: "Aminoácido que ajuda na queima de gordura e melhora a energia durante exercícios de resistência."  
  },  
  {  
    id: 14,  
    name: "Suplemento Maca Peruana",  
    price: "45,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Maca Peruana",  
    description: "Raiz conhecida por aumentar a energia, melhorar a resistência e equilibrar hormônios."  
  },  
  {  
    id: 15,  
    name: "Suplemento Tribulus",  
    price: "70,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Tribulus",  
    description: "Extrato de planta que pode aumentar os níveis de testosterona e melhorar a performance atlética."  
  },  
  {  
    id: 16,  
    name: "Suplemento Cloreto de Magnésio",  
    price: "55,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Cloreto de Magnésio",  
    description: "Mineral que ajuda na saúde muscular, no relaxamento e na função cardiovascular."  
  },  
  {  
    id: 17,  
    name: "Suplemento Ferro",  
    price: "30,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Ferro",  
    description: "Essencial para a produção de hemoglobina, importante para prevenir a anemia e garantir o transporte eficiente de oxigênio no corpo."  
  },  
  {  
    id: 18,  
    name: "Suplemento Vitamina C",  
    price: "40,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Vitamina C",  
    description: "Antioxidante potente que fortalece o sistema imunológico e é fundamental para a saúde da pele e manutenção da cartilagem."  
  },  
  {  
    id: 19,  
    name: "Suplemento Probiótico",  
    price: "65,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Probiótico",  
    description: "Microrganismos benéficos que promovem a saúde intestinal e melhoram a digestão."  
  },  
  {  
    id: 20,  
    name: "Suplemento Antioxidante",  
    price: "50,00",  
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-x3LOUAj-Qwo6G1dw9AKMFEGKkhbQMSRlFpuQ8UtHFSx728eK",  
    altText: "Imagem do Suplemento Antioxidante",  
    description: "Protege as células contra danos causados por radicais livres, contribuindo para a saúde geral e o envelhecimento saudável."  
  }  
];  

export default products;
