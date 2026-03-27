'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
    id: number
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

const INITIAL_MESSAGE: Message = {
    id: 0,
    role: 'assistant',
    content: `Hola! Soy tu entrenador personal virtual 💪 Puedo ayudarte a crear rutinas de entrenamiento personalizadas.

    Puedes pedirme cosas como:
    - "Crea una rutina para ganar masa muscular"
    - "Dame un entrenamiento de pecho y triceps"
    - "Quiero adelgazar, que ejercicios hago"
    - "Plan de 5 dias para principiantes"
    - "Ejercicios para hacer en casa sin equipo"

    Cuales son tus objetivos de entrenamiento?`,
    timestamp: new Date()
}

export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const userMessage: Message = {
                id: messages.length,
                role: 'user',
                content: input.trim(),
                timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
                const response = await fetch('/api/chat', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ 
                                                         message: input.trim(),
                                      history: messages.map(m => ({ role: m.role, content: m.content }))
                          })
                })

          const data = await response.json()

          const botMessage: Message = {
                    id: messages.length + 1,
                    role: 'assistant',
                    content: data.response || 'Lo siento, hubo un error. Intenta de nuevo.',
                    timestamp: new Date()
          }

          setMessages(prev => [...prev, botMessage])
        } catch (error) {
                const errorMessage: Message = {
                          id: messages.length + 1,
                          role: 'assistant',
                          content: 'Hubo un error al conectar con el servidor. Por favor intenta de nuevo.',
                          timestamp: new Date()
                }
                setMessages(prev => [...prev, errorMessage])
        } finally {
                setIsLoading(false)
        }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
        }
  }

  const quickSuggestions = [
        "Rutina para ganar musculo",
        "Ejercicios para adelgazar",
        "Entrenamiento de pecho",
        "Plan para principiantes",
        "Ejercicios en casa",
        "Piernas y gluteos"
      ]

  return (
        <div className="animate-fade-in">
              <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">
                                🤖 Chatbot <span className="gradient-text">Entrenador</span>span>
                      </h2>h2>
                      <p className="text-gray-400">Pide rutinas personalizadas y consejos de entrenamiento</p>p>
              </div>div>
        
              <div className="max-w-3xl mx-auto">
                {/* Quick Suggestions */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {quickSuggestions.map((suggestion, i) => (
                      <button
                                      key={i}
                                      onClick={() => setInput(suggestion)}
                                      className="text-sm px-3 py-1.5 glass-card text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-200 rounded-full"
                                    >
                        {suggestion}
                      </button>button>
                    ))}
                      </div>div>
              
                {/* Chat Container */}
                      <div className="glass-card h-[500px] flex flex-col overflow-hidden">
                        {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                  {messages.map((message) => (
                        <div
                                          key={message.id}
                                          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                          {message.role === 'assistant' && (
                                                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                                                                                <span className="text-white text-xs font-bold">F</span>span>
                                                            </div>div>
                                        )}
                                        <div className={message.role === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'}>
                                                          <p className="text-white text-sm whitespace-pre-wrap">{message.content}</p>p>
                                                          <p className="text-xs opacity-50 mt-1">
                                                            {message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                                                          </p>p>
                                        </div>div>
                        </div>div>
                      ))}
                                  {isLoading && (
                        <div className="flex justify-start">
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                                                          <span className="text-white text-xs font-bold">F</span>span>
                                        </div>div>
                                        <div className="chatbot-message-bot">
                                                          <div className="flex space-x-1">
                                                                              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>div>
                                                                              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>div>
                                                                              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>div>
                                                          </div>div>
                                        </div>div>
                        </div>div>
                                            )}
                                            <div ref={messagesEndRef} />
                                </div>div>
                      
                        {/* Input */}
                                <div className="border-t border-white/10 p-4">
                                            <div className="flex gap-2">
                                                          <textarea
                                                                            value={input}
                                                                            onChange={(e) => setInput(e.target.value)}
                                                                            onKeyDown={handleKeyDown}
                                                                            placeholder="Escribe tu pregunta o pide una rutina..."
                                                                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 resize-none text-sm focus:outline-none focus:border-orange-500 transition-colors"
                                                                            rows={2}
                                                                          />
                                                          <button
                                                                            onClick={handleSend}
                                                                            disabled={isLoading || !input.trim()}
                                                                            className="btn-primary px-4 self-end disabled:opacity-50 disabled:cursor-not-allowed"
                                                                          >
                                                                          ➤
                                                          </button>button>
                                            </div>div>
                                            <p className="text-xs text-gray-500 mt-2">Enter para enviar • Shift+Enter para nueva linea</p>p>
                                </div>div>
                      </div>div>
              </div>div>
        </div>div>
      )
}</div>
