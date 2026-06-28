import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, FileText, Send, Copy, Check } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Tell me your name"),
  email: z.string().email("Valid email please"),
  message: z.string().min(10, "A little more detail helps"),
});
type FormValues = z.infer<typeof schema>;

const EMAIL = "samuel@socode.dev";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [copied, setCopied] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Contact
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Let's build something meaningful.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          I'm currently open to frontend engineering opportunities and interesting collaborations.
          The fastest way to reach me is email — I read every message and reply quickly.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name ? (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  ) : null}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
                  {errors.email ? (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  ) : null}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="What are you working on?"
                  rows={6}
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                ) : null}
              </div>
              <div className="flex items-center justify-between gap-2 pt-1">
                <p className="text-xs text-muted-foreground">
                  Submitting opens your email client with this message prefilled.
                </p>
                <Button type="submit" disabled={isSubmitting}>
                  <Send className="h-4 w-4" /> Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-3 lg:col-span-2">
          <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL}>
            <Button variant="ghost" size="sm" onClick={copyEmail} className="h-8 gap-1.5">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </ContactRow>
          <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="github.com/samuel">
            <Button asChild size="sm" variant="ghost" className="h-8">
              <a href="https://github.com/" target="_blank" rel="noreferrer">Open</a>
            </Button>
          </ContactRow>
          <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="linkedin.com/in/samuel">
            <Button asChild size="sm" variant="ghost" className="h-8">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">Open</a>
            </Button>
          </ContactRow>
          <ContactRow icon={<FileText className="h-4 w-4" />} label="Resume" value="One-page PDF">
            <Button asChild size="sm" variant="ghost" className="h-8">
              <a href="/resume.pdf" target="_blank" rel="noreferrer">View</a>
            </Button>
          </ContactRow>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  children?: React.ReactNode;
}) {
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
