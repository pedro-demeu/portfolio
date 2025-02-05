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
      titulo: "Video Monitoring Platform",
      descricao:
        "Desenvolvimento de interfaces intuitivas e responsivas para uma plataforma de videomonitoramento, garantindo alta performance e experiência do usuário.",
      tecnologias: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "Material-UI" },
      ],
      imagem: "https://example.com/video-monitoring.jpg",
      linkTo: "https://example.com/video-monitoring",
      active: false
    },
    {
      id: 2,
      titulo: "E-Commerce Web Application",
      descricao:
        "Construção de uma plataforma de e-commerce escalável, com foco em usabilidade, performance e arquitetura limpa.",
      tecnologias: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 4, name: "Next.js" },
        { id: 5, name: "Node.js" },
      ],
      imagem: "https://example.com/ecommerce.jpg",
      linkTo: "https://example.com/ecommerce",
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
      imagem: "https://example.com/portfolio.jpg",
      linkTo: "https://example.com/portfolio",
      active: true
    },
    {
      id: 4,
      titulo: "Task Management App",
      descricao:
        "Aplicativo para gerenciamento de tarefas com funcionalidades como criação, edição e conclusão de tasks.",
      tecnologias: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 6, name: "Firebase" },
      ],
      imagem: "https://example.com/task-manager.jpg",
      linkTo: "https://example.com/task-manager",
      active: false
    },
  ],
};

export default mockData;
