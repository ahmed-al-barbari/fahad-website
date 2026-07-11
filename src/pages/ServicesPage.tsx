import { useState } from 'react'
import { 
  FileCheck, Scale, ScrollText, Building2, Briefcase, Shield, 
  ChevronLeft, X, MessageCircle, Users, FileSignature, 
  RefreshCw, Home, Gavel, Handshake, UserCheck, 
  TrendingUp, Building, 
} from 'lucide-react'

interface Service {
  id: number
  icon: React.ReactNode
  title: string
  desc: string
  fullDesc: string
  whatsappText: string
}

const services: Service[] = [
  // ===== الخدمات العقارية الأساسية =====
  {
    id: 1,
    icon: <FileCheck size={32} />,
    title: 'الإفراغ العقاري',
    desc: 'إفراغ العقار كبائع إلى المشتري بالبيع أو الهبة أو الورث',
    fullDesc: 'تمكنك الخدمة من إفراغ العقار كبائع إلى المشتري سواء بالبيع أو الهبة أو الورث، وسواءً كنت أصيلاً عن نفسك، أو بصفتك وكيلاً عن فرد، أو ممثلاً عن شركة أو جهة. تشمل الخدمة إفراغ العقارات للورثة، القصر، الغائب، المفقود، الأجانب، الخليجيين، والمستثمرين.',
    whatsappText: 'السلام عليكم، أرغب في خدمة الإفراغ العقاري'
  },
  {
    id: 2,
    icon: <Scale size={32} />,
    title: 'إصدار وكالة',
    desc: 'إصدار الوكالات إلكترونياً بجميع أنواعها',
    fullDesc: 'خدمة تتيح لكم إصدار الوكالات إلكترونياً بجميع أنواعها وأشكالها، سواءً كانت وكالة للأفراد أو الشركات، داخلية أو خارجية، وبتأشيرة زيارة أو إقامة. يتم اعتمادها فورياً دون الحاجة لزيارة كتابة العدل.',
    whatsappText: 'السلام عليكم، أرغب في خدمة إصدار وكالة'
  },
  {
    id: 3,
    icon: <ScrollText size={32} />,
    title: 'الإقرارات المالية',
    desc: 'توثيق الإقرارات المالية إلكترونياً',
    fullDesc: 'خدمة تتيح لكم توثيق الإقرارات المالية إلكترونياً عبر موثق معتمد، وتشمل: توثيق إقرار بالدين، إقرار بالسداد الكلي أو الجزئي، وإقرار بالتنازل أو استلام المبالغ المالية لضمان الحقوق بشكل رسمي.',
    whatsappText: 'السلام عليكم، أرغب في خدمة الإقرارات المالية'
  },
  {
    id: 4,
    icon: <Building2 size={32} />,
    title: 'الرهن العقاري',
    desc: 'رهن العقارات وفك الرهن وتعديله',
    fullDesc: 'تمكنكم هذه الخدمة من رهن العقارات، فك رهن العقار، أو تعديل وتصحيح صك الرهن العقاري. يقدم الموثق المعتمد خدمات توثيق الرهن العقاري للمنشآت والأفراد بسرعة ودقة.',
    whatsappText: 'السلام عليكم، أرغب في خدمة الرهن العقاري'
  },
  {
    id: 5,
    icon: <Briefcase size={32} />,
    title: 'فسخ وكالة',
    desc: 'إلغاء وفسخ الوكالات إلكترونياً',
    fullDesc: 'تمكنكم هذه الخدمة من إلغاء وفسخ الوكالات إلكترونياً بشكل فوري ومباشر، دون الحاجة لزيارة كتابة العدل، ويتم إشعار أطراف الوكالة فور إتمام الإجراء.',
    whatsappText: 'السلام عليكم، أرغب في خدمة فسخ وكالة'
  },
  {
    id: 6,
    icon: <Shield size={32} />,
    title: 'فك رهن عقاري',
    desc: 'فك الرهن العقاري بعد سداد القروض',
    fullDesc: 'عند سداد القروض أو الالتزامات المالية، يتولى الموثق المعتمد إجراءات فك الرهن العقاري بشكل فوري، لضمان رفع الضمانات عن الصك العقاري وتحديثه إلكترونياً بطريقة قانونية.',
    whatsappText: 'السلام عليكم، أرغب في خدمة فك رهن عقاري'
  },
  {
    id: 7,
    icon: <Handshake size={32} />,
    title: 'إفراغ ورهن العقار',
    desc: 'دمج الإفراغ العقاري والرهن في معاملة واحدة',
    fullDesc: 'نقدم خدمة دمج الإفراغ العقاري والرهن في معاملة واحدة، لضمان نقل ملكية العقار وتوثيق الرهن في آن واحد وبشكل فوري؛ مما يسهل عمليات البيع والشراء المدعومة بالتمويل.',
    whatsappText: 'السلام عليكم، أرغب في خدمة إفراغ ورهن العقار'
  },
  {
    id: 8,
    icon: <RefreshCw size={32} />,
    title: 'تصحيح رهن عقاري',
    desc: 'تصحيح الرهن وتحديث البيانات إلكترونياً',
    fullDesc: 'في حال وجود أخطاء أو نواقص في وثائق الرهن العقاري، يقدم الموثق خدمات تصحيح الرهن وتحديث البيانات إلكترونياً، لضمان صحة وحجية الصكوك والوثائق القانونية.',
    whatsappText: 'السلام عليكم، أرغب في خدمة تصحيح رهن عقاري'
  },

  // ===== الخدمات الجديدة المضافة (حسب طلب العميل) =====
  {
    id: 9,
    icon: <UserCheck size={32} />,
    title: 'صك ولاية على قاصر',
    desc: 'استخراج صك ولاية على قاصر سناً أو عقلاً',
    fullDesc: 'خدمة استخراج صك ولاية شرعية على القاصرين (سناً أو عقلاً) من خلال الموثق المعتمد، لتأهيل ولي الأمر للتصرف في أموال القاصر وممتلكاته العقارية وفق الأنظمة المرعية في المملكة العربية السعودية.',
    whatsappText: 'السلام عليكم، أرغب في خدمة صك ولاية على قاصر'
  },
  {
    id: 10,
    icon: <Users size={32} />,
    title: 'تحديث صك حصر ورثة',
    desc: 'تحديث صكوك حصر الورثة بشكل رسمي',
    fullDesc: 'خدمة تحديث صكوك حصر الورثة إلكترونياً عبر موثق معتمد، لتحديث بيانات الورثة وعددهم وحصصهم الشرعية، لضمان صحة وسلامة التوزيع الشرعي للميراث وتحديث البيانات في السجل العقاري.',
    whatsappText: 'السلام عليكم، أرغب في خدمة تحديث صك حصر ورثة'
  },
  {
    id: 11,
    icon: <FileSignature size={32} />,
    title: 'تحديث الصكوك العقارية',
    desc: 'تحديث وتصحيح الصكوك العقارية إلكترونياً',
    fullDesc: 'خدمة تحديث الصكوك العقارية إلكترونياً، تشمل تغيير الهوية العقارية للعقار، تحديث بيانات الملاك، تصحيح الأخطاء، وإصدار صكوك محدثة وفق آخر التحديثات النظامية من وزارة العدل والهيئة العامة للعقار.',
    whatsappText: 'السلام عليكم، أرغب في خدمة تحديث الصكوك العقارية'
  },
  {
    id: 12,
    icon: <Building size={32} />,
    title: 'تغيير الهوية العقارية',
    desc: 'تغيير الهوية العقارية للعقار وفق الأنظمة',
    fullDesc: 'خدمة تغيير الهوية العقارية للعقار (مثل تغيير الاستخدام من سكني إلى تجاري، أو العكس) من خلال الموثق المعتمد، مع تحديث البيانات في السجل العيني وإصدار صك جديد يعكس الهوية الجديدة للعقار.',
    whatsappText: 'السلام عليكم، أرغب في خدمة تغيير الهوية العقارية'
  },
  {
    id: 13,
    icon: <Gavel size={32} />,
    title: 'التسجيل العيني الأول',
    desc: 'تسجيل العقار في السجل العيني لأول مرة',
    fullDesc: 'خدمة التسجيل العيني الأول للعقار في السجل العقاري، حيث يتم إصدار صك ملكية مستقل يتضمن كافة بيانات العقار وأوصافه وتفاصيله، مع منحه رقماً عقارياً فريداً وحجية مطلقة.',
    whatsappText: 'السلام عليكم، أرغب في خدمة التسجيل العيني الأول'
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <div className="bg-[#F8F7F4] min-h-screen pt-24 pb-16" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-4">
            <FileCheck size={16} className="text-[#D4A373]" />
            <span className="text-sm font-medium text-[#1A2A3A]">الخدمات</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#1A2A3A] mb-4">
            خدمات الموثق والمسجل <span className="text-[#D4A373]">العقاري</span>
          </h1>
          <p className="text-[#1A2A3A]/50 max-w-2xl mx-auto text-lg">
            جميع خدمات كتابة العدل الافتراضية والبورصة العقارية – إفراغ، وكالات، رهون، إقرارات، تسجيل عيني، وتحديث الصكوك – بسرعة وموثوقية تامة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            موثق ومسجل عقاري معتمد – نقدم جميع خدمات كتابة العدل الافتراضية والبورصة العقارية بدقة واحترافية. أكثر من 2000 عميل وثقوا بنا.
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

      {/* ===== نافذة التفاصيل المنبثقة ===== */}
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
              href={`https://wa.me/966551962166?text=${encodeURIComponent(selectedService.whatsappText)}`}
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