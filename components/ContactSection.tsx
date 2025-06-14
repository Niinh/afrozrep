'use client';

import { MessageCircle, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre a banda Afro\'z Rep.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/afrozrep', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@afrozrep.com',
      action: () => window.location.href = 'mailto:contato@afrozrep.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      action: () => window.location.href = 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, SP - Brasil',
      action: () => {},
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/afrozrep',
      color: 'hover:text-pink-500',
      followers: '10.5K',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: '#',
      color: 'hover:text-green-500',
      followers: 'Contato',
      action: handleWhatsApp,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950">
        <div className="absolute inset-0 opacity-10">
          <div className="vinyl-spin absolute top-20 left-10 w-32 h-32 border-4 border-red-500/30 rounded-full" />
          <div className="vinyl-spin absolute bottom-20 right-10 w-24 h-24 border-4 border-yellow-500/20 rounded-full" style={{ animationDelay: '-5s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-rock text-gradient mb-4">
            CONTATO
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco para shows, parcerias ou apenas para trocar uma ideia sobre rock!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Fale Conosco</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Estamos sempre prontos para conversar com nossos fãs, parceiros e profissionais da música. 
                Seja para contratar a banda, propor uma colaboração ou simplesmente bater um papo sobre rock, 
                não hesite em nos contatar!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-rock hover:scale-105 transition-all duration-300 cursor-pointer" onClick={contact.action}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{contact.title}</h4>
                        <p className="text-gray-300">{contact.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Contato Rápido</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-rock flex-1 group" onClick={handleWhatsApp}>
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </Button>
                
                <Button className="btn-rock-outline flex-1 group" onClick={handleInstagram}>
                  <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Instagram Direct
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Redes Sociais</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Siga-nos nas redes sociais para ficar por dentro de todas as novidades, 
                bastidores exclusivos e interagir diretamente com a banda.
              </p>
            </div>

            {/* Social Media Cards */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <Card 
                  key={index} 
                  className="card-rock hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={social.action || (() => window.open(social.url, '_blank'))}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                          <social.icon className={`w-6 h-6 text-white ${social.color}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{social.name}</h4>
                          <p className="text-gray-300">{social.followers} seguidores</p>
                        </div>
                      </div>
                      <div className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Inquiries */}
            <Card className="card-rock">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-4">Shows & Parcerias</h4>
                <p className="text-gray-300 mb-4">
                  Para contratação de shows, parcerias comerciais e oportunidades profissionais:
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong>Manager:</strong> João Santos</p>
                  <p><strong>E-mail:</strong> shows@afrozrep.com</p>
                  <p><strong>Telefone:</strong> +55 (11) 98888-8888</p>
                </div>
              </CardContent>
            </Card>

            {/* Press Kit */}
            <Card className="card-rock">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-4">Imprensa</h4>
                <p className="text-gray-300 mb-4">
                  Material de imprensa, fotos em alta resolução e informações para mídia:
                </p>
                <Button variant="ghost" className="text-red-500 hover:text-red-400 p-0">
                  Download Press Kit →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-rock p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Vamos Fazer Rock Juntos!</h3>
            <p className="text-gray-300 mb-6">
              Seja você um fã, promoter, músico ou empresa, adoraríamos ouvir de você. 
              O rock é sobre conexão e comunidade!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-rock" onClick={handleWhatsApp}>
                Falar Agora no WhatsApp
              </Button>
              <Button className="btn-rock-outline" onClick={() => window.location.href = 'mailto:contato@afrozrep.com'}>
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;