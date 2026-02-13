"use client";

import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

const qualityLabel: Record<number, string> = {
  1: "Prototype",
  2: "Very basic",
  3: "Basic",
  4: "Starter",
  5: "Balanced",
  6: "Good",
  7: "Polished",
  8: "Premium",
  9: "Near-max",
  10: "Max quality"
};

const seedHtml = `<!doctype html>
<html><head><meta charset="utf-8" /><style>body{font-family:Arial;padding:32px;background:#f8fafc;}h1{margin:0 0 8px;}p{color:#475569;}</style></head>
<body><h1>AI HTML Generator Canvas</h1><p>Fill details, pick quality, then click Generate.</p></body></html>`;

function splitLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function CanvasGeneratorPage() {
  const [logo, setLogo] = useState("PixelForge");
  const [title, setTitle] = useState("Build Better Websites with AI");
  const [subtitle, setSubtitle] = useState("Instantly generate and edit full HTML pages from business inputs.");
  const [pageType, setPageType] = useState("Landing Page");

  const [servicesInput, setServicesInput] = useState("Web Design\nSEO Optimization\nBrand Strategy");
  const [galleryInput, setGalleryInput] = useState("Hero banner\nProduct screenshot\nTeam photo");
  const [socialInput, setSocialInput] = useState("https://instagram.com/pixelforge\nhttps://linkedin.com/company/pixelforge");
  const [contact, setContact] = useState("hello@pixelforge.com | +1 (555) 212-1000");

  const [qualityLevel, setQualityLevel] = useState(6);
  const [htmlOutput, setHtmlOutput] = useState(seedHtml);
  const [editPrompt, setEditPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("Ready to generate.");

  const requestPayload = useMemo(
    () => ({
      basics: { logo, title, subtitle, pageType },
      business: {
        services: splitLines(servicesInput),
        gallery: splitLines(galleryInput),
        socialLinks: splitLines(socialInput),
        contact
      },
      qualityLevel,
      editPrompt: editPrompt.trim() || undefined
    }),
    [contact, editPrompt, galleryInput, logo, pageType, qualityLevel, servicesInput, socialInput, subtitle, title]
  );

  const generate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("Generating page...");

    try {
      const response = await fetch("/api/html-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload)
      });

      const data = await response.json();

      if (typeof data?.html === "string") {
        setHtmlOutput(data.html);
        setStatus(
          data.mode === "ai"
            ? "Generated with Perplexity AI."
            : "Perplexity response unavailable, fallback template generated."
        );
      } else {
        setStatus("Generation failed. Please try again.");
      }
    } catch {
      setStatus("Could not connect to generator endpoint.");
    } finally {
      setIsLoading(false);
    }
  };

  const saveHtml = () => {
    const blob = new Blob([htmlOutput], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "ai-page"}.html`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[420px_1fr]">
      <form onSubmit={generate} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-ink">AI HTML Generator Canvas</h1>
        <p className="mt-2 text-sm text-storm">Dynamic UI to create, edit, preview, and save full HTML pages.</p>

        <section className="mt-5 space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-storm">Basic details</h2>
          <input className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={logo} onChange={(event) => setLogo(event.target.value)} placeholder="LOGO text" />
          <input className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" />
          <textarea className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={subtitle} onChange={(event) => setSubtitle(event.target.value)} placeholder="Subtitle" rows={2} />
          <input className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={pageType} onChange={(event) => setPageType(event.target.value)} placeholder="Page type" />
        </section>

        <section className="mt-5 space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-storm">Business details</h2>
          <textarea className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={servicesInput} onChange={(event) => setServicesInput(event.target.value)} placeholder="Services (one per line)" rows={3} />
          <textarea className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={galleryInput} onChange={(event) => setGalleryInput(event.target.value)} placeholder="Gallery items (one per line)" rows={3} />
          <textarea className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={socialInput} onChange={(event) => setSocialInput(event.target.value)} placeholder="Social links (one per line)" rows={3} />
          <input className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm" value={contact} onChange={(event) => setContact(event.target.value)} placeholder="Contact details" />
        </section>

        <section className="mt-5 rounded-2xl border border-ink/10 bg-slate-50 p-4">
          <label className="text-sm font-semibold text-ink">Design quality: {qualityLevel}/10</label>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={qualityLevel}
            onChange={(event) => setQualityLevel(Number(event.target.value))}
            className="mt-2 w-full"
          />
          <p className="text-xs text-storm">{qualityLabel[qualityLevel]}</p>
        </section>

        <section className="mt-5 space-y-2">
          <label className="text-sm font-semibold text-ink">Edit prompt (for AI update)</label>
          <textarea
            className="w-full rounded-xl border border-ink/15 px-3 py-2 text-sm"
            value={editPrompt}
            onChange={(event) => setEditPrompt(event.target.value)}
            placeholder="Example: Make this dark theme and add pricing cards"
            rows={3}
          />
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate / Update"}
          </Button>
          <Button type="button" variant="outline" onClick={saveHtml}>
            Save HTML file
          </Button>
        </div>
        <p className="mt-3 text-xs text-storm">{status}</p>
      </form>

      <section className="rounded-3xl border border-ink/10 bg-white p-3 shadow-sm">
        <div className="mb-3 flex items-center justify-between px-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-storm">Full page preview</h2>
          <span className="rounded-full bg-ink/5 px-3 py-1 text-xs text-ink">Live iframe</span>
        </div>
        <iframe title="Generated full page preview" srcDoc={htmlOutput} className="h-[80vh] w-full rounded-2xl border border-ink/10 bg-white" />
      </section>
    </div>
  );
}
