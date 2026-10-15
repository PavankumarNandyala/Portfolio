import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AskMe from './components/AskMe';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <Hero />
        <Stats />
      </main>
      <Experience />
      <Projects />
      <Skills />
      <AskMe />
      <Contact />
    </>
  );
}
