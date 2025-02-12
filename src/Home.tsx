
import Footer from './Footer';
import Hero from './Hero';
import Navigation from './Navigation';
import ProjectList from './ProjectList';

import './App.css';

function Home() {

  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <ProjectList></ProjectList>
      <Footer></Footer>
    </div>
  )
}

export default Home
