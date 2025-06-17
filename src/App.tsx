import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollSection } from "./components/ScrollSection";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main>
          <ScrollSection>
            <Hero />
          </ScrollSection>
          <ScrollSection>
            <About />
          </ScrollSection>
          <ScrollSection>
            <Skills />
          </ScrollSection>
          <ScrollSection>
            <Projects />
          </ScrollSection>
          <ScrollSection>
            <Contact />
          </ScrollSection>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 