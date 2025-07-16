import { Header, Footer, Projects, Skills } from "./components/Barrel";

const App = () => {
  return (
    <div className="relative min-h-screen w-fullv pt-20 p-5 bg-gray-100 text-black">
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
