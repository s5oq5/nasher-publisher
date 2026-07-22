import { useState } from "react";
import SocialLinks from "../components/SocialLinks";
import MobileMenuButton from "../components/MobileMenuButton";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  ar: {
    navAbout: "عن ناشر", navEditions: "إصداراتنا", navServices: "خدماتنا", navStore: "المتجر",
    heading: "تواصل معنا",
    desc: "تواصلوا مع فريقنا للاستفسار عن النشر، أو للحصول على دعم التوزيع، أو لفرص التعاون. نحن على أتم الاستعداد لمساعدتكم.",
    thanksTitle: "شكرًا لتواصلكم!", thanksDesc: "وصلتنا رسالتكم وسيتواصل معكم فريقنا في أقرب وقت.",
    name: "الاسم", namePlaceholder: "اكتب الاسم",
    email: "الايميل", message: "الرسالة", messagePlaceholder: "كتابة الرسالة.....",
    send: "إرسال",
    footerDesc: "دار نشر سعودية رائدة تسعى لإثراء المحتوى العربي وتقديمه للعالم بأسلوب عصري ومعايير احترافية.",
    footerAboutHeading: "عن المؤسسة", strategy: "استراتيجية ناشر", board: "مجلس الإدارة",
    participations: "المشاركات", localParticipations: "المشاركات المحلية", intlParticipations: "المشاركات الدولية", contactUs: "تواصل معنا",
    newsletter: "النشرة البريدية", newsletterDesc: "كن أول من يعرف عن أحدث إصداراتنا ومشاريعنا.", emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك",
  },
  en: {
    navAbout: "About", navEditions: "Editions", navServices: "Services", navStore: "Store",
    heading: "Get in Touch",
    desc: "Reach out to our team for publishing inquiries, distribution support, or collaboration opportunities. We're ready to help.",
    thanksTitle: "Thank you for reaching out!", thanksDesc: "Your message has been received — our team will contact you soon.",
    name: "Name", namePlaceholder: "Enter your name",
    email: "Email", message: "Message", messagePlaceholder: "Write your message.....",
    send: "Send",
    footerDesc: "A leading Saudi publishing house striving to enrich Arabic content and present it to the world with a modern style and professional standards.",
    footerAboutHeading: "About the Institution", strategy: "Nasher's Strategy", board: "Board of Directors",
    participations: "Participations", localParticipations: "Local Participations", intlParticipations: "International Participations", contactUs: "Contact Us",
    newsletter: "Newsletter", newsletterDesc: "Be the first to know about our latest releases and projects.", emailPlaceholder: "Your email address", subscribe: "Subscribe",
  },
};

export default function RequestService() {
  const { lang, toggleLang } = useLanguage();
  const s = T[lang];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">

      {/* TopNavBar */}
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm relative">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 md:px-10 py-4">
      <div className="flex items-center gap-4 order-last">
      <a className="flex items-center" href="/"><img src="/nasher-logo.png" alt="ناشر" className="h-12 w-auto rounded-md" /></a>
      </div>
      <div className="flex items-center gap-6">
      <button onClick={toggleLang} className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary">{lang === "ar" ? "English" : "العربية"}</button>
      <button className="text-on-surface-variant hover:text-primary transition-all">
      <span className="material-symbols-outlined">search</span>
      </button>
      <MobileMenuButton s={s} />
      </div>
      <div className="hidden md:flex flex-row-reverse items-center gap-8">
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/shop">{s.navStore}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/store">{s.navEditions}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/services">{s.navServices}</a>
      <a className="text-on-surface-variant font-label-caps text-base font-semibold hover:text-primary transition-colors" href="/about">{s.navAbout}</a>
      </div>
      </div>
      </nav>

      {/* Contact / Request Service */}
      <main className="flex-1 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-padding w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">

      <div className="text-right md:pr-12">
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight">{s.heading}</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-lg md:mr-0 md:ml-auto" dir={lang === "en" ? "ltr" : "rtl"}>
      {s.desc}
      </p>
      </div>

      <div>
      {submitted ? (
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-10 text-center">
        <span className="material-symbols-outlined text-5xl text-primary mb-4 inline-block">check_circle</span>
        <p className="font-headline-sm text-headline-sm text-primary mb-2">{s.thanksTitle}</p>
        <p className="text-on-surface-variant">{s.thanksDesc}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-right">
        <div>
        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="name">{s.name}</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder={s.namePlaceholder} type="text" className="w-full border border-outline-variant rounded-lg px-4 py-3 bg-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-right" />
        </div>
        <div>
        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="email">{s.email}</label>
        <input id="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email@example.com" type="email" dir="ltr" className="w-full border border-outline-variant rounded-lg px-4 py-3 bg-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-left" />
        </div>
        <div>
        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="message">{s.message}</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder={s.messagePlaceholder} rows="6" className="w-full border border-outline-variant rounded-lg px-4 py-3 bg-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-right"></textarea>
        </div>
        <button type="submit" className="bg-primary text-on-primary px-10 py-3 rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95 shadow-md">{s.send}</button>
        </form>
      )}
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
