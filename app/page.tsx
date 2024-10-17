import Header from '../components/Header'
import About from '../components/About'
// import Experience from '../components/Experience'
// import Projects from '../components/Projects'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0a192f] text-[#8892b0] md:mx-16 lg:mx-32">
      <div className="md:w-[50%] md:h-screen overflow-y-auto hide-scrollbar p-8 md:p-16">
        <Header />
      </div>
      <div className="md:w-[50%]">
        <main className="max-w-3xl mx-auto px-8 py-16 md:py-24 md:h-screen md:overflow-y-auto hide-scrollbar">
          <About />
          {/* <Experience /> */}
          {/* <Projects /> */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
