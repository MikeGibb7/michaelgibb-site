'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard, { ProjectItem } from './components/ProjectCard';
import GithubIcon from './components/icons/GithubIcon';
import LinkedinIcon from './components/icons/LinkedinIcon';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Mail,
  Phone,
  Trophy,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Terminal,
  Sparkles,
  ChevronRight,
  Copy,
  Check,
  GraduationCap,
  Award,
  BookOpen,
  Heart,
} from 'lucide-react';

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  isLatest?: boolean;
  url?: string;
  bullets: string[];
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Rocket Mortgage – Rocket Innovation Studio',
    location: 'Windsor, ON',
    period: 'May 2026 – Aug 2026',
    isLatest: true,
    bullets: [
      'Refactored C# backends and .NET infrastructure to add logging, improving tracking in AWS DynamoDB.',
      'Built responsive frontend UI features to meet user specs, maintaining high code quality via SonarQube.',
      'Developed a custom local MCP server to query multi-table data, accelerating debugging under Git workflows.',
      'Diagnosed and resolved critical runtime and cloud configuration bottlenecks across AWS and C# services.',
    ],
    skills: [
      'C#',
      '.NET',
      'AWS DynamoDB',
      'AWS Cloud',
      'SonarQube',
      'MCP Server',
      'Git Workflows',
    ],
  },
  {
    role: 'Intern Software Developer',
    company: 'Jamieson Wellness',
    location: 'Toronto, ON',
    period: 'May 2024 – May 2025',
    bullets: [
      'Collaborated with developers to design, test, and deploy a new company wide ERP data system.',
      'Built custom ABAP programs and SAP database tables to track data, improving compliance and label accuracy.',
      'Developed APIs and complex SQL queries to automate data transfers and ETL pipelines, eliminating 1000+ manual work hours and improving data accuracy.',
      'Created a React + AWS-hosted LIMS application to streamline product and material testing.',
    ],
    skills: [
      'SAP',
      'ABAP',
      'React',
      'AWS',
      'SQL',
      'ETL Pipelines',
      'REST APIs',
      'LIMS',
      'ERP',
    ],
  },
  {
    role: 'Lead Software Developer',
    company: 'John Simpson Odette Student Investment Fund (JSOSIF)',
    location: 'Windsor, ON',
    period: 'Jan 2023 – Present',
    url: 'https://www.jsosif.com/',
    bullets: [
      'Developed and maintained portfolio management tools with secure Python/React implementations, ensuring integrity of investment data for managing fund of $250K+ in capital.',
      'Led a team of 5 developers to design and deliver software that enhanced portfolio analysis and data retrieval.',
    ],
    skills: [
      'Python',
      'React',
      'Technical Leadership',
      'Portfolio Management',
      'Data Integrity',
      '$250K+ Fund',
    ],
  },
  {
    role: 'Computer Science Teaching Assistant',
    company: 'University of Windsor',
    location: 'Windsor, ON',
    period: 'Jan 2024 – Apr 2024',
    bullets: [
      'Led weekly tutorials and labs, fostering student engagement and improving student understanding of principles.',
      'Graded assignments and exams, providing constructive feedback to aid student learning.',
      'Held office hours to offer one-on-one support, assisting 50+ students with programming challenges.',
    ],
    skills: [
      'Algorithms',
      'Data Structures',
      'Mentorship',
      'Lab Instruction',
      'Code Review',
    ],
  },
];

const projectsData: ProjectItem[] = [
  {
    title: 'Efficient Frontier Tool',
    category: 'FinTech & Quant',
    description:
      'Designed and implemented a quantitative application to assess portfolio risk and returns, highlighting optimized Sharpe ratios using Markowitz Mean-Variance Optimization. Integrated the application with a custom backend, leveraging high-speed APIs.',
    url: 'https://efficient-frontier-ui.vercel.app/',
    imageUrl: '/images/efficient-frontier.png',
    tags: ['Python', 'Modern Portfolio Theory', 'Sharpe Ratio', 'APIs', 'React UI'],
    featured: true,
  },
  {
    title: 'JSOSIF Website',
    category: 'Web & Mobile',
    description:
      'Engineered a responsive, modern web application using React and TypeScript to showcase the JSOSIF investment fund. Collaborated with a developer team to design intuitive UI components, optimize data presentation, and ensure superior website performance.',
    url: 'https://www.jsosif.com/',
    imageUrl: '/images/jsosif.png',
    tags: ['React', 'TypeScript', 'Responsive UI', 'Financial Showcase'],
    featured: true,
  },
  {
    title: 'Algorithmic Trading System',
    category: 'FinTech & Quant',
    description:
      'High-performance quantitative trading backtesting system developed in Python to evaluate statistical signals, calculate drawdown and Sharpe ratios, and simulate strategy execution across historical equity feeds.',
    url: 'https://github.com/MikeGibb7/M-Z50',
    tags: ['Python', 'Backtesting Engine', 'Quantitative Signals', 'Execution Sim'],
    featured: true,
  },
  {
    title: 'Mean Reversion Trader',
    category: 'FinTech & Quant',
    description:
      'Algorithmic trading strategy executing automated buy/sell orders based on statistical deviation thresholds from trailing moving averages, capitalizing on mean reversion opportunities in volatile market regimes.',
    url: 'https://github.com/MikeGibb7/Mean-Reversion-Trader',
    imageUrl: '/images/mean-reversion.jpg',
    tags: ['Python', 'Statistical Arbitrage', 'Market Feeds', 'Automated Execution'],
  },
  {
    title: 'Finbud Financial Platform',
    category: 'Web & Mobile',
    description:
      'Interactive personal finance application empowering students and young professionals to plan budgets, understand asset allocation, and track financial objectives with intuitive step-by-step guidance.',
    url: 'https://finbud.ca/',
    imageUrl: '/images/finbud.png',
    tags: ['TypeScript', 'Next.js', 'Personal Finance', 'UI/UX Design'],
  },
  {
    title: 'Tournament Generator App',
    category: 'Web & Mobile',
    description:
      'Native Android application engineered in Kotlin for tournament organizers. Generates round-robin schedules, updates match standings dynamically, and constructs interactive tournament brackets leading to a championship final.',
    url: 'https://github.com/MikeGibb7/TourneyGeneratorApp',
    imageUrls: [
      '/images/tournament-main.png',
      '/images/tournament-matches.png',
      '/images/tournament-bracket.png',
      '/images/tournament-winner.png',
    ],
    tags: ['Kotlin', 'Android SDK', 'Bracket Algorithms', 'Mobile UI'],
  },
  {
    title: 'Arcade Physics Flying Bird Game',
    category: 'Systems & Games',
    description:
      'Arcade physics game created with Unity and C# featuring custom collision mechanics, multi-hazard obstacle matrices, high-score tracking, and responsive mobile touch controls.',
    url: 'https://github.com/MikeGibb7/FlyingBirdGame',
    imageUrl: '/images/bird-game.png',
    tags: ['Unity 3D/2D', 'C#', 'Game Physics', 'State Management'],
  },
];

const technicalSkills = {
  languages: ['C#', 'Python', 'SQL', 'Java', 'C', 'TypeScript', 'ABAP', 'Kotlin', 'R'],
  frameworks: ['.NET', 'React', 'Angular', 'Next.js', 'Tailwind CSS'],
  tools: ['AWS', 'Terraform', 'Kubernetes', 'Git', 'Docker', 'Linux', 'Windows', 'SAP', 'Informatica', 'SonarQube', 'MCP Servers'],
};

const notableCourses = [
  { name: 'Data Structures And Algorithms', grade: '98%', highlight: true },
  { name: 'Systems Programming', grade: '95%', highlight: true },
  { name: 'Object Oriented Programming', grade: '95%', highlight: true },
];

const competitions = [
  {
    name: 'ICPC Programming Contest',
    subtitle: 'International Collegiate Programming Contest',
    description:
      'Competed in team-based algorithmic challenges under intense time constraints. Designed and implemented optimal solutions across dynamic programming, graph traversal, and combinatorics.',
    url: 'https://icpc.global/',
    badge: 'Competitive Programming',
    highlights: ['Advanced Graph Theory', 'Dynamic Programming', 'High-Pressure Optimization'],
  },
  {
    name: 'Rotman International Trading Competition',
    subtitle: 'University of Toronto (RITC)',
    description:
      'Engaged in institutional-scale market simulation cases testing quantitative modeling, algorithmic execution, order-book liquidity management, and fast decision-making during high-volatility environments.',
    url: 'https://ritc.rotman.utoronto.ca/',
    badge: 'Quantitative Trading',
    highlights: ['Market Making', 'Liquidity Provision', 'Quantitative Risk Modeling'],
  },
];

const interests = [
  { name: 'Tennis', emoji: '🎾' },
  { name: 'Golf', emoji: '⛳' },
  { name: 'Piano', emoji: '🎹' },
  { name: 'Chess', emoji: '♟️' },
  { name: 'Fitness', emoji: '🏋️‍♂️' },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const categories = ['All', 'FinTech & Quant', 'Web & Mobile', 'Systems & Games'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gibbm@uwindsor.ca');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('(226) 348-1355');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 overflow-hidden font-sans">
      {/* Ambient Lighting Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/15 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] left-[-15%] w-[650px] h-[650px] bg-purple-600/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-cyan-600/10 blur-[170px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Floating Glass Navbar */}
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        {/* ================================= HERO SECTION ================================= */}
        <section id="about" className="pt-6 pb-20 sm:pt-12 sm:pb-28">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Live Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass-pill border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs sm:text-sm font-medium shadow-lg shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>Software Engineer Intern @ Rocket Mortgage • CS Co-op @ UWindsor</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Crafting High-Performance{' '}
              <span className="gradient-text-accent">Software</span> &{' '}
              <span className="gradient-text">Financial Engines</span>
            </h1>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              I&apos;m <strong className="text-white font-semibold">Michael Gibb</strong>, an Honours Computer Science Co-op student at the University of Windsor (Minors in Mathematics & Economics, <strong className="text-cyan-300">4.0 GPA / 91.3% Dean&apos;s Honour Roll</strong>). Specializing in C#/.NET backends, AWS cloud systems, SAP data automation, and quantitative software.
            </p>

            {/* Quick Contact & Social Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-300">
              <a
                href="mailto:gibbm@uwindsor.ca"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg glass-pill hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>gibbm@uwindsor.ca</span>
              </a>

              <a
                href="tel:2263481355"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg glass-pill hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>(226) 348-1355</span>
              </a>

              <a
                href="https://www.linkedin.com/in/michael-gibb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg glass-pill hover:text-sky-300 hover:border-sky-500/30 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/mikegibb7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg glass-pill hover:text-white hover:border-slate-500/40 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <a
                href="#experience"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <span>View Experience</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#education"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800/80 hover:text-white border border-white/10 hover:border-slate-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education & Honors</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800/80 hover:text-white border border-white/10 hover:border-slate-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Projects</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-10 mt-6 border-t border-white/10">
              <div className="p-4 rounded-xl glass-card text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white text-cyan-400">
                  91.3%
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Dean’s Honour Roll (4.0)
                </div>
              </div>
              <div className="p-4 rounded-xl glass-card text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white gradient-text-accent">
                  Rocket
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  SWE Intern (May–Aug &apos;26)
                </div>
              </div>
              <div className="p-4 rounded-xl glass-card text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white text-emerald-400">
                  1000+ Hrs
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Automated @ Jamieson
                </div>
              </div>
              <div className="p-4 rounded-xl glass-card text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white text-amber-400">
                  $250K+
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Fund Software @ JSOSIF
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================= WORK EXPERIENCE ================================= */}
        <section id="experience" className="py-16 scroll-mt-24">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              Enterprise backend refactoring, cloud microservices, SAP systems automation, and software leadership.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`relative glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 ${
                  exp.isLatest
                    ? 'ring-1 ring-cyan-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-xl shadow-cyan-500/5'
                    : ''
                }`}
              >
                {/* Highlight Badge for Latest Role */}
                {exp.isLatest && (
                  <div className="absolute -top-3 right-6 sm:right-8">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Latest Experience</span>
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center flex-wrap gap-2">
                      <span>{exp.role}</span>
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-1 hover:underline"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="font-semibold text-slate-200">
                          {exp.company}
                        </span>
                      )}

                      <span className="text-slate-500">•</span>
                      <span className="inline-flex items-center text-slate-400 space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Date Pill */}
                  <div className="inline-flex items-center self-start md:self-auto space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/70 text-xs font-medium text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-300">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                  <span className="text-xs font-semibold text-slate-400 mr-1">
                    Technologies:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================= EDUCATION & ACADEMICS ================================= */}
        <section id="education" className="py-16 scroll-mt-24">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education & Honors
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              Rigorous foundation in computer systems, advanced algorithms, mathematics, and quantitative economics.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Degree Card */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-emerald-500/30 shadow-xl shadow-emerald-500/5">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      University of Windsor
                    </h3>
                    <div className="text-sm font-semibold text-emerald-400 mt-1">
                      Bachelor of Computer Science, Honours Computer Science Co-op
                    </div>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/70 text-xs font-medium text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sept 2022 – Present</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/90 text-slate-200 border border-slate-700">
                    Minor in Mathematics
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/90 text-slate-200 border border-slate-700">
                    Minor in Economics
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Dean’s Honour Roll — Cumulative Average: 91.3% (4.0 GPA)</span>
                  </span>
                </div>

                {/* Notable Courses */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Notable Academic Coursework & High Marks</span>
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {notableCourses.map((c) => (
                      <div
                        key={c.name}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-emerald-500/40 transition-colors"
                      >
                        <div className="text-xs text-slate-300 font-medium mb-1 line-clamp-2">
                          {c.name}
                        </div>
                        <div className="text-lg font-extrabold text-emerald-400">
                          {c.grade}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Additional Card */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center space-x-2 text-amber-400 mb-2">
                  <Award className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">
                    Certifications
                  </h4>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Bloomberg Market Concepts (BMC)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Institutional certification in financial markets, economic indicators, currencies, fixed income, and equity analysis via Bloomberg Professional Services.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center space-x-2 text-purple-400 mb-3">
                  <Heart className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">
                    Personal Interests
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200"
                    >
                      <span>{item.emoji}</span>
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================= PROJECTS SECTION ================================= */}
        <section id="projects" className="py-16 scroll-mt-24">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Portfolio Artifacts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              From mathematical portfolio optimizers and trading systems to native mobile apps and games.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-xl glass-pill border border-white/10 bg-slate-900/60">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* ================================= TECHNICAL SKILLS MATRIX ================================= */}
        <section id="skills" className="py-16 scroll-mt-24">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              Production-tested languages, frameworks, developer tools, platforms, and architectures.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Languages */}
            <div className="glass-card rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/60 hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks / Libraries */}
            <div className="glass-card rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Frameworks & Libraries</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800/80 text-blue-300 border border-slate-700/60 hover:border-blue-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools / Platforms */}
            <div className="glass-card rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Tools & Platforms</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800/80 text-purple-300 border border-slate-700/60 hover:border-purple-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================= COMPETITIONS SECTION ================================= */}
        <section id="competitions" className="py-16 scroll-mt-24">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitive Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Competitions & Honors
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              High-pressure competitive algorithmic problem solving and international financial trading cases.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {competitions.map((comp) => (
              <div
                key={comp.name}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-amber-500/30 hover:shadow-amber-500/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {comp.badge}
                    </span>
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {comp.name}
                  </h3>
                  <div className="text-xs text-slate-400 mb-3.5 font-medium">
                    {comp.subtitle}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {comp.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {comp.highlights.map((h) => (
                      <div key={h} className="flex items-center text-xs text-slate-300 space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href={comp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Visit Competition Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================= CONTACT & FOOTER ================================= */}
        <section id="contact" className="py-16 scroll-mt-24">
          <div className="relative glass-card rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/10">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Let&apos;s Connect</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get In Touch
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Whether you want to discuss software engineering, quantitative trading systems, or full-time opportunities, feel free to reach out.
              </p>

              {/* Direct Info Card */}
              <div className="flex flex-wrap items-center justify-center gap-4 py-2 text-sm text-slate-300">
                <span className="font-semibold text-white">Michael Gibb</span>
                <span>•</span>
                <a
                  href="mailto:gibbm@uwindsor.ca"
                  className="text-cyan-400 hover:underline"
                >
                  gibbm@uwindsor.ca
                </a>
                <span>•</span>
                <a
                  href="tel:2263481355"
                  className="text-emerald-400 hover:underline"
                >
                  (226) 348-1355
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:gibbm@uwindsor.ca"
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center space-x-2 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass-card hover:bg-slate-800/90 border border-white/10 hover:border-slate-500/40 flex items-center space-x-2 transition-all duration-200"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleCopyPhone}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass-card hover:bg-slate-800/90 border border-white/10 hover:border-slate-500/40 flex items-center space-x-2 transition-all duration-200"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Phone Copied!</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.linkedin.com/in/michael-gibb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass-card hover:bg-slate-800/90 border border-white/10 hover:border-slate-500/40 flex items-center space-x-2 transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/mikegibb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass-card hover:bg-slate-800/90 border border-white/10 hover:border-slate-500/40 flex items-center space-x-2 transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#06080d] py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-400">Michael Gibb</span>
            <span>•</span>
            <span>gibbm@uwindsor.ca</span>
            <span>•</span>
            <span>(226) 348-1355</span>
          </div>
          <div className="text-slate-500">
            University of Windsor • Honours Computer Science Co-op • Designed with Next.js & React
          </div>
        </div>
      </footer>
    </div>
  );
}
