import SocialLinks from "../components/SocialLinks";
import board from "../data/board";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    eyebrow: "قائمة الأعضاء",
    heading: "أعضاء مجلس إدارة شركة ناشر",
    footerDesc: "دار نشر سعودية رائدة تسعى لإثراء المحتوى العربي وتقديمه للعالم بأسلوب عصري ومعايير احترافية.",
    participations: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية", contactUs: "تواصل معنا",
    footerAboutHeading: "عن المؤسسة", strategy: "استراتيجية ناشر", board: "مجلس الإدارة",
    newsletter: "النشرة البريدية", newsletterDesc: "كن أول من يعرف عن أحدث إصداراتنا ومشاريعنا.", emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    eyebrow: "Member List",
    heading: "Nasher Board of Directors",
    footerDesc: "A leading Saudi publishing house striving to enrich Arabic content and present it to the world with a modern style and professional standards.",
    participations: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations", contactUs: "Contact Us",
    footerAboutHeading: "About the Institution", strategy: "Nasher's Strategy", board: "Board of Directors",
    newsletter: "Newsletter", newsletterDesc: "Be the first to know about our latest releases and projects.", emailPlaceholder: "Your email address", subscribe: "Subscribe",
  },
};

function MemberCard({ member, lang, featured }) {
  return (
    <div className={`flex flex-col ${featured ? "" : ""}`}>
      <div className={`overflow-hidden rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/10 ${featured ? "aspect-[4/5] max-w-sm" : "aspect-[4/5] max-w-xs mx-auto"}`}>
        <img src={member.photo} alt={lang === "ar" ? member.nameAr : member.nameEn} className="w-full h-full object-cover" />
      </div>
      <div className={`mt-4 text-right ${featured ? "max-w-sm" : "max-w-xs mx-auto"}`}>
        <h3 className={`font-headline-sm text-primary leading-snug ${featured ? "text-headline-sm" : "text-body-lg font-bold"}`}>
          {lang === "ar" ? member.nameAr : member.nameEn}
        </h3>
        <p className="text-on-surface-variant font-label-caps text-label-caps mt-1">
          {lang === "ar" ? member.titleAr : member.titleEn}
        </p>
      </div>
    </div>
  );
}

export default function Board() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];
  const chairman = board.find((m) => m.featured);
  const rest = board.filter((m) => !m.featured);

  return (
    <div className="bg-surface text-on-surface antialiased">

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
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/shop">{s.navStore}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/store">{s.navEditions}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/services">{s.navServices}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/about">{s.navAbout}</a>
      </div>
      </div>
      </nav>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mb-20">
      <div className="md:col-span-6 order-1 text-right md:pt-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">{s.eyebrow}</span>
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-2 leading-tight">{s.heading}</h1>
      </div>
      <div className="md:col-span-6 order-2">
      {chairman && <MemberCard member={chairman} lang={lang} featured />}
      </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-16">
      {rest.map((member) => (
        <MemberCard key={member.slug} member={member} lang={lang} />
      ))}
      </div>
      </main>

      {/* Footer */}
      <footer className="full-width pt-section-padding pb-8 bg-primary dark:bg-surface-container-lowest text-on-primary dark:text-on-surface mt-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-right">
      {/* Brand Info */}
      <div className="md:col-span-1">
      <a className="inline-block bg-white rounded-md p-1.5" href="/">
                      <img src="/nasher-logo.png" alt="ناشر" className="h-9 w-auto" />
                  </a>
      <p className="mt-4 text-on-primary-container dark:text-on-surface-variant text-body-md" dir={lang === "en" ? "ltr" : "rtl"}>{s.footerDesc}</p>
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
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.participations}</h5>
      <ul className="space-y-4">
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="#">{s.localParticipations}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="#">{s.intlParticipations}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/request-service">{s.contactUs}</a></li>
      </ul>
      </div>
      {/* Newsletter */}
      <div>
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.newsletter}</h5>
      <p className="text-body-md mb-4 text-on-primary-container dark:text-on-surface-variant">{s.newsletterDesc}</p>
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
