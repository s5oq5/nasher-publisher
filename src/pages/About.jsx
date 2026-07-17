import { useEffect } from "react";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    heroBadge: "حكاية الهوية",
    heroTitle: "قصتنا: نشر الجوهر السعودي للعالم",
    heroDesc: "نحن جسر ثقافي، نمزج بين عراقة التراث السعودي وآفاق المستقبل الرقمي، لنعيد تعريف مفهوم النشر بلمسة من الفخامة والخصوصية.",
    visionTitle: "رؤيتنا",
    visionDesc: "أن نكون المنارة الأولى للأدب والثقافة السعودية عالمياً، من خلال إنتاج محتوى يتجاوز حدود الزمن ويلامس روح القارئ العالمي بجودة فنية لا تضاهى.",
    missionTitle: "رسالتنا",
    missionDesc: "الارتقاء بالوعي الثقافي عبر توثيق التراث المحلي بأساليب إبداعية حديثة، ودعم المواهب السعودية لتقديم أعمالهم في قوالب نشر فاخرة تليق بعمق أفكارهم.",
    growthEyebrow: "رحلة النمو", growthTitle: "محطات في تاريخ ناشر",
    m1Title: "التأسيس", m1Desc: "انطلاق ناشر كدار متخصصة في الكتب الفنية الفاخرة التي توثق الفنون التشكيلية السعودية.",
    m2Title: "التوسع الإقليمي", m2Desc: "افتتاح أول مكاتبنا الدولية والمشاركة في معرض باريس للكتاب بجناح سعودي فريد.",
    m3Title: "العصر الرقمي", m3Desc: "إطلاق منصة \"ناشر ديجيتال\" لتقديم تجارب قراءة غامرة باستخدام تقنيات الواقع المعزز.",
    impactTitle: "أثرنا الثقافي عابر للقارات",
    stat1Num: "150+", stat1Label: "إصدار ثقافي فاخر",
    stat2Num: "24", stat2Label: "دولة نصل إليها",
    stat3Num: "12M", stat3Label: "قارئ رقمي سنوياً",
    stat4Num: "15", stat4Label: "جائزة تصميم عالمية",
    quote: "\"في ناشر، نحن لا نبيع كتباً، نحن نخلد هويتنا السعودية في ذاكرة العالم عبر صفحات من الجمال والفكر.\"",
    quoteCite: "— الإستراتيجية الثقافية لدار ناشر",
    footerDesc: "نحن نؤمن بأن كل كتاب هو رحلة، وكل رحلة تبدأ بفكرة سعودية أصيلة. انضم إلينا في استكشاف آفاق المعرفة.",
    quickLinks: "روابط سريعة", strategy: "استراتيجية ناشر", board: "مجلس الإدارة",
    participations: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية", contactUs: "تواصل معنا",
    footerNewsletterHeading: "النشرة البريدية", footerNewsletterDesc: "كن أول من يعرف عن أحدث إصداراتنا ومشاريعنا.",
    emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    heroBadge: "A Story of Identity",
    heroTitle: "Our Story: Publishing the Saudi Essence to the World",
    heroDesc: "We are a cultural bridge, blending the depth of Saudi heritage with the horizons of the digital future, redefining publishing with a touch of luxury and distinction.",
    visionTitle: "Our Vision",
    visionDesc: "To be the foremost beacon of Saudi literature and culture globally, producing content that transcends time and touches the spirit of readers worldwide with unmatched artistic quality.",
    missionTitle: "Our Mission",
    missionDesc: "Elevating cultural awareness by documenting local heritage through modern creative approaches, and supporting Saudi talent in presenting their work in luxurious publishing formats worthy of the depth of their ideas.",
    growthEyebrow: "Our Growth Journey", growthTitle: "Milestones in Nasher's History",
    m1Title: "Founding", m1Desc: "Nasher launches as a house specializing in luxury art books documenting Saudi visual arts.",
    m2Title: "Regional Expansion", m2Desc: "Opening our first international offices and participating in the Paris Book Fair with a unique Saudi pavilion.",
    m3Title: "The Digital Era", m3Desc: "Launch of the \"Nasher Digital\" platform, offering immersive reading experiences using augmented reality.",
    impactTitle: "Our Cultural Impact, Across Continents",
    stat1Num: "150+", stat1Label: "Luxury Cultural Editions",
    stat2Num: "24", stat2Label: "Countries We Reach",
    stat3Num: "12M", stat3Label: "Digital Readers Annually",
    stat4Num: "15", stat4Label: "Global Design Awards",
    exploreMap: "Explore Our Distribution Map",
    quote: "\"At Nasher, we don't just sell books — we immortalize our Saudi identity in the world's memory through pages of beauty and thought.\"",
    quoteCite: "— Nasher's Cultural Strategy",
    footerDesc: "We believe every book is a journey, and every journey begins with an authentic Saudi idea. Join us in exploring the horizons of knowledge.",
    quickLinks: "Quick Links", strategy: "Nasher's Strategy", board: "Board of Directors",
    participations: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations", contactUs: "Contact Us",
    footerNewsletterHeading: "Newsletter", footerNewsletterDesc: "Be the first to know about our latest releases and projects.",
    emailPlaceholder: "Your email address", subscribe: "Subscribe",
  },
};

export default function About() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll("section > div").forEach((el) => {
      el.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">

      <nav className="bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-10 py-4">
      <a className="flex items-center order-last" href="/"><img src="/nasher-logo.png" alt="ناشر" className="h-12 w-auto rounded-md" /></a>
      <div className="flex items-center gap-6">
      <button onClick={toggleLang} className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary">{lang === "ar" ? "English" : "العربية"}</button>
      <button className="text-on-surface-variant hover:text-primary transition-all">
      <span className="material-symbols-outlined">search</span>
      </button>
      </div>
      <div className="hidden md:flex flex-row-reverse gap-gutter items-center">
      <a className="font-label-caps text-base font-semibold text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/shop">{s.navStore}</a>
      <a className="font-label-caps text-base font-semibold text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/store">{s.navEditions}</a>
      <a className="font-label-caps text-base font-semibold text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/services">{s.navServices}</a>
      <a className="font-label-caps text-base font-semibold text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1" href="/about">{s.navAbout}</a>
      </div>
      </div>
      </nav>
      <header className="relative w-full h-[85vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
      <img alt="Editorial Saudi Publishing" className="w-full h-full object-cover grayscale-[0.3] brightness-75" src="/featured/about-hero.jpg"/>
      <div className="absolute inset-0 bg-gradient-to-l from-primary/60 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-right">
      <div className="max-w-2xl mr-auto md:mr-0">
      <span className="inline-block font-label-caps text-label-caps tracking-widest text-primary-fixed bg-primary-container px-4 py-2 mb-6 rounded-full">{s.heroBadge}</span>
      <h1 className="font-display-lg text-display-lg text-white mb-8">{s.heroTitle}</h1>
      <p className="font-body-lg text-body-lg text-surface-variant max-w-lg" dir={lang === "en" ? "ltr" : "rtl"}>{s.heroDesc}</p>
      </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
      <span className="material-symbols-outlined text-white text-4xl">expand_more</span>
      </div>
      </header>
      <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
      <div className="order-2 md:order-1">
      <div className="space-y-12">
      <div>
      <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-4">
      <span className="w-12 h-[2px] bg-tertiary-container"></span>
                                      {s.visionTitle}
                                  </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant" dir={lang === "en" ? "ltr" : "rtl"}>{s.visionDesc}</p>
      </div>
      <div>
      <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-4">
      <span className="w-12 h-[2px] bg-tertiary-container"></span>
                                      {s.missionTitle}
                                  </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant" dir={lang === "en" ? "ltr" : "rtl"}>{s.missionDesc}</p>
      </div>
      </div>
      </div>
      <div className="order-1 md:order-2">
      <div className="relative aspect-square">
      <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-xl rotate-3 transition-transform hover:rotate-0 duration-500">
      <img className="w-full h-full object-cover" alt={s.visionTitle} src="/featured/vision-front.jpg"/>
      </div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-2xl -rotate-6 transition-transform hover:rotate-0 duration-500 border-4 border-white">
      <img className="w-full h-full object-cover" alt={s.missionTitle} src="/featured/mission-back.jpg"/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="py-section-padding bg-surface-container-low relative overflow-hidden">

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="text-center mb-20">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-4 inline-block">{s.growthEyebrow}</span>
      <h2 className="font-display-lg text-headline-md md:text-display-lg text-primary">{s.growthTitle}</h2>
      </div>
      <div className="relative max-w-4xl mx-auto">
      <div className="absolute right-1/2 translate-x-1/2 h-full w-[2px] timeline-line"></div>
      <div className="space-y-24">
      <div className="relative flex flex-col md:flex-row items-center justify-between group">
      <div className="md:w-5/12 text-center md:text-left order-2 md:order-1">
      <div className="bg-white p-8 rounded-xl shadow-sm group-hover:shadow-lg transition-all border border-outline-variant/10">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{s.m1Title}</h3>
      <p className="font-body-md text-on-surface-variant">{s.m1Desc}</p>
      </div>
      </div>
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2 my-4 md:my-0 shadow-lg ring-8 ring-surface-container-low">2018</div>
      <div className="md:w-5/12 order-3"></div>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between group">
      <div className="md:w-5/12 order-1"></div>
      <div className="w-12 h-12 bg-tertiary-container text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2 my-4 md:my-0 shadow-lg ring-8 ring-surface-container-low">2020</div>
      <div className="md:w-5/12 text-center md:text-right order-2 md:order-3">
      <div className="bg-white p-8 rounded-xl shadow-sm group-hover:shadow-lg transition-all border border-outline-variant/10">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{s.m2Title}</h3>
      <p className="font-body-md text-on-surface-variant">{s.m2Desc}</p>
      </div>
      </div>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between group">
      <div className="md:w-5/12 text-center md:text-left order-2 md:order-1">
      <div className="bg-white p-8 rounded-xl shadow-sm group-hover:shadow-lg transition-all border border-outline-variant/10">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{s.m3Title}</h3>
      <p className="font-body-md text-on-surface-variant">{s.m3Desc}</p>
      </div>
      </div>
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2 my-4 md:my-0 shadow-lg ring-8 ring-surface-container-low">2022</div>
      <div className="md:w-5/12 order-3"></div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="py-section-padding bg-primary text-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-padding items-center">
      <div>
      <h2 className="font-display-lg text-headline-md md:text-display-lg mb-8">{s.impactTitle}</h2>
      <div className="grid grid-cols-2 gap-gutter mb-12">
      <div>
      <div className="font-display-lg text-display-lg-mobile text-primary-fixed mb-2">{s.stat1Num}</div>
      <div className="font-label-caps text-label-caps opacity-70">{s.stat1Label}</div>
      </div>
      <div>
      <div className="font-display-lg text-display-lg-mobile text-primary-fixed mb-2">{s.stat2Num}</div>
      <div className="font-label-caps text-label-caps opacity-70">{s.stat2Label}</div>
      </div>
      <div>
      <div className="font-display-lg text-display-lg-mobile text-primary-fixed mb-2">{s.stat3Num}</div>
      <div className="font-label-caps text-label-caps opacity-70">{s.stat3Label}</div>
      </div>
      <div>
      <div className="font-display-lg text-display-lg-mobile text-primary-fixed mb-2">{s.stat4Num}</div>
      <div className="font-label-caps text-label-caps opacity-70">{s.stat4Label}</div>
      </div>
      </div>
      </div>
      <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-primary-container shadow-2xl">
      <img className="w-full h-full object-cover" alt={s.impactTitle} src="/featured/global-impact.jpg"/>
      </div>
      </div>
      </div>
      </section>
      <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <blockquote className="max-w-4xl mx-auto text-center">
      <span className="material-symbols-outlined text-6xl text-primary/10 mb-8">format_quote</span>
      <p className="font-display-lg text-headline-md md:text-display-lg text-primary leading-tight mb-12" dir={lang === "en" ? "ltr" : "rtl"}>{s.quote}</p>
      <cite className="not-italic font-label-caps text-label-caps tracking-widest text-on-surface-variant">{s.quoteCite}</cite>
      </blockquote>
      </div>
      </section>
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
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.quickLinks}</h5>
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
