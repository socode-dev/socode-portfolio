import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, FileText, Copy, Check } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import RESUME from "@/assets/my-resume.pdf";


const ContactRow = ({
  icon,
  label,
  value,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="truncate text-sm font-medium">{value}</div>
        </div>
      </div>
      {children}
    </motion.div>
  );
}

const EMAIL = "ososamuel246@gmail.com";

const Details = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        toast.success("Email copied to clipboard");
        setTimeout(() => setCopied(false), 1800);
    };


    return (
        <div className="space-y-3 lg:col-span-2">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL}>
                <Button variant="ghost" size="sm" onClick={copyEmail} className="h-8 gap-1.5">
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy"}
                </Button>
            </ContactRow>
            
            <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="github.com/socode-dev">
                <Button asChild size="sm" variant="ghost" className="h-8">
                    <a href="https://github.com/socode-dev" target="_blank" rel="noreferrer">Open</a>
                </Button>
            </ContactRow>
            
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="linkedin.com/in/samuel-frontend-engineer">
                <Button asChild size="sm" variant="ghost" className="h-8">
                    <a href="https://linkedin.com/samuel-frontend-engineer" target="_blank" rel="noreferrer">Open</a>
                </Button>
            </ContactRow>
            
            <ContactRow icon={<FileText className="h-4 w-4" />} label="Resume" value="One-page PDF">
                <Button asChild size="sm" variant="ghost" className="h-8">
                <a href={RESUME} target="_blank" rel="noreferrer">View</a>
                </Button>
            </ContactRow>
        </div>
    )
}

export default Details;