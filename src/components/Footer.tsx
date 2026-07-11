import { Link } from 'react-router'
import { Phone, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { label: 'الصفحة الرئيسية', href: '/home' },
    { label: 'الموثق والمسجل العقاري', href: '/services' },
    { label: 'مسجل عقاري معتمد', href: '/registrar' },
    { label: 'المقالات', href: '/articles' },
  ]

  return (
    <footer className="bg-[#0F1B28] text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <ShieldCheck className="text-[#D4A373]" size={28} />
              <h3 className="text-xl font-bold">موثق ومسجل عقاري – فهد العتيبي</h3>
            </div>
              <p className="text-white/60 text-sm leading-relaxed">
                خدمات موثقة رسميًا تشمل الإفراغ العقاري، إصدار الوكالات، الرهون، والإقرارات المالية – بسرعة وموثوقية تامة
              </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 relative inline-block pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-[#D4A373]">
              تواصل معنا
            </h4>
            <div className="space-y-2 text-white/70 text-sm">
              <p>واتساب : 966551962166+</p>
              <p>الهاتف : 966551962166+</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 relative inline-block pb-2 after:absolute after:bottom-0 after:right-0 after:left-auto after:w-12 after:h-0.5 after:bg-[#D4A373]">
              روابط سريعة
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-white/70 hover:text-[#D4A373] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2025 جميع الحقوق محفوظة – الأستاذ فهد العتيبي</p>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-[#128C7E] hover:-translate-y-0.5"
          >
            <Phone size={14} />
            تواصل معنا
          </Link>
        </div>
      </div>
    </footer>
  )
}
