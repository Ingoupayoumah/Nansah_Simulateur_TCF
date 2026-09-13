import { StarIcon } from "@/components/icons";

// Témoignages d'exemple — à remplacer par de vrais avis de candidats dès
// qu'ils seront disponibles. Ne jamais présenter ce contenu comme réel.
const testimonials = [
  {
    nom: "Aïcha B.",
    lieu: "Douala, Cameroun",
    avatarBg: "bg-fuchsia",
    badge: "NCLC 8 · Expression Orale",
    quote:
      "Après un mois avec Nansah, mon expression orale est passée de laborieuse à fluide. J'ai obtenu NCLC 8 à l'oral, largement au-dessus de mon objectif.",
  },
  {
    nom: "Junior K.",
    lieu: "Alger, Algérie",
    avatarBg: "bg-blue",
    badge: "TCF réussi",
    quote:
      "Je doutais vraiment de mon niveau avant de commencer. Avec la méthode de travail proposée et l'accompagnement, j'ai fini par décrocher une moyenne que je n'espérais même pas.",
  },
  {
    nom: "Nadia T.",
    lieu: "Abidjan, Côte d'Ivoire",
    avatarBg: "bg-green-deco",
    badge: "+150 pts en CE/CO",
    quote:
      "Les simulateurs de compréhension écrite et orale m'ont permis de vraiment comprendre où étaient mes lacunes. Résultat : mes deux scores ont grimpé de plus de 150 points.",
  },
  {
    nom: "Samuel M.",
    lieu: "Yaoundé, Cameroun",
    avatarBg: "bg-blue-dark",
    badge: "Résidence permanente",
    quote:
      "Grâce à mon score TCF, mon dossier de résidence permanente a enfin été accepté. Toute ma préparation s'est faite ici.",
  },
  {
    nom: "Grace O.",
    lieu: "Dakar, Sénégal",
    avatarBg: "bg-fuchsia",
    badge: "Expression Écrite",
    quote:
      "Mon expression écrite était mon point faible. Les corrections détaillées après chaque simulation m'ont vraiment fait progresser en quelques semaines.",
  },
  {
    nom: "Amir L.",
    lieu: "Casablanca, Maroc",
    avatarBg: "bg-green-deco",
    badge: "NCLC 7 en 1 mois",
    quote:
      "Un mois d'abonnement m'a suffi pour structurer ma préparation et obtenir une moyenne que je pensais hors de portée.",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="w-[340px] shrink-0 rounded-2xl border border-line bg-surface p-6">
      <div className="flex gap-0.5 text-fuchsia mb-4" aria-label="5 étoiles sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-sm text-ink-soft leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${t.avatarBg}`}
        >
          {t.nom.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="font-bold text-sm truncate">{t.nom}</p>
          <p className="text-xs text-ink-faint font-semibold truncate">{t.lieu}</p>
        </div>
        <span className="ml-auto shrink-0 bg-green-tint text-green text-[10px] font-extrabold uppercase px-2 py-1 rounded-full">
          {t.badge}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-8 text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-blue mb-2">
          Ils ont réussi
        </p>
        <h2 className="text-3xl font-extrabold">
          Ils ont obtenu leur TCF avec Nansah
        </h2>
        <p className="mt-3 text-ink-soft max-w-[60ch] mx-auto">
          25 000+ candidats accompagnés, un taux de réussite déclaré de 95% —
          voici quelques parcours.
        </p>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="marquee-track flex gap-5 w-max">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.nom}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
