# Nasher — موقع ناشر (React + Vite)

تحويل تصميم Stitch الخاص بدار "ناشر" إلى مشروع **React + Vite** بالكامل، مع الحفاظ على الهوية البصرية (Editorial / Luxury)، دعم **RTL عربي**، والخطوط الأصلية (Noto Serif Arabic + IBM Plex Sans Arabic + Hanken Grotesk).

## التشغيل

```bash
npm install
npm run dev      # تشغيل بيئة التطوير على http://localhost:5173
npm run build    # بناء نسخة الإنتاج داخل مجلد dist
npm run preview  # معاينة نسخة الإنتاج
```

> يتطلب Node.js 18 أو أحدث.

## الصفحات والمسارات

| المسار      | الصفحة                         | الملف                    |
|-------------|--------------------------------|--------------------------|
| `/`         | الرئيسية (فيها كتاب 3D + فيديو hero) | `src/pages/Home.jsx`     |
| `/about`    | عن ناشر                        | `src/pages/About.jsx`    |
| `/store`    | المتجر / الإصدارات             | `src/pages/Store.jsx`    |
| `/book`     | تفاصيل الكتاب                  | `src/pages/BookDetail.jsx`|
| `/services` | خدماتنا                        | `src/pages/Services.jsx` |

روابط القائمة والفوتر تعمل كتنقّل SPA تلقائيًا (بدون إعادة تحميل).

## البنية

```
nasher-app/
├─ index.html            ← RTL + الخطوط + Material Symbols
├─ tailwind.config.js    ← كل ألوان وأحجام وخطوط الهوية (بدل الـ CDN)
├─ src/
│  ├─ main.jsx           ← نقطة الدخول + Router
│  ├─ App.jsx            ← المسارات + تنقّل SPA + scroll-to-top
│  ├─ index.css          ← Tailwind + كل الـ CSS المخصص (paper-grain, fade-in ...)
│  └─ pages/             ← الصفحات الخمس
```

## الحركة (Animations)

- **كتاب 3D دوّار** في الرئيسية عبر **Three.js** (`Home.jsx` → `useEffect`).
- **ظهور تدريجي عند التمرير** (IntersectionObserver) في الرئيسية وعن ناشر والخدمات.
- **هيدر لاصق** يتغيّر عند التمرير، وتفاعلات صغيرة (إضافة للسلة، معرض صور الكتاب).

## ملاحظات مهمة

1. **الصور**: الصور الحالية روابط مؤقتة ولّدتها Stitch (على `googleusercontent.com`) وقد تنتهي صلاحيتها. استبدلها بصور ناشر الحقيقية (صور الكتب وصور المعرض) — إمّا مباشرة في مصدر كل صفحة أو بوضعها في `public/` والإشارة إليها.
2. **hero الرئيسية**: حاليًا صورة/تدرّج سينمائي. لإضافة فيديو حقيقي، ضع الفيديو في `public/` واستبدل عنصر الخلفية في `Home.jsx` بعنصر `<video autoplay muted loop>`.
3. الألوان والخطوط كلها معرّفة في `tailwind.config.js` — أي تعديل على الهوية يتم من مكان واحد.
