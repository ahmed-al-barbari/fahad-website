import { BookOpen, Tag, X } from 'lucide-react'
import { useState } from 'react'

interface Article {
  id: number
  title: string
  excerpt: string
  tag: string
  image: string
  fullContent: string
}

const allArticles: Article[] = [
  {
    id: 2,
    title: 'توثيق رهن عقاري في الرياض – من التسجيل إلى فك الرهن',
    excerpt: 'تعرف على خطوات توثيق الرهن العقاري في الرياض، من التسجيل الأولي وحتى فك الرهن بشكل قانوني وآمن.',
    tag: 'خدمات توثيق',
    image: 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?w=600&h=400&fit=crop&crop=center',
    fullContent: 'توثيق الرهن العقاري هو عملية قانونية تهدف إلى تأمين الديون عن طريق رهن عقار كضمان. تبدأ العملية بتسجيل الرهن في السجل العقاري، حيث يتم توثيق جميع البيانات والمستندات المطلوبة. بعد سداد القرض بالكامل، يتم فك الرهن وإصدار صك جديد خالٍ من أي التزامات. في الرياض، نقدم خدمة توثيق الرهن العقاري وفكه بسرعة ودقة، مع متابعة كافة الإجراءات حتى اكتمالها بشكل قانوني وآمن.',
  },
  {
    id: 3,
    title: 'عقد هبة عقار غير مسجل – كيف تعالجه عبر الموثق والسجل العيني',
    excerpt: 'تعرف على كيفية التعامل مع عقود هبة العقارات غير المسجلة من خلال الموثق المعتمد وإجراءات السجل العيني.',
    tag: 'خدمات توثيق',
    image: 'https://images.pexels.com/photos/3184326/pexels-photo-3184326.jpeg?w=600&h=400&fit=crop&crop=center',
    fullContent: 'الهبة هي نقل ملكية العقار دون مقابل مادي. في حال كان العقار غير مسجل، يجب أولاً تسجيله في السجل العيني عبر موثق معتمد. تشمل الخطوات: تقديم طلب التسجيل، إرفاق المستندات الداعمة (صك الملكية، الهوية، عقد الهبة)، ودفع الرسوم المطلوبة. بعد التسجيل، يتم إصدار صك جديد باسم الموهوب له. نقدم في الرياض خدمة متكاملة لتسجيل عقود الهبة غير المسجلة، مع متابعة كافة الإجراءات نيابة عنكم.',
  },
  {
    id: 4,
    title: 'نقل ملكية عقار هبة في الرياض – توثيق هبة بين الأقارب خطوة بخطوة',
    excerpt: 'دليل شامل لنقل ملكية العقار بالهبة بين الأقارب في الرياض، مع الخطوات التفصيلية والمتطلبات القانونية.',
    tag: 'خدمات توثيق',
    image: 'https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?w=600&h=400&fit=crop&crop=center',
    fullContent: 'نقل ملكية العقار بالهبة بين الأقارب يتطلب توثيقاً رسمياً. تبدأ العملية بتجهيز عقد الهبة، ثم التوجه إلى الموثق لتوثيقه. يجب إحضار: صك الملكية، بطاقات الهوية للطرفين، وأي مستندات تدعم العلاقة الأسرية. بعد التوثيق، يتم تحديث السجل العقاري وإصدار صك جديد باسم الموهوب له. في الرياض، نقدم خدمة توثيق هبات العقارات بين الأقارب بكل سهولة وسرعة، مع ضمان الامتثال للأنظمة المرعية.',
  },
  {
    id: 5,
    title: 'إفراغ عقار ورثة في الرياض – خطوات نقل الملكية وموعد الموثق',
    excerpt: 'تعرف على خطوات إفراغ عقار الورثة في الرياض، من حصر التركة حتى إصدار الصكوك الجديدة بأسماء الورثة.',
    tag: 'خدمات توثيق',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&h=400&fit=crop&crop=center',
    fullContent: 'إفراغ عقار الورثة يتطلب حصر التركة أولاً، ثم توزيع الأنصبة الشرعية على الورثة. تشمل الخطوات: استخراج صك حصر ورثة، تحديد حصة كل وريث، وتوثيق الإفراغ لدى الموثق. يجب إحضار: صك حصر الورثة، بطاقات هوية الورثة، وصك الملكية الأصلي. نقوم في الرياض بتسهيل كامل الإجراءات، من حصر التركة إلى إصدار الصكوك الجديدة باسم كل وريث، مع مراعاة الدقة والسرعة في التنفيذ.',
  },
  {
    id: 7,
    title: 'إصدار وكالة إلكترونية للأفراد والشركات – الدليل الشامل',
    excerpt: 'دليلك الشامل لإصدار الوكالات الإلكترونية للأفراد والشركات بجميع أنواعها، مع خطوات التطبيق والمتطلبات.',
    tag: 'وكالات',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=600&h=400&fit=crop&crop=center',
    fullContent: 'إصدار الوكالات الإلكترونية أصبح متاحاً بسهولة عبر منصة "ناجز". تشمل الخدمة: اختيار نوع الوكالة، إدخال بيانات الأطراف، وتحديد صلاحيات الوكيل. يتم اعتماد الوكالة إلكترونياً دون الحاجة لمراجعة كتابة العدل. نقدم في الرياض خدمة إصدار جميع أنواع الوكالات الإلكترونية للأفراد والشركات، بما في ذلك الوكالات العقارية، التجارية، والقضائية، مع متابعة كامل الإجراءات حتى الاعتماد النهائي.',
  },
  {
    id: 9,
    title: 'تصحيح الرهن العقاري – متى وكيف يتم؟',
    excerpt: 'تعرف على حالات التي يكون فيها تصحيح الرهن العقاري ضرورياً، والخطوات القانونية لإتمامه.',
    tag: 'خدمات توثيق',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?w=600&h=400&fit=crop&crop=center',
    fullContent: 'تصحيح الرهن العقاري ضروري في حالات: وجود أخطاء في بيانات الرهن، تغيير في مبلغ القرض، أو تعديل في شروط الرهن. تشمل الخطوات: تقديم طلب تصحيح، إرفاق المستندات الداعمة، وتوثيق التصحيح لدى الموثق. نقوم في الرياض بتقديم خدمة تصحيح الرهن العقاري بشكل احترافي، مع ضمان صحة جميع البيانات وحجيتها القانونية، وبأسرع وقت ممكن.',
  },
]

const allTags = ['الكل', ...new Set(allArticles.map(a => a.tag))]

export default function ArticlesPage() {
  const [selectedTag, setSelectedTag] = useState('الكل')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const filteredArticles = selectedTag === 'الكل'
    ? allArticles
    : allArticles.filter(article => article.tag === selectedTag)

  return (
    <div className="bg-[#F8F7F4] min-h-screen pt-24 pb-16" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2A3A]/5 border border-[#D4A373]/20 mb-4">
            <BookOpen size={16} className="text-[#D4A373]" />
            <span className="text-sm font-medium text-[#1A2A3A]">المقالات</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#1A2A3A] mb-4">
            احدث <span className="text-[#D4A373]">المقالات</span>
          </h1>
          <p className="text-[#1A2A3A]/50 max-w-2xl mx-auto text-lg">
            مقالات ونصائح قانونية في مجال التوثيق والتسجيل العقاري
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? 'bg-[#1A2A3A] text-white shadow-md'
                  : 'bg-white border border-[#D4A373]/10 text-[#1A2A3A]/70 hover:border-[#D4A373]/30 hover:bg-[#D4A373]/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D4A373]/10 transition-all duration-300 hover:border-[#D4A373]/30 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
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
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4A373]/10 text-[#D4A373] text-xs font-medium">
                    <Tag size={10} />
                    {article.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1A2A3A] mb-3 group-hover:text-[#D4A373] transition-colors line-clamp-2 leading-relaxed">
                  {article.title}
                </h3>
                <p className="text-[#1A2A3A]/50 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 text-[#1A2A3A]/50">
            لا توجد مقالات في هذا التصنيف حالياً
          </div>
        )}
      </div>

      {/* ===== Modal ===== */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div 
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زر الإغلاق */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-[#1A2A3A] hover:text-[#D4A373] transition-colors"
            >
              <X size={20} />
            </button>

            {/* صورة المقال في المودال */}
            <div className="h-56 overflow-hidden relative">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 right-6">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#D4A373]/20 backdrop-blur-sm text-[#D4A373] text-sm font-medium">
                  <Tag size={14} />
                  {selectedArticle.tag}
                </span>
              </div>
            </div>

            {/* محتوى المقال */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#1A2A3A] mb-4">
                {selectedArticle.title}
              </h2>
              <div className="prose prose-sm max-w-none text-[#1A2A3A]/80 leading-relaxed space-y-4">
                <p>{selectedArticle.fullContent}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-[#D4A373]/10">
                <a
                  href="https://wa.me/966551962166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold transition-all hover:bg-[#128C7E] hover:-translate-y-1 shadow-md"
                >
                  <BookOpen size={18} />
                  استشر الموثق الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}