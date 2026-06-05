const experiences = [
  {
    company: "Shanghai Jiyu Fund Sales Co., Ltd.",
    role: "Financial Product Development Intern",
    date: "August 2025",
    location: "Shanghai, China",
    bullets: [
      "Migrated backend website components to frontend interface, reducing page load time and improving user access to fund product information.",
      "Performed quantitative analysis of market data using Python to back test and validate trading model assumptions across multiple asset classes.",
      "Automated client onboarding content by building web scraping pipelines to generate AI-driven introductory videos, streamlining the sales workflow.",
    ],
  },
  {
    company: "One Step Ahead Education Consulting",
    role: "Admissions Counselor Intern",
    date: "June 2025 – August 2025",
    location: "Shanghai, China",
    bullets: [
      "Mentored 10+ Chinese students through the U.S. boarding school application process, providing individualized guidance on school selection and essays.",
      "Conducted mock interview sessions and developed structured feedback frameworks, improving student confidence and interview performance.",
    ],
  },
  {
    company: "AdaptiConnect",
    role: "Co-Founder & Leader",
    date: "June 2023 – September 2024",
    location: "",
    bullets: [
      "Co-founded an application leveraging machine learning models to facilitate real-time communication for hearing-impaired individuals.",
      "Managed full product development cycle from concept through prototype, including website development, user interviews, and community outreach.",
      "Recruited and onboarded two new members, expanding technical capacity and accelerating development.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company + exp.role} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                  <p className="text-gray-600 italic">{exp.role}</p>
                </div>
                <div className="text-sm text-gray-400 sm:text-right shrink-0">
                  <p>{exp.date}</p>
                  {exp.location && <p>{exp.location}</p>}
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-gray-600 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
