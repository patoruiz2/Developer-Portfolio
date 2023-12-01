import { Home } from '../../components'
import AboutMe from '../../components/AboutMe'
import ContactMe from '../../components/ContactMe'
import NavBar from '../../components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <main className='flex flex-col h-fit'>
        <Home />
        <AboutMe />
        <ContactMe />
      </main>

    </>
  )
}

export default App
