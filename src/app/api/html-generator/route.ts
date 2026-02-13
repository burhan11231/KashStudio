import { NextResponse } from "next/server";

type GeneratorRequest = {
  basics: {
    logo: string;
    title: string;
    subtitle: string;
    pageType: string;
  };
  business: {
    services: string[];
    gallery: string[];
    socialLinks: string[];
    contact: string;
  };
  qualityLevel: number;
  editPrompt?: string;
};

const PERPLEXITY_ENDPOINT = "https://api.perplexity.ai/chat/completions";

function parseRequestPayload(raw: unknown): GeneratorRequest {
  if (!raw || typeof raw !== "object") {
    throw new Error("Invalid request payload.");
  }

  const input = raw as Partial<GeneratorRequest>;

  return {
    basics: {
      logo: input.basics?.logo?.toString().trim() ?? "",
      title: input.basics?.title?.toString().trim() ?? "",
      subtitle: input.basics?.subtitle?.toString().trim() ?? "",
      pageType: input.basics?.pageType?.toString().trim() ?? ""
    },
    business: {
      services: Array.isArray(input.business?.services)
        ? input.business.services.map((item) => item?.toString().trim() ?? "").filter(Boolean)
        : [],
      gallery: Array.isArray(input.business?.gallery)
        ? input.business.gallery.map((item) => item?.toString().trim() ?? "").filter(Boolean)
        : [],
      socialLinks: Array.isArray(input.business?.socialLinks)
        ? input.business.socialLinks.map((item) => item?.toString().trim() ?? "").filter(Boolean)
        : [],
      contact: input.business?.contact?.toString().trim() ?? ""
    },
    qualityLevel:
      typeof input.qualityLevel === "number"
        ? Math.min(10, Math.max(1, Math.round(input.qualityLevel)))
        : 5,
    editPrompt: input.editPrompt?.toString().trim() || undefined
  };
}

function extractHtml(content: unknown): string | null {
  if (typeof content !== "string") {
    return null;
  }

  const trimmed = content.trim();
  const fenceMatch = trimmed.match(/```(?:html)?\s*([\s\S]*?)```/i);
  const candidate = (fenceMatch?.[1] ?? trimmed).trim();

  return candidate.length > 80 ? candidate : null;
}

function buildFallbackHtml(payload: GeneratorRequest): string {
  const { basics, business, qualityLevel, editPrompt } = payload;
  const services = business.services.filter(Boolean);
  const gallery = business.gallery.filter(Boolean);
  const socials = business.socialLinks.filter(Boolean);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${basics.title || "AI Generated Site"}</title>
  <style>
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Inter, Arial, sans-serif; background: linear-gradient(135deg, #f8fafc, #eef2ff); color: #0f172a; }
    .wrapper { max-width: 1100px; margin: 0 auto; padding: 24px; }
    .hero { border-radius: 22px; padding: 48px; background: white; box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08); }
    .logo { font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase; color: #64748b; }
    h1 { margin: 12px 0; font-size: clamp(28px, 5vw, 52px); }
    .subtitle { margin: 0; color: #475569; max-width: 65ch; }
    .badge { display: inline-block; margin-top: 14px; padding: 6px 12px; border-radius: 999px; background: #e0e7ff; color: #3730a3; font-size: 12px; }
    section { margin-top: 24px; border-radius: 18px; background: white; padding: 24px; box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06); }
    h2 { margin: 0 0 12px 0; }
    ul { margin: 0; padding-left: 18px; display: grid; gap: 8px; }
    .gallery { display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
    .gallery-item { height: 95px; border-radius: 12px; display: grid; place-items: center; background: linear-gradient(120deg, #dbeafe, #ede9fe); color: #1e1b4b; font-weight: 700; font-size: 12px; text-align: center; padding: 8px; }
    .note { margin-top: 24px; font-size: 13px; color: #64748b; }
  </style>
</head>
<body>
  <div class="wrapper">
    <header class="hero">
      <div class="logo">${basics.logo || "Your LOGO"}</div>
      <h1>${basics.title || "Your page title"}</h1>
      <p class="subtitle">${basics.subtitle || "Your subtitle appears here."}</p>
      <span class="badge">Page type: ${basics.pageType || "Landing"} · Quality ${qualityLevel}/10</span>
    </header>

    <section>
      <h2>Services</h2>
      <ul>
        ${services.map((service) => `<li>${service}</li>`).join("") || "<li>Add services to enrich this section.</li>"}
      </ul>
    </section>

    <section>
      <h2>Gallery</h2>
      <div class="gallery">
        ${gallery.map((item, index) => `<div class="gallery-item">${item || `Gallery ${index + 1}`}</div>`).join("") || "<div class=\"gallery-item\">Upload gallery references</div>"}
      </div>
    </section>

    <section>
      <h2>Social links</h2>
      <ul>
        ${socials.map((link) => `<li>${link}</li>`).join("") || "<li>Add social links</li>"}
      </ul>
      <p><strong>Contact:</strong> ${business.contact || "No contact provided"}</p>
    </section>

    ${editPrompt ? `<p class="note"><strong>Latest AI edit instruction:</strong> ${editPrompt}</p>` : ""}
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  let payload: GeneratorRequest | null = null;

  try {
    payload = parseRequestPayload(await request.json());
    const apiKey = process.env.PPLX_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          html: buildFallbackHtml(payload),
          mode: "fallback",
          error: "Missing PPLX_API_KEY. Using local fallback template."
        },
        { status: 200 }
      );
    }

    const systemPrompt =
      "You are an expert web designer. Return only complete HTML (from <!doctype html> to </html>) with inline CSS and optional JS. Do not include markdown fences.";

    const userPrompt = [
      `Generate a ${payload.basics.pageType || "business"} page.`,
      `Quality level: ${payload.qualityLevel}/10 where 1 is basic and 10 is premium polish.`,
      `Logo text: ${payload.basics.logo || "N/A"}`,
      `Title: ${payload.basics.title || "N/A"}`,
      `Subtitle: ${payload.basics.subtitle || "N/A"}`,
      `Services: ${payload.business.services.filter(Boolean).join(", ") || "N/A"}`,
      `Gallery labels/content: ${payload.business.gallery.filter(Boolean).join(", ") || "N/A"}`,
      `Social links: ${payload.business.socialLinks.filter(Boolean).join(", ") || "N/A"}`,
      `Contact block: ${payload.business.contact || "N/A"}`,
      payload.editPrompt
        ? `User update request for this version: ${payload.editPrompt}`
        : "No custom update request yet.",
      "Output valid standalone HTML."
    ].join("\n");

    const abortController = new AbortController();
    const timeout = setTimeout(() => abortController.abort(), 15000);

    const response = await fetch(PERPLEXITY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: Math.min(1, payload.qualityLevel / 10)
      }),
      signal: abortController.signal
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.json(
        {
          html: buildFallbackHtml(payload),
          mode: "fallback",
          error: `Perplexity API returned ${response.status}`
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    const html = extractHtml(data?.choices?.[0]?.message?.content);

    if (!html) {
      return NextResponse.json({ html: buildFallbackHtml(payload), mode: "fallback" });
    }

    return NextResponse.json({ html, mode: "ai" });
  } catch (error) {
    const fallbackPayload =
      payload ??
      ({
        basics: { logo: "LOGO", title: "AI Page", subtitle: "Fallback mode", pageType: "Landing" },
        business: { services: [], gallery: [], socialLinks: [], contact: "" },
        qualityLevel: 5
      } satisfies GeneratorRequest);

    return NextResponse.json(
      {
        html: buildFallbackHtml(fallbackPayload),
        mode: "fallback",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 200 }
    );
  }
}
