const research = [
  {
    institution: "Fudan-Stanford Institute for China Financial Technology and Risk Analytics",
    role: "Research Assistant",
    date: "January 2023 – January 2025",
    location: "Shanghai, China",
    description:
      "Collaborated with Professor Qingfu Liu on econometric analysis examining the impact of digital transformation on employment trends in China’s securities industry.",
    publication:
      "Bridging the Gap: Digital Transformation and Talent Flow in China’s Securities Market",
    venue: "36th AsianFA Annual Conference",
    link: null,
  },
  {
    institution: "Townsend Lab, Yale School of Public Health",
    role: "Summer Intern",
    date: "June 2024 – August 2024",
    location: "New Haven, CT",
    description:
      "Conducted statistical analysis to identify driver gene mutations across stages of thyroid cancer progression using genomic datasets.",
    publication:
      "Deconvolving mutation and selection reveals drivers of stages of thyroid cancer",
    venue: "AACR Annual Meeting 2025",
    link: null,
  },
  {
    institution: "Heterogenous Association Between Mortality and Environmental Factors",
    role: "Independent Researcher",
    date: "September 2022 – March 2024",
    location: "",
    description:
      "Examined the relationship between environmental conditions and public health outcomes using correlation analysis and linear regression on population level data.",
    publication: null,
    venue: "Published in Science Journal of Public Health",
    link: "https://www.sciencepublishinggroup.com/article/10.11648/j.sjph.20241201.12",
  },
  {
    institution: "The Classification of Music Genre through Vector Clustering Models",
    role: "Independent Researcher",
    date: "June 2024 – November 2024",
    location: "",
    description:
      "Trained a machine learning model to vectorize audio features and cluster songs, identifying quantitative patterns of similarity across 10 music genres.",
    publication: null,
    venue: null,
    link: null,
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-12">
          Research & Publications
        </h2>

        <div className="space-y-10">
          {research.map((r) => (
            <div key={r.institution + r.role} className="border-l-2 border-blue-300 pl-6 hover:border-blue-500 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-semibold text-gray-900">{r.institution}</h3>
                <span className="text-sm text-gray-400 shrink-0">{r.date}</span>
              </div>
              <p className="text-gray-600 italic text-sm">
                {r.role}
                {r.location && ` — ${r.location}`}
              </p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{r.description}</p>
              {r.publication && (
                <p className="mt-2 text-sm">
                  <span className="font-medium text-gray-800">{r.publication}</span>
                  {r.venue && (
                    <span className="text-gray-500"> — {r.venue}</span>
                  )}
                </p>
              )}
              {!r.publication && r.venue && (
                <p className="mt-2 text-sm text-gray-500 italic">{r.venue}</p>
              )}
              {r.link && (
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View publication
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
