import { Footer } from './components/Footer.jsx'
import { Gallerey } from './components/Gallery.jsx'
import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'
import { Services } from './components/Services.jsx'
import { TestimonialContainer } from './components/TestimonialContainer.jsx'

function App() {
  

  return (
    <>
      <main className='max-w-[1440px] mx-auto relative'>
          <Header/>
          <Main/>
          <Services/>
          <TestimonialContainer/>
          <Gallerey/>
          <Footer/>
      </main>
    </>
  )
}

export default App
