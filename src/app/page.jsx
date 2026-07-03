import resumeData from '@/data/resume.json';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const { personal, portfolio, experience, education, projects, skills, tools, achievements, extracurricular, references } = resumeData;

  return (
    <>
      <Header personal={personal} portfolio={portfolio} />
      <main>
        <Hero personal={personal} portfolio={portfolio} />
        {/* <Team /> */}
        <Experience experience={experience} />
        <Education education={education} />
        <Projects projects={projects} />
        <Skills skills={skills} tools={tools} />
        <Achievements achievements={achievements} extracurricular={extracurricular} />
        <Contact personal={personal} portfolio={portfolio} references={references} />
      </main>
      <Footer personal={personal} />
    </>
  );
}
