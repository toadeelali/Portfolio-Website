import { currentYear } from '@/config';

export type Project = {
  no: string;
  title: string;
  desc: string;
  tags: string[];
  image?: string;
};

export type Category = {
  slug: string;
  breadcrumb: string;
  dwg: string;
  categoryNo: string;
  headline: string;
  sub: string;
  countLabel: string;
  projects: Project[];
};

const nonBreakingHyphen = '\u2011';

const aiProjects: Project[] = [
  {
    no: `AI${nonBreakingHyphen}01`,
    title: 'FAQ + scheduling bot',
    desc: 'Answers company FAQs deterministically and books appointments, presented through a generative UI rather than static forms.',
    tags: ['Deterministic logic', 'Generative UI', 'Scheduling'],
    image: '/faq-scheduling-bot.svg',
  },
  {
    no: `AI${nonBreakingHyphen}02`,
    title: 'FAQ + scheduling agent, RAG',
    desc: 'Same deterministic scheduling and generative UI, extended with a search RAG system for more accurate FAQ answers.',
    tags: ['Generative UI', 'RAG search', 'Scheduling'],
    image: '/ai-rag-agent.svg',
  },
  {
    no: `AI${nonBreakingHyphen}03`,
    title: 'Investment portfolio agent',
    desc: 'Connects to a live investment portfolio, pulls current market data, and assesses holdings in real time.',
    tags: ['Live market data', 'Portfolio analysis', 'MCP'],
    image: '/investment-portfolio-agent.svg',
  },
  {
    no: `AI${nonBreakingHyphen}04`,
    title: 'Test prep MCQ generator',
    desc: 'Helps prepare for tests by generating multiple-choice questions from a given topic or source material.',
    tags: ['Content generation', 'Test prep'],
    image: '/test-prep-mcq-generator.svg',
  },
];

const webProjects: Project[] = [
  {
    no: `WEB${nonBreakingHyphen}01`,
    title: 'Stagworks CRM',
    desc: 'Customer relationship management platform for Powerfulweb, managing clients, projects, and follow-ups.',
    tags: ['CRM', 'Powerfulweb'],
    image: '/stagworks-crm.svg',
  },
  {
    no: `WEB${nonBreakingHyphen}02`,
    title: 'Learning management system',
    desc: 'Prep portal for Achieve delivering structured lessons, assessments, and progress tracking.',
    tags: ['LMS', 'Achieve', 'Prep portal'],
    image: '/learning-management-system.svg',
  },
  {
    no: `WEB${nonBreakingHyphen}03`,
    title: 'Content management system',
    desc: 'Content portal for Achieve, plus a second portal for the Knowledge Platform, managing and publishing content.',
    tags: ['CMS', 'Achieve', 'Knowledge Platform'],
    image: '/content-management-system.svg',
  },
  {
    no: `WEB${nonBreakingHyphen}04`,
    title: 'Instructor portal',
    desc: 'Portal for Achieve instructors to manage sessions, students, and course materials.',
    tags: ['Portal', 'Achieve'],
    image: '/instructor-portal.svg',
  },
  {
    no: `WEB${nonBreakingHyphen}05`,
    title: 'Sales portal',
    desc: 'Manages advisors and representatives for Achieve, routing them to attend leads and customers.',
    tags: ['Sales', 'Achieve', 'Leads'],
    image: '/sales-portal.svg',
  },
  {
    no: `WEB${nonBreakingHyphen}06`,
    title: 'Lead qualification wizard',
    desc: 'Guided wizard for Achieve that gathers information from leads step by step.',
    tags: ['Wizard', 'Lead capture', 'Achieve'],
    image: '/lead-qualification-wizard.svg',
  },
  {
    no: `WEB${nonBreakingHyphen}07`,
    title: 'PSX investment tracker',
    desc: 'Full-stack portfolio tracking platform focused on the Pakistan Stock Exchange, built for CodeGinx.',
    tags: ['Full stack', 'PSX', 'CodeGinx'],
    image: '/psx-investment-tracker.svg',
  },
  {
    no: `WEB${nonBreakingHyphen}08`,
    title: 'EV chargers management',
    desc: 'Full-stack management platform for EV charging networks, built for CodeGinx.',
    tags: ['Full stack', 'EV charging', 'CodeGinx'],
    image: '/ev-chargers-management.svg',
  },
];

const mobileProjects: Project[] = [
  {
    no: `MOB${nonBreakingHyphen}01`,
    title: 'Learn Smart Pakistan',
    desc: 'Digital learning app for Pakistani students, built for Knowledge Platform with Cordova and web technologies.',
    tags: ['Knowledge Platform', 'Cordova', 'iOS', 'Android'],
    image: '/learn-smart-pakistan.svg',
  },
  {
    no: `MOB${nonBreakingHyphen}02`,
    title: 'The Educator Edge',
    desc: 'Educator-focused companion app for Knowledge Platform, built with Cordova and web technologies.',
    tags: ['Knowledge Platform', 'Cordova', 'iOS', 'Android'],
    image: '/the-educator-edge.svg',
  },
  {
    no: `MOB${nonBreakingHyphen}03`,
    title: 'Learn Smart Classroom',
    desc: 'Classroom companion to the Learn Smart suite for Knowledge Platform, built with Cordova and web technologies.',
    tags: ['Knowledge Platform', 'Cordova', 'iOS', 'Android'],
    image: '/learn-smart-classroom.svg',
  },
  {
    no: `MOB${nonBreakingHyphen}04`,
    title: 'Ultrabot prime',
    desc: 'Ultrabot assistant experience for Knowledge Platform, built with Cordova and web technologies.',
    tags: ['Knowledge Platform', 'Cordova', 'iOS', 'Android'],
    image: '/ultrabot-prime.svg',
  },
];

const gamesProjects: Project[] = [
  {
    no: `GAM${nonBreakingHyphen}01`,
    title: 'PomPak',
    desc: 'Financial literacy game built for the State Bank of Pakistan and Knowledge Platform.',
    tags: ['Financial literacy', 'State Bank of Pakistan', 'Knowledge Platform'],
    image: '/pompak.svg',
  },
  {
    no: `GAM${nonBreakingHyphen}02`,
    title: 'Factor Monster',
    desc: 'Factorization game built for Knowledge Platform using EaselJS.',
    tags: ['Factorization', 'Knowledge Platform', 'EaselJS'],
    image: '/factor-monster.svg',
  },
  {
    no: `GAM${nonBreakingHyphen}03`,
    title: 'Mind Tussle',
    desc: 'Mind math game built for Knowledge Platform.',
    tags: ['Mental math', 'Knowledge Platform'],
    image: '/mind-tussle.svg',
  },
  {
    no: `GAM${nonBreakingHyphen}04`,
    title: 'Dino Eggs',
    desc: 'Mathematics content game for grades 1 to 8, built for Knowledge Platform.',
    tags: ['Mathematics', 'Grades 1–8', 'Knowledge Platform'],
    image: '/dino-eggs.svg',
  },
];

const mcpProjects: Project[] = [
  {
    no: `MCP${nonBreakingHyphen}01`,
    title: 'FAQ + scheduling MCP server',
    desc: 'Tools for deterministic Q&A and appointment booking that the FAQ and scheduling agents run on.',
    tags: ['MCP', 'Scheduling', 'Tools'],
    image: '/faq-scheduling-mcp.svg',
  },
  {
    no: `MCP${nonBreakingHyphen}02`,
    title: 'RAG search MCP server',
    desc: "Retrieval tools that power the FAQ agent's search RAG system.",
    tags: ['MCP', 'RAG search', 'Retrieval'],
    image: '/rag-search-mcp.svg',
  },
  {
    no: `MCP${nonBreakingHyphen}03`,
    title: 'Portfolio data MCP server',
    desc: 'Market data and holdings tools that feed the investment portfolio agent in real time.',
    tags: ['MCP', 'Market data', 'Portfolio'],
    image: '/portfolio-data-mcp.svg',
  },
];

export const categories: Record<string, Category> = {
  ai: {
    slug: 'ai',
    breadcrumb: 'AI agents',
    dwg: `AI${nonBreakingHyphen}${currentYear}`,
    categoryNo: '01 OF 05',
    headline: 'AI agents & bots',
    sub: 'Agents and bots that answer company FAQs and schedule appointments through generative UI — running on MCP servers underneath.',
    countLabel: '4 projects',
    projects: aiProjects,
  },
  web: {
    slug: 'web',
    breadcrumb: 'Frontend, React',
    dwg: `WEB${nonBreakingHyphen}${currentYear}`,
    categoryNo: '02 OF 05',
    headline: 'Frontend, React',
    sub: 'State-driven interfaces built for production — portals, dashboards, and CRMs shipped for clients, plus full-stack products built to run on their own.',
    countLabel: '8 projects',
    projects: webProjects,
  },
  mobile: {
    slug: 'mobile',
    breadcrumb: 'Mobile apps',
    dwg: `MOB${nonBreakingHyphen}${currentYear}`,
    categoryNo: '03 OF 05',
    headline: 'Mobile apps',
    sub: 'Capacitor / Cordova builds shipped to iOS and Android, powered by shared web technologies.',
    countLabel: '4 projects',
    projects: mobileProjects,
  },
  games: {
    slug: 'games',
    breadcrumb: '2D games',
    dwg: `GAM${nonBreakingHyphen}${currentYear}`,
    categoryNo: '04 OF 05',
    headline: '2D games',
    sub: 'Canvas games built on HTML5 and EaselJS — educational titles teaching financial literacy and mathematics.',
    countLabel: '4 projects',
    projects: gamesProjects,
  },
  mcp: {
    slug: 'mcp',
    breadcrumb: 'Backend + MCP',
    dwg: `MCP${nonBreakingHyphen}${currentYear}`,
    categoryNo: '05 OF 05',
    headline: 'Backend + MCP',
    sub: 'APIs, services, and MCP servers wiring the agents together.',
    countLabel: '3 projects',
    projects: mcpProjects,
  },
};
