import StackPreview from "./components/StackPreview";
import Hero from "./components/Hero";
import QuickStat from "./components/QuickStat";
import PinnedProjects from "./components/PinnedProjects";
import AboutSnapshot from "./components/AboutSnapshot";
import Footer from "./components/Footer";
// import LatestWriting from "./components/LatestWriting";

const TITLE = "Dashboard";

const DESCRIPTION = "Samuel's frontend engineering workspace - featured React and TypeScript projects, tech stack, and current focus areas.";

const KEYWORDS = ["Samuel", "frontend engineer portfolio", "React", "TypeScript", "AI apps"];

const Dashboard = () => {

  return (
    <div className="space-y-6">

      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(", ")} />

      <Hero />

      <QuickStat />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PinnedProjects />
        {/* <LatestWriting /> */}
        <AboutSnapshot />
        <StackPreview />
      </div>


      <Footer />
      
    </div>
  );
}

export default Dashboard;