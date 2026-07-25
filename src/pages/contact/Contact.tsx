import Details from "./components/Details";
import Form from "./components/Form";

const TITLE ="Contact";

const DESCRIPTION ="Get in touch with Samuel — open to frontend engineering roles and collaborations. Reach out by email, GitHub, or LinkedIn.";

const KEYWORDS = ["contact Samuel", "hire frontend engineer", "React developer"];

const Contact = () => {
  
  return (
    <div className="space-y-8">

      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(", ")} />

      <header className="space-y-3">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Contact
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Let's build something meaningful.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          I'm currently open to frontend engineering opportunities and interesting collaborations.
          The fastest way to reach me is email, I read every message and reply quickly.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Form />
        <Details />
      </div>
    </div>
  );
}

export default Contact;