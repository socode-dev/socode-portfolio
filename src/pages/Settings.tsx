import { useTheme } from "next-themes";
import { Monitor, Moon, Sun, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { SEO } from "@/components/shared/SEO";

type Density = "comfortable" | "compact";

const TITLE ="Settings" ;

const DESCRIPTION ="Workspace preferences - theme, density, and accessibility.";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [density, setDensity] = useState<Density>("comfortable");

  useEffect(() => {
    document.documentElement.dataset.density = density;
  }, [density]);

  useEffect(() => {
    document.documentElement.dataset.reduceMotion = reduceMotion ? "true" : "false";
  }, [reduceMotion]);

  return (
    <div className="space-y-6">

      <SEO title={TITLE} description={DESCRIPTION} path="/settings" noIndex />

      <header className="space-y-2">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Settings
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Workspace preferences</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Tweak how the workspace looks and behaves. Preferences are stored locally.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Theme</CardTitle>
          <CardDescription>Light, dark, or follow your system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { id: "light", label: "Light", icon: Sun, hint: "Light interface" },
              { id: "dark", label: "Dark", icon: Moon, hint: "Dark interface" },
              { id: "system", label: "System", icon: Monitor, hint: "Match device setting" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`group relative flex items-center gap-3 rounded-lg border p-3 text-left transition ${
                  theme === t.id
                    ? "border-primary bg-accent"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span className="grid h-9 w-9 place-items-center rounded-md bg-surface-2">
                  <t.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium">{t.label}</div>
                  <div className="text-xs text-muted-foreground">{t.hint}</div>
                </div>
                {theme === t.id ? (
                  <Check className="absolute right-3 top-3 h-4 w-4 text-primary" />
                ) : null}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Appearance</CardTitle>
          <CardDescription>How content is laid out across the workspace.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Interface density
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { id: "comfortable", label: "Comfortable", hint: "Default spacing" },
                  { id: "compact", label: "Compact", hint: "Tighter spacing" },
                ] as Array<{ id: Density; label: string; hint: string }>
              ).map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDensity(d.id)}
                  className={`relative rounded-lg border p-3 text-left transition ${
                    density === d.id
                      ? "border-primary bg-accent"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <div className="text-sm font-medium">{d.label}</div>
                  <div className="text-xs text-muted-foreground">{d.hint}</div>
                  {density === d.id ? (
                    <Check className="absolute right-3 top-3 h-4 w-4 text-primary" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          <Row
            label="Reduce motion"
            description="Minimise transitions and animated effects."
            checked={reduceMotion}
            onChange={setReduceMotion}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function Row({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}


export default Settings;
