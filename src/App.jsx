import { useState } from 'react'
import Home from './pages/Home.jsx'
import AIAssistantButton from './components/ui/AIAssistantButton.jsx'
import AIAssistant from './components/ui/AIAssistant.jsx'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <Home onOpenChat={() => setIsChatOpen(true)} />
      <AIAssistant
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
      {!isChatOpen && (
        <AIAssistantButton onClick={() => setIsChatOpen(true)} />
      )}
    </>
  )
}

export default App