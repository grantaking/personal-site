import headshot from '../assets/headshot.jpg'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section__inner">
        <h2 className="section__title">About</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm Grant. I'm a clinical psychology PhD student working at the intersection
              of AI and mental health. My work aims to use advanced statistical methods, 
              interpersonal theory, and AI to understand the ways that people interact
              with our changing technology landscape.
            </p>
            <p>
              Currently, I'm focused on examining the impact of AI on human mental health
              through two mechanisms - everyday human-AI interaction, and uncertainty related
              to AI's impact on our economic systems and broader society.
            </p>
            <p>
              When I'm not working on my research, you can find me reading, writing, 
              and spending time with my partner.
            </p>
          </div>
          <div className="about__image">
            <div className="about__image-placeholder">
              <span><img src={headshot} alt="Personal Photo" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
