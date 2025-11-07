import Header from './components/Header.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import CardGrid from './components/CardGrid.jsx'
import NewsletterSignup from './components/NewsletterSignup.jsx'
import Footer from './components/Footer.jsx'
import { articles, tutorials } from './data.js'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <section className="section">
          <h2 className="section-title">Featured Articles</h2>
          <CardGrid items={articles} ctaLabel="See all articles" />
        </section>
        <section className="section">
          <h2 className="section-title">Featured Tutorials</h2>
          <CardGrid items={tutorials} ctaLabel="See all tutorials" />
        </section>
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  )
}
