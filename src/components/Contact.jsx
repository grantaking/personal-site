export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section__inner">
        <h2 className="section__title">Get in Touch</h2>
        <p className="contact__text">
          Interested in collaborating on research, discussing psychology, or just
          saying hello? I'd love to hear from you.
        </p>
        <a href="mailto:hello@grantking.com" className="contact__email">
          grking@umich.edu
        </a>
        <div className="contact__links">
          <a href="https://www.linkedin.com/in/grant-king-0a9ba594/" className="contact__link" aria-label="LinkedIn" >
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?hl=en&user=DdFJRwIAAAAJ" className="contact__link" aria-label="Google Scholar">
            Google Scholar
          </a>
          <a href="https://grantaking.substack.com/" className="contact__link" aria-label="Substack">
            Substack
          </a>
        </div>
      </div>
    </section>
  )
}
