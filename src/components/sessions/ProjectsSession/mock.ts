interface Tecnologia {
  id: number;
  name: string;
}

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: Tecnologia[];
  imagem: string;
  linkTo: string;
  active: boolean;
}

interface ProjetosData {
  projects: Projeto[];
}


const mockData: ProjetosData = {
  projects: [
    {
      id: 1,
      titulo: "VMS Cloud",
      descricao:
        "Produto de vídeo-monitoramento, onde eu desenvolvo novas funcionalidades e mantenho a aplicação em produção já há 4 anos.",
      tecnologias: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "Material-UI" },
        { id: 4, name: "Jest" },
        { id: 5, name: "VideoJS" },
        { id: 6, name: "Java Springboot" },
      ],
      imagem: "https://segware.com/wp-content/uploads/2024/05/vms-cloud-hero-1536x958.webp",
      linkTo: "https://segware.com/vms/",
      active: false
    },
    {
      id: 2,
      titulo: "E-Commerce Web Application",
      descricao:
        "Projeto E-commerce feito com NextJS@14 para aprofundar meus conhecimentos na tecnologia",
      tecnologias: [
        { id: 1, name: "NextJS" },
        { id: 2, name: "TypeScript" },
        { id: 4, name: "TailwindCSS" },
        { id: 5, name: "Jest/Vitest" },
        { id: 6, name: "Javascript" },
      ],
      imagem: "https://raw.githubusercontent.com/pedro-demeu/capputeeno-ecommerce-nextjs/master/public/demo.png",
      linkTo: "https://github.com/pedro-demeu/capputeeno-ecommerce-nextjs",
      active: false
    },
    {
      id: 3,
      titulo: "Portfolio Website",
      descricao:
        "Desenvolvimento deste site de portfólio para exibir habilidades, projetos e jornada profissional.",
      tecnologias: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "Material-UI" },
      ],
      imagem: '', // "https://example.com/portfolio.jpg",
      linkTo: "https://example.com/portfolio",
      active: true
    },
    {
      id: 4,
      titulo: "API de processamento e conversão de videos com FFMPEG",
      descricao:
        "Desenvolvi essa API para processamento e conversão de vídeos (MP4, HEVC, M3u8, FLV)",
      tecnologias: [
        { id: 1, name: "Node.JS" },
        { id: 2, name: "Javascript" },
        { id: 3, name: "FFMPEG" },
      ],
      imagem: "https://raw.githubusercontent.com/pedro-demeu/learn-ffmpeg-with-nodejs/main/image.png",
      linkTo: "https://github.com/pedro-demeu/learn-ffmpeg-with-nodejs",
      active: false
    },
    {
      id: 5,
      titulo: "Teste de Conexão Local",
      descricao:
        "Desenvolvi minha ferramenta de teste de velocidade de conexão. Gera um relatório ao final com link para o speed test.",
      tecnologias: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "Typescript" },
        { id: 6, name: "TailwindCSS" },
        { id: 7, name: "SpeedTest API / Cloudflare API" },
      ],
      imagem:  "https://raw.githubusercontent.com/pedro-demeu/teste-de-conexao/main/images/home.png",
      linkTo: "https://github.com/pedro-demeu/teste-de-conexao",
      active: false
    },
    {
      id: 6,
      titulo: "Chat-room",
      descricao:
        "Chat Real-time com Web Sockets simula um Chat de Bate-papo. Desenvolvido para demonstrar o uso correto dos Web Sockets durante a faculdade.",
      tecnologias: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "Typescript" },
        { id: 3, name: "Web Sockets" },
        { id: 4, name: "TailwindCSS" },
        { id: 5, name: "Javascript" },
      ],
      imagem:  "https://raw.githubusercontent.com/pedro-demeu/chat-room/main/utils/demo.png",
      linkTo: "https://github.com/pedro-demeu/chat-room",
      active: false
    },
  ],
};

export default mockData;
