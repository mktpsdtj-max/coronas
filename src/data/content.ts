// ============================================================
// TODO EL COPY DE LA LANDING DE CORONAS DENTALES, EN LOS 2 IDIOMAS.
// Para cambiar cualquier texto, edítalo aquí — no en los componentes.
// ============================================================

import type { Lang } from '../i18n/ui';
import type { HeroGalleryData } from '../components/heroes/HeroGallery.astro';
import type { SystemData } from '../components/SystemSection.astro';
import type { WhyData } from '../components/WhyTijuana.astro';
import type { BenefitsData } from '../components/BenefitsGrid.astro';
import type { ProcedureData } from '../components/ProcedureList.astro';
import type { CtaData } from '../components/CtaFinal.astro';

export interface NavLink { href: string; label: string; }

export interface PageContent {
  seo: { title: string; description: string };
  nav: NavLink[];
  hero: HeroGalleryData;
  system: SystemData;
  why: WhyData;
  benefits: BenefitsData;
  procedure: ProcedureData;
  cta: CtaData;
}

// ---------- Imágenes (reemplaza estas URLs por las definitivas) ----------
const IMG = {
  clinic:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDkSlZy19tCvBPFuU1gaXbNBUnaUwKr4YlKqcQRgGgi_k1wdOuK2B7FPOrrpzNWXAeZ9ZbVmT0fIoDdSFbA3pqlFHv8jak00_MEKJHmsNA1eIpdRlYcZpUktqcBr-pUKAEkHQiDmz-mmD4j8ed8tOmThIHRqnbVE6IW8wIzd2pJp4npL7X1thjqe25AgrcVTLz4CA91f6N1cF3OtZeKPTpDkddLeSV9sc-iYxB7NHa732k52BO6Nbs',
  patient:
    'https://lh3.googleusercontent.com/aida/AP1WRLvdrWkVu1-4lWV98BrAXN_Uj3FjMlozPGqHWtyWKOBRg1mRQuE0h2VPT_imiJ-Lvtxma7EZtxJIwKV2aOkY72HyqlwEMedu71E0HDJguXMduDOgyQgWvKzmOR6wYtcNnvdFk_EW4JNxuFvMBW0V0OTlWHg19oJS7VRIpnICu6TPs7tohHGAsXxc8EVrEGpLNo7cIXme_pI9KCKgDwTkv387w5zJ8mKMHQNOREzBm_5tIuwuw8_gebWuTA',
};

// ============================================================
const es: PageContent = {
  seo: {
    title: 'Coronas Dentales en Tijuana | Perfect Smile Dental',
    description:
      'Salva y protege tu diente con coronas premium de circonia, porcelana y E-Max en Tijuana. Ahorra 60-70% y a minutos del cruce de San Ysidro.',
  },
  nav: [
    { href: '#diagnostico', label: 'Quién lo Necesita' },
    { href: '#por-que-tijuana', label: 'Por qué Tijuana' },
    { href: '#materiales', label: 'Materiales' },
    { href: '#contacto', label: 'Contacto' },
  ],
  hero: {
    variant: 'gallery',
    bg: IMG.clinic,
    badge: 'Protección y estética dental',
    titleBefore: 'Salva y Protege tu Diente,',
    titleAccent: 'con Coronas Premium',
    subtitle:
      'Devuelve la fuerza y la belleza natural a tu sonrisa. Coronas de circonia y porcelana de grado mundial diseñadas a la medida, a una fracción del costo y a solo minutos de la frontera.',
    primaryCta: 'Agendar mi Valoración Gratuita',
    playCta: 'Ver Materiales y Precios',
    playHref: '#materiales',
    gallery: [
      { src: IMG.clinic, alt: 'Especialista colocando una corona dental de circonia' },
      { src: IMG.patient, alt: 'Paciente sonriendo tras recibir su nueva corona' },
      { src: IMG.clinic, alt: 'Laboratorio dental con tecnología CAD/CAM' },
    ],
  },
  system: {
    id: 'diagnostico',
    eyebrow: 'Claridad y diagnóstico',
    heading: 'La Solución Definitiva para Dientes Dañados',
    body: 'A diferencia de otros tratamientos, la corona está diseñada para trabajar sobre un solo diente a la vez. Es el tratamiento ideal si el diente aún existe pero está débil tras una endodoncia o con una caries demasiado grande para un empaste normal; si sufriste una fractura o desgaste severo que puso en riesgo tu diente; o si ya tienes un implante y necesitas la pieza estética final para masticar con normalidad.',
    videoRatio: '4 / 3.6',
    video: {
      src: '',
      type: 'mp4',
      poster: IMG.clinic,
      alt: 'Video explicativo de las coronas dentales',
      eyebrow: 'Video explicativo',
      title: '¿Necesitas una corona dental?',
    },
  },
  why: {
    id: 'por-que-tijuana',
    eyebrow: 'Turismo médico',
    heading: 'Odontología de Lujo al Alcance de tu Presupuesto',
    cards: [
      {
        icon: 'savings',
        tone: 'savings',
        title: 'Ahorros del 60% al 70%',
        text: 'Obtén coronas de circonia de alta gama por <span class="feature-card__highlight">cientos (no miles)</span> de dólares menos que en tu ciudad local.',
      },
      {
        icon: 'memory',
        title: 'Protege tu Inversión Dental',
        text: 'Salvamos dientes en riesgo de extracción con materiales premium (Zirconia, Porcelana, E-Max) y estética de primer nivel.',
      },
      {
        icon: 'groups',
        title: 'Atención Concierge',
        text: 'Nuestro personal bilingüe te asiste en todo momento, haciendo que tu visita a México sea segura, rápida y sin estrés.',
      },
      {
        icon: 'location_on',
        title: 'Ubicación Inmejorable',
        text: 'Clínica de vanguardia ubicada a solo 5 minutos del cruce fronterizo de San Ysidro.',
      },
    ],
  },
  benefits: {
    id: 'materiales',
    eyebrow: 'Construcción de autoridad',
    heading: 'Tecnología y Materiales Premium para tu Nueva Sonrisa',
    items: [
      {
        icon: 'shield',
        title: 'Coronas de Circonia (Zirconia)',
        text: 'El estándar de oro en resistencia. Prácticamente indestructibles, ideales para molares y pacientes que aprietan los dientes (bruxismo).',
      },
      {
        icon: 'auto_awesome',
        title: 'Coronas E-Max / Porcelana',
        text: 'Translúcidas y con un brillo idéntico al esmalte natural. La opción preferida para los dientes frontales donde la estética es la prioridad número uno.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Ajuste Perfecto CAD/CAM',
        text: 'Utilizamos escaneo digital 3D (sin las molestas pastas tradicionales) para diseñar tu corona por computadora, asegurando un sellado hermético y cómodo.',
      },
    ],
  },
  procedure: {
    id: 'proceso',
    eyebrow: 'El proceso',
    heading: 'Tu Experiencia en la Clínica',
    image: { src: IMG.clinic, alt: 'Paciente sonriendo con confianza tras recibir su nueva corona' },
    cta: 'Agenda tu Consulta Hoy',
    items: [
      {
        icon: 'straighten',
        text: 'Preparamos y remodelamos suavemente tu diente existente (o exponemos el implante) para recibir la corona.',
      },
      {
        icon: 'tune',
        text: 'Tomamos una <strong>impresión digital</strong> rápida y cómoda, sin las molestas pastas tradicionales.',
      },
      {
        icon: 'radiology',
        text: 'Te colocamos una <strong>corona temporal</strong> mientras nuestro laboratorio fabrica tu pieza definitiva.',
      },
      {
        icon: 'vaccines',
        text: 'Tallamos tu nueva corona a partir de un bloque sólido de <strong>cerámica o circonia</strong>, igualando el color exacto de tus dientes.',
      },
      {
        icon: 'luggage',
        text: 'En tu siguiente visita, cementamos tu corona definitiva con un <strong>adhesivo de máxima resistencia</strong>.',
      },
    ],
  },
  cta: {
    title: 'No esperes a que ese diente se rompa por completo.',
    subtitle:
      'Proteger y reconstruir tu sonrisa es más accesible de lo que imaginas. Da el primer paso hacia una salud dental de primer nivel en Tijuana.',
    primary: 'Solicitar Presupuesto de Corona Dental',
    secondary: 'Escríbenos por WhatsApp',
  },
};

// ============================================================
const en: PageContent = {
  seo: {
    title: 'Dental Crowns in Tijuana | Perfect Smile Dental',
    description:
      'Save and protect your tooth with premium zirconia, porcelain and E-Max crowns in Tijuana. Save 60-70%, minutes from the San Ysidro crossing.',
  },
  nav: [
    { href: '#diagnostico', label: 'Who Needs One' },
    { href: '#por-que-tijuana', label: 'Why Tijuana' },
    { href: '#materiales', label: 'Materials' },
    { href: '#contacto', label: 'Contact' },
  ],
  hero: {
    variant: 'gallery',
    bg: IMG.clinic,
    badge: 'Protection and dental aesthetics',
    titleBefore: 'Save and Protect Your Tooth,',
    titleAccent: 'with Premium Crowns',
    subtitle:
      'Restore strength and natural beauty to your smile. World-grade zirconia and porcelain crowns custom-designed for you, at a fraction of the cost and just minutes from the border.',
    primaryCta: 'Book My Free Evaluation',
    playCta: 'View Materials and Pricing',
    playHref: '#materiales',
    gallery: [
      { src: IMG.clinic, alt: 'Specialist placing a zirconia dental crown' },
      { src: IMG.patient, alt: 'Patient smiling after receiving their new crown' },
      { src: IMG.clinic, alt: 'Dental lab with CAD/CAM technology' },
    ],
  },
  system: {
    id: 'diagnostico',
    eyebrow: 'Clarity and diagnosis',
    heading: 'The Definitive Solution for Damaged Teeth',
    body: "Unlike other treatments, a crown is designed to work on a single tooth at a time. It's the ideal treatment if your tooth still exists but is weak after a root canal or has decay too large for a regular filling; if you suffered a fracture or severe wear that put your tooth at risk; or if you already have an implant and need the final aesthetic piece to chew normally again.",
    videoRatio: '4 / 3.6',
    video: {
      src: '',
      type: 'mp4',
      poster: IMG.clinic,
      alt: 'Explainer video for dental crowns',
      eyebrow: 'Explainer video',
      title: 'Do you need a dental crown?',
    },
  },
  why: {
    id: 'por-que-tijuana',
    eyebrow: 'Medical tourism',
    heading: 'Luxury Dentistry Within Your Budget',
    cards: [
      {
        icon: 'savings',
        tone: 'savings',
        title: 'Savings of 60% to 70%',
        text: 'Get high-end zirconia crowns for <span class="feature-card__highlight">hundreds (not thousands)</span> of dollars less than back home.',
      },
      {
        icon: 'memory',
        title: 'Protect Your Dental Investment',
        text: 'We save teeth at risk of extraction with premium materials (zirconia, porcelain, E-Max) and top-tier aesthetics.',
      },
      {
        icon: 'groups',
        title: 'Concierge Care',
        text: 'Our bilingual staff assists you every step of the way, making your visit to Mexico safe, fast, and stress-free.',
      },
      {
        icon: 'location_on',
        title: 'Unbeatable Location',
        text: 'A state-of-the-art clinic located just 5 minutes from the San Ysidro border crossing.',
      },
    ],
  },
  benefits: {
    id: 'materiales',
    eyebrow: 'Building authority',
    heading: 'Premium Technology and Materials for Your New Smile',
    items: [
      {
        icon: 'shield',
        title: 'Zirconia Crowns',
        text: 'The gold standard in strength. Virtually indestructible, ideal for molars and patients who grind their teeth (bruxism).',
      },
      {
        icon: 'auto_awesome',
        title: 'E-Max / Porcelain Crowns',
        text: 'Translucent with a shine identical to natural enamel. The preferred choice for front teeth, where aesthetics are the top priority.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Perfect CAD/CAM Fit',
        text: 'We use 3D digital scanning (no messy traditional putty) to design your crown by computer, ensuring an airtight, comfortable seal.',
      },
    ],
  },
  procedure: {
    id: 'proceso',
    eyebrow: 'The process',
    heading: 'Your Experience at the Clinic',
    image: { src: IMG.clinic, alt: 'Patient smiling with confidence after receiving their new crown' },
    cta: 'Book Your Consultation Today',
    items: [
      {
        icon: 'straighten',
        text: 'We gently clean and reshape your existing tooth (or expose the implant) to receive the crown.',
      },
      {
        icon: 'tune',
        text: "We take a <strong>digital impression</strong> that's quick and comfortable, with no messy traditional putty.",
      },
      {
        icon: 'radiology',
        text: 'We fit you with a <strong>temporary crown</strong> while our lab crafts your final piece.',
      },
      {
        icon: 'vaccines',
        text: 'We carve your new crown from a solid block of <strong>ceramic or zirconia</strong>, matching the exact color of your teeth.',
      },
      {
        icon: 'luggage',
        text: 'On your next visit, we cement your final crown with a <strong>maximum-strength adhesive</strong>.',
      },
    ],
  },
  cta: {
    title: "Don't Wait Until That Tooth Breaks Completely",
    subtitle:
      'Protecting and rebuilding your smile is more affordable than you think. Take the first step toward top-tier dental health in Tijuana.',
    primary: 'Request a Dental Crown Quote',
    secondary: 'Message Us on WhatsApp',
  },
};

const content: Record<Lang, PageContent> = { es, en };

export function getContent(lang: Lang): PageContent {
  return content[lang];
}

export default content;
