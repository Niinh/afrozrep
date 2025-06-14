'use client';

import { Music, Instagram, MessageCircle, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/afrozrep',
      color: 'hover:text-pink-500',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: '#',
      color: 'hover:text-green-500',
      action: () => {
        const message = encodeURIComponent('Olá! Vim através do site da banda.');
        window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
      },
    },
    {
      name: 'E-mail',
      icon: Mail,
      url: 'mailto:contato@afrozrep.com',
      color: 'hover:text-blue-500',
    },
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Notícias', href: '#news' },
    { name: 'Contato', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Créditos', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      {/* Vinyl Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="vinyl-spin absolute top-10 left-10 w-64 h-64 border-8 border-red-500/20 rounded-full" />
        <div className="vinyl-spin absolute bottom-10 right-10 w-48 h-48 border-6 border-yellow-500/15 rounded-full" style={{ animationDelay: '-3s' }} />
        <div className="vinyl-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-red-500/10 rounded-full" style={{ animationDelay: '-7s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Band Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Music className="w-8 h-8 text-red-500" />
                <h3 className="text-3xl font-black text-rock text-gradient">AFRO'Z REP</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Energia pura do rock brasileiro. Uma banda que nasceu das ruas e conquistou os palcos, 
                levando a essência autêntica do rock para uma nova geração de fãs.
              </p>
              
              <div className="space-y-2 text-sm text-gray-400">
                <p><strong className="text-white">Formação:</strong> 2021</p>
                <p><strong className="text-white">Gênero:</strong> Rock / Rock Nacional</p>
                <p><strong className="text-white">Origem:</strong> São Paulo, SP</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Conecte-se</h4>
              
              <div className="space-y-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    onClick={social.action || undefined}
                    className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-colors duration-300 group`}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>

              <div className="space-y-2 text-sm text-gray-400">
                <p><strong className="text-white">E-mail:</strong></p>
                <p>contato@afrozrep.com</p>
                <p><strong className="text-white">WhatsApp:</strong></p>
                <p>+55 (11) 99999-9999</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Fique por Dentro</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cadastre-se para receber novidades exclusivas, lançamentos e informações sobre shows antes de todo mundo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <Button className="btn-rock whitespace-nowrap">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Afro'z Rep. Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>e muito rock!</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center py-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-red-500"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Voltar ao Topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;