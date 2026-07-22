import { useState } from "react";
import { useParams } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import MobileMenuButton from "../components/MobileMenuButton";
import { useLanguage } from "../i18n/LanguageContext";
import books from "../data/books";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    breadcrumbHome: "الرئيسية", breadcrumbEditions: "المتجر",
    priceOnRequest: "السعر عند الطلب", currency: "ر.س",
    addToCart: "أضف إلى السلة", buyNow: "شراء الآن",
    fastShipping: "توصيل سريع خلال ٣ أيام", authenticSigned: "نسخة أصلية",
    aboutTitle: "عن الإصدار",
    aboutBody: (name) => `إصدار "${name}" أحد إصدارات ناشر المميزة، يجمع بين جودة الطباعة العالية والمحتوى البصري والثقافي الأصيل. تصفّح معرض الصور أعلاه لاستكشاف تفاصيل الكتاب.`,
    relatedTitle: "إصدارات قد تهمك",
    viewDetails: "عرض التفاصيل",
    footerDesc: "دار نشر ثقافية سعودية رائدة، تهدف إلى صياغة مستقبل النشر العربي من خلال إصدارات تجمع بين الأصالة والابتكار البصري.",
    aboutUs: "من نحن", strategy: "استراتيجية ناشر", board: "مجلس الإدارة",
    participations: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية", contactUs: "تواصل معنا",
    newsletter: "النشرة البريدية", newsletterDesc: "كن أول من يعرف عن إصداراتنا الجديدة وفعالياتنا الثقافية.", emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
    notFound: "لم يتم العثور على هذا الإصدار.", backToStore: "العودة إلى المتجر",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    breadcrumbHome: "Home", breadcrumbEditions: "Store",
    priceOnRequest: "Price on request", currency: "SAR",
    addToCart: "Add to Cart", buyNow: "Buy Now",
    fastShipping: "Fast delivery within 3 days", authenticSigned: "Authentic copy",
    aboutTitle: "About this Edition",
    aboutBody: (name) => `"${name}" is one of Nasher's distinctive editions, combining premium print quality with authentic visual and cultural content. Browse the gallery above to explore the book in detail.`,
    relatedTitle: "You Might Also Like",
    viewDetails: "View Details",
    footerDesc: "A leading Saudi cultural publishing house shaping the future of Arabic publishing through editions that combine authenticity and visual innovation.",
    aboutUs: "About Us", strategy: "Nasher's Strategy", board: "Board of Directors",
    participations: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations", contactUs: "Contact Us",
    newsletter: "Newsletter", newsletterDesc: "Be the first to know about our latest releases and cultural events.", emailPlaceholder: "Your email address", subscribe: "Subscribe",
    notFound: "This edition could not be found.", backToStore: "Back to Store",
  },
};

export default function BookDetail() {
  const { lang, toggleLang } = useLanguage();
  const { slug } = useParams();
  const s = T[lang];

  const book = books.find((b) => b.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!book) {
    return (
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding text-center">
        <p className="font-headline-sm text-headline-sm text-primary mb-6">{s.notFound}</p>
        <a href="/shop" className="inline-block bg-primary text-on-primary px-6 py-3 rounded-lg font-label-caps text-label-caps">{s.backToStore}</a>
      </div>
    );
  }

  const name = lang === "ar" ? book.nameAr : book.nameEn;
  const priceLabel = book.price ? `${book.price.toLocaleString(lang === "ar" ? "ar-SA" : "en-US")} ${s.currency}` : s.priceOnRequest;
  const gallery = book.images && book.images.length ? book.images : [book.cover];
  const related = books.filter((b) => b.slug !== book.slug).slice(0, 4);

  return (
    <div className="text-on-surface">

      {/* Top Navigation Bar */}
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm relative">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-10 py-4">
      <div className="flex items-center gap-6">
      <button className="text-on-surface-variant hover:text-primary transition-all">
      <span className="material-symbols-outlined">search</span>
      </button>
      <button onClick={toggleLang} className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary">{lang === "ar" ? "English" : "العربية"}</button>
      <MobileMenuButton s={s} active="editions" />
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
      <a className="hover:text-primary" href="/shop">{s.breadcrumbEditions}</a>
      <span className="material-symbols-outlined text-[12px]">chevron_left</span>
      <span className="text-primary font-bold">{name}</span>
      </nav>
      {/* Hero Section: Product Detail */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-section-padding">
      {/* Left: Image Gallery */}
      <div className="lg:col-span-7 grid grid-cols-1 gap-4">
      <div className="rounded-lg overflow-hidden bg-white paper-shadow aspect-[3/4] flex items-center justify-center p-8">
      <img className="w-full h-full object-contain transition-opacity duration-200" src={gallery[activeImage]} alt={name} />
      </div>
      {gallery.length > 1 && (
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
      {gallery.map((img, i) => (
      <div
        key={img}
        onClick={() => setActiveImage(i)}
        className={`w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-opacity ${i === activeImage ? "border-2 border-primary" : "hover:opacity-80"}`}
      >
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }}></div>
      </div>
      ))}
      </div>
      )}
      </div>
      {/* Right: Product Info */}
      <div className="lg:col-span-5 sticky top-24">
      <div className="flex flex-col gap-6">
      <div>
      <h1 className="font-display-lg text-headline-md md:text-display-lg text-primary mb-2">{name}</h1>
      </div>
      <div className="flex items-center gap-4 py-4 border-y border-outline-variant/30">
      <div className="text-primary font-headline-md text-headline-md">{priceLabel}</div>
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
      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-section-padding">
      <article>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-6">{s.aboutTitle}</h3>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed" dir={lang === "en" ? "ltr" : "rtl"}>{s.aboutBody(name)}</p>
      </article>
      </section>
      {/* Related Books */}
      {related.length > 0 && (
      <section>
      <div className="flex justify-between items-center mb-12">
      <h2 className="font-headline-md text-headline-md text-primary">{s.relatedTitle}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {related.map((rb) => (
      <a key={rb.slug} href={`/book/${rb.slug}`} className="group cursor-pointer block">
      <div className="aspect-[2/3] bg-white paper-shadow rounded-lg overflow-hidden mb-4 transition-transform group-hover:-translate-y-2">
      <img className="w-full h-full object-cover" src={rb.cover} alt={lang === "ar" ? rb.nameAr : rb.nameEn} />
      </div>
      <h5 className="font-body-md text-primary font-bold text-center">{lang === "ar" ? rb.nameAr : rb.nameEn}</h5>
      </a>
      ))}
      </div>
      </section>
      )}
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
                  {s.addToCart} — {priceLabel}
              </button>
      </div>

    </div>
  );
}
