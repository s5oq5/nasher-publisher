import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";
import books from "../data/books";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    heading: "المتجر", subheading: "تصفح جميع إصدارات ناشر في مكان واحد.",
    viewDetails: "عرض التفاصيل",
    footerDesc: "دار نشر سعودية رائدة تسعى لإثراء المحتوى العربي وتقديمه للعالم بأسلوب عصري ومعايير احترافية.",
    footerAboutHeading: "عن المؤسسة", strategy: "استراتيجية ناشر", board: "مجلس الإدارة",
    footerParticipationsHeading: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية", contactUs: "تواصل معنا",
    footerNewsletterHeading: "النشرة البريدية", footerNewsletterDesc: "كن أول من يعرف عن أحدث إصداراتنا ومشاريعنا.",
    emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    heading: "Store", subheading: "Browse all of Nasher's editions in one place.",
    viewDetails: "View Details",
    footerDesc: "A leading Saudi publishing house striving to enrich Arabic content and present it to the world with a modern style and professional standards.",
    footerAboutHeading: "About the Institution", strategy: "Nasher's Strategy", board: "Board of Directors",
    footerParticipationsHeading: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations", contactUs: "Contact Us",
    footerNewsletterHeading: "Newsletter", footerNewsletterDesc: "Be the first to know about our latest releases and projects.",
    emailPlaceholder: "Your email address", subscribe: "Subscribe",
  },
};

export default function Shop() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">

      {/* TopNavBar */}
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-10 py-4">
      <div className="flex items-center gap-4 order-last">
      <a className="flex items-center" href="/"><img src="/nasher-logo.png" alt="ناشر" className="h-12 w-auto rounded-md" /></a>
      </div>
      <div className="flex items-center gap-6">
      <button onClick={toggleLang} className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary">{lang === "ar" ? "English" : "العربية"}</button>
      <button className="text-on-surface-variant hover:text-primary transition-all">
      <span className="material-symbols-outlined">search</span>
      </button>
      </div>
      <div className="hidden md:flex flex-row-reverse items-center gap-8">
      <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-base" href="/shop">{s.navStore}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/store">{s.navEditions}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/services">{s.navServices}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/about">{s.navAbout}</a>
      </div>
      </div>
      </nav>

      {/* Books Grid */}
      <main className="flex-1 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-padding">
      <div className="text-center mb-16">
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">{s.heading}</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant" dir={lang === "en" ? "ltr" : "rtl"}>{s.subheading}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {books.map((book) => (
      <a key={book.slug} href="/book" className="group cursor-pointer block">
      <div className="aspect-[2/3] bg-white paper-shadow rounded-lg overflow-hidden mb-4 transition-transform group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" src={book.cover} alt={lang === "ar" ? book.nameAr : book.nameEn} />
      </div>
      <h5 className="font-body-md text-primary font-bold text-center">{lang === "ar" ? book.nameAr : book.nameEn}</h5>
      </a>
      ))}
      </div>
      </main>

      {/* Footer */}
      <footer className="full-width pt-section-padding pb-8 bg-primary dark:bg-surface-container-lowest text-on-primary dark:text-on-surface">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-right">
      {/* Brand Info */}
      <div className="md:col-span-1">
      <a className="inline-block bg-white rounded-md p-1.5" href="/">
                      <img src="/nasher-logo.png" alt="ناشر" className="h-9 w-auto" />
                  </a>
      <p className="mt-4 text-on-primary-container dark:text-on-surface-variant text-body-md">{s.footerDesc}</p>
      </div>
      {/* Links 1 */}
      <div>
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.footerAboutHeading}</h5>
      <ul className="space-y-4">
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/about">{s.navAbout}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/strategy">{s.strategy}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/board">{s.board}</a></li>
      </ul>
      </div>
      {/* Links 2 */}
      <div>
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.footerParticipationsHeading}</h5>
      <ul className="space-y-4">
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="#">{s.localParticipations}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="#">{s.intlParticipations}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/request-service">{s.contactUs}</a></li>
      </ul>
      </div>
      {/* Newsletter */}
      <div>
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.footerNewsletterHeading}</h5>
      <p className="text-body-md mb-4 text-on-primary-container dark:text-on-surface-variant">{s.footerNewsletterDesc}</p>
      <div className="flex">
      <input className="bg-white/10 border-none rounded-r-lg px-4 py-2 w-full text-on-primary focus:ring-1 ring-primary-fixed" placeholder={s.emailPlaceholder} type="email"/>
      <button className="bg-primary-fixed text-on-primary-fixed px-4 rounded-l-lg hover:bg-white transition-colors">{s.subscribe}</button>
      </div>
      </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-on-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <SocialLinks className="flex gap-6" linkClassName="text-on-primary/60 hover:text-on-primary transition-colors" iconClassName="w-5 h-5" />
      </div>
      </footer>

    </div>
  );
}
