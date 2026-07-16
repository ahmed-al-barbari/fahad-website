import { Link } from 'react-router'
import { 
  Shield, FileCheck, Users, Phone, MessageCircle, ChevronLeft, 
  Scale, Building2, ScrollText, Briefcase, MessageSquare, ArrowLeft,
  Clock
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const startTime = performance.now()
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.floor(eased * target)
            setCount(start)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString('ar-SA')}{suffix}</span>
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const services = [
    { 
      icon: <FileCheck size={32} />, 
      title: 'الإفراغ العقاري', 
      desc: 'إفراغ العقار كبائع إلى المشتري بالبيع أو الهبة أو الورث' 
    },
    { 
      icon: <Scale size={32} />, 
      title: 'إصدار وكالة', 
      desc: 'إصدار الوكالات إلكترونياً بجميع أنواعها وأشكالها' 
    },
    { 
      icon: <ScrollText size={32} />, 
      title: 'الإقرارات المالية', 
      desc: 'توثيق الإقرارات المالية إلكترونياً عبر موثق معتمد' 
    },
    { 
      icon: <Building2 size={32} />, 
      title: 'الرهن العقاري', 
      desc: 'رهن العقارات، فك الرهن، أو تعديل صك الرهن العقاري' 
    },
    { 
      icon: <Briefcase size={32} />, 
      title: 'فسخ وكالة', 
      desc: 'إلغاء وفسخ الوكالات إلكترونياً بشكل فوري ومباشر' 
    },
    { 
      icon: <Shield size={32} />, 
      title: 'تصحيح رهن عقاري', 
      desc: 'تصحيح الرهن وتحديث البيانات إلكترونياً' 
    },
  ]

  const powers = [
    'إصدار وكالة شركات',
    'إصدار وكالة خارجية',
    'إصدار وكالة سجين',
    'إصدار وكالة مؤسسة',
    'إصدار وكالة تجارية',
    'إصدار وكالة تأسيس الشركات',
    'إصدار وكالة عقارية وإفراغ الصكوك',
    'إصدار وكالة ولاية على قاصر',
    'إصدار وكالة ناظر على وقف',
    'إصدار وكالة موقوف في مركز الشرطة',
    'إصدار وكالة موقوف في مكافحة المخدرات',
  ]

  const requirements = [
    'وجود هوية وطنية سارية للأفراد',
    'وجود سجل تجاري ساري للمنشآت الخاصة',
    'أن يكون العقار مسجل عينيًا',
    'موافقة ذوي الشأن من الملاك وأصحاب الحقوق',
    'وجود وكالة سارية في حال كان مقدم الطلب وكيلاً',
    'دفع ضريبة التصرفات العقارية إن وجدت',
  ]

  return (
    <div className="bg-[#0F1B28] text-white min-h-screen overflow-x-hidden" dir="rtl">
      
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B28]/40 via-[#0F1B28]/60 to-[#0F1B28]" />
        </div>

        {/* Decorative Ribbons */}
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden">
          <img src="/gold-ribbon.png" alt="" className="absolute -top-20 -left-40 w-[800px] opacity-20 rotate-12" />
          <img src="/gold-ribbon.png" alt="" className="absolute bottom-0 right-0 w-[600px] opacity-15 -rotate-12" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#D4A373]/5 blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#D4A373]/5 blur-[120px]" />
        </div>

        {/* Header / Navbar مع الشعار و 24/7 */}
        <header className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled 
            ? 'bg-[rgba(15,27,40,0.95)] backdrop-blur-xl border-b border-[#D4A373]/10' 
            : ''
        }`}>
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* ===== الشعار مع الصورة ===== */}
            <Link to="/" className="flex items-center gap-2.5">
              <img 
                src="/logo_fahed.jpg" 
                alt="شعار فهد العتيبي" 
                className="h-10 w-auto rounded-full object-contain border border-[#D4A373]/30 shadow-md transition-all duration-300 hover:rotate-6 hover:scale-105"
              />
              <span className="text-white text-xl font-extrabold tracking-tight">
                فهد <span className="text-[#D4A373]">العتيبي</span>
              </span>
              <span className="flex items-center gap-1 bg-[#D4A373]/10 border border-[#D4A373]/30 rounded-full px-2.5 py-0.5 text-xs font-bold text-[#D4A373]">
                <Clock size={14} />
                24/7
              </span>
            </Link>

            <Link to="/home" className="flex items-center gap-2 text-[#D4A373] hover:text-white transition-colors text-sm font-semibold">
              <span>الدخول للموقع</span>
              <ChevronLeft size={16} />
            </Link>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-24 pb-10">
          
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#D4A373]/20 bg-white/[0.03]">
              <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                معتمد رسمياً – موثق ومسجل عقاري
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
            <span className="text-gradient text-glow">موثق معتمد</span>
            <br />
            <span className="text-white">من وزارة العدل</span>
            <br />
            <span className="text-gradient text-glow">مسجل عقاري معتمد</span>
            <br />
            <span className="text-white">من الهيئة العامة للعقار</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 max-w-2xl mx-auto mb-6 leading-relaxed">
            شريككم المعتمد للتوثيق والتسجيل العقاري الآمن — نقدم حلولاً قانونية متكاملة 
            وسريعة تخدم الأفراد والقطاع التجاري في المملكة العربية السعودية.
          </p>

          {/* ساعات العمل */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm">
            <span className="flex items-center gap-2 text-white/70">
              <Clock size={16} className="text-[#D4A373]" />
              نعمل على مدار الأسبوع
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-[#D4A373] font-bold">24 ساعة طوال أيام الأسبوع</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/966551962166"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-[#128C7E] hover:-translate-y-1 shadow-[0_8px_30px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={20} />
              راسلنا واتساب
            </a>
            <Link
              to="/home"
              className="flex items-center gap-2 border border-[#D4A373]/30 text-[#D4A373] px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-[#D4A373]/10 hover:-translate-y-1"
            >
              استكشف خدماتنا
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-xs tracking-wider">SCROLL</span>
          <ChevronLeft size={20} className="rotate-[-90deg]" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS BAR */}
      {/* ============================================================ */}
      <section className="relative z-10 -mt-8 px-6">
        <div className="max-w-[900px] mx-auto bg-gradient-to-r from-[#1A2A3A] to-[#1A2A3A]/80 backdrop-blur-xl rounded-2xl border border-[#D4A373]/15 p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 shadow-2xl">
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-gradient mb-1">
              +<AnimatedCounter target={2000} />
            </div>
            <div className="text-white/60 text-sm font-medium">عميل موثوق بهم</div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-[#D4A373]/30 to-transparent" />

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-gradient mb-1">
              <AnimatedCounter target={8} />
            </div>
            <div className="text-white/60 text-sm font-medium">سنوات خبرة</div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-[#D4A373]/30 to-transparent" />

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-gradient mb-1">
              <AnimatedCounter target={15} />+
            </div>
            <div className="text-white/60 text-sm font-medium">خدمة متخصصة</div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT SECTION (مع صورة الميزان) */}
      {/* ============================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A373]/20 bg-white/[0.03] mb-6">
                <Users size={16} className="text-[#D4A373]" />
                <span className="text-sm font-medium text-[#D4A373]">من نحن؟</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                امتداداً لخبرتنا <span className="text-gradient">القانونية</span>
              </h2>
              
              <p className="text-white/60 leading-[1.8] text-lg mb-6">
                نقدم موثقين معتمدين ومسجلين عقاريين لتقديم خدمات متكاملة للأفراد والمنشآت. 
                نعمل على تلبية احتياجاتكم بدقة وسرعة في إفراغ الصكوك والرهون، إصدار الوكالات، 
                توثيق الإقرارات المالية، لضمان حماية حقوقكم وفق الأنظمة المرعية بالمملكة.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center">
                    <Shield size={18} className="text-[#D4A373]" />
                  </div>
                  <span className="text-sm text-white/80">معتمد من وزارة العدل</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center">
                    <FileCheck size={18} className="text-[#D4A373]" />
                  </div>
                  <span className="text-sm text-white/80">مسجل عقاري معتمد</span>
                </div>
              </div>
            </div>

            {/* ✅ صورة الميزان - المسار المعدل */}
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
                    <div className="text-sm font-bold text-white">موثق ومسجل معتمد</div>
                    <div className="text-xs text-white/50">خدمة آمنة وسريعة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES SECTION */}
      {/* ============================================================ */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <img src="/gold-ribbon.png" alt="" className="absolute -top-40 -right-60 w-[800px] opacity-5 rotate-45" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full border border-[#D4A373]/20 bg-white/[0.03] text-sm font-medium text-[#D4A373] mb-4">
              الخدمات
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              خدمات الموثق <span className="text-gradient">المعتمد</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              تعد خدمات التوثيق ركيزة أساسية للأفراد والشركات في المملكة العربية السعودية
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.06] rounded-2xl p-8 transition-all duration-300 hover:border-[#D4A373]/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A373]/20 to-[#D4A373]/5 flex items-center justify-center text-[#D4A373] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#D4A373] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                <a
                  href="https://wa.me/966551962166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#D4A373] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  تواصل معنا <ChevronLeft size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* POWERS OF ATTORNEY SECTION */}
      {/* ============================================================ */}
      <section className="py-24 px-6 bg-[#0A131D]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full border border-[#D4A373]/20 bg-white/[0.03] text-sm font-medium text-[#D4A373] mb-4">
              أنواع الوكالات
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              الوكالات التي <span className="text-gradient">يصدرها الموثق</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {powers.map((power, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 hover:border-[#D4A373]/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck size={14} className="text-[#D4A373]" />
                </div>
                <span className="text-sm font-medium text-white/90">{power}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* REQUIREMENTS SECTION */}
      {/* ============================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-[#D4A373]/20 bg-white/[0.03] text-sm font-medium text-[#D4A373] mb-6">
                المتطلبات
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                متطلبات <span className="text-gradient">الخدمة</span>
              </h2>
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A373]/10 border border-[#D4A373]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A373]/20 transition-colors">
                      <span className="text-[#D4A373] font-bold text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-white/70 pt-2">{req}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373]/10 to-transparent rounded-3xl blur-3xl" />
              <img 
                src="/pattern-gold.jpg" 
                alt="" 
                className="relative z-10 rounded-3xl max-w-[400px] w-full opacity-60 border border-[#D4A373]/10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA SECTION */}
      {/* ============================================================ */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F1B28] to-[#0A131D]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="relative bg-gradient-to-br from-white/[0.06] to-transparent border border-[#D4A373]/15 rounded-3xl p-10 md:p-16">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#D4A373] flex items-center justify-center shadow-lg shadow-[#D4A373]/20">
              <MessageSquare size={20} className="text-[#0F1B28]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">
              جاهز لخدمتك <span className="text-gradient">الآن</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              هل تحتاج إلى توثيق وكالة، إفراغ عقاري، أو تسجيل عيني؟ 
              نحن هنا لنقدّم لك الخدمة باعتماد رسمي، سرعة في التنفيذ، وبدون عناء الإجراءات التقليدية.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/966551962166"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#128C7E] hover:-translate-y-1 shadow-[0_8px_30px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle size={18} />
                واتساب : 966551962166+
              </a>
              <a
                href="tel:+966551962166"
                className="flex items-center gap-2 border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/5 hover:-translate-y-1"
              >
                <Phone size={18} />
                الهاتف : 966551962166+
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="bg-[#080F17] border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="text-[#D4A373]" size={20} />
            <span className="text-white font-bold">فهد العتيبي</span>
            <span className="text-white/40 text-sm">| موثق ومسجل عقاري معتمد</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link to="/home" className="hover:text-[#D4A373] transition-colors">
              الدخول للموقع
            </Link>
            <a 
              href="https://wa.me/966551962166" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#D4A373] transition-colors"
            >
              تواصل واتساب
            </a>
          </div>
          <p className="text-white/30 text-xs">© 2026 جميع الحقوق محفوظة</p>
        </div>
      </footer>

    </div>
  )
}