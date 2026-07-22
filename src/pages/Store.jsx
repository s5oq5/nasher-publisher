import SocialLinks from "../components/SocialLinks";
import MobileMenuButton from "../components/MobileMenuButton";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    collectionsEyebrow: "إصداراتنا", collectionsTitle: "مجموعاتنا المختارة",
    col1Title: "العناوين الثقافية التخصصية", col1Desc: "موارد شاملة للباحثين والطلاب، تغطي مجموعة واسعة من المواضيع في الثقافة التخصصية، في السينما والفنون.",
    col2Title: "كتب الطاولة الفاخرة", col2Desc: "إصدارات فاخرة من كتب الطاولة تجمع بين جمال المحتوى البصري الغني والطرح الثقافي العميق، حيث تستعرض أدلة ثقافية مختارة، وملامح من سباقات الرحن وثقافة البادية، إلى جانب أشهر الأساطير السعودية، بأسلوب أنيق يعكس الأصالة والهوية.",
    col2Feature1: "طبعة غلاف مقوى", col2Feature2: "متوفر باللغة الإنجليزية", col2Cta: "عرض التفاصيل",
    col3Title: "مجموعة إصدارات الكوميكس", col3Desc: "قصص شيقة مصممة لإلهام القراء اليافعين وتعريفهم بالثقافة والقيم السعودية.",
    col3Feature1: "Ages +18", col3Feature2: "صفحات مصورة", col3Cta: "شاهد المزيد",
    footerDesc: "دار نشر ثقافية سعودية رائدة، تهدف إلى إثراء المحتوى المعرفي وتقديم إصدارات متميزة تعكس الهوية السعودية بلمسة عصرية عالمية.",
    aboutCompany: "عن المؤسسة", strategy: "استراتيجية ناشر", board: "مجلس الإدارة",
    participations: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية",
    newsletter: "النشرة البريدية", newsletterDesc: "كن أول من يعرف عن أحدث إصداراتنا ومشاريعنا.", emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
    contactUs: "تواصل معنا",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    collectionsEyebrow: "Our Editions", collectionsTitle: "Our Curated Collections",
    col1Title: "Specialized Cultural Titles", col1Desc: "Comprehensive resources for researchers and students, covering a wide range of subjects in specialized culture, cinema, and the arts.",
    col2Title: "Luxury Coffee Table Books", col2Desc: "Premium coffee table editions that combine the beauty of rich visual content with deep cultural discourse, featuring curated cultural guides, glimpses of desert racing traditions and Bedouin culture, alongside the most famous Saudi legends, in an elegant style that reflects authenticity and identity.",
    col2Feature1: "Hardcover Edition", col2Feature2: "Available in English", col2Cta: "View Details",
    col3Title: "The Comics Collection", col3Desc: "Engaging stories designed to inspire young readers and introduce them to Saudi culture and values.",
    col3Feature1: "Ages +18", col3Feature2: "Illustrated Pages", col3Cta: "See More",
    footerDesc: "A leading Saudi cultural publishing house, dedicated to enriching knowledge content and offering distinctive editions that reflect the Saudi identity with a modern global touch.",
    aboutCompany: "About the Institution", strategy: "Nasher's Strategy", board: "Board of Directors",
    participations: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations",
    newsletter: "Newsletter", newsletterDesc: "Be the first to know about our latest releases and projects.", emailPlaceholder: "Your email address", subscribe: "Subscribe",
    contactUs: "Contact Us",
  },
};

export default function Store() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];

  return (
    <div className="bg-background text-on-background font-body-md relative">

      <div className="fixed inset-0 paper-texture z-0"></div>
      {/* Navigation Header */}
      <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm relative">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-10 py-4">
      <div className="flex items-center gap-6">
      <MobileMenuButton s={s} active="editions" />
      <button onClick={toggleLang} className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary">{lang === "ar" ? "English" : "العربية"}</button>
      <button className="text-on-surface-variant hover:text-primary transition-all">
      <span className="material-symbols-outlined">search</span>
      </button>
      </div>
      <a className="flex items-center order-last" href="/"><img src="/nasher-logo.png" alt="ناشر" className="h-12 w-auto rounded-md" /></a>
      <nav className="hidden md:flex gap-6 items-center">
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-base font-semibold" href="/about">{s.navAbout}</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-base font-semibold" href="/services">{s.navServices}</a>
      <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-base" href="/store">{s.navEditions}</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-base font-semibold" href="/shop">{s.navStore}</a>
      </nav>
      </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding relative z-10">

      {/* Collections Bento Grid */}
      <div className="text-center mb-20">
      <span className="font-label-caps text-body-md font-bold text-tertiary tracking-widest">{s.collectionsEyebrow}</span>
      <h2 className="font-headline-md text-display-lg-mobile text-primary mt-3">{s.collectionsTitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Card 1: Specialized Cultural Titles */}
      <div className="md:row-span-2 bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden flex flex-col">
      <div className="aspect-[4/5] overflow-hidden">
      <img className="w-full h-full object-cover" src="/featured/cultural-titles.jpg" alt={s.col1Title}/>
      </div>
      <div className="p-6">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{s.col1Title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed" dir={lang === "en" ? "ltr" : "rtl"}>{s.col1Desc}</p>
      </div>
      </div>

      {/* Card 2: Luxury Coffee Table Books */}
      <div className="md:col-span-2 bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden grid grid-cols-1 sm:grid-cols-2">
      <div className="h-64 sm:h-full">
      <img className="w-full h-full object-cover" src="/featured/coffee-table-books.jpg" alt={s.col2Title}/>
      </div>
      <div className="p-6 flex flex-col">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{s.col2Title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-4" dir={lang === "en" ? "ltr" : "rtl"}>{s.col2Desc}</p>
      <ul className="space-y-2 mb-6">
      <li className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-primary text-[18px]">menu_book</span>
      {s.col2Feature1}
      </li>
      <li className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-primary text-[18px]">translate</span>
      {s.col2Feature2}
      </li>
      </ul>
      <a href="/shop" className="mt-auto self-start bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">{s.col2Cta}</a>
      </div>
      </div>

      {/* Card 3: Comics Collection */}
      <div className="md:col-span-2 bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden grid grid-cols-1 sm:grid-cols-2">
      <div className="p-6 flex flex-col order-2 sm:order-1">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{s.col3Title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-4" dir={lang === "en" ? "ltr" : "rtl"}>{s.col3Desc}</p>
      <ul className="space-y-2 mb-6">
      <li className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-primary text-[18px]">groups</span>
      {s.col3Feature1}
      </li>
      <li className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-primary text-[18px]">auto_awesome</span>
      {s.col3Feature2}
      </li>
      </ul>
      <a href="/shop" className="mt-auto self-start bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">{s.col3Cta}</a>
      </div>
      <div className="h-64 sm:h-full order-1 sm:order-2">
      <img className="w-full h-full object-cover" src="/featured/comics-collection.jpg" alt={s.col3Title}/>
      </div>
      </div>

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
      <p className="mt-4 text-on-primary-container dark:text-on-surface-variant text-body-md" dir={lang === "en" ? "ltr" : "rtl"}>{s.footerDesc}</p>
      </div>
      {/* Links 1 */}
      <div>
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.aboutCompany}</h5>
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
