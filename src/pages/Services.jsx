import { useEffect } from "react";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    heroTitle1: "خدمات النشر العالمية", heroTitle2: "من السعودية إلى العالم",
    heroDesc: "نقدم حلولاً متكاملة تجمع بين أصالة المحتوى وجودة الإخراج العالمية، لتمكين المبدعين من الوصول إلى آفاق جديدة في عالم النشر الثقافي.",
    requestNow: "اطلب خدمتك الآن",
    s1Badge: "01. المفهوم والمحتوى", s1Title: "جمع وإعداد المحتوى الثقافي",
    s1Desc: "نعمل مع المؤلفين والمؤسسات على تطوير الأفكار الثقافية وتحويلها إلى مسودات ناضجة، مع التركيز على العمق الفكري والجاذبية المعاصرة.",
    s1Step1T: "جلسة العصف الذهني", s1Step1D: "تحديد الهوية الثقافية والجمهور المستهدف.",
    s1Step2T: "البحث والتدقيق المصدري", s1Step2D: "التأكد من دقة المعلومات والسياق التاريخي.",
    s1Step3T: "صياغة المسودة الأولى", s1Step3D: "بناء الهيكل السردي والأسلوب اللغوي.",
    s2Badge: "02. التدقيق والترجمة", s2Title: "التحرير اللغوي والترجمة الإبداعية",
    s2Desc: "جسور تواصل لغوية تنقل فكركم إلى لغات العالم بأمانة إبداعية، مع تدقيق لغوي صارم يضمن أعلى معايير الجودة العالمية.",
    s2Card1T: "الترجمة الثقافية", s2Card1D: "ترجمة تتجاوز الكلمات لتنقل الروح والسياق الثقافي.",
    s2Card2T: "المراجعة الأسلوبية", s2Card2D: "صقل النصوص لضمان تدفق طبيعي وقوة تأثير.",
    s3Badge: "03. التصميم والإنتاج", s3Title: "التصميم الفني والطباعة الفاخرة",
    s3Desc: "نحول الكلمات إلى لوحات فنية. من تصميم الغلاف إلى اختيار نوع الورق والتجليد، نهتم بكل التفاصيل التي تجعل الكتاب قطعة فنية تقتنى.",
    s3Li1: "تصميم هويات بصرية فريدة لكل إصدار", s3Li2: "أحدث تقنيات الطباعة الأوفست والرقمية", s3Li3: "خامات ورقية فاخرة ومعالجات فنية خاصة",
    s3Cta: "استعرض أعمالنا",
    ctaTitle: "هل لديك فكرة تستحق النشر؟", ctaDesc: "فريقنا من الخبراء جاهز لمرافقتك في كل خطوة، من الحرف الأول وحتى رفوف المكتبات العالمية.",
    ctaTalk: "تحدث إلى مستشار ثقافي",
    footerDesc: "دار نشر سعودية رائدة تسعى لإثراء المحتوى العربي وتقديمه للعالم بأسلوب عصري ومعايير احترافية.",
    footerAboutHeading: "عن المؤسسة",
    strategy: "استراتيجية ناشر", board: "مجلس الإدارة", participations: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية", contactUs: "تواصل معنا",
    newsletter: "النشرة البريدية", newsletterDesc: "كن أول من يعرف عن أحدث إصداراتنا ومشاريعنا.", emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    heroTitle1: "Global Publishing Services", heroTitle2: "From Saudi Arabia to the World",
    heroDesc: "We offer integrated solutions that combine authentic content with world-class production quality, empowering creatives to reach new horizons in cultural publishing.",
    requestNow: "Request Your Service Now",
    s1Badge: "01. Concept & Content", s1Title: "Gathering & Preparing Cultural Content",
    s1Desc: "We work with authors and institutions to develop cultural ideas and transform them into mature drafts, focusing on intellectual depth and contemporary appeal.",
    s1Step1T: "Brainstorming Session", s1Step1D: "Defining the cultural identity and target audience.",
    s1Step2T: "Research & Fact-Checking", s1Step2D: "Ensuring accuracy of information and historical context.",
    s1Step3T: "Drafting the First Version", s1Step3D: "Building the narrative structure and linguistic style.",
    s2Badge: "02. Editing & Translation", s2Title: "Language Editing & Creative Translation",
    s2Desc: "Linguistic bridges that carry your ideas to the world's languages with creative fidelity, backed by rigorous proofreading that ensures the highest global quality standards.",
    s2Card1T: "Cultural Translation", s2Card1D: "Translation that goes beyond words to convey spirit and cultural context.",
    s2Card2T: "Stylistic Review", s2Card2D: "Polishing texts to ensure natural flow and impact.",
    s3Badge: "03. Design & Production", s3Title: "Art Direction & Premium Printing",
    s3Desc: "We turn words into works of art. From cover design to paper selection and binding, we care about every detail that makes a book a collectible piece of art.",
    s3Li1: "Unique visual identities for every release", s3Li2: "The latest offset and digital printing technologies", s3Li3: "Premium paper stock and special artistic finishes",
    s3Cta: "View Our Work",
    ctaTitle: "Have an Idea Worth Publishing?", ctaDesc: "Our team of experts is ready to accompany you every step of the way, from the very first word to the shelves of the world's libraries.",
    ctaTalk: "Talk to a Cultural Advisor",
    footerDesc: "A leading Saudi publishing house striving to enrich Arabic content and present it to the world with a modern style and professional standards.",
    footerAboutHeading: "About the Institution",
    strategy: "Nasher's Strategy", board: "Board of Directors", participations: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations", contactUs: "Contact Us",
    newsletter: "Newsletter", newsletterDesc: "Be the first to know about our latest releases and projects.", emailPlaceholder: "Your email address", subscribe: "Subscribe",
  },
};

export default function Services() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
    }, { threshold: 0.15 });
    document.querySelectorAll(".fade-in-section").forEach((el) => io.observe(el));
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 20) nav.classList.add("shadow-md");
      else nav.classList.remove("shadow-md");
    };
    window.addEventListener("scroll", onScroll);
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

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
      <button className="md:hidden">
      <span className="material-symbols-outlined">menu</span>
      </button>
      </div>
      <div className="hidden md:flex flex-row-reverse items-center gap-8">
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/shop">{s.navStore}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/store">{s.navEditions}</a>
      <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-base" href="/services">{s.navServices}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/about">{s.navAbout}</a>
      </div>
      </div>
      </nav>
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-24 pb-20 px-margin-mobile md:px-margin-desktop text-center">
      <div className="max-w-4xl mx-auto z-10 relative">
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
                      {s.heroTitle1} <br/> <span className="text-on-primary-container">{s.heroTitle2}</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto" dir={lang === "en" ? "ltr" : "rtl"}>
                      {s.heroDesc}
                  </p>
      <a href="/request-service" className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-container transition-all active:scale-95 shadow-md">
                      {s.requestNow}
                  </a>
      </div>
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">

      </div>
      </header>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-padding">
      {/* Services Flow */}
      <div className="space-y-32">
      {/* Service 1: Content & Concept */}
      <section className="asymmetric-grid gap-gutter items-center fade-in-section">
      <div className="col-span-12 md:col-span-5 order-2 md:order-1">
      <span className="text-tertiary-fixed-dim bg-tertiary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6 inline-block">{s.s1Badge}</span>
      <h2 className="font-headline-md text-headline-md text-primary mb-4">{s.s1Title}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8" dir={lang === "en" ? "ltr" : "rtl"}>
                              {s.s1Desc}
                          </p>
      <div className="grid grid-cols-1 gap-4 mb-10">
      <div className="flex items-start gap-4">
      <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">1</span>
      <div>
      <h4 className="font-bold text-primary">{s.s1Step1T}</h4>
      <p className="text-on-surface-variant text-sm">{s.s1Step1D}</p>
      </div>
      </div>
      <div className="flex items-start gap-4">
      <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">2</span>
      <div>
      <h4 className="font-bold text-primary">{s.s1Step2T}</h4>
      <p className="text-on-surface-variant text-sm">{s.s1Step2D}</p>
      </div>
      </div>
      <div className="flex items-start gap-4">
      <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">3</span>
      <div>
      <h4 className="font-bold text-primary">{s.s1Step3T}</h4>
      <p className="text-on-surface-variant text-sm">{s.s1Step3D}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="col-span-12 md:col-span-7 order-1 md:order-2">
      <div className="rounded-xl overflow-hidden shadow-xl aspect-[16/10] bg-surface-container">
      <img className="w-full h-full object-cover" alt={s.s1Title} src="/services/concept-content.jpg"/>
      </div>
      </div>
      </section>
      {/* Service 2: Translation & Editing */}
      <section className="asymmetric-grid gap-gutter items-center fade-in-section">
      <div className="col-span-12 md:col-span-7">
      <div className="rounded-xl overflow-hidden shadow-xl aspect-[16/10] bg-surface-container relative">
      <img className="w-full h-full object-cover" alt={s.s2Title} src="/services/editing-translation.jpg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
      </div>
      </div>
      <div className="col-span-12 md:col-span-5 px-4">
      <span className="text-tertiary-fixed-dim bg-tertiary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6 inline-block">{s.s2Badge}</span>
      <h2 className="font-headline-md text-headline-md text-primary mb-4">{s.s2Title}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8" dir={lang === "en" ? "ltr" : "rtl"}>
                              {s.s2Desc}
                          </p>
      <div className="space-y-6">
      <div className="p-4 bg-white rounded-lg border-r-4 border-primary shadow-sm">
      <h4 className="font-bold text-primary mb-1">{s.s2Card1T}</h4>
      <p className="text-sm text-on-surface-variant">{s.s2Card1D}</p>
      </div>
      <div className="p-4 bg-white rounded-lg border-r-4 border-outline shadow-sm">
      <h4 className="font-bold text-primary mb-1">{s.s2Card2T}</h4>
      <p className="text-sm text-on-surface-variant">{s.s2Card2D}</p>
      </div>
      </div>
      </div>
      </section>
      {/* Service 3: Design & Print */}
      <section className="asymmetric-grid gap-gutter items-center fade-in-section">
      <div className="col-span-12 md:col-span-5 order-2 md:order-1">
      <span className="text-tertiary-fixed-dim bg-tertiary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6 inline-block">{s.s3Badge}</span>
      <h2 className="font-headline-md text-headline-md text-primary mb-4">{s.s3Title}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8" dir={lang === "en" ? "ltr" : "rtl"}>
                              {s.s3Desc}
                          </p>
      <ul className="space-y-3 mb-8">
      <li className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                  {s.s3Li1}
                              </li>
      <li className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-outlined text-primary">print</span>
                                  {s.s3Li2}
                              </li>
      <li className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-outlined text-primary">texture</span>
                                  {s.s3Li3}
                              </li>
      </ul>
      <a href="/store" className="inline-block bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all">{s.s3Cta}</a>
      </div>
      <div className="col-span-12 md:col-span-7 order-1 md:order-2 grid grid-cols-2 gap-4">
      <div className="rounded-xl overflow-hidden shadow-lg h-80">
      <img className="w-full h-full object-cover" alt={s.s3Title} src="/services/design-production-1.jpg"/>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg h-80 mt-8">
      <img className="w-full h-full object-cover" alt={s.s3Title} src="/services/design-production-2.jpg"/>
      </div>
      </div>
      </section>
      </div>
      </main>
      {/* Final CTA */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop text-center">
      <div className="max-w-2xl mx-auto bg-surface-container-highest p-12 md:p-20 rounded-[2rem] shadow-sm relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl"></div>
      <h2 className="font-headline-md text-headline-md text-primary mb-6">{s.ctaTitle}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-10" dir={lang === "en" ? "ltr" : "rtl"}>{s.ctaDesc}</p>
      <div className="flex justify-center">
      <a href="/request-service" className="inline-block bg-primary text-on-primary px-10 py-4 rounded-lg font-bold hover:opacity-90 transition-all">{s.ctaTalk}</a>
      </div>
      </div>
      </section>
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
