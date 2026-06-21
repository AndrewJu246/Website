export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
          About
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
          <p>
            I&apos;m a freshman at <span className="text-blue-600 font-medium">UCLA</span> studying{" "}
            <span className="text-blue-600 font-medium">Mathematics of Computation</span>, blending
            applied math with computer science. My work sits at the intersection of quantitative
            finance, machine learning, and software engineering.
          </p>
          <p>
            I&apos;ve built ML-driven stock prediction engines, published research on cancer genomics
            at <span className="text-blue-600 font-medium">Yale&apos;s Townsend Lab</span>, and co-authored
            econometric studies at the{" "}
            <span className="text-blue-600 font-medium">Fudan-Stanford Institute</span>. On the
            engineering side, I&apos;ve shipped a campus iOS app to the App Store, built Chrome extensions
            that reverse-engineer AI chatbot DOMs, and designed automated market screeners that analyze
            4,300+ equities daily.
          </p>
          <p>
            I care about building things that work&mdash;tools that find edge, systems that
            scale, and research that matters.
          </p>
        </div>
      </div>
    </section>
  );
}
