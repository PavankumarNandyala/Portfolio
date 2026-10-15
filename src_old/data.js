// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Pavankumar Nandyala',
  email: 'pavannandyala.dev@gmail.com',
  photo: '/profile.jpg',
  intro:
    'I build React.js and Next.js products on Python and FastAPI services, and add LLM features such as RAG search, AI agents and chat assistants. Based in London, 4+ years of experience.',
  roles: [
    'Full Stack AI Engineer',
    'React.js and Next.js developer',
    'Generative AI and RAG builder',
    'Python and FastAPI engineer',
  ],
  phones: [
    { label: 'UK +44 7777 349809', tel: '+447777349809' },
    { label: 'India +91 80503 32262', tel: '+918050332262' },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavankumarnandyala' },
    { label: 'GitHub', href: 'https://github.com/PavankumarNandyala' },
  ],
};

export const stats = [
  { to: 4, suffix: '+', label: 'years in software' },
  { to: 5000, suffix: '+', label: 'active users supported' },
  { to: 99.9, suffix: '%', decimals: 1, label: 'uptime on AWS' },
  { to: 35, suffix: '%', label: 'better resume match accuracy' },
];

export const experience = [
  {
    title: 'Full Stack AI Engineer, fyaora',
    meta: 'Oct 2026 to present · London, UK',
    points: [
      'Build full-stack and AI-powered applications with React.js, Next.js, Python and FastAPI.',
      'Develop LLM applications with prompt engineering, RAG, embeddings, vector databases, AI agents and tool/function calling.',
      'Design NLP, text classification, recommendation, semantic search and computer vision solutions.',
      'Deploy and monitor AI services on AWS with Docker, Kubernetes and CI/CD.',
    ],
  },
  {
    title: 'Full Stack Engineer, London Success Academy',
    meta: 'Oct 2025 to Sep 2026 · London, UK',
    points: [
      'Built responsive, accessible interfaces with React.js and Next.js, integrated with REST APIs and Python AI services.',
      'Built RAG applications with OpenAI GPT models, LangChain, embeddings and FAISS.',
      'Developed FastAPI backends with SQLAlchemy and PostgreSQL, including schema design and migrations.',
    ],
  },
  {
    title: 'Software Engineer, Cognizant',
    meta: 'Sep 2021 to Jul 2024 · Bengaluru, India',
    points: [
      'Built full-stack apps in Python (FastAPI, Django), React.js and Next.js for 5,000+ active users.',
      'Cut API response times by 30% with caching and asynchronous processing.',
      'Improved database performance by 20% through query optimisation and indexing.',
      'Ran apps on AWS with Docker and Kubernetes, reaching 99.9% uptime.',
    ],
  },
];

export const projects = [
  {
    title: 'AI E-Commerce Chatbot',
    tags: 'LangChain, RAG, FastAPI, React.js, Next.js',
    points: [
      'Chatbot agent for real-time product recommendations and conversational search.',
      'REST APIs handling 1,000+ daily interactions with OpenAI GPT models and FAISS vector search.',
    ],
  },
  {
    title: 'AI Resume Analyzer',
    tags: 'LLM, NLP, FastAPI, LangChain',
    points: [
      'ATS resume parser with structured data extraction.',
      'Semantic similarity and LLM analysis raised match accuracy by 35% and cut manual screening by 60% across 500+ resumes.',
    ],
  },
];

export const skills = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'TailwindCSS', 'React Hooks', 'Axios'] },
  { group: 'Generative AI', items: ['LLMs', 'RAG', 'Embeddings', 'FAISS', 'LangChain', 'Prompt engineering', 'AI agents', 'Structured outputs'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'Django', 'SQLAlchemy', 'REST APIs', 'Microservices'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQL', 'Schema design', 'Query optimisation'] },
  { group: 'Cloud and DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'] },
  { group: 'Education', items: ['MSc Computer Science, Greenwich', 'BE Computer Science, VTU'] },
];

export const qa = [
  { q: 'What do you build?', s: 'fyaora, 2026 to present', a: 'Full-stack products with React.js and Next.js on the front and Python with FastAPI behind them, plus LLM features such as RAG search, AI agents and tool calling.' },
  { q: 'Any proof of scale?', s: 'Cognizant, 2021 to 2024', a: 'Apps for 5,000+ active users, API response times cut by 30%, database performance up 20%, and 99.9% uptime on AWS with Docker and Kubernetes.' },
  { q: 'Have you shipped RAG?', s: 'London Success Academy, 2025 to 2026', a: 'Yes. RAG apps with OpenAI GPT models, LangChain, embeddings and FAISS, plus data ingestion pipelines and checks for accuracy and hallucination.' },
  { q: 'How strong is your frontend?', s: 'Skills and experience', a: 'React.js, Next.js, JavaScript (ES6+), HTML5, CSS3 and TailwindCSS, with reusable components, React Hooks and accessible, responsive layouts.' },
  { q: 'Which AI projects?', s: 'Projects', a: 'An AI e-commerce chatbot handling 1,000+ daily interactions, and an AI resume analyzer that raised match accuracy by 35% across 500+ resumes.' },
];
