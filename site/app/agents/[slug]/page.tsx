import Link from "next/link";
import { notFound } from "next/navigation";
import { AGENTS } from "../agentsData";
import { getAgentSlug } from "../../lib/agentSlug";

type Params = { slug: string };


export function generateStaticParams() {
  return AGENTS
    .map((a) => getAgentSlug(a))
    .filter((slug): slug is string => typeof slug === "string" && slug.length > 0)
    .map((slug) => ({ slug }));
}

export default function AgentDetailPage({ params }: { params: Params }) {
  const agent = AGENTS.find((a) => getAgentSlug(a) === params.slug);
  if (!agent) notFound();

  const title = (agent as { title?: string }).title;
  const location = (agent as { location?: string }).location;
  const bio = (agent as { bio?: string }).bio;
  const specialties = (agent as { specialties?: string[] }).specialties;
  const email = (agent as { email?: string }).email;
  const phone = (agent as { phone?: string }).phone;
  const name = (agent as { name?: string }).name ?? "Agent";

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-8">
      <div>
        <Link href="/agents" className="text-sm underline">
          Back to Agents
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
        {title && <p className="text-lg text-muted-foreground">{title}</p>}
        {location && <p className="text-sm text-muted-foreground">{location}</p>}
      </header>

      {bio && <section className="text-base leading-relaxed">{bio}</section>}

      {Array.isArray(specialties) && specialties.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold">Specialties</h2>
          <ul className="mt-3 list-disc pl-6">
            {specialties.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="grid gap-4 md:grid-cols-2">
        {email && (
          <div className="rounded-xl border p-5">
            <div className="text-sm text-muted-foreground">Email</div>
            <a className="mt-1 block underline" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}

        {phone && (
          <div className="rounded-xl border p-5">
            <div className="text-sm text-muted-foreground">Phone</div>
            <a className="mt-1 block underline" href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
