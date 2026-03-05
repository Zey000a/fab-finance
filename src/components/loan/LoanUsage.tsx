interface Props {
  usage?: any[];
}

export default function LoanUsage({ usage = [] }: Props) {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-10">
        Pour quels projets utiliser ce prêt ?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {usage.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={p.image} className="h-48 w-full object-cover" />

            <div className="p-5">
              <h3 className="font-bold mb-2">{p.title}</h3>

              <p className="text-sm text-gray-500">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
