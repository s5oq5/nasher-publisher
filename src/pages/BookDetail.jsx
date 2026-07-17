import { useEffect } from "react";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    breadcrumbHome: "الرئيسية", breadcrumbEditions: "إصداراتنا", breadcrumbBook: "زرقاء اليمامة",
    tag: "تاريخي / أسطوري", title: "زرقاء اليمامة", author: "تحقيق وإعداد: د. ناصر الثقفي",
    price: "١٤٥.٠٠ ر.س", oldPrice: "١٨٠.٠٠ ر.س", discount: "-٢٠٪",
    addToCart: "أضف إلى السلة", buyNow: "شراء الآن",
    fastShipping: "توصيل سريع خلال ٣ أيام", authenticSigned: "نسخة أصلية وموقعة",
    tabAbout: "عن الكتاب", tabSpecs: "مواصفات الإصدار", tabAuthor: "عن المؤلف", tabReviews: "المراجعات",
    visionTitle: "الرؤية والنص",
    p1: "تُعد أسطورة \"زرقاء اليمامة\" واحدة من أعمق الحكايات في الموروث العربي، حيث تجسد البصيرة والقدرة على رؤية ما وراء الأفق. في هذا الإصدار الفاخر، نعيد قراءة هذه الشخصية ليس فقط كرمز تاريخي، بل كملحمة إنسانية تتناول الصراع بين الحقيقة والإنكار.",
    quote: "\"إن العين التي تبصر البعيد، لا بد أن تملك قلباً يرى الأعمق.\"",
    p2: "تم تصميم هذا الكتاب بلمسة فنية تحاكي الكتب العالمية، مع رسومات أصلية لفنانين سعوديين، يمزجون فيها بين السريالية والواقعية الصحراوية، لتقديم تجربة بصرية وتاريخية لا تُنسى.",
    specIsbn: "رقم الـ ISBN", specIsbnVal: "978-603-000-00-1",
    specLang: "اللغة", specLangVal: "العربية / الإنجليزية",
    specPages: "عدد الصفحات", specPagesVal: "٣٢٠ صفحة",
    specBinding: "نوع التجليد", specBindingVal: "تجليد فاخر (Hardcover)",
    specYear: "سنة النشر", specYearVal: "٢٠٢٤",
    specSize: "القياس", specSizeVal: "٢٤ × ٣٠ سم",
    authorName: "د. ناصر الثقفي",
    authorBio: "أستاذ التاريخ القديم والباحث في الموروث الشفهي الجزيري. قدم أكثر من ٢٠ دراسة في التاريخ الثقافي للمملكة العربية السعودية، ويسعى من خلال تعاونه مع \"ناشر\" إلى إعادة إحياء الشخصيات المنسية في التاريخ العربي بأسلوب عصري يواكب تطلعات الأجيال القادمة.",
    reviewsTitle: "آراء القراء", addReview: "أضف مراجعتك",
    r1: "\"إصدار مذهل، جودة الورق والطباعة تذكرني بأمهات الكتب في المتاحف. فخور بوجود دار نشر سعودية بهذا المستوى.\"", r1Name: "— محمد القحطاني",
    r2: "\"الرسومات داخل الكتاب تحفة فنية بحد ذاتها. العمل يستحق أن يكون قطعة ديكور في أي مكتبة فاخرة.\"", r2Name: "— سارة الفيصل",
    r3: "\"لم أقرأ عن زرقاء اليمامة بهذا العمق من قبل. د. ناصر أبدع في التحقيق التاريخي.\"", r3Name: "— أحمد الرشيد",
    relatedTitle: "إصدارات قد تهمك",
    rel1Title: "الفتى الذي رأى النوم", rel1Author: "عنتر الجبر", rel1Price: "١٢٠.٠٠ ر.س",
    rel2Title: "السينما السعودية", rel2Author: "سعد المسيب", rel2Price: "٩٥.٠٠ ر.س",
    rel3Title: "مجموعة الكوميكس", rel3Author: "إصدارات متنوعة", rel3Price: "٢٥٠.٠٠ ر.س",
    rel4Title: "كتاب الدليلة", rel4Author: "ناشر للفنون", rel4Price: "٤٥٠.٠٠ ر.س",
    footerDesc: "دار نشر ثقافية سعودية رائدة، تهدف إلى صياغة مستقبل النشر العربي من خلال إصدارات تجمع بين الأصالة والابتكار البصري.",
    aboutUs: "من نحن", strategy: "استراتيجية ناشر", board: "مجلس الإدارة",
    participations: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية", contactUs: "تواصل معنا",
    newsletter: "النشرة البريدية", newsletterDesc: "كن أول من يعرف عن إصداراتنا الجديدة وفعالياتنا الثقافية.", emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
    mobileAddToCart: "أضف إلى السلة — ١٤٥ ر.س",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    breadcrumbHome: "Home", breadcrumbEditions: "Editions", breadcrumbBook: "Zarqa Al-Yamama",
    tag: "Historical / Legendary", title: "Zarqa Al-Yamama", author: "Research & Editing: Dr. Nasser Al-Thaqafi",
    price: "SAR 145.00", oldPrice: "SAR 180.00", discount: "-20%",
    addToCart: "Add to Cart", buyNow: "Buy Now",
    fastShipping: "Fast delivery within 3 days", authenticSigned: "Authentic, signed copy",
    tabAbout: "About the Book", tabSpecs: "Specifications", tabAuthor: "About the Author", tabReviews: "Reviews",
    visionTitle: "Vision & Text",
    p1: "The legend of \"Zarqa Al-Yamama\" is one of the most profound tales in Arab heritage, embodying insight and the ability to see beyond the horizon. In this premium edition, we retell this figure not merely as a historical symbol, but as a human epic exploring the conflict between truth and denial.",
    quote: "\"An eye that sees the distant must have a heart that sees the deepest.\"",
    p2: "This book was designed with an artistic touch echoing world-class publications, featuring original illustrations by Saudi artists blending surrealism with desert realism, to deliver an unforgettable visual and historical experience.",
    specIsbn: "ISBN", specIsbnVal: "978-603-000-00-1",
    specLang: "Language", specLangVal: "Arabic / English",
    specPages: "Pages", specPagesVal: "320 pages",
    specBinding: "Binding", specBindingVal: "Premium Hardcover",
    specYear: "Publication Year", specYearVal: "2024",
    specSize: "Dimensions", specSizeVal: "24 × 30 cm",
    authorName: "Dr. Nasser Al-Thaqafi",
    authorBio: "Professor of Ancient History and researcher of Arabian oral heritage. He has authored more than 20 studies on Saudi Arabia's cultural history, and through his collaboration with Nasher seeks to revive forgotten figures of Arab history in a modern style that speaks to the aspirations of future generations.",
    reviewsTitle: "Reader Reviews", addReview: "Add Your Review",
    r1: "\"An amazing edition — the paper and print quality remind me of museum-grade books. Proud to see a Saudi publishing house reach this level.\"", r1Name: "— Mohammed Al-Qahtani",
    r2: "\"The illustrations inside the book are a work of art in themselves. This deserves to be a display piece in any premium library.\"", r2Name: "— Sarah Al-Faisal",
    r3: "\"I've never read about Zarqa Al-Yamama with this depth before. Dr. Nasser did a brilliant job with the historical research.\"", r3Name: "— Ahmed Al-Rashid",
    relatedTitle: "You Might Also Like",
    rel1Title: "The Boy Who Saw Sleep", rel1Author: "Antar Al-Jabr", rel1Price: "SAR 120.00",
    rel2Title: "Saudi Cinema", rel2Author: "Saad Al-Musaib", rel2Price: "SAR 95.00",
    rel3Title: "The Comics Collection", rel3Author: "Various Editions", rel3Price: "SAR 250.00",
    rel4Title: "The Al-Daleela Book", rel4Author: "Nasher for Arts", rel4Price: "SAR 450.00",
    footerDesc: "A leading Saudi cultural publishing house shaping the future of Arabic publishing through editions that combine authenticity and visual innovation.",
    aboutUs: "About Us", strategy: "Nasher's Strategy", board: "Board of Directors",
    participations: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations", contactUs: "Contact Us",
    newsletter: "Newsletter", newsletterDesc: "Be the first to know about our latest releases and cultural events.", emailPlaceholder: "Your email address", subscribe: "Subscribe",
    mobileAddToCart: "Add to Cart — SAR 145",
  },
};

export default function BookDetail() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];

  useEffect(() => {
    const thumbs = document.querySelectorAll(".cursor-pointer");
    const handlers = [];
    thumbs.forEach((thumb) => {
      const onClick = function () {
        const mainImg = document.querySelector(".lg\\:col-span-7 img");
        const inner = this.querySelector("div");
        if (!mainImg || !inner) return;
        const thumbBg = inner.style.backgroundImage;
        const thumbAlt = inner.getAttribute("data-alt");
        const url = thumbBg.slice(5, -2);
        mainImg.style.opacity = "0";
        setTimeout(() => {
          mainImg.src = url;
          if (thumbAlt) mainImg.setAttribute("data-alt", thumbAlt);
          mainImg.style.opacity = "1";
        }, 200);
        thumbs.forEach((t) => t.classList.remove("border-2", "border-primary"));
        this.classList.add("border-2", "border-primary");
      };
      thumb.addEventListener("click", onClick);
      handlers.push([thumb, onClick]);
    });
    return () => handlers.forEach(([t, h]) => t.removeEventListener("click", h));
  }, []);

  return (
    <div className="text-on-surface">

      {/* Top Navigation Bar */}
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-10 py-4">
      <div className="flex items-center gap-6">
      <button onClick={toggleLang} className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary">{lang === "ar" ? "English" : "العربية"}</button>
      <button className="text-on-surface-variant hover:text-primary transition-all">
      <span className="material-symbols-outlined">search</span>
      </button>
      <button className="p-2 hover:bg-surface-container-low rounded-full transition-all">
      <span className="material-symbols-outlined text-primary">shopping_bag</span>
      </button>
      </div>
      <a className="flex items-center order-last" href="/"><img src="/nasher-logo.png" alt="ناشر" className="h-12 w-auto rounded-md" /></a>
      <div className="hidden md:flex gap-6 items-center">
      <a className="font-label-caps text-base font-semibold text-on-surface-variant hover:text-primary transition-colors" href="/shop">{s.navStore}</a>
      <a className="font-label-caps text-base font-semibold text-primary border-b-2 border-primary pb-1" href="/store">{s.navEditions}</a>
      <a className="font-label-caps text-base font-semibold text-on-surface-variant hover:text-primary transition-colors" href="/services">{s.navServices}</a>
      <a className="font-label-caps text-base font-semibold text-on-surface-variant hover:text-primary transition-colors" href="/about">{s.navAbout}</a>
      </div>
      </div>
      </nav>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-12 text-on-surface-variant font-label-caps text-label-caps">
      <a className="hover:text-primary" href="/">{s.breadcrumbHome}</a>
      <span className="material-symbols-outlined text-[12px]">chevron_left</span>
      <a className="hover:text-primary" href="/store">{s.breadcrumbEditions}</a>
      <span className="material-symbols-outlined text-[12px]">chevron_left</span>
      <span className="text-primary font-bold">{s.breadcrumbBook}</span>
      </nav>
      {/* Hero Section: Product Detail */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-section-padding">
      {/* Left: Image Gallery (Cinematic Focus) */}
      <div className="lg:col-span-7 grid grid-cols-1 gap-4">
      <div className="rounded-lg overflow-hidden bg-white paper-shadow aspect-[3/4] flex items-center justify-center p-8">
      <img className="w-full h-full object-contain" data-alt="A premium high-fidelity mockup of an open Arabic hardcover book titled 'Zarqa al-Yamama' showing beautiful vibrant illustrations of a mythical woman with glowing eyes in a Saudi desert setting. The book sits on a textured beige surface with soft natural side lighting, creating an elegant editorial atmosphere that highlights the rich paper quality and deep teal colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS-kgbifFPM9UiboDUroftqoRIVrMiHTa3gSH7Z2RR6hbS6w1OWBFyhO6S5nkvwUYHbur9cYVntVR0dmO1y28uOIsv9XjBgW_eMZiFfiSbRdDb14HwLG8fV0Bb1rZq6iQooIdpDwvVcMtZDqGJyGfWJLtBN5R1_016PRfB5tJTfs3GtFnyFlBXUenaGM_QlMEKMnYoirUaRt3qfrdKF9WkR6L6lyAx9UhIf0IjlwRdv3YOSAJR56pgEvh3-jslg8rRIJ-_384bGASg"/>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
      <div className="w-24 h-32 flex-shrink-0 border-2 border-primary rounded-lg overflow-hidden cursor-pointer">
      <div className="w-full h-full bg-cover bg-center" data-alt="Detailed close-up of the book cover featuring Zarqa al-Yamama, showcasing the intricate gold foil lettering and the rich teal and red color palette of the illustration." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDW2E2kw9HA3IUwzDLJmmsujkbNNOAFdj-x1BUQ3cOGJVIqi1IasqHApaz0KnzoMxiYdxP8a5ZBueTrfBxH8o2NdHLb_p4AWIW4v8TLzla8THeR33XMSkKunhvX32zuKlw8HiKsnieiLBYr5viqXDL3N4SVLf2LCRETESZFxdiovJM9MOUHUxm_VhDG95e8Wc50QN261icnAXt8NZY--P-Te_byv0wwIkjGENC2uffC95MYg4eCV4XF2ZS2rx7cu43gL8HBIG2ZFqOq')" }}></div>
      </div>
      <div className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full bg-cover bg-center" data-alt="A view of the interior pages of the book, displaying elegant Arabic typography and high-quality illustrations that blend traditional themes with modern editorial layout." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNbGx6TIwdJFqrl73O-vurN2jAlssspGcYmL8Zqa1nx0U7IyXWmAnsvoCRWaixBV4H0NPPLkHh-3lN-eDvXB4fbU-BvrrrO71hAxA-1dDoUyFXj_oPcjesjbfkysZ_a-ZcO1DJ18Ei3OsQMN9VT60q6MCI_LrIzA_OE7-vYLg4zxO0IFgbs6xJ4-gg6FeFqYVwHJux3u_lTs3cTtbStwKMPJDz_7IG_JhUq7J7DAm1lCJ_RORneJ6e8oSDyALMnk9oqXzHWYdRs7r7')" }}></div>
      </div>
      <div className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full bg-cover bg-center" data-alt="Back cover and spine of the hardcover edition, showing the publishing house logo 'Nasher' and the ISBN barcode in a minimalist professional design." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5ZiXo5qpyWVUn4bT1Lwnd0e5GPqaBsGid8wwvu3L0yDjZ_6u8OPFIg5HpPX1HsqERkJWrbrpoHMyaPQTgL8D0RIl_D2T4YILgqThiTlY29uE5eNsxdX6EFgjcYg0SLvhNMmii6k4DD8K1JCPTO2tngAjP5YMsS_9DHBdQszpDdyHZRi1dM9DapFTSpDpy0r6lHytspDrPveS4m7wRf5BvJ0VaSyLOl2ylyKz6WHisPWLRKn0sZ9y46MjeslTJv6XjDFILXV-60Iis')" }}></div>
      </div>
      </div>
      </div>
      {/* Right: Product Info */}
      <div className="lg:col-span-5 sticky top-24">
      <div className="flex flex-col gap-6">
      <div>
      <span className="inline-block bg-tertiary/10 text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-caps text-label-caps mb-4 uppercase tracking-widest">{s.tag}</span>
      <h1 className="font-display-lg text-headline-md md:text-display-lg text-primary mb-2">{s.title}</h1>
      <p className="font-headline-sm text-headline-sm text-on-surface-variant italic">{s.author}</p>
      </div>
      <div className="flex items-center gap-4 py-4 border-y border-outline-variant/30">
      <div className="text-primary font-headline-md text-headline-md">{s.price}</div>
      <div className="text-on-surface-variant font-body-md line-through">{s.oldPrice}</div>
      <span className="bg-error-container text-on-error-container px-2 py-1 rounded text-label-caps font-bold" dir="ltr">{s.discount}</span>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
      <button className="flex-1 bg-primary text-on-primary py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-all active:scale-95 flex justify-center items-center gap-2">
      <span className="material-symbols-outlined">shopping_cart</span>
                                      {s.addToCart}
                                  </button>
      <button className="p-4 border border-outline rounded-lg text-primary hover:bg-surface-container transition-all">
      <span className="material-symbols-outlined">favorite</span>
      </button>
      </div>
      <button className="w-full border-2 border-primary text-primary py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all active:scale-95">{s.buyNow}</button>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4">
      <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-primary">local_shipping</span>
                                  {s.fastShipping}
                              </div>
      <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-primary">verified</span>
                                  {s.authenticSigned}
                              </div>
      </div>
      </div>
      </div>
      </section>
      {/* Tabs Content: Description & Specs */}
      <section className="max-w-4xl mx-auto mb-section-padding">
      <div className="border-b border-outline-variant/30 flex gap-12 mb-8 overflow-x-auto no-scrollbar">
      <button className="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-4 font-bold whitespace-nowrap">{s.tabAbout}</button>
      <button className="font-label-caps text-label-caps text-on-surface-variant pb-4 whitespace-nowrap hover:text-primary transition-colors">{s.tabSpecs}</button>
      <button className="font-label-caps text-label-caps text-on-surface-variant pb-4 whitespace-nowrap hover:text-primary transition-colors">{s.tabAuthor}</button>
      <button className="font-label-caps text-label-caps text-on-surface-variant pb-4 whitespace-nowrap hover:text-primary transition-colors">{s.tabReviews}</button>
      </div>
      <div className="space-y-12">
      {/* Description */}
      <article>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-6">{s.visionTitle}</h3>
      <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-6">
      <p dir={lang === "en" ? "ltr" : "rtl"}>{s.p1}</p>
      <blockquote className="relative py-8 px-12 border-y-2 border-secondary-container text-center italic font-headline-md text-headline-sm text-primary">
                                  {s.quote}
                              </blockquote>
      <p dir={lang === "en" ? "ltr" : "rtl"}>{s.p2}</p>
      </div>
      </article>
      {/* Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 p-8 bg-surface-container-low rounded-xl">
      <div className="flex justify-between border-b border-outline-variant/30 py-2">
      <span className="text-on-surface-variant font-label-caps text-label-caps">{s.specIsbn}</span>
      <span className="font-body-md text-primary font-bold">{s.specIsbnVal}</span>
      </div>
      <div className="flex justify-between border-b border-outline-variant/30 py-2">
      <span className="text-on-surface-variant font-label-caps text-label-caps">{s.specLang}</span>
      <span className="font-body-md text-primary font-bold">{s.specLangVal}</span>
      </div>
      <div className="flex justify-between border-b border-outline-variant/30 py-2">
      <span className="text-on-surface-variant font-label-caps text-label-caps">{s.specPages}</span>
      <span className="font-body-md text-primary font-bold">{s.specPagesVal}</span>
      </div>
      <div className="flex justify-between border-b border-outline-variant/30 py-2">
      <span className="text-on-surface-variant font-label-caps text-label-caps">{s.specBinding}</span>
      <span className="font-body-md text-primary font-bold">{s.specBindingVal}</span>
      </div>
      <div className="flex justify-between border-b border-outline-variant/30 py-2">
      <span className="text-on-surface-variant font-label-caps text-label-caps">{s.specYear}</span>
      <span className="font-body-md text-primary font-bold">{s.specYearVal}</span>
      </div>
      <div className="flex justify-between border-b border-outline-variant/30 py-2">
      <span className="text-on-surface-variant font-label-caps text-label-caps">{s.specSize}</span>
      <span className="font-body-md text-primary font-bold">{s.specSizeVal}</span>
      </div>
      </div>
      </div>
      </section>
      {/* About Author Section */}
      <section className="bg-primary text-on-primary rounded-3xl p-12 mb-section-padding flex flex-col md:flex-row gap-12 items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-on-primary/20">
      <img className="w-full h-full object-cover" data-alt="A professional portrait of Dr. Nasser Al-Thaqafi, a distinguished Saudi historian and author, wearing traditional attire. He is looking thoughtfully into the distance in a well-lit study filled with ancient manuscripts and books. The lighting is warm and intellectual, matching the luxury cultural branding of Nasher Publishing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxoFj3b7MIoglF31isxAnFnflEcjbbJqEklrukg9GRBX96Nuh-5Nyn3dpf25TYj5Qgsrn2LdqnUW2onEWqnAIp39OmPs3hQTd6em26gzlaYZnkiLkUVk1b-9fOqghzOubcvmuH2o3QM5YC1wL7oVdLQ3j8cRwVzo0C8Vb8jsCjpDzUVWCxD0o4em6F48iBvTasGv3OQggUgLnms6snPjU2TVgnkBxIffB2Ca2pTuHSveZlY4Ii5wcrsyjq8oqG3QuBvi7lSfwGd4j0"/>
      </div>
      <div className="flex flex-col gap-4 text-center md:text-right">
      <h4 className="font-headline-md text-headline-md">{s.authorName}</h4>
      <p className="font-body-lg text-body-md opacity-80 leading-relaxed" dir={lang === "en" ? "ltr" : "rtl"}>{s.authorBio}</p>
      <div className="flex gap-4 justify-center md:justify-start">
      <a className="text-on-primary/60 hover:text-on-primary transition-colors" href="#">
      <span className="material-symbols-outlined">public</span>
      </a>
      <a className="text-on-primary/60 hover:text-on-primary transition-colors" href="#">
      <span className="material-symbols-outlined">alternate_email</span>
      </a>
      </div>
      </div>
      </section>
      {/* Reviews Section */}
      <section className="mb-section-padding">
      <div className="flex justify-between items-end mb-12">
      <h2 className="font-headline-md text-headline-md text-primary">{s.reviewsTitle}</h2>
      <button className="text-primary font-label-caps text-label-caps border-b border-primary">{s.addReview}</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="bg-white p-8 rounded-xl paper-shadow border-t-4 border-secondary flex flex-col gap-4">
      <div className="flex text-on-tertiary-fixed-variant">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      </div>
      <p className="font-body-md text-on-surface-variant italic">{s.r1}</p>
      <span className="font-label-caps text-label-caps text-primary font-bold">{s.r1Name}</span>
      </div>
      <div className="bg-white p-8 rounded-xl paper-shadow border-t-4 border-secondary flex flex-col gap-4">
      <div className="flex text-on-tertiary-fixed-variant">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined">star</span>
      </div>
      <p className="font-body-md text-on-surface-variant italic">{s.r2}</p>
      <span className="font-label-caps text-label-caps text-primary font-bold">{s.r2Name}</span>
      </div>
      <div className="bg-white p-8 rounded-xl paper-shadow border-t-4 border-secondary flex flex-col gap-4">
      <div className="flex text-on-tertiary-fixed-variant">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      </div>
      <p className="font-body-md text-on-surface-variant italic">{s.r3}</p>
      <span className="font-label-caps text-label-caps text-primary font-bold">{s.r3Name}</span>
      </div>
      </div>
      </section>
      {/* Related Books Carousel */}
      <section>
      <div className="flex justify-between items-center mb-12">
      <h2 className="font-headline-md text-headline-md text-primary">{s.relatedTitle}</h2>
      <div className="flex gap-2">
      <button className="p-2 border border-outline rounded-full hover:bg-surface-container transition-all">
      <span className="material-symbols-outlined">arrow_forward</span>
      </button>
      <button className="p-2 border border-outline rounded-full hover:bg-surface-container transition-all">
      <span className="material-symbols-outlined">arrow_back</span>
      </button>
      </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Related Item 1 */}
      <div className="group cursor-pointer">
      <div className="aspect-[2/3] bg-white paper-shadow rounded-lg overflow-hidden mb-4 transition-transform group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" data-alt="Cover of an Arabic book titled 'The Story of the Boy Who Saw Sleep' with a vibrant fantasy illustration featuring a boy in a mythical landscape with sheep and waves, as seen in the user's reference images. Cinematic high-contrast lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxuNjtWWl9fA5-knTibMTIMMZifKHGAls3k0avHCZl7tLiPDAHJOnhBBhOuyei0byALDiCUYUZqxzdraz53FxM49zEtAvPTDEIoViEOvTmQh8ZcYARfeKtDaarTCrrvzNrw7APgF9sRfGJ1xMv7udye5m8hESVIwTlad6350r6-UzWxwZaY4x-S0FdXmodWuz2BwkQ40FOWMP5Rs_0i2S71mFHSI0NGQPN3xuT4Wu5Dc203twgG-Pb0yycHGMHXDwfgZuuYOD91Pl6"/>
      </div>
      <h5 className="font-body-md text-primary font-bold">{s.rel1Title}</h5>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">{s.rel1Author}</p>
      <div className="mt-2 text-primary font-bold">{s.rel1Price}</div>
      </div>
      {/* Related Item 2 */}
      <div className="group cursor-pointer">
      <div className="aspect-[2/3] bg-white paper-shadow rounded-lg overflow-hidden mb-4 transition-transform group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" data-alt="Modern editorial book cover titled 'Cinema' featuring a large film reel graphic in a minimalist black and white style with elegant serif typography, as seen in the user's reference gallery. Sharp clean aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDXIPwgcdrV2u9Jr5kaAo1HGllIqlP7VhcJafJLpYTqz0Zlur9J3yBCjxeT6pa7Mh0ziFmI1MJ9frGo6DgH0fX38rdBt3vHS6yNjRPBLghT6a58s2FOyFED85uCiBmZr9kf1LN458D7PksJOt_cTSIzFrbajfbYNkj_IUKXlMzkbYpgT2J0b1ujtP1Fg8m-8JOie9XGuPNfxtjGSm_kbretw6tb7r4ZhPP7IL4YuJwnoOqcVMQH2EkLgL3d0Izb2HxP8K4k34nzoM1"/>
      </div>
      <h5 className="font-body-md text-primary font-bold">{s.rel2Title}</h5>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">{s.rel2Author}</p>
      <div className="mt-2 text-primary font-bold">{s.rel2Price}</div>
      </div>
      {/* Related Item 3 */}
      <div className="group cursor-pointer">
      <div className="aspect-[2/3] bg-white paper-shadow rounded-lg overflow-hidden mb-4 transition-transform group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" data-alt="A collection of vibrant graphic novel covers titled 'The Jinn' and 'Al-Khunsa' spread out on a white surface, showcasing diverse illustrative styles for a modern Saudi audience. Dynamic and colorful composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzpOnviLVQOn0QNtcdWMBQlVoMwbiXeQDObHrKr7sXS9veWZjujcEVFs4g3LMJU9VhnoZprrOmb6TdJAeD3QFmHXpeGoXIaygi_bXhsebf9ZaHo9Z0i3rHLXi6nkAD-CG3cTLXIlTsIS2bqkUJtybeF6iMlPLe8UgfTZs690qXyb2AhKpzhC3EGPb4QGata3AFoF77Sv9Et6HR80shDJ85x7xLQt29OsUSlBHc4ZmtBRzD0QGod5pxOziBl1glx11dEX4Yct7-5N_Q"/>
      </div>
      <h5 className="font-body-md text-primary font-bold">{s.rel3Title}</h5>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">{s.rel3Author}</p>
      <div className="mt-2 text-primary font-bold">{s.rel3Price}</div>
      </div>
      {/* Related Item 4 */}
      <div className="group cursor-pointer">
      <div className="aspect-[2/3] bg-white paper-shadow rounded-lg overflow-hidden mb-4 transition-transform group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" data-alt="A luxury coffee table book titled 'Al-Daleela' presented in a premium slipcase, showing thick pages and high-quality photography of Saudi landscapes and heritage. High-end editorial feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnhui44NArPrOM85cx-1dV6pM-4JlQLzhrHQjfSliPvLmCkyKaNa3tLOhx4-_SEkQVCU823EJ-8c-EKUmXP6WANLBMDHmpT6HMToWSdRDITUpJZJPM73NGtpEyOaemuU5A8mVDviIehMJuiY14nXlCGzdcAUJIu10T94gHFgwUpfCEXccHPeNw2nrB2S1cN9WmrrQuW7FhZRG8ot-b7dS-CtqfeE02BoP5R1iKwT12qcwZ_TOGT62XSpKanUNG6IlV7FJDVNlhtUMe"/>
      </div>
      <h5 className="font-body-md text-primary font-bold">{s.rel4Title}</h5>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">{s.rel4Author}</p>
      <div className="mt-2 text-primary font-bold">{s.rel4Price}</div>
      </div>
      </div>
      </section>
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
      <h5 className="font-label-caps text-label-caps mb-6 opacity-60">{s.aboutUs}</h5>
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
      {/* Interactive Layer: Floating Buy Button for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-40">
      <button className="w-full bg-primary text-on-primary py-4 rounded-xl shadow-2xl flex justify-center items-center gap-3 font-label-caps text-label-caps active:scale-95 transition-transform">
      <span className="material-symbols-outlined">shopping_cart</span>
                  {s.mobileAddToCart}
              </button>
      </div>

    </div>
  );
}
