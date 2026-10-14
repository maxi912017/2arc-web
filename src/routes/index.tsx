import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Home, Factory, Hammer, ThermometerSnowflake, MapPin, Phone, Instagram, Facebook,
  ShieldCheck, ClipboardCheck, CalendarClock, HardHat, Menu, X, ArrowRight, CheckCircle2, MessageCircle,
} from "lucide-react";
import { z } from "zod";
import logo from "@/assets/logo-ar-dark.jpg.asset.json";
import hero from "@/assets/hero.jpg";
import imgResidencia from "@/assets/obra-residencia.jpg";
import imgNave from "@/assets/obra-nave.jpg";
import imgLosa from "@/assets/obra-losa.jpg";
import imgOficinas from "@/assets/obra-oficinas.jpg";
import imgGym from "@/assets/obra-gym.jpg";
import imgEifs from "@/assets/obra-eifs.jpg";
import imgCocina from "@/assets/obra-cocina.jpg";

const TITLE = "AR Constructora | Construcción llave en mano en General Pico, La Pampa";
const DESC = "Viviendas llave en mano, naves industriales, refacciones y aislación térmica EIFS en General Pico. Dirección técnica matriculada y presupuesto pactado.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "5492302591600";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const WA_DEFAULT = waLink("Hola AR Constructora, quiero pedir un presupuesto para mi obra.");

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#obras", label: "Obras" },
  { href: "#servicios", label: "Servicios" },
  { href: "#eifs", label: "Sistema EIFS" },
  { href: "#contacto", label: "Contacto" },
];

const SERVICES = [
  { icon: Home, title: "Construcción llave en mano", text: "Viviendas unifamiliares, departamentos compactos de 35 m² y quinchos. Desde los planos hasta la entrega de llaves." },
  { icon: Factory, title: "Obras comerciales e industriales", text: "Naves logísticas, galpones con estructura metálica y locales comerciales con pisos de hormigón industrial." },
  { icon: Hammer, title: "Refacciones y ampliaciones", text: "Remodelación integral de cocinas, baños y viviendas IPAV, con instalaciones nuevas y terminaciones de calidad." },
  { icon: ThermometerSnowflake, title: "Aislación térmica EIFS", text: "Eficiencia energética para el clima de La Pampa: menos frío en invierno, menos calor en verano." },
];

type Cat = "todas" | "viviendas" | "comercial" | "refacciones" | "proceso";
const FILTERS: { id: Cat; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "viviendas", label: "Viviendas" },
  { id: "comercial", label: "Comercial e industrial" },
  { id: "refacciones", label: "Refacciones" },
  { id: "proceso", label: "Proceso constructivo" },
];
const PROJECTS: { cat: Exclude<Cat, "todas">; img: string; tag: string; title: string; text: string }[] = [
  { cat: "viviendas", img: imgResidencia, tag: "Llave en mano", title: "Residencia familiar 96 m²", text: "2 dormitorios, living-comedor y cocina, con orientación solar óptima y planos aprobados." },
  { cat: "comercial", img: imgNave, tag: "Nave logística", title: "Mayorista de Frutas y Verduras", text: "Estructura metálica de gran luz, piso H-30 para autoelevadores y sector de cámaras de frío." },
  { cat: "comercial", img: imgOficinas, tag: "Institucional", title: "Oficinas APAP General Pico", text: "Construcción y terminación integral con tabiquería técnica, iluminación y accesos confortables." },
  { cat: "comercial", img: imgGym, tag: "Adecuación", title: "Centro Moov Training", text: "Refacción de vivienda a consultorio kinésico y gimnasio funcional con apeos y refuerzos." },
  { cat: "refacciones", img: imgCocina, tag: "Antes y después", title: "Remodelación de cocina y baño", text: "Cañerías nuevas, revestimientos cerámicos, mesada de mármol y griferías monocomando." },
  { cat: "proceso", img: imgLosa, tag: "Losas", title: "Hormigonado de losa de 226 m²", text: "Apuntalamiento, encofrado y llenado continuo con hormigón elaborado y control de recubrimientos." },
  { cat: "proceso", img: imgEifs, tag: "EIFS", title: "Aislación exterior y sellado de fisuras", text: "Placas de EPS de alta densidad con base coat y malla sobre muros con grietas reparadas." },
];

const PROCESS = [
  { icon: HardHat, title: "Dirección técnica matriculada", text: "Seguimiento directo en obra del Maestro Mayor de Obras Alexis Ruiz, bajo normativas vigentes." },
  { icon: ClipboardCheck, title: "Presupuesto pactado y garantía escrita", text: "Sabés desde el principio cuánto vas a invertir y qué incluye. Sin sorpresas." },
  { icon: CalendarClock, title: "Plazos cumplidos", text: "Planificamos cada etapa —replanteo, platea, estructura, terminaciones— para entregar a tiempo." },
  { icon: ShieldCheck, title: "Planos y trámites", text: "Anteproyecto, planos municipales y de gas aprobados, instalaciones normalizadas." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WaButton({ children, href = WA_DEFAULT, className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-elegant transition hover:bg-primary-glow ${className}`}>
      <MessageCircle className="size-4" /> {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#inicio" aria-label="AR Constructora, inicio">
          <img src={logo.url} alt="AR Constructora" className="h-9 w-auto md:h-11" width={1280} height={373} />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <div className="hidden lg:block"><WaButton className="px-5 py-2.5">Pedir presupuesto</WaButton></div>
        <button className="p-2 text-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-semibold uppercase tracking-wider text-foreground">{n.label}</a>
          ))}
          <WaButton className="mt-3 w-full">Pedir presupuesto (WhatsApp)</WaButton>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden pt-20">
      <img src={hero} alt="Vivienda contemporánea construida por AR Constructora al atardecer" className="absolute inset-0 size-full object-cover" width={1920} height={1088} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute left-0 top-0 hidden h-full w-40 stripes opacity-30 md:block" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <p className="eyebrow animate-rise">General Pico · La Pampa</p>
        <h1 className="animate-rise mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Construcción llave en mano y obras civiles en <span className="font-serif font-normal italic text-primary-glow">General Pico</span> y La Pampa
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Responsabilidad, eficacia y dirección técnica matriculada al servicio de tu proyecto.
        </p>
        <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row">
          <WaButton>Pedir presupuesto por WhatsApp</WaButton>
          <a href="#obras" className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition hover:border-foreground hover:bg-foreground/5">
            Ver proyectos <ArrowRight className="size-4" />
          </a>
        </div>
        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {[["135+", "obras publicadas"], ["100%", "dirección técnica"], ["M.M.O.", "profesional matriculado"]].map(([n, l]) => (
            <div key={l}><dt className="text-2xl font-black text-foreground md:text-4xl">{n}</dt><dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="reveal max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${light ? "text-paper-foreground" : "text-foreground"}`}>{title}</h2>
      <div className="mt-5 h-1.5 w-24 stripes" />
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-paper py-24 text-paper-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle eyebrow="Servicios" title="Todo lo que tu obra necesita, con un solo responsable" light />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-paper-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="reveal group relative bg-paper p-8 transition hover:bg-background hover:text-foreground" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="text-xs font-bold text-primary">0{i + 1}</span>
              <s.icon className="mt-6 size-10 text-primary transition group-hover:text-primary-glow" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-75">{s.text}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Works() {
  const [cat, setCat] = useState<Cat>("todas");
  const list = PROJECTS.filter((p) => cat === "todas" || p.cat === cat);
  return (
    <section id="obras" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle eyebrow="Obras y casos de éxito" title="Proyectos reales en General Pico" />
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist">
          {FILTERS.map((f) => (
            <button key={f.id} role="tab" aria-selected={cat === f.id} onClick={() => setCat(f.id)}
              className={`shrink-0 rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${cat === f.id ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="animate-rise group overflow-hidden rounded-sm border border-border bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-sm bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-card-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://www.instagram.com/ar_constructora/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary-glow hover:underline">
            <Instagram className="size-4" /> Ver más obras en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Eifs() {
  return (
    <section id="eifs" className="relative overflow-hidden border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div className="reveal relative">
          <img src={imgEifs} alt="Colocación de sistema EIFS en fachada" loading="lazy" width={1024} height={768} className="rounded-sm object-cover" />
          <div className="absolute -bottom-4 -right-4 -z-0 hidden h-32 w-32 stripes md:block" />
        </div>
        <div className="reveal">
          <p className="eyebrow">Sistema EIFS</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground md:text-5xl">Tu casa, protegida del clima pampeano</h2>
          <p className="mt-6 text-muted-foreground">
            El sistema de aislación térmica exterior envuelve los muros con placas de EPS de alta densidad, malla y base coat. Reduce el consumo de calefacción y aire acondicionado, y sella fisuras de asentamiento.
          </p>
          <ul className="mt-8 space-y-3">
            {["Menos frío en invierno y menos calor en verano", "Ahorro en gas y electricidad", "Reparación de fisuras y renovación de fachada", "Aplicable en obra nueva y en viviendas existentes"].map((t) => (
              <li key={t} className="flex gap-3 text-foreground"><CheckCircle2 className="size-5 shrink-0 text-primary-glow" /> {t}</li>
            ))}
          </ul>
          <WaButton className="mt-10" href={waLink("Hola, quiero consultar por aislación térmica EIFS.")}>Consultar por EIFS</WaButton>
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle eyebrow="Por qué elegirnos" title="Construir con respaldo técnico cambia todo" />
        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="reveal border-l-2 border-primary pl-6" style={{ transitionDelay: `${i * 80}ms` }}>
              <p.icon className="size-8 text-primary-glow" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-extrabold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const formSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre").max(80),
  telefono: z.string().trim().min(6, "Ingresá un teléfono válido").max(30).regex(/^[0-9+\s()-]+$/, "Sólo números"),
  tipo: z.string().min(1, "Elegí un tipo de obra"),
  mensaje: z.string().trim().max(800).optional(),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const inputCls = "w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = formSchema.safeParse(data);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    const v = r.data;
    const msg = `Hola AR Constructora, soy ${v.nombre} (tel. ${v.telefono}). Quiero consultar por: ${v.tipo}.${v.mensaje ? `\n${v.mensaje}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contacto" className="bg-paper py-24 text-paper-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionTitle eyebrow="Contacto" title="Contanos tu proyecto" light />
          <div className="mt-10 space-y-6">
            <a href="https://maps.google.com/?q=Calle+17+1062,+General+Pico,+La+Pampa" target="_blank" rel="noopener noreferrer" className="flex gap-4">
              <MapPin className="size-6 shrink-0 text-primary" />
              <span><strong className="block">Calle 17 N° 1062 (e/ 20 y 22)</strong>General Pico, La Pampa, Argentina</span>
            </a>
            <a href="tel:+5492302591600" className="flex gap-4">
              <Phone className="size-6 shrink-0 text-primary" />
              <span><strong className="block">+54 9 2302 591600</strong>Llamadas y WhatsApp</span>
            </a>
          </div>
          <WaButton className="mt-10">Escribir por WhatsApp</WaButton>
          <iframe title="Ubicación de AR Constructora" className="mt-10 aspect-video w-full rounded-sm border-0 grayscale"
            loading="lazy" src="https://www.google.com/maps?q=Calle+17+1062,+General+Pico,+La+Pampa&output=embed" />
        </div>
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="reveal rounded-sm bg-background p-6 text-foreground shadow-elegant md:p-10">
            <h3 className="text-2xl font-black">Consulta rápida</h3>
            <p className="mt-2 text-sm text-muted-foreground">Te respondemos por WhatsApp a la brevedad.</p>
            {sent && (
              <div className="mt-6 flex gap-3 rounded-sm border border-whatsapp/40 bg-whatsapp/10 p-4 text-sm">
                <CheckCircle2 className="size-5 shrink-0 text-whatsapp" />
                ¡Gracias! Abrimos WhatsApp con tu consulta lista para enviar.
              </div>
            )}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold">Nombre
                <input name="nombre" maxLength={80} className={`mt-2 ${inputCls}`} placeholder="Tu nombre" />
                {errors.nombre && <span className="mt-1 block text-xs text-primary-glow">{errors.nombre}</span>}
              </label>
              <label className="block text-sm font-semibold">Teléfono
                <input name="telefono" type="tel" maxLength={30} className={`mt-2 ${inputCls}`} placeholder="2302 ..." />
                {errors.telefono && <span className="mt-1 block text-xs text-primary-glow">{errors.telefono}</span>}
              </label>
              <label className="block text-sm font-semibold sm:col-span-2">Tipo de obra
                <select name="tipo" defaultValue="" className={`mt-2 ${inputCls}`}>
                  <option value="" disabled>Seleccioná una opción</option>
                  <option>Construcción llave en mano</option>
                  <option>Obra comercial o industrial</option>
                  <option>Refacción o ampliación</option>
                  <option>Aislación térmica EIFS</option>
                  <option>Otro</option>
                </select>
                {errors.tipo && <span className="mt-1 block text-xs text-primary-glow">{errors.tipo}</span>}
              </label>
              <label className="block text-sm font-semibold sm:col-span-2">Mensaje
                <textarea name="mensaje" rows={4} maxLength={800} className={`mt-2 ${inputCls}`} placeholder="Metros, ubicación del lote, plazos..." />
              </label>
            </div>
            <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-primary-glow">
              Enviar consulta <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 pb-28 md:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <img src={logo.url} alt="AR Constructora" className="h-10 w-auto" width={1280} height={373} loading="lazy" />
        <div className="flex gap-4">
          <a href="https://www.instagram.com/ar_constructora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground"><Instagram /></a>
          <a href="https://www.facebook.com/2053937308224508" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-foreground"><Facebook /></a>
        </div>
        <div className="text-xs text-muted-foreground md:text-right">
          <p>© {new Date().getFullYear()} AR Constructora · General Pico, La Pampa. Todos los derechos reservados.</p>
          <p className="mt-1">Las imágenes son ilustrativas. Desarrollo web: <a href="https://impulsatunegocio.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">impulsatunegocio.dev</a></p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Eifs />
        <Authority />
        <Contact />
      </main>
      <Footer />
      <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition hover:scale-105">
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
