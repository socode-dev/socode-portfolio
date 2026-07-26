import StackPreview from "./components/StackPreview";
import Hero from "./components/Hero";
import QuickStat from "./components/QuickStat";
import PinnedProjects from "./components/PinnedProjects";
import AboutSnapshot from "./components/AboutSnapshot";
import Footer from "./components/Footer";
import { SEO } from "@/components/shared/SEO";
// import LatestWriting from "./components/LatestWriting";

const TITLE = "SOCODE - Samuel | Frontend Engineer";

const DESCRIPTION = "Samuel's frontend engineering workspace - featured React and TypeScript projects, tech stack, and current focus areas.";

const KEYWORDS = ["Samuel", "frontend engineer portfolio", "React", "TypeScript", "AI apps"];

const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samuel",
    url: "https://socode.vercel.app/",
    jobTitle: "Frontend Engineer",
    knowsAbout: ["React", "TypeScript", "Tailwind CSS", "AI-powered products"],
    sameAs: ["https://github.com/socode-dev"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SOCODE",
    url: "https://socode.vercel.app/",
    description: DESCRIPTION,
  },
];

const Dashboard = () => {

  return (
    <div className="space-y-6">

      <SEO title={TITLE} description={DESCRIPTION} keywords={KEYWORDS} jsonLd={STRUCTURED_DATA} />

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
