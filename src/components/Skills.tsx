const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "R", "JavaScript", "TypeScript", "C++"],
  },
  {
    label: "ML & Data",
    items: [
      "scikit-learn",
      "XGBoost",
      "pandas",
      "Statistical Modeling",
      "Econometric Analysis",
      "Data Visualization",
    ],
  },
  {
    label: "Web & Mobile",
    items: ["React Native", "Expo", "Supabase", "Chrome APIs", "Next.js"],
  },
  {
    label: "Other",
    items: ["Web Scraping", "Quant Analysis", "Excel", "Git"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-base font-semibold uppercase tracking-widest text-blue-600 mb-12">
          Skills
        </h2>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-medium text-gray-900 mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    {item}
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
