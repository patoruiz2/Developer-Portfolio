import { Home } from '../../components'
import AboutMe from '../../components/AboutMe'
import ContactMe from '../../components/ContactMe'
import NavBar from '../../components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Home />
        <AboutMe />
        <ContactMe />
      </main>

    </>
  )
}

export default App
