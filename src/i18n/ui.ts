// ============================================================
// Cadenas de interfaz compartidas por todas las páginas.
// El copy de cada tratamiento vive en src/data/treatments.ts
// ============================================================

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'brand.name': 'Perfect Smile Dental',
    'nav.bookNow': 'Agendar cita',
    'nav.switchLabel': 'View in English',
    'nav.switchFlag': '🇺🇸',
    'nav.switchText': 'EN',
    'map.note': '<strong>5 minutos</strong> a pie desde el cruce fronterizo de San Ysidro.',
    'map.title': 'Ubicación de Perfect Smile Dental cerca de la frontera San Ysidro',
    'video.play': 'Reproducir video',
    'video.close': 'Cerrar video',
    'video.empty':
      'Agrega la URL de tu video en el atributo <code>data-video-src</code> de este componente para activar la reproducción.',
    'gallery.prev': 'Anterior',
    'gallery.next': 'Siguiente',
    'gallery.group': 'Grupo',
    'gallery.image': 'Imagen',
    'stories.toolbarLabel': 'Testimonios de pacientes',
    'stories.caption':
      'Fotografías de referencia — reemplazar con casos e historias reales de pacientes.',
    'contact.tollFree': 'Toll Free US/MX',
    'contact.whatsapp': 'WhatsApp',
    'contact.border': 'Cruce Fronterizo',
    'footer.legal':
      '© 2026 Perfect Smile Dental, Tijuana B.C. Aviso: esta información es educativa y no constituye un consejo médico.',
  },
  en: {
    'brand.name': 'Perfect Smile Dental',
    'nav.bookNow': 'Book now',
    'nav.switchLabel': 'Ver en español',
    'nav.switchFlag': '🇲🇽',
    'nav.switchText': 'ES',
    'map.note': '<strong>5 minutes</strong> on foot from the San Ysidro border crossing.',
    'map.title': 'Perfect Smile Dental location near the San Ysidro border',
    'video.play': 'Play video',
    'video.close': 'Close video',
    'video.empty':
      'Add your video URL to the <code>data-video-src</code> attribute on this component to enable playback.',
    'gallery.prev': 'Previous',
    'gallery.next': 'Next',
    'gallery.group': 'Group',
    'gallery.image': 'Image',
    'stories.toolbarLabel': 'Patient testimonials',
    'stories.caption': 'Reference photos — replace with real patient cases and stories.',
    'contact.tollFree': 'Toll Free US/MX',
    'contact.whatsapp': 'WhatsApp',
    'contact.border': 'Border Crossing',
    'footer.legal':
      '© 2026 Perfect Smile Dental, Tijuana B.C. Notice: this information is educational and does not constitute medical advice.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['es']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Datos de contacto compartidos (cámbialos en un solo lugar)
export const contact = {
  tollFree: '+18008889999',
  tollFreeDisplay: '+1 800 888 9999',
  whatsapp: '#',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.8412768184426!2d-117.024724!3d32.530385900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94851147c03b7%3A0x2728e028545d0e91!2sPerfect%20Smile%20Dental%20%7C%20Implant%20Center!5e0!3m2!1ses-419!2smx!4v1784660914930!5m2!1ses-419!2smx',
};
