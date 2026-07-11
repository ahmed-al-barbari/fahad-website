import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  Shield,
  FileCheck,
  Users,
  ChevronLeft,
  MessageCircle,
  Phone,
  Check,
  Scale,
  Building2,
  ScrollText,
  Briefcase,
  BadgeCheck,
  BookOpen,
  Mail,
  UserCheck,
  FileSignature,
  RefreshCw,
  Building,
  Gavel,
  Handshake,
  Clock,
  ArrowLeft,
} from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {count.toLocaleString("ar-SA")}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
  );
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el, id) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(id));
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const addRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const fadeIn = (id: string) =>
    visibleSections.has(id)
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6";

  // ===== جميع الخدمات =====
  const services = [
    {
      icon: <FileCheck size={28} />,
      title: "الإفراغ العقاري",
      desc: "إفراغ العقار بالبيع أو الهبة أو الورث (للوَرة، القصر، الأجانب، الخليجيين، المستثمرين)",
      link: "/services",
    },
    {
      icon: <Scale size={28} />,
      title: "إصدار وكالة",
      desc: "إصدار الوكالات إلكترونياً بجميع أنواعها (شركات، خارجية، سجين، مؤسسة، تجارية، تأسيس شركات، عقارية)",
      link: "/services",
    },
    {
      icon: <ScrollText size={28} />,
      title: "الإقرارات المالية",
      desc: "توثيق الإقرارات المالية إلكترونياً (دين، سداد، تنازل، استلام مبالغ)",
      link: "/services",
    },
    {
      icon: <Building2 size={28} />,
      title: "الرهن العقاري",
      desc: "رهن العقارات وفك الرهن وتعديل صك الرهن",
      link: "/services",
    },
    {
      icon: <Briefcase size={28} />,
      title: "فسخ وكالة",
      desc: "إلغاء وفسخ الوكالات إلكترونياً بشكل فوري ومباشر",
      link: "/services",
    },
    {
      icon: <Shield size={28} />,
      title: "تصحيح رهن عقاري",
      desc: "تصحيح الرهن وتحديث البيانات إلكترونياً",
      link: "/services",
    },
    {
      icon: <UserCheck size={28} />,
      title: "صك ولاية على قاصر",
      desc: "استخراج صك ولاية على قاصر سناً أو عقلاً",
      link: "/services",
    },
    {
      icon: <Users size={28} />,
      title: "تحديث صك حصر ورثة",
      desc: "تحديث صكوك حصر الورثة بشكل رسمي ومعتمد",
      link: "/services",
    },
    {
      icon: <FileSignature size={28} />,
      title: "تحديث الصكوك العقارية",
      desc: "تحديث وتصحيح الصكوك العقارية إلكترونياً",
      link: "/services",
    },
    {
      icon: <Building size={28} />,
      title: "تغيير الهوية العقارية",
      desc: "تغيير الهوية العقارية للعقار وفق الأنظمة (سكني ← تجاري، إلخ)",
      link: "/services",
    },
    {
      icon: <Gavel size={28} />,
      title: "التسجيل العيني الأول",
      desc: "تسجيل العقار في السجل العيني لأول مرة واستخراج الصك",
      link: "/services",
    },
  ];

  const powers = [
    "إصدار وكالة شركات",
    "إصدار وكالة خارجية",
    "إصدار وكالة سجين",
    "إصدار وكالة مؤسسة",
    "إصدار وكالة تجارية",
    "إصدار وكالة تأسيس الشركات",
    "إصدار وكالة عقارية وإفراغ الصكوك",
    "إصدار وكالة ولاية على قاصر",
    "إصدار وكالة ناظر على وقف",
    "إصدار وكالة موقوف في مركز الشرطة",
    "إصدار وكالة موقوف في مكافحة المخدرات",
    "إصدار وكالة بتأشيرة زيارة",
    "إصدار وكالة بتأشيرة إقامة",
  ];

  const articles = [
    {
      title: "توثيق رهن عقاري في الرياض – من التسجيل إلى فك الرهن",
      date: "منذ 6 أشهر",
      tag: "خدمات توثيق",
      image:
        "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "عقد هبة عقار غير مسجل – كيف تعالجه عبر الموثق والسجل العيني",
      date: "منذ 6 أشهر",
      tag: "خدمات توثيق",
      image:
        "https://images.pexels.com/photos/3184326/pexels-photo-3184326.jpeg?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "نقل ملكية عقار هبة في الرياض – توثيق هبة بين الأقارب خطوة بخطوة",
      date: "منذ 6 أشهر",
      tag: "خدمات توثيق",
      image:
        "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "إفراغ عقار ورثة في الرياض – خطوات نقل الملكية وموعد الموثق",
      date: "منذ 6 أشهر",
      tag: "خدمات توثيق",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&h=400&fit=crop&crop=center",
    },
    {
      title: "تصحيح الرهن العقاري – متى وكيف يتم؟",
      date: "منذ 6 أشهر",
      tag: "خدمات توثيق",
      image:
        "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?w=600&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <div className="bg-[#F8F7F4] min-h-screen" dir="rtl">
      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-internal.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#F8F7F4] via-[#F8F7F4]/90 to-transparent" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-6">
                <BadgeCheck size={16} className="text-[#D4A373]" />
                <span className="text-sm font-medium text-[#1A2A3A]">
                  معتمد رسمياً – موثق ومسجل عقاري
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2A3A] leading-[1.2] mb-6">
                شريككم <span className="text-[#D4A373]">المعتمد</span>
                <br />
                للتوثيق والتسجيل العقاري الآمن
              </h1>
              <p className="text-[#1A2A3A]/60 text-lg leading-relaxed mb-8 max-w-lg">
                نقدم جميع خدمات كتابة العدل الافتراضية والبورصة العقارية –
                إفراغ، وكالات، رهون، إقرارات، تسجيل عيني، وتحديث الصكوك – بسرعة
                وموثوقية تامة، باعتماد رسمي من وزارة العدل والهيئة العامة
                للعقار.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <span className="flex items-center gap-2 text-[#1A2A3A]/70">
                  <Clock size={16} className="text-[#D4A373]" />
                  نعمل على مدار الأسبوع
                </span>
                <span className="text-[#1A2A3A]/20 hidden sm:inline">|</span>
                <span className="text-[#D4A373] font-bold">
                  24 ساعة طوال أيام الأسبوع
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#1A2A3A] transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  استكشف خدماتنا
                  <ChevronLeft size={18} />
                </Link>
                <a
                  href="https://wa.me/966551962166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#128C7E] hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={18} />
                  راسلنا واتساب
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4A373]/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative z-10 w-full aspect-square rounded-3xl bg-gradient-to-br from-[#D4A373]/10 to-[#D4A373]/5 border border-[#D4A373]/20 flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src="/mizan.png"
                    alt="ميزان العدالة - شعار قانوني"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1A2A3A] to-[#1A2A3A]/90 border border-[#D4A373]/20 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-xl z-20 whitespace-nowrap">
                  <div className="w-10 h-10 rounded-full bg-[#D4A373]/20 flex items-center justify-center">
                    <Scale size={18} className="text-[#D4A373]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      موثق ومسجل معتمد
                    </div>
                    <div className="text-xs text-white/50">
                      خدمة آمنة وسريعة
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section
        ref={addRef("stats")}
        className={`py-12 transition-all duration-700 ${fadeIn("stats")}`}
      >
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-[#1A2A3A] rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-4xl font-black text-[#D4A373] mb-1">
                  +<AnimatedCounter target={2000} />
                </div>
                <div className="text-white/60 text-sm">عميل وثقوا بنا</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-black text-[#D4A373] mb-1">
                  وزارة العدل
                </div>
                <div className="text-white/60 text-sm">موثق معتمد</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-black text-[#D4A373] mb-1">
                  الهيئة العامة للعقار
                </div>
                <div className="text-white/60 text-sm">مسجل عقاري معتمد</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-6 mt-4 border-t border-white/10">
              <img
                src="/moj-logo.svg"
                alt="وزارة العدل السعودية"
                className="h-28 md:h-36 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 duration-300"
              />
              <span className="text-white/20 text-4xl font-light hidden sm:block">
                |
              </span>
              <img
                src="/rer-logo.svg"
                alt="السجل العقاري السعودي"
                className="h-28 md:h-36 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        ref={addRef("about")}
        className={`py-20 px-6 transition-all duration-700 ${fadeIn("about")}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-6">
                <Users size={16} className="text-[#D4A373]" />
                <span className="text-sm font-medium text-[#1A2A3A]">
                  من نحن؟
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1A2A3A] mb-6 leading-tight">
                امتداداً لخبرتنا{" "}
                <span className="text-[#D4A373]">القانونية</span>
              </h2>
              <p className="text-[#1A2A3A]/60 leading-[1.8] text-lg mb-6">
                نقدم خدمات موثقين معتمدين ومسجلين عقاريين لتقديم خدمات متكاملة
                للأفراد والمنشآت. نعمل على تلبية احتياجاتكم بدقة وسرعة في إفراغ
                الصكوك والرهون، إصدار الوكالات، توثيق الإقرارات المالية، استخراج
                صكوك الولاية، تحديث حصر الورثة، تغيير الهوية العقارية، والتسجيل
                العيني، لضمان حماية حقوقكم وفق الأنظمة المرعية بالمملكة.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-[#D4A373]/10">
                  <Shield size={18} className="text-[#D4A373]" />
                  <span className="text-sm font-medium text-[#1A2A3A]">
                    معتمد من وزارة العدل
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-[#D4A373]/10">
                  <BadgeCheck size={18} className="text-[#D4A373]" />
                  <span className="text-sm font-medium text-[#1A2A3A]">
                    مسجل عقاري معتمد
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/about-bg.jpg"
                alt="مكتب العمل"
                className="rounded-2xl shadow-xl max-h-[350px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (بطاقات محسّنة وجذابة) ===== */}
      <section
        ref={addRef("services")}
        className={`py-20 px-6 bg-white transition-all duration-700 ${fadeIn("services")}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-4">
              <FileCheck size={16} className="text-[#D4A373]" />
              <span className="text-sm font-medium text-[#1A2A3A]">
                خدماتنا
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2A3A] mb-4">
              جميع خدمات كتابة العدل{" "}
              <span className="text-[#D4A373]">الافتراضية</span>
            </h2>
            <p className="text-[#1A2A3A]/50 max-w-xl mx-auto">
              خدمات توثيق عقارية متكاملة للأفراد والشركات في المملكة العربية
              السعودية
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="group relative bg-[#F8F7F4] rounded-2xl p-7 border border-[#D4A373]/10 transition-all duration-300 hover:border-[#D4A373]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4A373]/10 cursor-pointer"
              >
                {/* أيقونة الخدمة */}
                <div className="w-14 h-14 rounded-xl bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] mb-5 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1A2A3A] mb-2 group-hover:text-[#D4A373] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#1A2A3A]/60 text-sm leading-relaxed group-hover:text-[#1A2A3A]/80 transition-colors">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#D4A373] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>تفاصيل الخدمة</span>
                  <ChevronLeft size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POWERS ===== */}
      <section
        ref={addRef("powers")}
        className={`py-20 px-6 transition-all duration-700 ${fadeIn("powers")}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-4">
              <Scale size={16} className="text-[#D4A373]" />
              <span className="text-sm font-medium text-[#1A2A3A]">
                أنواع الوكالات
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2A3A] mb-4">
              جميع أنواع الوكالات{" "}
              <span className="text-[#D4A373]">التي يصدرها الموثق</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {powers.map((power, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-[#D4A373]/10 shadow-sm hover:shadow-md hover:border-[#D4A373]/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-[#D4A373]" />
                </div>
                <span className="text-sm font-medium text-[#1A2A3A]">
                  {power}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REQUIREMENTS ===== */}
      <section
        ref={addRef("reqs")}
        className={`py-20 px-6 bg-white transition-all duration-700 ${fadeIn("reqs")}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-4">
              <BookOpen size={16} className="text-[#D4A373]" />
              <span className="text-sm font-medium text-[#1A2A3A]">
                المتطلبات
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2A3A] mb-4">
              متطلبات <span className="text-[#D4A373]">الخدمة</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "وجود هوية وطنية سارية للأفراد",
              "وجود سجل تجاري ساري للمنشآت الخاصة",
              "أن يكون العقار مسجل عينيًا",
              "موافقة ذوي الشأن من الملاك وأصحاب الحقوق",
              "وجود وكالة سارية في حال كان مقدم الطلب وكيلاً",
              "دفع ضريبة التصرفات العقارية إن وجدت",
            ].map((req, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#F8F7F4] rounded-xl px-5 py-4 border border-[#D4A373]/10 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-[#25D366]" />
                </div>
                <span className="text-sm text-[#1A2A3A]">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      <section
        ref={addRef("articles")}
        className={`py-20 px-6 transition-all duration-700 ${fadeIn("articles")}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-4">
              <BookOpen size={16} className="text-[#D4A373]" />
              <span className="text-sm font-medium text-[#1A2A3A]">
                المقالات
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2A3A] mb-4">
              احدث <span className="text-[#D4A373]">المقالات</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Link
                key={i}
                to="/articles"
                className="group bg-white rounded-2xl overflow-hidden border border-[#D4A373]/10 transition-all duration-300 hover:border-[#D4A373]/30 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-[#D4A373] font-medium">
                    {article.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#1A2A3A] mt-2 mb-3 group-hover:text-[#D4A373] transition-colors line-clamp-2 leading-relaxed">
                    {article.title}
                  </h3>
                  <span className="text-xs text-[#1A2A3A]/40">
                    {article.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        ref={addRef("cta")}
        className={`py-20 px-6 transition-all duration-700 ${fadeIn("cta")}`}
      >
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#1A2A3A] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#D4A373]/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#D4A373]/5 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                جاهز لخدمتك <span className="text-[#D4A373]">الآن</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed max-w-xl mx-auto">
                هل تحتاج إلى توثيق وكالة، إفراغ عقاري، صك ولاية، تحديث صكوك، أو
                تسجيل عيني؟ نحن هنا لنقدّم لك الخدمة باعتماد رسمي وسرعة في
                التنفيذ.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                <a
                  href="https://wa.me/966551962166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#128C7E] hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={18} /> واتساب : 966551962166+
                </a>
                <a
                  href="tel:+966551962166"
                  className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <Phone size={18} /> الهاتف : 966551962166+
                </a>
                <a
                  href="mailto:Fahd.511.2020@gmail.com"
                  className="flex items-center gap-2 border border-[#D4A373]/30 text-[#D4A373] px-8 py-4 rounded-full font-bold transition-all hover:bg-[#D4A373]/10 hover:-translate-y-0.5"
                >
                  <Mail size={18} /> البريد الإلكتروني
                </a>
              </div>
              <p className="text-white/40 text-sm mt-4">
                ✉️ Fahd.511.2020@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
