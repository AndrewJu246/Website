const projects = [
  {
    title: "Bruin Plans",
    description:
      "Campus-exclusive iOS app for UCLA students to post, discover, and join meetup plans with real-time group messaging. Shipped to the App Store.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    context: "ACM at UCLA — Tech Fellow",
    link: "https://github.com/liam-berger/ucla-friends",
    appStore: "https://apps.apple.com/us/app/bruin-plans/id6768856080",
  },
  {
    title: "Retail-Edge Market Screener",
    description:
      "Daily pipeline screening 4,300+ US equities through 10 signal families with regime-aware composite scoring. Self-improving via Bayesian optimization and GradientBoosting.",
    tech: ["Python", "pandas", "yfinance", "Streamlit"],
    link: "https://github.com/AndrewJu246/stock_screener",
  },
  {
    title: "Stock Prediction Engine",
    description:
      "ML ensemble (Gradient Boosting, Random Forest, XGBoost) predicting daily stock price direction across 12 data source categories including FRED macro, FinBERT sentiment, and fundamental valuations.",
    tech: ["Python", "scikit-learn", "XGBoost"],
    link: "https://github.com/AndrewJu246/stock_predictor",
  },
  {
    title: "AI Multichat Extension",
    description:
      'Chrome extension that sends prompts to multiple AI chatbots simultaneously with an automated "Swap & Debate" pipeline that cycles responses through competing models.',
    tech: ["JavaScript", "Chrome APIs", "DOM Manipulation"],
    link: "https://github.com/AndrewJu246/AI-Multichat-Extension",
  },
  {
    title: "Music Genre Classification",
    description:
      "ML model that vectorizes audio features and clusters songs, identifying quantitative patterns of similarity across 10 music genres.",
    tech: ["Python", "Machine Learning", "Clustering"],
    link: "https://github.com/AndrewJu246/Music-Vectorization-and-Classification",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-blue-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  {"appStore" in p && p.appStore && (
                    <a
                      href={p.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
                      aria-label={`View ${p.title} on the App Store`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-600 transition-colors duration-200"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              {"context" in p && p.context && (
                <p className="text-xs text-gray-400 mt-1">{p.context}</p>
              )}
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
