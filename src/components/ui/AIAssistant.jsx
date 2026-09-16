import { useEffect, useRef, useState } from 'react'
import arcoseLogo from '../../assets/images/arcose-logo-croppedd.png'


const initialMessages = [
  {
    id: 'welcome',
    role: 'assistant',
    content: "Hi! I'm Arcose's AI Assistant.\n\nI can help you learn about Arcose's services, answer construction-related inquiries, and provide preliminary cost estimates based on available information.",
  },
]

const suggestions = [
  'What services do you offer?',
  'Can I get a preliminary cost estimate?',
  'I want to inquire about a project',
]

function getMockAssistantResponse(question) {
  const responses = {
    'What services do you offer?': 'Arcose provides residential construction, commercial construction, corporate project, and solar installation solutions.',
    'Can I get a preliminary cost estimate?': 'I can help collect the initial details needed for a preliminary cost estimate. A fuller inquiry can then be forwarded to the Arcose team.',
    'I want to inquire about a project': 'I can help you begin a project inquiry. Share a few details about your project and requirements, and the Arcose team can assist further.',
  }

  return responses[question] ?? 'Thanks for your question. This is a temporary response while the Arcose AI Assistant is being prepared.'
}

function AIAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [isOpen, messages])

  const sendMessage = (message) => {
    const content = message.trim()

    if (!content) return

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: `${Date.now()}-user`, role: 'user', content },
      { id: `${Date.now()}-assistant`, role: 'assistant', content: getMockAssistantResponse(content) },
    ])
    setInput('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <aside
      className={`fixed inset-4 z-50 flex flex-col overflow-hidden rounded-3xl border border-[#ECEBE7] bg-[#F8F7F3] shadow-2xl shadow-[#181818]/25 transition duration-200 ease-out sm:inset-auto sm:right-6 sm:bottom-24 sm:h-[min(40rem,calc(100dvh-7rem))] sm:w-[26rem] ${
        isOpen ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-95 opacity-0'
      }`}
      aria-hidden={!isOpen}
      inert={!isOpen}
      aria-labelledby="arcose-ai-title"
    >
      <header className="flex items-center justify-between border-b border-[#ECEBE7] bg-white px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#8F1823]">
  <img
    className="size-7 object-contain"
    src={arcoseLogo}
    alt=""
    aria-hidden="true"
  />
</div>
          <div>
            <h2 id="arcose-ai-title" className="text-sm font-bold text-[#181818]">Arcose AI Assistant</h2>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-[#8F1823]">
              <span className="size-1.5 rounded-full bg-[#8F1823]" aria-hidden="true" />
              Online
            </p>
          </div>
        </div>
        <button
          className="inline-flex size-9 items-center justify-center rounded-full text-xl text-[#242424] transition hover:bg-[#F3E5E7] hover:text-[#8F1823] focus-visible:ring-2 focus-visible:ring-[#8F1823] focus-visible:outline-none"
          type="button"
          aria-label="Close Arcose AI Assistant"
          onClick={onClose}
        >
          ×
        </button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto bg-[#ECEBE7]/55 px-4 py-5" aria-live="polite">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <p
                className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === 'user'
                    ? 'rounded-br-sm bg-[#8F1823] text-[#F8F7F3]'
                    : 'rounded-bl-sm bg-[#F8F7F3] text-[#242424] shadow-sm'
                }`}
              >
                {message.content}
              </p>
            </div>
          ))}
        </div>

        {messages.length === initialMessages.length && (
          <div className="mt-5">
            <p className="mb-2 text-xs font-bold tracking-[0.12em] text-[#8F1823] uppercase">Suggested questions</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="rounded-full border border-[#8F1823]/25 bg-[#F3E5E7] px-3 py-2 text-left text-xs font-semibold text-[#242424] transition hover:border-[#8F1823] hover:text-[#8F1823] focus-visible:ring-2 focus-visible:ring-[#8F1823] focus-visible:outline-none"
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form className="border-t border-[#ECEBE7] bg-white p-3" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-[#242424] transition hover:bg-[#F3E5E7] hover:text-[#8F1823] focus-visible:ring-2 focus-visible:ring-[#8F1823] focus-visible:outline-none"
            type="button"
            aria-label="Attach a file (not available yet)"
            title="Attachments are not available yet"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m8.5 12.5 5.65-5.65a2.5 2.5 0 1 1 3.54 3.54l-7.42 7.42a4 4 0 1 1-5.66-5.65l7.06-7.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <input
            className="min-w-0 flex-1 rounded-xl border border-[#ECEBE7] bg-[#F8F7F3] px-3 py-2.5 text-sm text-[#242424] placeholder:text-[#242424]/55 focus:border-[#8F1823] focus:ring-2 focus:ring-[#F3E5E7] focus:outline-none"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about our services or your project..."
          />
          <button
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#8F1823] text-[#F8F7F3] transition hover:bg-[#181818] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:ring-2 focus-visible:ring-[#8F1823] focus-visible:ring-offset-2 focus-visible:outline-none"
            type="submit"
            aria-label="Send message"
            disabled={!input.trim()}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m4 4 16 8-16 8 3-8-3-8Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </form>
    </aside>
  )
}

export default AIAssistant
