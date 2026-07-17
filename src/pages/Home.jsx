import { useEffect } from "react";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

const partnerLogos = [
  { name: "وزارة الثقافة", src: "/partners/ministry-of-culture.png" },
  { name: "هيئة الأدب والنشر والترجمة", src: "/partners/literature-publishing-translation.png" },
  { name: "الهيئة السعودية للبيانات والذكاء الاصطناعي", src: "/partners/saudi-data-ai-authority.jpg" },
  { name: "جمعية السينما", src: "/partners/cinema-association.jpg" },
  { name: "معهد ورث للفنون التقليدية", src: "/partners/warsh-institute.png" },
  { name: "هيئة المتاحف", src: "/partners/museums-commission.png" },
  { name: "مؤتمر النقد السينمائي", src: "/partners/film-criticism-conference.jpeg" },
  { name: "هيئة المسرح والفنون الأدائية", src: "/partners/theater-performing-arts.jpg" },
];

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    heroBadge: "الريادة الثقافية",
    heroPrefix: "حيث تصل", heroHighlight: "الثقافة السعودية", heroSuffix: "إلى آفاق العالم",
    heroDesc: "ناشر هي بوابتكم العالمية للتميز في النشر الثقافي. نحن نجمع بين الأصالة المحلية والمعايير العالمية لنضع قصصنا وإبداعاتنا في قلب المشهد الثقافي الدولي.",
    exploreBooks: "استكشف الكتب", requestPublishing: "اطلب خدمة نشر",
    latestReleases: "أحدث الإصدارات", latestReleasesDesc: "مجموعة مختارة بعناية من عيون الأدب والثقافة", viewAll: "عرض الكل",
    book1Tag: "تاريخ وأساطير", book1Title: "زرقاء اليمامة", book1Desc: "إعادة قراءة معاصرة لواحدة من أشهر الشخصيات في التراث العربي.",
    book2Tag: "فن معاصر", book2Title: "الفن في المملكة", book2Desc: "توثيق بصري شامل للحراك الفني السعودي وتطوره عبر العقود.",
    book3Tag: "أدب خيالي", book3Title: "حكايات النوم", book3Desc: "رحلة فلسفية في أعماق الأحلام والخيال الإنساني المبدع.",
    aboutTitle: "ناشر.. جسرٌ يعبر بالقيمة الثقافية من الفكرة إلى العالم",
    aboutDesc: "تأسست ناشر لتكون المنصة الرائدة في تقديم المحتوى الثقافي السعودي بنظرة عالمية. نحن نؤمن أن الكتاب ليس مجرد ورق، بل هو وعاء للحضارة ووسيلة للتواصل الإنساني الراقي.",
    aboutQuote: "\"التزامنا هو الجودة المطلقة، وسعينا هو وضع اسم المبدع السعودي في رفوف المكتبات العالمية.\"",
    readMoreStrategy: "اقرأ المزيد عن استراتيجيتنا",
    servicesEyebrow: "منظومة متكاملة", servicesTitle: "خدماتنا في عالم النشر",
    service1Title: "إعداد المحتوى", service1Desc: "جمع وتنسيق المادة الأدبية بما يتوافق مع الرؤية العامة للعمل الفني.",
    service2Title: "التحرير والتصحيح", service2Desc: "مراجعة لغوية وفنية دقيقة لضمان سلامة النص وقوة التعبير الأدبي.",
    service3Title: "الترجمة الثقافية", service3Desc: "نقل المعنى والروح الثقافية للنص إلى لغات العالم المختلفة بمهارة عالية.",
    service4Title: "التصميم الفني", service4Desc: "ابتكار هوية بصرية وتصاميم أغلفة تعكس عمق وجوهر الكتاب.",
    service5Title: "الطباعة الفاخرة", service5Desc: "استخدام أرقى أنواع الورق وتقنيات الطباعة لضمان تجربة حسية فريدة.",
    service6Title: "التوزيع العالمي", service6Desc: "شبكة توزيع واسعة تصل بكتابك إلى كبرى المكتبات ومنصات البيع الدولية.",
    timelineTitle: "رحلة الإصدار: من الفكرة إلى الرفوف العالمية",
    step1Title: "تقديم المخطوطة", step1Desc: "دراسة وتقييم العمل من قبل لجنتنا الثقافية.",
    step2Title: "التطوير الإبداعي", step2Desc: "عمليات التحرير، الترجمة، والتصميم الفني.",
    step3Title: "التصنيع والجودة", step3Desc: "الطباعة الفاخرة بأعلى معايير الجودة العالمية.",
    step4Title: "الإطلاق العالمي", step4Desc: "المشاركة في المعارض الدولية والتوزيع الشامل.",
    projectsTitle: "مشاريع ثقافية رائدة", projectsDesc: "نفخر بإدارة وتمثيل أكبر المبادرات الثقافية التي تبرز الهوية السعودية في المحافل الدولية.",
    project1Title: "معارض الكتاب الدولية", project1Desc: "تمثيل المملكة في فرانكفورت، لندن، والرياض.",
    project2Title: "سلسلة الكوميكس السعودية", project2Desc: "دعم المواهب الشابة في فن القصص المصورة والمانجا.",
    partnersTitle: "شركاء النجاح",
    ctaTitle: "هل أنت مستعد لنشر إبداعك؟", ctaDesc: "انضم إلى قائمة مؤلفي ناشر وساهم في إثراء المحتوى الثقافي العربي والعالمي.",
    contactAdvisor: "تواصل مع مستشار نشر",
    footerDesc: "منصة رائدة في صناعة النشر الثقافي السعودي، تجمع بين الأصالة والابتكار لإيصال صوتنا للعالم.",
    footerAboutHeading: "عن المؤسسة", footerStrategy: "استراتيجية ناشر", footerBoard: "مجلس الإدارة",
    footerParticipationsHeading: "المشاركات", footerLocalParticipations: "المشاركات المحلية", footerIntlParticipations: "المشاركات الدولية", footerContactUs: "تواصل معنا",
    footerNewsletterHeading: "النشرة البريدية", footerNewsletterDesc: "كن أول من يعرف عن أحدث إصداراتنا ومشاريعنا.",
    emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    heroBadge: "Cultural Leadership",
    heroPrefix: "Where", heroHighlight: "Saudi Culture", heroSuffix: "Reaches the World",
    heroDesc: "Nasher is your global gateway to excellence in cultural publishing. We combine local authenticity with international standards to place our stories and creations at the heart of the international cultural scene.",
    exploreBooks: "Explore Books", requestPublishing: "Request Publishing Service",
    latestReleases: "Latest Releases", latestReleasesDesc: "A carefully curated selection from the finest literature and culture", viewAll: "View All",
    book1Tag: "History & Legends", book1Title: "Zarqa Al-Yamama", book1Desc: "A contemporary retelling of one of the most iconic figures in Arab heritage.",
    book2Tag: "Contemporary Art", book2Title: "Art in the Kingdom", book2Desc: "A comprehensive visual documentation of the Saudi art scene and its evolution over the decades.",
    book3Tag: "Fiction", book3Title: "Tales of Sleep", book3Desc: "A philosophical journey into the depths of dreams and creative human imagination.",
    aboutTitle: "Nasher.. A Bridge Carrying Cultural Value From Idea to the World",
    aboutDesc: "Nasher was founded to be the leading platform for presenting Saudi cultural content with a global outlook. We believe a book is not just paper — it is a vessel of civilization and a means of refined human connection.",
    aboutQuote: "\"Our commitment is absolute quality, and our pursuit is placing the Saudi creator's name on the shelves of the world's libraries.\"",
    readMoreStrategy: "Read More About Our Strategy",
    servicesEyebrow: "An Integrated Ecosystem", servicesTitle: "Our Services in Publishing",
    service1Title: "Content Preparation", service1Desc: "Gathering and structuring literary material in line with the work's overall vision.",
    service2Title: "Editing & Proofreading", service2Desc: "Precise linguistic and technical review to ensure textual integrity and strong literary expression.",
    service3Title: "Cultural Translation", service3Desc: "Conveying the meaning and cultural spirit of the text into different world languages with high skill.",
    service4Title: "Art Direction", service4Desc: "Creating a visual identity and cover designs that reflect the depth and essence of the book.",
    service5Title: "Premium Printing", service5Desc: "Using the finest paper types and printing techniques to ensure a unique sensory experience.",
    service6Title: "Global Distribution", service6Desc: "A wide distribution network that brings your book to major libraries and international sales platforms.",
    timelineTitle: "The Publishing Journey: From Idea to Global Shelves",
    step1Title: "Manuscript Submission", step1Desc: "The work is studied and evaluated by our cultural committee.",
    step2Title: "Creative Development", step2Desc: "Editing, translation, and art direction processes.",
    step3Title: "Production & Quality", step3Desc: "Premium printing to the highest global quality standards.",
    step4Title: "Global Launch", step4Desc: "Participation in international fairs and full-scale distribution.",
    projectsTitle: "Leading Cultural Projects", projectsDesc: "We are proud to manage and represent the largest cultural initiatives that showcase Saudi identity on the international stage.",
    project1Title: "International Book Fairs", project1Desc: "Representing the Kingdom in Frankfurt, London, and Riyadh.",
    project2Title: "The Saudi Comics Series", project2Desc: "Supporting young talent in comics and manga art.",
    partnersTitle: "Partners in Success",
    ctaTitle: "Ready to Publish Your Creation?", ctaDesc: "Join Nasher's roster of authors and help enrich Arab and global cultural content.",
    contactAdvisor: "Talk to a Publishing Advisor",
    footerDesc: "A leading platform in Saudi cultural publishing, blending authenticity and innovation to carry our voice to the world.",
    footerAboutHeading: "About the Company", footerStrategy: "Nasher's Strategy", footerBoard: "Board of Directors",
    footerParticipationsHeading: "Participations", footerLocalParticipations: "Local Participations", footerIntlParticipations: "International Participations", footerContactUs: "Contact Us",
    footerNewsletterHeading: "Newsletter", footerNewsletterDesc: "Be the first to know about our latest releases and projects.",
    emailPlaceholder: "Your email address", subscribe: "Subscribe",
  },
};

export default function Home() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];

  useEffect(() => {
    // --- scroll reveal on sections ---
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10");
      io.observe(section);
    });

    // --- sticky header padding ---
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 50) { nav.classList.add("shadow-lg", "py-2"); nav.classList.remove("py-4"); }
      else { nav.classList.remove("shadow-lg", "py-2"); nav.classList.add("py-4"); }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden paper-grain">

      {/* Top Navigation Bar */}
      <nav className="docked full-width top-0 sticky z-50 bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline/20 shadow-sm">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-10 py-4">
      {/* Brand Logo */}
      <a className="flex items-center order-last" href="/">
                      <img src="/nasher-logo.png" alt="ناشر" className="h-12 w-auto rounded-md" />
                  </a>
      {/* Trailing Actions */}
      <div className="flex items-center gap-6">
      <button onClick={toggleLang} className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary">{lang === "ar" ? "English" : "العربية"}</button>
      <button className="text-on-surface-variant hover:text-primary transition-all">
      <span className="material-symbols-outlined">search</span>
      </button>
      </div>
      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-row-reverse items-center gap-8">
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-caps text-base font-semibold" href="/shop">{s.navStore}</a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-caps text-base font-semibold" href="/store">{s.navEditions}</a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-caps text-base font-semibold" href="/services">{s.navServices}</a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-caps text-base font-semibold" href="/about">{s.navAbout}</a>
      </div>
      </div>
      </nav>
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-primary overflow-hidden">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/40 to-transparent z-10"></div>
      <video className="w-full h-full object-cover opacity-60 scale-105" src="/hero-video.mp4" autoPlay muted loop playsInline></video>
      </div>
      <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
      {/* Text Content */}
      <div className="md:col-span-7 flex flex-col items-start gap-6">
      <span className="font-label-caps text-label-caps text-on-primary-container tracking-widest px-4 py-2 border border-on-primary-container/30 rounded-full">{s.heroBadge}</span>
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary leading-tight">
                          {s.heroPrefix} <span className="text-primary-fixed italic font-light">{s.heroHighlight}</span><br/>{s.heroSuffix}
                      </h1>
      <p className="font-body-lg text-body-lg text-on-primary/80 max-w-lg leading-relaxed" dir={lang === "en" ? "ltr" : "rtl"}>
                          {s.heroDesc}
                      </p>
      <div className="flex flex-wrap gap-4 mt-4">
      <a href="/shop" className="inline-block bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-lg font-headline-sm text-headline-sm hover:bg-white transition-all transform hover:scale-105">{s.exploreBooks}</a>
      <a href="/request-service" className="inline-block border border-on-primary/40 text-on-primary px-8 py-4 rounded-lg font-headline-sm text-headline-sm hover:bg-on-primary/10 transition-all">{s.requestPublishing}</a>
      </div>
      </div>
      </div>
      </header>
      {/* Featured Books Section */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="flex justify-between items-end mb-12">
      <div>
      <h2 className="font-headline-md text-headline-md text-primary">{s.latestReleases}</h2>
      <p className="text-on-surface-variant mt-2">{s.latestReleasesDesc}</p>
      </div>
      <a className="flex items-center gap-2 text-primary font-bold group" href="/store">
                      {s.viewAll}
                      <span className="material-symbols-outlined group-hover:translate-x-[-4px] transition-transform">arrow_back</span>
      </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
      {/* Book Card 1 */}
      <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container shadow-sm mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" alt={s.book1Title} src="/featured/zarqa-al-yamama.jpg"/>
      </div>
      <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">{s.book1Tag}</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">{s.book1Title}</h3>
      <p className="text-on-surface-variant font-body-md line-clamp-2">{s.book1Desc}</p>
      </div>
      {/* Book Card 2 */}
      <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container shadow-sm mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" alt={s.book2Title} src="/featured/art-in-the-kingdom.jpg"/>
      </div>
      <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">{s.book2Tag}</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">{s.book2Title}</h3>
      <p className="text-on-surface-variant font-body-md line-clamp-2">{s.book2Desc}</p>
      </div>
      {/* Book Card 3 */}
      <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container shadow-sm mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" alt={s.book3Title} src="/featured/tales-of-sleep.jpg"/>
      </div>
      <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">{s.book3Tag}</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">{s.book3Title}</h3>
      <p className="text-on-surface-variant font-body-md line-clamp-2">{s.book3Desc}</p>
      </div>
      </div>
      </section>
      {/* About Nasher (Editorial Section) */}
      <section className="bg-surface-container-low py-section-padding paper-grain relative">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
      <div className="md:col-span-6 relative z-10">
      <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-8 leading-tight">{s.aboutTitle}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed" dir={lang === "en" ? "ltr" : "rtl"}>
                          {s.aboutDesc}
                      </p>
      <blockquote className="border-r-4 border-primary pr-8 py-4 my-8 bg-white/50 rounded-l-lg italic font-headline-sm text-on-surface" dir={lang === "en" ? "ltr" : "rtl"}>
                          {s.aboutQuote}
                      </blockquote>
      <a href="/strategy" className="text-primary font-bold flex items-center gap-2 hover:translate-x-[-8px] transition-transform">
                          {s.readMoreStrategy}
                          <span className="material-symbols-outlined">arrow_back</span>
      </a>
      </div>
      <div className="md:col-span-6 flex justify-center">
      <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
      <img className="w-full h-full object-cover" alt="ناشر" src="/featured/about-nasher.jpg"/>
      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
      </div>
      </div>
      </div>
      </section>
      {/* Publishing Services Bento Grid */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
      <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">{s.servicesEyebrow}</span>
      <h2 className="font-headline-md text-headline-md text-primary">{s.servicesTitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Service 1 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-primary transition-all group shadow-sm">
      <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform">edit_note</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{s.service1Title}</h3>
      <p className="text-on-surface-variant">{s.service1Desc}</p>
      </div>
      {/* Service 2 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-primary transition-all group shadow-sm">
      <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform">history_edu</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{s.service2Title}</h3>
      <p className="text-on-surface-variant">{s.service2Desc}</p>
      </div>
      {/* Service 3 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-primary transition-all group shadow-sm">
      <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform">translate</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{s.service3Title}</h3>
      <p className="text-on-surface-variant">{s.service3Desc}</p>
      </div>
      {/* Service 4 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-primary transition-all group shadow-sm">
      <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform">palette</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{s.service4Title}</h3>
      <p className="text-on-surface-variant">{s.service4Desc}</p>
      </div>
      {/* Service 5 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-primary transition-all group shadow-sm">
      <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform">print</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{s.service5Title}</h3>
      <p className="text-on-surface-variant">{s.service5Desc}</p>
      </div>
      {/* Service 6 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-primary transition-all group shadow-sm">
      <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform">language</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{s.service6Title}</h3>
      <p className="text-on-surface-variant">{s.service6Desc}</p>
      </div>
      </div>
      </section>
      {/* Process Timeline */}
      <section className="py-section-padding bg-primary text-on-primary">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-headline-md text-headline-md mb-16 text-center">{s.timelineTitle}</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-gutter">
      {/* Line */}
      <div className="hidden md:block absolute top-10 inset-x-0 h-0.5 bg-on-primary/20"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center font-bold text-2xl mb-6">1</div>
      <h4 className="font-headline-sm mb-2">{s.step1Title}</h4>
      <p className="text-on-primary/70">{s.step1Desc}</p>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center font-bold text-2xl mb-6">2</div>
      <h4 className="font-headline-sm mb-2">{s.step2Title}</h4>
      <p className="text-on-primary/70">{s.step2Desc}</p>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center font-bold text-2xl mb-6">3</div>
      <h4 className="font-headline-sm mb-2">{s.step3Title}</h4>
      <p className="text-on-primary/70">{s.step3Desc}</p>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center font-bold text-2xl mb-6">4</div>
      <h4 className="font-headline-sm mb-2">{s.step4Title}</h4>
      <p className="text-on-primary/70">{s.step4Desc}</p>
      </div>
      </div>
      </div>
      </section>
      {/* Cultural Projects Gallery */}
      <section className="py-section-padding">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
      <div className="md:w-1/2">
      <h2 className="font-headline-md text-headline-md text-primary mb-4">{s.projectsTitle}</h2>
      <p className="text-on-surface-variant">{s.projectsDesc}</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="relative h-[400px] rounded-2xl overflow-hidden group">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.project1Title} src="/featured/international-book-fairs.jpg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
      <h4 className="font-headline-sm text-on-primary">{s.project1Title}</h4>
      <p className="text-on-primary/80 mt-2">{s.project1Desc}</p>
      </div>
      </div>
      <div className="relative h-[400px] rounded-2xl overflow-hidden group">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.project2Title} src="/featured/saudi-comics-series.jpg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
      <h4 className="font-headline-sm text-on-primary">{s.project2Title}</h4>
      <p className="text-on-primary/80 mt-2">{s.project2Desc}</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Partners Section */}
      <section id="partners-section" className="py-24 bg-surface-container-low border-y border-outline-variant/30 overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-12">
      <h5 className="font-headline-sm text-headline-sm text-primary">{s.partnersTitle}</h5>
      </div>
      <div className="w-full overflow-hidden" dir="ltr">
      <div className="marquee-track flex items-center w-max">
      {[...partnerLogos, ...partnerLogos].map((partner, i) => (
        <img key={i} src={partner.src} alt={partner.name} title={partner.name} className="h-20 w-auto max-w-[220px] object-contain flex-shrink-0 mr-16" />
      ))}
      </div>
      </div>
      </section>
      {/* Final CTA */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop text-center">
      <div className="max-w-3xl mx-auto bg-surface-container-highest p-12 md:p-20 rounded-[2rem] shadow-sm relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl"></div>
      <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-6">{s.ctaTitle}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">{s.ctaDesc}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/request-service" className="inline-block bg-primary text-on-primary px-10 py-5 rounded-lg font-headline-sm hover:opacity-90 transition-opacity">{s.contactAdvisor}</a>
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
      <p className="mt-4 text-on-primary-container dark:text-on-surface-variant text-body-md">{s.footerDesc}</p>
      </div>
      {/* Links 1 */}
      <div>
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.footerAboutHeading}</h5>
      <ul className="space-y-4">
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/about">{s.navAbout}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/strategy">{s.footerStrategy}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/board">{s.footerBoard}</a></li>
      </ul>
      </div>
      {/* Links 2 */}
      <div>
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.footerParticipationsHeading}</h5>
      <ul className="space-y-4">
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="#">{s.footerLocalParticipations}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="#">{s.footerIntlParticipations}</a></li>
      <li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-on-primary dark:hover:text-primary transition-colors text-body-md" href="/request-service">{s.footerContactUs}</a></li>
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
