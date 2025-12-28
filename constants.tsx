import React from 'react';
import { Dumbbell, Users, Zap, Timer, Target, Trophy, ArrowRight, Heart, Activity } from 'lucide-react';
import { Feature, Testimonial, Service } from './types';

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Attrezzatura d'Élite",
    description: "Equipaggiamento CrossFit professionale di ultima generazione per massimizzare ogni tua ripetizione.",
    icon: "Dumbbell"
  },
  {
    id: 2,
    title: "Corsi Illimitati",
    description: "Dal CrossFit al Weightlifting, Yoga e Mobility. Tutto incluso nel tuo abbonamento mensile.",
    icon: "Zap"
  },
  {
    id: 3,
    title: "Community Catanese",
    description: "Non sei solo un numero. Entra a far parte della famiglia più forte e motivata di Catania.",
    icon: "Users"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "SALA ATTREZZI",
    subtitle: "Allenamenti Personalizzati",
    description: "Al Cross 198, la sala attrezzi non è solo uno spazio: è il tuo laboratorio personale di trasformazione. Con attrezzatura professionale firmata Rogue, Eleiko e Concept2.",
    icon: "Dumbbell",
    benefits: ["Programmi personalizzati", "Supervisione da coach certificati", "Accesso illimitato ad attrezzatura"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "CROSSFIT",
    subtitle: "Per Chi Ama la Sfida",
    description: "Il CrossFit al Cross 198 è intensità pura. WOD scalabili per ogni livello, programmazione seria e una community che ti spinge a dare il massimo.",
    icon: "Zap",
    benefits: ["WOD progettati da coach esperti", "Scalabilità per tutti i livelli", "Community competitiva e motivante"],
    image: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "PILATES MATWORK",
    subtitle: "Core e Allineamento",
    description: "Il Pilates Matwork al Cross 198 è precisione e controllo. Rinforza il tuo core, migliora l'allineamento del corpo e sviluppa una forza funzionale.",
    icon: "Target",
    benefits: ["Rinforzo profondo del core", "Miglioramento postura", "Prevenzione infortuni"],
    image: "https://images.unsplash.com/photo-1518611012118-2960c8bad4b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "PILATES REFORMER",
    subtitle: "Full Body con Resistenza",
    description: "Il Reformer porta il Pilates a un livello superiore. Allenamento full-body con resistenza variabile, perfetto per tonificare e riabilitare.",
    icon: "Timer",
    benefits: ["Resistenza progressiva", "Ideale per riabilitazione", "Tonificazione profonda"],
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "YOGA",
    subtitle: "Flessibilità e Forza",
    description: "Lo Yoga al Cross 198 unisce flessibilità, forza e mindfulness. Trova il tuo equilibrio fisico e mentale migliorando stabilità e mobilità.",
    icon: "Users",
    benefits: ["Miglioramento mobilità", "Riduzione stress", "Equilibrio corpo-mente"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "FUNZIONALE",
    subtitle: "Allenamenti Intensi",
    description: "Esplosività pura. Movimenti compound, circuiti ad alta intensità e condizionamento metabolico per bruciare grassi e costruire muscoli.",
    icon: "Trophy",
    benefits: ["Movimenti funzionali reali", "Condizionamento metabolico", "Brucia grassi efficace"],
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "POLE DANCE",
    subtitle: "Forza e Grazia",
    description: "La Pole Dance è empowerment. Combina forza, flessibilità ed espressione artistica in un workout divertente e sfidante in una community accogliente.",
    icon: "Heart",
    benefits: ["Tonificazione completa", "Fiducia e autostima", "Community femminile positiva"],
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "BOXE",
    subtitle: "Disciplina e Azione",
    description: "Potenza e disciplina. Allenamento cardio ad alta intensità, sviluppo di tecniche pugilistiche e rilascio totale dello stress sul ring.",
    icon: "Activity",
    benefits: ["Cardio e forza esplosiva", "Tecniche pugilistiche reali", "Disciplina e rilascio stress"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Andrea Rossi",
    handle: "@andrea_fit",
    text: "Cross 198 è una bestia per l'allenamento. L'ambiente e l'attrezzatura lo rendono il sogno di ogni atleta a Catania.",
    avatar: "https://picsum.photos/seed/andrea/100/100"
  },
  {
    id: 2,
    name: "Marco Pulvirenti",
    handle: "@marcopulv",
    text: "L'ho detto molte volte, ma lo ripeto: Cross 198 è il GOAT dei box. Qualsiasi obiettivo è possibile qui.",
    avatar: "https://picsum.photos/seed/marco/100/100"
  },
  {
    id: 3,
    name: "Filippo Leotta",
    handle: "@filippoleo",
    text: "Mi ha cambiato la vita. Odiavo il fitness tradizionale, ma il CrossFit qui ha ribaltato tutto in soli 30 minuti.",
    avatar: "https://picsum.photos/seed/filippo/100/100"
  },
  {
    id: 4,
    name: "Giulia Bianchi",
    handle: "@giulia_strong",
    text: "La community qui è incredibile. Non avrei mai pensato di sollevare certi pesi, ma i coach ti spingono oltre ogni limite.",
    avatar: "https://picsum.photos/seed/giulia/100/100"
  },
  {
    id: 5,
    name: "Valentina Catania",
    handle: "@vale_ct89",
    text: "Il miglior box in Sicilia. Pulizia, professionalità e un'energia che ti carica appena varchi la soglia.",
    avatar: "https://picsum.photos/seed/vale/100/100"
  },
  {
    id: 6,
    name: "Davide Esposito",
    handle: "@davide_wod",
    text: "Programmazione seria e risultati garantiti. Ho visto miglioramenti nella mia performance in pochissime settimane.",
    avatar: "https://picsum.photos/seed/davide/100/100"
  },
  {
    id: 7,
    name: "Salvo Russo",
    handle: "@salvo_cross",
    text: "Un posto dove la fatica diventa piacere. Ogni WOD è una sfida contro se stessi, ma con il supporto di tutti.",
    avatar: "https://picsum.photos/seed/salvo/100/100"
  }
];

export const BRANDS = [
  { name: "ROGUE", style: "italic font-black tracking-tighter" },
  { name: "ELEIKO", style: "tracking-[0.2em] font-black" },
  { name: "CONCEPT2", style: "font-black uppercase tracking-tighter" },
  { name: "XENIOS USA", style: "font-bold tracking-widest" },
  { name: "BULLMAN", style: "font-black italic" },
  { name: "KINGSBOX", style: "font-black tracking-normal" },
  { name: "ASSAULT FITNESS", style: "font-bold uppercase tracking-tight" },
  { name: "REEBOK", style: "font-black tracking-widest" },
  { name: "SBD", style: "font-black" },
];

export const IconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Timer: <Timer className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  ArrowRight: <ArrowRight className="w-5 h-5" />,
  Heart: <Heart className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
};