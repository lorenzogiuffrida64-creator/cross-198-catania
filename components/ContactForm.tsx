import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Tag, AlertCircle } from 'lucide-react';
import Button from './Button';

interface FormErrors {
  nome?: string;
  email?: string;
  telefono?: string;
  oggetto?: string;
  messaggio?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    oggetto: '',
    messaggio: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome è obbligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Il numero di telefono è obbligatorio';
    }
    
    if (!formData.oggetto.trim()) {
      newErrors.oggetto = 'L\'oggetto è obbligatorio';
    }
    
    if (!formData.messaggio.trim()) {
      newErrors.messaggio = 'Il messaggio non può essere vuoto';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      // Scroll to the first error if needed, or just let the user see them
      return;
    }

    setIsSubmitting(true);
    // Simula chiamata API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ nome: '', email: '', telefono: '', oggetto: '', messaggio: '' });
      setErrors({});
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Rimuovi l'errore non appena l'utente inizia a scrivere
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const renderError = (error?: string) => {
    if (!error) return null;
    return (
      <div className="flex items-center gap-1.5 mt-1.5 text-red-500 animate-fade-in">
        <AlertCircle className="w-3 h-3" />
        <span className="text-[10px] font-bold uppercase tracking-wider">{error}</span>
      </div>
    );
  };

  return (
    <section id="contact" className="py-24 md:py-40 relative bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-red-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-zinc-900/40 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        {/* Centered Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 reveal">
          <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Contatti</span>
          <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter leading-tight uppercase italic mb-8">
            Siamo <span className="text-red-600">Pronti</span>.
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
            Hai domande sulla programmazione, sui corsi o vuoi semplicemente venire a trovarci? Inviaci un messaggio, la nostra tribù ti risponderà entro 24 ore.
          </p>
        </div>

        {/* Centered Form */}
        <div className="max-w-4xl mx-auto reveal delay-200">
          <div className="p-8 md:p-12 lg:p-16 rounded-[3rem] bg-zinc-950/50 border border-white/5 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Nome e Cognome</label>
                  <div className="relative group">
                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.nome ? 'text-red-500' : 'text-white/20 group-focus-within:text-red-600'}`} />
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/10 focus:outline-none transition-all ${
                        errors.nome ? 'border-red-600 bg-red-600/5' : 'border-white/10 focus:border-red-600/50 focus:bg-white/[0.05]'
                      }`}
                      placeholder="Mario Rossi"
                    />
                  </div>
                  {renderError(errors.nome)}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Email</label>
                  <div className="relative group">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.email ? 'text-red-500' : 'text-white/20 group-focus-within:text-red-600'}`} />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/10 focus:outline-none transition-all ${
                        errors.email ? 'border-red-600 bg-red-600/5' : 'border-white/10 focus:border-red-600/50 focus:bg-white/[0.05]'
                      }`}
                      placeholder="mario@esempio.it"
                    />
                  </div>
                  {renderError(errors.email)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Numero di Telefono</label>
                  <div className="relative group">
                    <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.telefono ? 'text-red-500' : 'text-white/20 group-focus-within:text-red-600'}`} />
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/10 focus:outline-none transition-all ${
                        errors.telefono ? 'border-red-600 bg-red-600/5' : 'border-white/10 focus:border-red-600/50 focus:bg-white/[0.05]'
                      }`}
                      placeholder="+39 333 1234567"
                    />
                  </div>
                  {renderError(errors.telefono)}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Oggetto</label>
                  <div className="relative group">
                    <Tag className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.oggetto ? 'text-red-500' : 'text-white/20 group-focus-within:text-red-600'}`} />
                    <input 
                      type="text" 
                      name="oggetto"
                      value={formData.oggetto}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/10 focus:outline-none transition-all ${
                        errors.oggetto ? 'border-red-600 bg-red-600/5' : 'border-white/10 focus:border-red-600/50 focus:bg-white/[0.05]'
                      }`}
                      placeholder="Info Iscrizione"
                    />
                  </div>
                  {renderError(errors.oggetto)}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Descrizione Libera</label>
                <div className="relative group">
                  <MessageSquare className={`absolute left-4 top-6 w-4 h-4 transition-colors ${errors.messaggio ? 'text-red-500' : 'text-white/20 group-focus-within:text-red-600'}`} />
                  <textarea 
                    name="messaggio"
                    rows={5}
                    value={formData.messaggio}
                    onChange={handleChange}
                    className={`w-full bg-white/[0.03] border rounded-3xl py-5 pl-12 pr-6 text-white placeholder:text-white/10 focus:outline-none transition-all resize-none ${
                      errors.messaggio ? 'border-red-600 bg-red-600/5' : 'border-white/10 focus:border-red-600/50 focus:bg-white/[0.05]'
                    }`}
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                </div>
                {renderError(errors.messaggio)}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-6 flex items-center justify-center gap-3 text-lg transition-all ${
                    Object.keys(errors).length > 0 ? 'shake' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSuccess ? (
                    "Inviato con Successo!"
                  ) : (
                    <>
                      Invia Messaggio <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;