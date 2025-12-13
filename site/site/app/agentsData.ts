export type Agent = {
  name: string;
  tag: string;
  tagline: string;
  outcomes: string[];
  capabilities: string[];
};

export const AGENTS: Agent[] = [
  {
    name: "Content Agent",
    tag: "Agent",
    tagline: "Plans, writes, and publishes SEO content on a schedule.",
    outcomes: [
      "Consistent publishing cadence",
      "Higher organic traffic over time",
      "Clear topical authority",
    ],
    capabilities: [
      "Keyword + intent clustering",
      "Briefs, drafts, and on-page optimization",
      "Internal linking suggestions",
      "Repurposing into social + email",
    ],
  },
  {
    name: "Lead Magnet Agent",
    tag: "Agent",
    tagline: "Turns visitors into leads with high-converting offers.",
    outcomes: [
      "More qualified opt-ins",
      "Higher landing page conversion",
      "Better list growth efficiency",
    ],
    capabilities: [
      "Offer positioning + copy frameworks",
      "Landing page sections + CTA strategy",
      "Form + friction reduction recommendations",
      "A/B test hypotheses and iterations",
    ],
  },
  {
    name: "Nurture Agent",
    tag: "Agent",
    tagline: "Automates follow-up so leads don’t go cold.",
    outcomes: [
      "Higher reply and booking rates",
      "Shorter time-to-close",
      "More revenue per lead",
    ],
    capabilities: [
      "Email + SMS sequence design",
      "Segmentation rules and triggers",
      "Personalization tokens + dynamic logic",
      "Re-engagement flows",
    ],
  },
  {
    name: "Conversion Agent",
    tag: "Agent",
    tagline: "Improves your funnel and landing pages with continuous optimization.",
    outcomes: [
      "More demos/bookings",
      "Lower cost per acquisition",
      "Better conversion rates site-wide",
    ],
    capabilities: [
      "Funnel audits + prioritized fixes",
      "Offer clarity and objection handling",
      "Experience design and rollout plan",
    ],
  },
  {
    name: "Analytics Agent",
    tag: "Agent",
    tagline: "Keeps score and reports what’s working—weekly.",
    outcomes: [
      "Clear KPI visibility",
      "Faster decision-making",
      "Less wasted spend",
    ],
    capabilities: [
      "Event tracking plan",
      "Dashboard metric definitions",
      "Weekly performance summaries",
      "Channel + landing page attribution checks",
    ],
  },
];
