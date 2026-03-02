import './App.css'
import PrimaryButton from './components/PrimaryButton'
import SidebarMenu from './components/SidebarMenu'
import InfoCard from './components/InfoCard'

function App() {
  return (
    <>
      <div className="min-h-screen">

        <header className="text-center pt-24 pb-16 px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi, I'm Galilea</h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10">A developer based in Mexico building across web, mobile and a few other, excited about technology and what we can build with it :)</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <PrimaryButton texto="Contact me"/>
            <PrimaryButton texto="My resume"/>
          </div>
        </header>

        <main className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-[260px_1fr] p-8">
          <SidebarMenu
            items={[
              {nombre: "About me",link: "#about"},
              {nombre: "Experience",link: "#experience"},
              {nombre: "Projects",link: "#projects"}
            ]}
          />
          <div className="flex flex-col gap-8">
            <section id="about">
              <h2 className="text-3xl font-bold mb-6">About me</h2>

              <div className="bg-white rounded-3xl p-8 md:p-12">
                <p className="text-base leading-relaxed mb-8">
                  I'm a Computer Science student at Tecnológico de Monterrey who loves
                  turning ideas into working code. While I've worked across the full stack, with iOS
                  development, web apps and machine learning models, I'm currently focused on
                  diving deeper into backend systems and the architecture that makes
                  applications scale. I believe great software comes from great collaboration,
                  and I've learned that the best projects happen when diverse minds come together. 
                  I'm currently seeking internship opportunities to grow as a software engineer
                  and contribute to systems that impact users at scale.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Programming languages</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">Python</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">C++</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">C#</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">Swift</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">SQL</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">R</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">HTML/CSS</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Technologies and tools</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">React</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">Next.js</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">.NET Core</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">Unity</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">Git</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">MySQL</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">Figma</span>
                    <span className="bg-gray-300 text-black px-6 py-2 rounded-full">Xcode</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="experience">
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              
              <InfoCard 
                titulo="Women in Technology (WIT)"
                puesto="Software Coordinator"
                fecha="Aug 2025 – Present"
                descripcion="Developed and maintained the club's website using Next.js, React, and TypeScript. Support technical logistics for Hack4Her campus hackathon."
                tecnologias={["Next.js", "React", "TypeScript"]}
              />
            </section>

            <section id="projects">
              <h2 className="text-3xl font-bold mb-6">Projects</h2>
              
              <InfoCard 
                titulo="Brew - Coffee Farm Management Platform"
                puesto="Scrum Master & iOS Developer"
                fecha="Aug 2025 – Oct 2025"
                descripcion="Led Scrum ceremonies and contributed to iOS development for a coffee farm management platform helping Mexican farmers detect pests and diseases using Core ML."
                tecnologias={["Swift", "Core ML", "MLX", "PostgreSQL", "FastAPI", "Docker"]}
              />

              <InfoCard 
                titulo="OXXO Gamified Training Platform"
                puesto="Full-Stack Developer & Game Designer"
                fecha="Feb 2025 – May 2025"
                descripcion="Contributed to the development of a gamified training platform for OXXO locations. Designed Unity training games and integrated dashboards for performance tracking."
                tecnologias={["ASP.NET Core", "Unity", "Google Looker Studio", "MySQL"]}
              />
            </section>
          </div>
        </main>

        <footer className="mt-4 p-8 text-center text-sm text-gray-600">
          © 2026 Galilea's Portfolio
        </footer>

      </div>
    </>
  )
}

export default App