import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import FeaturedProjects from './components/sections/FeaturedProjects'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}

export default App
