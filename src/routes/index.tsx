import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type TouchEvent } from "react";
import {
  Home, Factory, Hammer, ThermometerSnowflake, MapPin, Phone, Instagram, Facebook,
  Ruler, DraftingCompass,
  ShieldCheck, ClipboardCheck, CalendarClock, HardHat, Menu, X, ArrowRight, CheckCircle2, MessageCircle,
  ChevronsLeftRight,
  ChevronLeft,
  ChevronRight,
  XCircle,
  Box,
  PaintRoller,
  LayoutPanelTop,
  Volume2,
  VolumeX,
} from "lucide-react";
import { z } from "zod";
import logo from "@/assets/logo-ar-dark.jpg";
import heroOficinaObra from "@/assets/hero-oficina-obra.webp";
import logoVideo from "@/assets/logo-activo.mp4";
import logoWebm from "@/assets/logo-activo.webm";
import logoPoster from "@/assets/logo-poster.webp";
import aboutVideo from "@/assets/empresa.mp4";
import aboutPoster from "@/assets/empresa-poster.jpg";
import imgResidencia from "@/assets/obra-residencia.jpg";
import imgSpeluzzi1 from "@/assets/obra-speluzzi-1.jpg";
import imgSpeluzzi2 from "@/assets/obra-speluzzi-2.jpg";
import imgSpeluzzi3 from "@/assets/obra-speluzzi-3.jpg";
import imgDepto1 from "@/assets/obra-depto-1.jpg";
import imgDepto2 from "@/assets/obra-depto-2.jpg";
import imgDepto3 from "@/assets/obra-depto-3.jpg";
import img3d1 from "@/assets/obra-3d-1.jpg";
import img3d2 from "@/assets/obra-3d-2.jpg";
import img3d3 from "@/assets/obra-3d-3.jpg";
import img3d4 from "@/assets/obra-3d-4.jpg";
import img3dVideo from "@/assets/obra-3d-video.mp4";
import imgGris from "@/assets/obra-gris.jpg";
import imgTexturado from "@/assets/obra-texturado.jpg";
import imgGas1 from "@/assets/obra-gas-1.jpg";
import imgGas2 from "@/assets/obra-gas-2.jpg";
import imgGasVideo from "@/assets/obra-gas-video.mp4";
import imgNaveAntes from "@/assets/obra-nave-antes.jpg";
import imgNaveDespues from "@/assets/obra-nave-despues.jpg";
import imgNaveVideo from "@/assets/obra-nave-video.mp4";
import imgNaveInt1 from "@/assets/obra-nave-int-1.jpg";
import imgNaveInt2 from "@/assets/obra-nave-int-2.jpg";
import imgNaveInt3 from "@/assets/obra-nave-int-3.jpg";
import imgLosa from "@/assets/obra-losa.jpg";
import imgLosa2 from "@/assets/obra-losa-2.jpg";
import imgLosaVideo from "@/assets/obra-losa-video.mp4";
import imgApap1 from "@/assets/obra-apap-1.jpg";
import imgApap2 from "@/assets/obra-apap-2.jpg";
import imgApap3 from "@/assets/obra-apap-3.jpg";
import imgApap4 from "@/assets/obra-apap-4.jpg";
import imgApap5 from "@/assets/obra-apap-5.jpg";
import imgApap6 from "@/assets/obra-apap-6.jpg";
import imgApap7 from "@/assets/obra-apap-7.jpg";
import imgApap8 from "@/assets/obra-apap-8.jpg";
import imgApap9 from "@/assets/obra-apap-9.jpg";
import imgApap10 from "@/assets/obra-apap-10.jpg";
import imgMoov1 from "@/assets/obra-moov-1.jpg";
import imgMoov2 from "@/assets/obra-moov-2.jpg";
import imgMoov3 from "@/assets/obra-moov-3.jpg";
import imgMoovVideo from "@/assets/obra-moov-video.mp4";
import imgKine1 from "@/assets/obra-kine-1.jpg";
import imgKine2 from "@/assets/obra-kine-2.jpg";
import imgKine3 from "@/assets/obra-kine-3.jpg";
import imgKine4 from "@/assets/obra-kine-4.jpg";
import imgKine5 from "@/assets/obra-kine-5.jpg";
import imgEifs from "@/assets/obra-eifs.jpg";
import imgEifsInstalacion from "@/assets/obra-eifs-instalacion.jpg";
import imgCocina from "@/assets/obra-cocina.jpg";
import imgBanioAntes from "@/assets/obra-banio-antes.jpg";
import imgBanioDespues from "@/assets/obra-banio-despues.jpg";
import imgBanio2Antes from "@/assets/obra-banio2-antes.jpg";
import imgBanio2Despues from "@/assets/obra-banio2-despues.jpg";
import imgFachadaAntes from "@/assets/obra-fachada-antes.jpg";
import imgFachadaDespues from "@/assets/obra-fachada-despues.jpg";

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
const LOGO_SCROLL_IDLE_MS = 300;
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const WA_DEFAULT = waLink("Hola AR Constructora, quiero pedir un presupuesto para mi obra.");

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
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
  {
    icon: LayoutPanelTop,
    title: "Cielos rasos",
    text: "Cielos rasos de placa con estructura metálica y registraciones: bajadas de techo, cortinas de luz y nichos para iluminación empotrada, con aislación donde hace falta.",
  },
  { icon: Ruler, title: "Dirección de obra", text: "Replanteo, control de materiales y de cuadrillas, y verificación de cada etapa antes de continuar. Un solo responsable técnico del principio al fin." },
  { icon: DraftingCompass, title: "Planos reglamentarios y trámites", text: "Anteproyecto y planos conforme a la normativa municipal, presentados y aprobados antes de empezar a construir." },
  {
    icon: Box,
    title: "Modelado 3D y anteproyecto",
    text: "Volumetría, distribución y fachadas resueltas en 3D: ves cómo queda la obra antes de romper el piso y aprobás sobre el modelo.",
  },
  {
    icon: PaintRoller,
    title: "Pulido de pisos y terminaciones texturadas",
    text: "Hormigón pulido en naves, galpones y galerías, y texturados de fachada tipo travertino con guardapolvos y juntas limpias.",
  },
];

type Cat = "todas" | "viviendas" | "comercial" | "refacciones" | "proceso";
const FILTERS: { id: Cat; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "viviendas", label: "Viviendas" },
  { id: "comercial", label: "Comercial e industrial" },
  { id: "refacciones", label: "Refacciones" },
  { id: "proceso", label: "Proceso constructivo" },
];
type Project = {
  cat: Exclude<Cat, "todas">;
  img?: string;
  more?: string[];
  video?: string;
  before?: string;
  tag: string;
  title: string;
  text: string;
};
// Las tarjetas de solo video no tienen foto: el video ocupa el medio de la tarjeta.
const photos = (p: Project): string[] => (p.img ? [p.img, ...(p.more ?? [])] : []);
const PROJECTS: Project[] = [
  { cat: "viviendas", img: imgResidencia, tag: "Llave en mano", title: "Residencia familiar 96 m²", text: "2 dormitorios, living-comedor y cocina, con orientación solar óptima y planos aprobados." },
  {
    cat: "viviendas",
    img: imgSpeluzzi1,
    more: [imgSpeluzzi2, imgSpeluzzi3],
    tag: "Conjunto habitacional",
    title: "Complejo de departamentos Speluzzi",
    text: "Módulos independientes de muros de ladrillo, con circulaciones y veredas de hormigón ejecutadas en obra.",
  },
  {
    cat: "viviendas",
    img: imgDepto2,
    more: [imgDepto1, imgDepto3],
    tag: "Departamento",
    title: "Departamento de 36 m² llave en mano",
    text: "Depto de 36 m² llave en mano: ambiente con cocina integrada y dormitorio.",
  },
  {
    cat: "comercial",
    img: imgNaveDespues,
    before: imgNaveAntes,
    more: [imgNaveInt1, imgNaveInt2, imgNaveInt3],
    video: imgNaveVideo,
    tag: "Nave logística",
    title: "Mayorista de Frutas y Verduras",
    text: "Estructura metálica de gran luz, piso H-30 para autoelevadores y sector de cámaras de frío.",
  },
  {
    cat: "comercial",
    img: imgApap1,
    more: [
      imgApap2,
      imgApap3,
      imgApap4,
      imgApap5,
      imgApap6,
      imgApap7,
      imgApap8,
      imgApap9,
      imgApap10,
    ],
    tag: "Institucional",
    title: "Oficinas APAP General Pico",
    text: "Construcción y terminación integral con tabiquería técnica, iluminación y accesos confortables.",
  },
  {
    cat: "comercial",
    img: imgMoov1,
    more: [imgMoov2, imgMoov3],
    video: imgMoovVideo,
    tag: "Adecuación",
    title: "Centro Moov Training",
    text: "Refacción de un taller de frenos a centro de entrenamiento en General Pico, con apeos y refuerzos para abrir el espacio.",
  },
  {
    cat: "comercial",
    img: imgKine1,
    more: [imgKine2, imgKine3, imgKine4, imgKine5],
    tag: "Kinesiología",
    title: "Remodelación de casa para gimnasio terapéutico",
    text: "Refacción y ampliación de una casa: gym terapéutico y consultorios de rehabilitación.",
  },
  { cat: "refacciones", img: imgCocina, tag: "Refacciones", title: "Remodelación de cocina", text: "Demolición, cañerías e instalaciones eléctricas nuevas, revestimientos cerámicos, mesada de mármol y griferías monocomando." },
  { cat: "refacciones", img: imgBanioDespues, before: imgBanioAntes, tag: "Refacciones", title: "Remodelación de baño", text: "Demolición de revoques y contrapiso, instalación nueva de agua y cloacas, cerámicos, sanitarios y griferías." },
  {
    cat: "refacciones",
    img: imgBanio2Despues,
    before: imgBanio2Antes,
    more: [imgBanio2Despues],
    tag: "Refacciones",
    title: "Baño con porcelanato símil madera",
    text: "Revestimiento viejo retirado, artefactos sanitarios nuevos, mueble bajo bacha y porcelanato símil madera en piso y paredes.",
  },
  { cat: "refacciones", img: imgFachadaDespues, before: imgFachadaAntes, tag: "Refacciones", title: "Renovación de fachada en vivienda familiar", text: "Retiro del revoque deteriorado y fisurado, terminación continua con guardapolvos, acceso en piedra y recambio de carpinterías." },
  { cat: "proceso", img: imgLosa, more: [imgLosa2], video: imgLosaVideo, tag: "Losas", title: "Llenado de losa con hormigón elaborado", text: "Armado de encofrados, apuntalamiento y llenado continuo de losa, con verificación de recubrimientos de acero." },
  {
    cat: "proceso",
    img: imgGris,
    tag: "Obra gris",
    title: "Vivienda de dos plantas en obra gris",
    text: "Revoques gruesos, carpinterías colocadas y chimenea ejecutada: la base lista para entrar en las terminaciones.",
  },
  {
    cat: "proceso",
    img: img3d4,
    more: [img3d1, img3d2, img3d3],
    video: img3dVideo,
    tag: "Modelado 3D",
    title: "Anteproyectos y modelado 3D",
    text: "Viviendas y edificios modelados antes de construir: el proyecto se aprueba viendo.",
  },
  {
    cat: "proceso",
    img: imgTexturado,
    tag: "Terminaciones",
    title: "Texturado tipo travertino en fachada",
    text: "Terminación continua en dos texturas sobre los paños de una misma fachada, con encuentros al canto y juntas limpias.",
  },
  { cat: "proceso", img: imgEifs, tag: "EIFS", title: "Aislación exterior y sellado de fisuras", text: "Placas de EPS de alta densidad con base coat y malla sobre muros con grietas reparadas." },
  {
    cat: "proceso",
    img: imgGas1,
    more: [imgGas2],
    video: imgGasVideo,
    tag: "Instalaciones",
    title: "Prueba de instalación de gas",
    text: "Comprobación de la instalación de gas durante la obra, para dejarla normalizada antes de la entrega de llaves.",
  },
];

const PROCESS = [
  { icon: HardHat, title: "Dirección técnica matriculada", text: "Seguimiento directo en obra del Maestro Mayor de Obras Alexis Ruiz, bajo normativas vigentes." },
  { icon: ClipboardCheck, title: "Presupuesto pactado y garantía escrita", text: "Sabés desde el principio cuánto vas a invertir y qué incluye. Sin sorpresas." },
  { icon: CalendarClock, title: "Plazos cumplidos", text: "Planificamos cada etapa —replanteo, platea, estructura, terminaciones— para entregar a tiempo." },
  { icon: ShieldCheck, title: "Planos y trámites", text: "Anteproyecto, planos municipales y de gas aprobados, instalaciones normalizadas." },
];

// Texto del comparativo de la empresa: obra con AR Constructora vs contratar gremios por cuenta del propietario.
const CON_EMPRESA = [
  "Un solo responsable.",
  "Presupuesto claro.",
  "Dirección y coordinación de obra.",
  "Control de calidad.",
  "Cumplimiento de plazos.",
  "Garantía de ejecución.",
];
const POR_TU_CUENTA = [
  "Debés coordinar todos los gremios.",
  "Más tiempo de gestión.",
  "Riesgo de errores entre rubros.",
  "Costos imprevistos.",
  "La responsabilidad queda en el propietario.",
];
const BADGE = "rounded-sm px-2 py-0.5 text-[11px] font-bold uppercase";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let idleTimer: number | undefined;
    let scrolling = false;

    const play = () => {
      video.muted = true;
      video.defaultMuted = true;
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    // El loop del logo se congela mientras se scrollea y vuelve a arrancar desde 0 al detenerse.
    const onScroll = () => {
      scrolling = true;
      window.clearTimeout(idleTimer);
      video.pause();
      idleTimer = window.setTimeout(() => {
        scrolling = false;
        video.currentTime = 0;
        play();
      }, LOGO_SCROLL_IDLE_MS);
    };
    const onCanPlay = () => {
      if (!scrolling && !document.hidden) play();
    };
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else if (!scrolling) play();
    };
    const retry = () => {
      if (!scrolling && video.paused) play();
    };

    play();
    video.addEventListener("canplay", onCanPlay);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("pointerdown", retry);
    return () => {
      window.clearTimeout(idleTimer);
      video.removeEventListener("canplay", onCanPlay);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("pointerdown", retry);
    };
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#inicio" aria-label="AR Constructora, inicio" className="relative block h-12 w-[148px] md:h-16 md:w-[197px]">
          <video ref={videoRef} autoPlay loop muted playsInline preload="auto" poster={logoPoster}
            onPlaying={() => setPlaying(true)} onError={() => setPlaying(false)}
            aria-label="AR Constructora" width={480} height={156}
            className={`absolute inset-0 size-full object-contain ${playing ? "opacity-100" : "opacity-0"}`}>
            <source src={logoVideo} type="video/mp4" />
            <source src={logoWebm} type="video/webm" />
            <img src={logoPoster} alt="AR Constructora" width={480} height={156} />
          </video>
          <img src={logoPoster} alt="AR Constructora" width={480} height={156}
            className={`absolute inset-0 size-full object-contain ${playing ? "opacity-0" : "opacity-100"}`} />
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
      <img
        src={heroOficinaObra}
        alt="Oficina técnica de AR Constructora con planos y maqueta, junto a una nave en obra"
        className="absolute inset-0 size-full object-cover object-right-bottom"
        fetchPriority="high"
        width={1376}
        height={694}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute left-0 top-0 hidden h-full w-40 stripes stripes-fade opacity-30 md:block" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 md:px-8">
        <p className="eyebrow animate-rise">General Pico · La Pampa</p>
        <h1 className="animate-rise mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-7xl">
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
        <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-6">
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

const ABOUT_FACTS = [
  { icon: HardHat, label: "Responsable técnico", value: "M.M.O. Alexis Ruiz" },
  { icon: MapPin, label: "Dónde trabajamos", value: "General Pico y toda La Pampa" },
  {
    icon: ClipboardCheck,
    label: "Seguimiento",
    value: "Dirección propia en obra, sin intermediarios",
  },
  { icon: ShieldCheck, label: "Respaldo", value: "Cálculo y ejecución bajo normativas vigentes" },
];

function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden border-b border-border py-24 md:py-32"
    >
      <div className="absolute -left-20 top-1/3 hidden h-64 w-64 stripes stripes-fade-soft opacity-20 lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-[minmax(0,380px)_1fr]">
        <div className="reveal relative mx-auto w-full max-w-[340px]">
          <div className="absolute -bottom-5 -right-5 -z-0 hidden h-28 w-28 stripes lg:block" />
          <video
            controls
            playsInline
            preload="metadata"
            poster={aboutPoster}
            aria-label="Video de presentación de AR Constructora"
            className="relative aspect-[9/16] w-full rounded-sm border border-border bg-card object-cover shadow-elegant"
          >
            <source src={aboutVideo} type="video/mp4" />
          </video>
          <p className="relative mt-3 text-center text-xs uppercase tracking-wider text-muted-foreground">
            Conocé AR Constructora · 0:36
          </p>
        </div>
        <div>
          <SectionTitle
            eyebrow="Nosotros"
            title="Una obra bien hecha empieza por saber quién te responde"
          />
          <div className="reveal mt-8 space-y-5 text-muted-foreground">
            <p>
              AR Constructora es una empresa de General Pico que se hace cargo de tu proyecto
              <strong className="text-foreground"> en cada etapa del proceso</strong>: la
              planificación, el diseño y la ejecución de la obra hasta la entrega de llaves.
            </p>
            <p>
              Detrás está el{" "}
              <strong className="text-foreground">Maestro Mayor de Obras Alexis Ruiz</strong>, con
              dirección técnica matriculada. Es la misma persona que planifica la obra la que la
              supervisa en el día a día, con cálculo riguroso y cumplimiento de las normativas
              vigentes.
            </p>
            <p>
              Trabajamos con presupuesto pactado antes de empezar y plazos escritos, para que sepas
              desde el primer día cuánto invertís y qué incluye.
            </p>
          </div>
          <dl className="reveal mt-10 grid gap-6 sm:grid-cols-2">
            {ABOUT_FACTS.map((f) => (
              <div key={f.label} className="flex gap-4 border-l-2 border-primary pl-4">
                <f.icon className="size-5 shrink-0 text-primary-glow" strokeWidth={1.5} />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{f.value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <WaButton
              href={waLink(
                "Hola AR Constructora, vi el video de presentación y quiero hablar sobre mi proyecto.",
              )}
            >
              Hablemos de tu proyecto
            </WaButton>
            <a
              href="https://www.instagram.com/ar_constructora/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition hover:border-foreground hover:bg-foreground/5"
            >
              <Instagram className="size-4" /> Ver el día a día de obra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-paper py-24 text-paper-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle eyebrow="Servicios" title="Todo lo que tu obra necesita, con un solo responsable" light />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-paper-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
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

// Los videos solo se reproducen (y solo suenan) mientras la tarjeta está en pantalla.
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e?.isIntersecting ?? false), {
      rootMargin: "200px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function SoundToggle({ title, on, onClick }: { title: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      aria-label={on ? `Silenciar el audio de ${title}` : `Escuchar el audio de ${title}`}
      className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-background/90 py-1 pl-3 pr-1 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-elegant transition hover:bg-background"
    >
      {on ? "Silenciar" : "Escuchar"}
      <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
        {on ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
      </span>
    </button>
  );
}

// Flechas laterales: siempre a la vista, sirven igual con mouse y con el dedo.
function ArrowButton({
  side,
  label,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground shadow-elegant transition hover:bg-background sm:size-9 ${
        side === "left" ? "left-2" : "right-2"
      }`}
    >
      {side === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  );
}

// Par antes/después con divisor arrastrable: es un slide más de la tarjeta, no una vista aparte.
function BeforeAfter({ title, before, after }: { title: string; before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const [active, setActive] = useState(false);

  return (
    <div className="absolute inset-0">
      <img
        src={after}
        alt={`${title}: después`}
        loading="lazy"
        width={1024}
        height={768}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={before}
          alt={`${title}: antes`}
          width={1024}
          height={768}
          className="size-full object-cover"
        />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
        onPointerCancel={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        aria-label={`Comparar el antes y el después de ${title}`}
        className="absolute inset-0 z-10 size-full cursor-ew-resize appearance-none bg-transparent opacity-0 outline-none [touch-action:pan-y]"
      />
      <span
        className={`pointer-events-none absolute left-4 top-14 rounded-sm border border-border bg-background/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground transition-opacity duration-300 ${pos < 14 ? "opacity-0" : "opacity-100"}`}
      >
        Antes
      </span>
      <span
        className={`pointer-events-none absolute right-4 top-14 rounded-sm bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity duration-300 ${pos > 86 ? "opacity-0" : "opacity-100"}`}
      >
        Después
      </span>
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-background/90" />
        <div
          className={`absolute top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-foreground shadow-elegant transition duration-200 ${active ? "scale-110 ring-2 ring-primary" : ""}`}
        >
          <ChevronsLeftRight className="size-5" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

// Un medio dentro del carrusel de una obra.
type Slide =
  | { kind: "cmp"; src: string; before: string; after: string; label: string }
  | { kind: "img"; src: string; label: string }
  | { kind: "video"; src: string; label: string };

// Todos los medios de una obra son slides del mismo carrusel: comparador, fotos y video.
// Con comparador, él abre la tarjeta y el video queda al final; si no hay comparador, abre el video.
function ProjectMedia({
  title,
  tag,
  srcs,
  video,
  compare,
}: {
  title: string;
  tag: string;
  srcs: string[];
  video?: string | undefined;
  compare?: { before: string; after: string } | undefined;
}) {
  const cmpSlides: Slide[] = compare
    ? [
        {
          kind: "cmp",
          src: compare.after,
          before: compare.before,
          after: compare.after,
          label: `el antes y el después de ${title}`,
        },
      ]
    : [];
  const photoLabel = (n: number) =>
    srcs.length > 1 ? `la foto ${n + 1} de ${srcs.length} de ${title}` : `la foto de ${title}`;
  const imgSlides: Slide[] = srcs.map((src, n) => ({
    kind: "img",
    src,
    label: photoLabel(n),
  }));
  const videoSlides: Slide[] = video
    ? [{ kind: "video", src: video, label: `el video de ${title}` }]
    : [];
  const slides: Slide[] = compare
    ? [...cmpSlides, ...imgSlides, ...videoSlides]
    : [...videoSlides, ...imgSlides];

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sound, setSound] = useState(false);
  const [manual, setManual] = useState(false);
  const many = slides.length > 1;
  const onVideo = slides[i]?.kind === "video";
  const poster = compare?.after ?? srcs[0];
  const vid = useRef<HTMLVideoElement>(null);
  const swipe = useRef(0);
  const { ref, inView } = useInView();

  // Desde que alguien navega con las flechas, los puntos o el dedo, la rotación se rinde.
  const pick = (n: number) => {
    setManual(true);
    setI(n);
  };
  const go = (d: number) => pick((i + d + slides.length) % slides.length);

  useEffect(() => {
    if (!many || paused || manual || onVideo || !inView) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % slides.length), 4200);
    return () => window.clearInterval(t);
  }, [many, paused, manual, onVideo, inView, slides.length]);

  useEffect(() => {
    const el = vid.current;
    if (!el) return;
    if (onVideo && inView) void el.play().catch(() => undefined);
    else el.pause();
  }, [onVideo, inView]);

  useEffect(() => {
    if (!inView) setSound(false);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] select-none overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (swipe.current = e.touches[0]?.clientX ?? 0)}
      onTouchEnd={(e) => {
        if (!many || slides[i]?.kind === "cmp") return;
        const dx = (e.changedTouches[0]?.clientX ?? swipe.current) - swipe.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
    >
      {slides.map((s, n) => {
        const shown = n === i;
        if (s.kind === "cmp") {
          return (
            <div
              key={`${s.kind}-${n}`}
              inert={!shown}
              className={`absolute inset-0 transition duration-700 ${shown ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <BeforeAfter title={title} before={s.before} after={s.after} />
            </div>
          );
        }
        if (s.kind === "video") {
          return (
            <video
              ref={vid}
              key={`${s.kind}-${n}`}
              src={s.src}
              poster={poster}
              muted={!sound}
              loop
              playsInline
              preload="metadata"
              aria-label={`Video de ${title}`}
              className={`absolute inset-0 size-full object-cover transition duration-700 ${shown ? "opacity-100" : "opacity-0"}`}
            />
          );
        }
        return (
          <img
            key={`${s.kind}-${n}`}
            src={s.src}
            alt={many ? s.label : title}
            loading="lazy"
            width={1024}
            height={768}
            className={`absolute inset-0 size-full object-contain transition duration-700 ${shown ? "opacity-100" : "opacity-0"}`}
          />
        );
      })}
      {video && onVideo && (
        <SoundToggle title={title} on={sound} onClick={() => setSound((v) => !v)} />
      )}
      {many && (
        <>
          <ArrowButton
            side="left"
            label={`Ver la imagen anterior de ${title}`}
            onClick={() => go(-1)}
          />
          <ArrowButton
            side="right"
            label={`Ver la imagen siguiente de ${title}`}
            onClick={() => go(1)}
          />
        </>
      )}
      <span className="absolute left-4 top-4 rounded-sm bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
        {tag}
      </span>
      {many && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {slides.map((s, n) => (
            <button
              key={`${s.kind}-${n}`}
              type="button"
              onClick={() => pick(n)}
              aria-label={`Ver ${s.label}`}
              aria-current={n === i}
              className={`h-1.5 rounded-full transition-all duration-300 ${n === i ? "w-5 bg-background" : "w-1.5 bg-background/50 hover:bg-background/80"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Works() {
  const [cat, setCat] = useState<Cat>("todas");
  const list = PROJECTS.filter((p) => cat === "todas" || p.cat === cat);
  return (
    <section id="obras" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Obras y casos de éxito"
          title="Proyectos reales en General Pico y la zona"
        />
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist">
          {FILTERS.map((f) => (
            <button key={f.id} role="tab" aria-selected={cat === f.id} onClick={() => setCat(f.id)}
              className={`shrink-0 rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${cat === f.id ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {list.map((p) => (
            <article key={p.title} className="animate-rise group overflow-hidden rounded-sm border border-border bg-card">
              <ProjectMedia
                title={p.title}
                tag={p.tag}
                srcs={p.before ? (p.more ?? []) : photos(p)}
                video={p.video}
                compare={p.before && p.img ? { before: p.before, after: p.img } : undefined}
              />
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-card-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                {p.before && (
                  <p className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    <ChevronsLeftRight className="size-4" /> Arrastrá para comparar
                    {(p.more?.length ?? 0) > 0 || p.video ? (
                      <span className="text-primary-glow">· flechas para ver más</span>
                    ) : null}
                  </p>
                )}
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
          <img src={imgEifsInstalacion} alt="Vivienda en obra con placas de EPS fijadas al muro de ladrillo y base coat con malla aplicado" loading="lazy" width={1200} height={670} className="rounded-sm object-cover" />
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
        <h3 className="reveal mt-20 text-2xl font-black tracking-tight text-foreground md:text-4xl">
          ¿Construir con empresa o contratar albañiles por tu cuenta?
        </h3>
        <p className="reveal mt-3 text-muted-foreground">
          Descubrí qué opción te da más tranquilidad.
        </p>
        <div className="reveal mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-paper-foreground/10 md:grid-cols-2">
          <div className="bg-card p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <CheckCircle2 className="size-7 text-primary-glow" />
              <h4 className="text-lg font-black uppercase tracking-tight">AR Constructora</h4>
              <span className={`${BADGE} bg-primary text-primary-foreground`}>Llave en mano</span>
            </div>
            <ul className="mt-6 space-y-3">
              {CON_EMPRESA.map((t) => (
                <li key={t} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="size-5 shrink-0 text-primary-glow" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <XCircle className="size-7 text-muted-foreground" />
              <h4 className="text-lg font-black uppercase tracking-tight">Contratar albañiles</h4>
              <span className={`${BADGE} border border-border text-muted-foreground`}>
                Por tu cuenta
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {POR_TU_CUENTA.map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <XCircle className="size-5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary p-6 text-primary-foreground md:col-span-2 md:p-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-6">
              <p className="text-lg font-black uppercase tracking-tight md:text-xl">
                Vos disfrutás el proceso
              </p>
              <p className="text-xs font-bold uppercase text-primary-foreground">
                Nosotros nos ocupamos de planificación, coordinación, ejecución y control
              </p>
            </div>
          </div>
        </div>
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
  const [errors, setErrors] = useState<Partial<Record<"nombre" | "telefono" | "tipo" | "mensaje", string>>>({});
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
                  <option>Cielos rasos</option>
                  <option>Dirección de obra</option>
                  <option>Planos y trámites</option>
                  <option>Modelado 3D</option>
                  <option>Pulido de pisos o texturados</option>
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
        <img src={logo} alt="AR Constructora" className="h-10 w-auto" width={1280} height={373} loading="lazy" />
        <div className="flex gap-4">
          <a href="https://www.instagram.com/ar_constructora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground"><Instagram /></a>
          <a href="https://www.facebook.com/2053937308224508" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-foreground"><Facebook /></a>
        </div>
        <div className="text-xs text-muted-foreground md:text-right">
          <p>© {new Date().getFullYear()} AR Constructora · General Pico, La Pampa. Todos los derechos reservados.</p>
          <p className="mt-1">Las imágenes son ilustrativas. Desarrollo web: <a href="https://www.impulsatunegocio.digital/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">impulsatunegocio.digital</a></p>
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
        <About />
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
