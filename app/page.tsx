'use client'

import { useState } from 'react'
import Chatbot from '@/components/Chatbot'
import ExerciseList from '@/components/ExerciseList'
import RandomGenerator from '@/components/RandomGenerator'

type Tab = 'home' | 'chat' | 'random' | 'exercises'

export default function Home() {
    const [activeTab, setActiveTab] = useState<Tab>('home')

  return (
        <div className="gym-bg min-h-screen">
          {/* Header */}
              <header className="sticky top-0 z-50 glass-card m-0 rounded-none border-x-0 border-t-0">
                      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                                          <span className="text-white font-bold text-lg">F</span>span>
                                            </div>div>
                                            <h1 className="text-2xl font-bold gradient-text">FitnessTrainer</h1>h1>
                                </div>div>
                                <nav className="flex gap-2">
                                  {[
          { id: 'home', label: 'Inicio', emoji: '🏠' },
          { id: 'chat', label: 'Chatbot', emoji: '🤖' },
          { id: 'random', label: 'Aleatorio', emoji: '🎲' },
          { id: 'exercises', label: 'Ejercicios', emoji: '💪' },
                      ].map((tab) => (
                                      <button
                                                        key={tab.id}
                                                        onClick={() => setActiveTab(tab.id as Tab)}
                                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                                                                            activeTab === tab.id
                                                                              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                                                              : 'btn-secondary'
                                                        }`}
                                                      >
                                                      <span className="mr-1">{tab.emoji}</span>span>
                                                      <span className="hidden sm:inline">{tab.label}</span>span>
                                      </button>button>
                                    ))}
                                </nav>nav>
                      </div>div>
              </header>header>
        
          {/* Main Content */}
              <main className="max-w-7xl mx-auto px-4 py-8">
                {activeTab === 'home' && (
                    <div className="animate-fade-in">
                      {/* Hero Section */}
                                <div className="text-center mb-16 pt-8">
                                              <div className="inline-block glass-card px-6 py-2 mb-6">
                                                              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Tu Entrenador Personal con IA</span>span>
                                              </div>div>
                                              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                                              <span className="gradient-text">Entrena</span>span>
                                                              <br />
                                                              <span className="text-white">Como un</span>span>
                                                              <br />
                                                              <span className="gradient-text">Campeón</span>span>
                                              </h2>h2>
                                              <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                                                              Tu plataforma completa de fitness con chatbot inteligente, generador de rutinas aleatorias 
                                                              y un catálogo completo de ejercicios para cada músculo.
                                              </p>p>
                                              <div className="flex flex-wrap gap-4 justify-center">
                                                              <button onClick={() => setActiveTab('chat')} className="btn-primary text-lg px-8 py-4">
                                                                                💬 Hablar con el Chatbot
                                                              </button>button>
                                                              <button onClick={() => setActiveTab('exercises')} className="btn-secondary text-lg px-8 py-4">
                                                                                💪 Ver Ejercicios
                                                              </button>button>
                                              </div>div>
                                </div>div>
                    
                      {/* Features Grid */}
                                <div className="grid md:grid-cols-3 gap-6 mb-16">
                                  {[
                      {
                                          icon: '🤖',
                                          title: 'Chatbot Inteligente',
                                          desc: 'Pide rutinas personalizadas según tus objetivos. El chatbot te ayudará a crear el plan de entrenamiento perfecto.',
                                          action: () => setActiveTab('chat'),
                                          btn: 'Usar Chatbot'
                      },
                      {
                                          icon: '🎲',
                                          title: 'Rutina Aleatoria',
                                          desc: 'Genera ejercicios aleatorios para todos los músculos o elige grupos musculares específicos.',
                                          action: () => setActiveTab('random'),
                                          btn: 'Generar Rutina'
                      },
                      {
                                          icon: '📚',
                                          title: 'Catálogo Completo',
                                          desc: 'Explora todos los ejercicios disponibles filtrados por músculo, con guías visuales de ejecución.',
                                          action: () => setActiveTab('exercises'),
                                          btn: 'Ver Catálogo'
                      }
                                    ].map((feature, i) => (
                                                      <div key={i} className="glass-card p-8 text-center exercise-card">
                                                                        <div className="text-5xl mb-4">{feature.icon}</div>div>
                                                                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>h3>
                                                                        <p className="text-gray-400 mb-6 leading-relaxed">{feature.desc}</p>p>
                                                                        <button onClick={feature.action} className="btn-primary w-full">
                                                                          {feature.btn}
                                                                        </button>button>
                                                      </div>div>
                                                    ))}
                                </div>div>
                    
                      {/* Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  {[
                      { number: '150+', label: 'Ejercicios' },
                      { number: '12', label: 'Grupos Musculares' },
                      { number: '∞', label: 'Rutinas Posibles' },
                      { number: '24/7', label: 'Disponible' },
                                    ].map((stat, i) => (
                                                      <div key={i} className="glass-card p-6 text-center">
                                                                        <div className="text-3xl font-black gradient-text mb-1">{stat.number}</div>div>
                                                                        <div className="text-gray-400 text-sm">{stat.label}</div>div>
                                                      </div>div>
                                                    ))}
                                </div>div>
                    </div>div>
                      )}
              
                {activeTab === 'chat' && <Chatbot />}
                {activeTab === 'random' && <RandomGenerator />}
                {activeTab === 'exercises' && <ExerciseList />}
              </main>main>
        
          {/* Footer */}
              <footer className="text-center text-gray-500 text-sm py-8 mt-16">
                      <p>© 2024 FitnessTrainer - Hecho con 💪 para atletas</p>p>
              </footer>footer>
        </div>div>
      )
}</div>
