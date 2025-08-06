// app/page.tsx

type Project = {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;  // optional image
};

type Experience = {
  role: string;
  company: string;
  description: string;
  url?: string;
};

const experiences: Experience[] = [
  {
    role: 'Intern Developer',
    company: 'Jamieson Wellness',
    description:
      'Contributed to software development projects, improving internal tools and automating processes to support product development.',
  },
  {
    role: 'Junior Analyst → Junior Developer → Senior Developer',
    company: 'JSOSIF — John Simpson Odette Student Investment Fund',
    description:
      'Progressed through roles contributing to investment analysis, software development, and project leadership.',
    url: 'https://www.jsosif.com/',
  },
  {
    role: 'Teaching Assistant',
    company: 'University of Windsor',
    description:
      'Supported undergraduate courses in Computer Science by assisting students, grading assignments, and leading tutorial sessions.',
  },
];

const projects: Project[] = [
  {
    title: 'Efficient Frontier - Portfolio Optimization',
    description:
      'A Python-based tool that visualizes the efficient frontier for a portfolio of assets, helping to identify the optimal risk-return trade-offs using modern portfolio theory and mean-variance optimization.',
    url: 'https://efficient-frontier-ui.vercel.app/',
    imageUrl: '/images/efficient-frontier.png', // example image path in /public/images/
  },
  {
    title: 'Algorithmic Trading System',
    description:
      'Developed quantitative trading algorithms and backtesting tools in Python.',
    url: 'https://github.com/MikeGibb7/M-Z50',
  },
  {
    title: 'Mean Reversion Trader',
    description:
      'Basic mean reversion trading strategy, automatically buying stocks when they drop below a statistically significant threshold and selling them when they rise above it.',
    url: 'https://github.com/MikeGibb7/Mean-Reversion-Trader',
    imageUrl: '/images/mean-reversion.jpg',
  },
  {
    title: 'Finbud Financial Platform',
    description:
      'FinBud is an innovative platform designed to simplify personal finance for young people. It offers an easy-to-use interface that guides users through their financial journey with step-by-step instructions.',
    url: 'https://finbud.ca/',
    imageUrl: '/images/finbud.png',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6">
        Welcome to Michael Gibb&apos;s Website
      </h1>
      <p className="text-lg max-w-xl text-center mb-8">
        I&apos;m a Computer Science student at the University of Windsor,
        passionate about web development, finance, and quantitative trading.
      </p>
      <div className="flex space-x-4 mb-12">
        <a
          href="https://github.com/mikegibb7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          GitHub
        </a>
      </div>

      {/* Work Experience Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map(({ role, company, description, url }) => (
            <div key={role} className="p-6 border border-gray-300 rounded-lg bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-1">{role}</h3>
              <h4
                className={`mb-2 ${
                  url
                    ? 'text-blue-600 dark:text-blue-400 hover:underline'
                    : 'text-gray-800 dark:text-gray-300 font-semibold'
                }`}
              >
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {company}
                  </a>
                ) : (
                  company
                )}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(({ title, description, url, imageUrl }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={`${title} screenshot`}
                  className="mb-4 w-full h-40 object-cover rounded-md"
                  loading="lazy"
                />
              )}
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
