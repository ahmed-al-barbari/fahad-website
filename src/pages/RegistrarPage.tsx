import { useState } from 'react'
import { Building2, FileCheck, ChevronLeft, X, MessageCircle, Shield, BadgeCheck, Users, BookOpen } from 'lucide-react'

interface Service {
  id: number
  icon: React.ReactNode
  title: string
  desc: string
  fullDesc: string
}

const services: Service[] = [
  {
    id: 1,
    icon: <FileCheck size={32} />,
    title: 'تسجيل العقار لأول مرة',
    desc: 'نقدم الدعم في تسجيل العقارات في السجل العقاري',
    fullDesc: 'نقدم الدعم في تسجيل العقارات في السجل العقاري لأول مرة، مما يمنحها رقماً عقارياً فريداً وصك ملكية مستقل يتضمن كافة بيانات العقار وأوصافه وتفاصيله بدقة وحجية مطلقة.',
  },
  {
    id: 2,
    icon: <Building2 size={32} />,
    title: 'نقل ملكية العقار',
    desc: 'توثيق ونقل ملكية العقارات إلكترونياً',
    fullDesc: 'خدمة تتيح توثيق ونقل ملكية العقارات من شخص إلى آخر إلكترونياً وبشكل فوري عبر مسجل عقاري معتمد، لضمان حماية واستقرار حقوق الأطراف المعنية وفق الأنظمة المرعية.',
  },
  {
    id: 3,
    icon: <Shield size={32} />,
    title: 'إفراغ العقارات المسجلة عيناً',
    desc: 'إجراءات إفراغ العقارات المسجلة عيناً',
    fullDesc: 'نتولى إجراءات إفراغ العقارات المسجلة عيناً وإتمام المعاملات بمرونة كاملة، سواء كان الإفراغ ناتجاً عن عمليات البيع والشراء أو تم بموجب الهبة الشرعية بين الأطراف.',
  },
  {
    id: 4,
    icon: <BookOpen size={32} />,
    title: 'إدارة الحقوق والقيود والالتزامات',
    desc: 'تسجيل وحفظ الحقوق والقيود المترتبة على العقار',
    fullDesc: 'خدمة تسجيل وحفظ كافة الحقوق والقيود والالتزامات المترتبة على العقار، مثل توثيق الرهون الرسمية وحقوق الوقف والارتفاق، لضمان الشفافية المطلقة للملكية العقارية.',
  },
  {
    id: 5,
    icon: <FileCheck size={32} />,
    title: 'توثيق التصرفات العقارية',
    desc: 'رصد وتسجيل التصرفات القانونية على العقارات',
    fullDesc: 'نقوم برصد وتسجيل جميع التصرفات القانونية والتغيرات التي تطرأ على العقارات، مثل عقود البيع، الهبة، والوصية، وتحديث بياناتها مباشرة في أنظمة السجل العقاري.',
  },
  {
    id: 6,
    icon: <BadgeCheck size={32} />,
    title: 'التحقق من صكوك الملكية',
    desc: 'التأكد من صحة وسلامة صكوك الملكية',
    fullDesc: 'التأكد من صحة وسلامة صكوك الملكية وتسجيلها في السجل العقاري، مع توثيق الحجية القانونية لكل صك والتحقق من بياناته.',
  },
  {
    id: 7,
    icon: <Users size={32} />,
    title: 'نقل ملكية العقار للورثة',
    desc: 'توثيق إجراءات انتقال ملكية العقارات للورثة',
    fullDesc: 'نتولى توثيق وإتمام إجراءات انتقال ملكية العقارات المسجلة عيناً من المورّث إلى الورثة بموجب صك حصر الورثة، وتحديث بيانات الملاك الجدد في السجل العقاري وإصدار الصكوك المستقلة بكل دقة وسرعة.',
  },
  {
    id: 8,
    icon: <Building2 size={32} />,
    title: 'دمج الصكوك والأراضي المسجلة',
    desc: 'إنهاء إجراءات دمج عدة قطع أراضٍ',
    fullDesc: 'نساعدكم في إنهاء إجراءات دمج عدة قطع أراضٍ أو عقارات متجاورة مسجلة عيناً في صك ملكية واحد موحد، لتسهيل عمليات التطوير العقاري الكبرى والاستثمارات الضخمة.',
  },
]

export default function RegistrarPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <div className="bg-[#F8F7F4] min-h-screen pt-24 pb-16" dir="rtl">
      {/* Hero */}
      <div className="relative mb-16">
        <div className="absolute inset-0 z-0">
          <img src="/registrar-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F4] via-[#F8F7F4]/90 to-[#F8F7F4]/70" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 py-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-4">
            <BadgeCheck size={16} className="text-[#D4A373]" />
            <span className="text-sm font-medium text-[#1A2A3A]">مسجل عقاري معتمد</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#1A2A3A] mb-4">
            مسجل عقاري معتمد من <span className="text-[#D4A373]">الهيئة العامة للعقار</span>
          </h1>
          <p className="text-[#1A2A3A]/50 max-w-2xl mx-auto text-lg">
            مسجل عقاري معتمد، نوثق معاملاتك العقارية بدقة واحترافية – مئات العملاء اختاروا خدمتنا لضمان حقوقهم بأمان.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group bg-white rounded-2xl p-6 border border-[#D4A373]/10 text-right transition-all duration-300 hover:border-[#D4A373]/30 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] mb-4 group-hover:bg-[#D4A373]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A2A3A] mb-2 group-hover:text-[#D4A373] transition-colors">{service.title}</h3>
              <p className="text-[#1A2A3A]/50 text-sm leading-relaxed line-clamp-2">{service.desc}</p>
              <span className="inline-flex items-center gap-1 text-[#D4A373] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                التفاصيل <ChevronLeft size={14} />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 bg-[#1A2A3A] rounded-2xl p-8 text-center">
          <p className="text-white/80 text-lg mb-6">
            هل لديك استفسار حول خدمات المسجل العقاري المعتمد؟ تواصل معنا الآن للحصول على استشارة مجانية.
          </p>
          <a
            href="https://wa.me/966551962166"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#128C7E] hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            تواصل معنا
          </a>
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#F8F7F4] flex items-center justify-center text-[#1A2A3A] hover:bg-[#1A2A3A] hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
            <div className="w-16 h-16 rounded-2xl bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] mb-5">
              {selectedService.icon}
            </div>
            <span className="text-xs text-[#D4A373] font-medium">{String(selectedService.id).padStart(2, '0')}</span>
            <h3 className="text-2xl font-black text-[#1A2A3A] mt-1 mb-4">{selectedService.title}</h3>
            <p className="text-[#1A2A3A]/60 leading-relaxed mb-6">{selectedService.fullDesc}</p>
            <a
              href={`https://wa.me/966551962166?text=${encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن خدمة: ' + selectedService.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-full font-bold transition-all hover:bg-[#128C7E]"
            >
              <MessageCircle size={18} />
              تواصل معنا واتساب
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
