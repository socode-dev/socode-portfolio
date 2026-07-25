import z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";


const schema = z.object({
  name: z.string().min(2, "Tell me your name"),
  email: z.email("Valid email please"),
  message: z.string().min(10, "A little more detail helps"),
});

type FormValues = z.infer<typeof schema>;

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {

    try{
      await fetch("/api/send", ({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: data.name, email: data.email, message: data.message})
      }));


      toast.success("Email sent successfully.");
    } catch (err) {
      toast.error("Failed to send email. Please try again.");
    } finally {
      reset();
    }

  };

  return (
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
                className="resize-none"
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
                Your message will be delivered directly to my inbox.
              </p>
              <Button type="submit" className="min-w-30 disabled:opacity-70" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 rounded-full bg-primary border-2 border-t-0 border-primary-foreground animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
  )
}

export default Form;