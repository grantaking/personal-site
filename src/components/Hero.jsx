export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Grant King</h1>
        <p className="hero__tagline">Clinical Psychology PhD Student</p>
        <p className="hero__intro">
          Exploring the intersection of technology, media, and mental health.
        </p>
        <button className="hero__cta" onClick={scrollToContact}>
          Get in Touch
        </button>
      </div>
    </section>
  )
}
