import { useState } from "react";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Mail,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*استفسار جديد من الموقع*%0A%0A*الاسم:* ${formData.name}%0A*الجوال:* ${formData.phone}%0A*الخدمة:* ${formData.service}%0A*الرسالة:* ${formData.message}`;
    window.open(`https://wa.me/966551962166?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const services = [
    "الإفراغ العقاري",
    "إصدار وكالة",
    "فسخ وكالة",
    "الإقرارات المالية",
    "الرهن العقاري",
    "فك رهن عقاري",
    "إفراغ ورهن العقار",
    "تصحيح رهن عقاري",
    "تسجيل عقاري",
    "أخرى",
  ];

  return (
    <div
      className="bg-[var(--color-bg-light)] min-h-screen pt-24 pb-16"
      dir="rtl"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-brown-dark)]/5 border border-[var(--color-brown-gold)]/20 mb-4">
            <MessageCircle
              size={16}
              className="text-[var(--color-brown-gold)]"
            />
            <span className="text-sm font-medium text-[var(--color-brown-dark)]">
              تواصل معنا
            </span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[var(--color-brown-dark)] mb-4">
            جاهز لخدمتك{" "}
            <span className="text-[var(--color-brown-gold)]">الآن</span>
          </h1>
          <p className="text-[var(--color-brown-dark)]/50 max-w-2xl mx-auto text-lg">
            هل تحتاج إلى توثيق وكالة، إفراغ عقاري، أو استشارة قانونية؟ نحن هنا
            لنقدّم لك الخدمة باعتماد رسمي وسرعة في التنفيذ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-brown-gold)]/10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brown-gold)]/10 flex items-center justify-center">
                  <Shield
                    size={24}
                    className="text-[var(--color-brown-gold)]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-brown-dark)]">
                    موثق ومسجل عقاري
                  </h3>
                  <p className="text-sm text-[var(--color-brown-dark)]/50">
                    فهد العتيبي
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href="https://wa.me/966551962166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-colors group"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--color-brown-dark)]">
                      واتساب
                    </p>
                    <p className="text-sm text-[var(--color-brown-dark)]/60 group-hover:text-[#25D366] transition-colors">
                      966551962166+
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+966551962166"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-brown-dark)]/5 border border-[var(--color-brown-dark)]/10 hover:bg-[var(--color-brown-dark)]/10 transition-colors group"
                >
                  <Phone size={20} className="text-[var(--color-brown-dark)]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--color-brown-dark)]">
                      الهاتف
                    </p>
                    <p className="text-sm text-[var(--color-brown-dark)]/60 group-hover:text-[var(--color-brown-dark)] transition-colors">
                      966551962166+
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:Fahd.511.2020@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-brown-gold)]/5 border border-[var(--color-brown-gold)]/10 hover:bg-[var(--color-brown-gold)]/10 transition-colors group"
                >
                  <Mail size={20} className="text-[var(--color-brown-gold)]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--color-brown-dark)]">
                      البريد الإلكتروني
                    </p>
                    <p className="text-sm text-[var(--color-brown-gold)] group-hover:underline">
                      Fahd.511.2020@gmail.com
                    </p>
                  </div>
                </a>
                {/* ✅ أوقات العمل المعدلة */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-brown-gold)]/5 border border-[var(--color-brown-gold)]/10">
                  <Clock size={20} className="text-[var(--color-brown-gold)]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--color-brown-dark)]">
                      أوقات العمل
                    </p>
                    <p className="text-sm text-[var(--color-brown-gold)] font-semibold">
                      24 ساعة طوال أيام الأسبوع
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-brown-gold)]/5 border border-[var(--color-brown-gold)]/10">
                  <MapPin
                    size={20}
                    className="text-[var(--color-brown-gold)]"
                  />
                  <div>
                    <p className="text-sm font-medium text-[var(--color-brown-dark)]">
                      الموقع
                    </p>
                    <p className="text-sm text-[var(--color-brown-dark)]/60">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-brown-gold)]/10 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--color-brown-dark)] mb-6">
              أرسل استفسارك
            </h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-[#25D366]" />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-brown-dark)] mb-2">
                  تم إرسال رسالتك!
                </h4>
                <p className="text-[var(--color-brown-dark)]/60">
                  سنقوم بالرد عليك في أقرب وقت عبر الواتساب
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-brown-dark)] mb-2">
                    الاسم الكريم
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-brown-gold)]/20 bg-[var(--color-bg-light)] text-[var(--color-brown-dark)] focus:outline-none focus:border-[var(--color-brown-gold)] focus:ring-2 focus:ring-[var(--color-brown-gold)]/20 transition-all"
                    placeholder="أدخل اسمك الكريم"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-brown-dark)] mb-2">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-brown-gold)]/20 bg-[var(--color-bg-light)] text-[var(--color-brown-dark)] text-right focus:outline-none focus:border-[var(--color-brown-gold)] focus:ring-2 focus:ring-[var(--color-brown-gold)]/20 transition-all"
                    placeholder="05xxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-brown-dark)] mb-2">
                    الخدمة المطلوبة
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-brown-gold)]/20 bg-[var(--color-bg-light)] text-[var(--color-brown-dark)] focus:outline-none focus:border-[var(--color-brown-gold)] focus:ring-2 focus:ring-[var(--color-brown-gold)]/20 transition-all"
                  >
                    <option value="">اختر الخدمة</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-brown-dark)] mb-2">
                    الرسالة (اختياري)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-brown-gold)]/20 bg-[var(--color-bg-light)] text-[var(--color-brown-dark)] focus:outline-none focus:border-[var(--color-brown-gold)] focus:ring-2 focus:ring-[var(--color-brown-gold)]/20 transition-all resize-none"
                    placeholder="اكتب استفسارك أو تفاصيل إضافية..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 btn-gold py-4 rounded-full font-bold text-white"
                >
                  <Send size={18} />
                  إرسال عبر الواتساب
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
