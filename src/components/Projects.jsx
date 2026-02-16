const projects = [
  {
    title: 'Combining Machine Learning and Mixed Effects Methods for Personalized Momentary Affect Prediction ',
    description:
      'A study leveraging intensive longitudinal data and passive sensing to develop personalized models of momentary affect, with implications for just-in-time adaptive interventions in mental health.',
    tags: ['Machine Learning', 'Mixed Effects Models', 'Intensive Longitudinal Data', 'Passive Sensing'],
  },
  {
    title: 'Internalizing Psychopathology and Interpersonal Affect Matching',
    description:
      'An investigation into how internalizing psychopathology (e.g., depression, anxiety) relates to individuals’ ability to match their affective states with those of others, using structural equation modeling to intensive longitudinal data.',
    tags: ['Internalizing Psychopathology', 'Interpersonal Affect Matching', 'Structural Equation Modeling'],
  },
  {
    title: 'The Impact of Romance Novels on Relationship Expectations and Dating Behaviors',
    description:
      'A mixed-methods study examining how consuming romance novels influences individuals’ expectations for romantic relationships and their dating behaviors, with implications for understanding media effects on interpersonal dynamics.',
    tags: ['Media Psychology', 'Mixed Methods', 'Romantic Relationships'],
  },
  {
    title: 'AI and Individual Differences: Examining the Role of Personality in Human-AI Interaction',
    description:
      'A study exploring how individual differences in personality traits (e.g., openness, conscientiousness) influence people’s interactions with AI technologies, using a combination of survey data and experimental methods.',
    tags: ['AI', 'Personality Psychology', 'Human-AI Interaction', 'Experimental Methods'],
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section__inner">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <article key={i} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
