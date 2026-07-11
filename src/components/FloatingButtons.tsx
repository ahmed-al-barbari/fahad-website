import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-[998] flex flex-col gap-3">
      <a
        href="tel:+966551962166"
        className="w-12 h-12 rounded-full bg-[#1A2A3A] border border-[#D4A373]/30 flex items-center justify-center text-[#D4A373] shadow-lg hover:bg-[#D4A373] hover:text-[#1A2A3A] transition-all duration-300 hover:scale-110"
        aria-label="اتصال"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://wa.me/966551962166"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110"
        aria-label="واتساب"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  )
}
