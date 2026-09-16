import arcoseLogo from '../../assets/images/arcose-logo-croppedd.png'
function AIAssistantButton({ onClick }) {
  return (
    <div className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-50 motion-safe:animate-[arcose-float_4s_ease-in-out_infinite] sm:right-6 sm:bottom-6">
      <button
        className="group inline-flex h-14 items-center gap-2.5 rounded-2xl bg-[#8F1823] px-5 text-sm font-bold text-[#F8F7F3] shadow-lg shadow-[#181818]/30 transition duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#181818]/40 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#F3E5E7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F7F3] focus-visible:outline-none sm:h-16 sm:px-6"
        type="button"
        aria-label="Open Arcose AI Assistant"
        onClick={onClick}
      >
        <img
  className="size-6 object-contain"
  src={arcoseLogo}
  alt=""
  aria-hidden="true"
/>
        <span>Ask me</span>
      </button>
    </div>
  )
}

export default AIAssistantButton
