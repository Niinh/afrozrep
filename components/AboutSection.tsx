'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Guitar, Drum, Mic, Music, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bandMembers = [
    {
      name: 'João Silva',
      role: 'Vocalista & Guitarra',
      icon: Mic,
      description: 'Voz marcante e riffs poderosos que definem o som da banda.',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
    },
    {
      name: 'Carlos Santos',
      role: 'Guitarrista',
      icon: Guitar,
      description: 'Solos épicos e harmonias que elevam cada música a outro nível.',
      image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
    },
    {
      name: 'Pedro Lima',
      role: 'Baixista',
      icon: Music,
      description: 'A base sólida que sustenta toda a energia da banda.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    },
    {
      name: 'André Costa',
      role: 'Baterista',
      icon: Drum,
      description: 'Batidas precisas e poderosas que fazem o coração acelerar.',
      image: 'https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg',
    },
  ];

  const achievements = [
    { icon: Users, number: '10K+', label: 'Fãs nas Redes' },
    { icon: Music, number: '50+', label: 'Shows Realizados' },
    { icon: Award, number: '5', label: 'Singles Lançados' },
    { icon: Guitar, number: '3', label: 'Anos de Estrada' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-bg" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/32437470/pexels-photo-32437470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        //* backgroundImage: 'url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg)', *//
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-black text-rock text-gradient mb-4 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            SOBRE A BANDA
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Nascida das ruas e forjada no palco, a Afro'z Rep representa a nova geração do rock brasileiro, 
            combinando energia pura com letras que falam diretamente ao coração de quem vive intensamente.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-6" />
        </div>

        {/* Band Story */}
        <div className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-400 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="card-rock p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Sinopse</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                A banda Afro’z Rep surgiu em 2008, na cidade de Poções, interior da Bahia, com o intuito de produzir um som que representasse a cultura local e, ao mesmo tempo, trouxesse elementos da música negra mundial.
                </p>
                <p className="text-gray-300 leading-relaxed">
                O nome da banda faz referência à representatividade negra e à cultura afro-brasileira, buscando valorizar as raízes e a história do povo negro.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                Nossa musicalidade é uma fusão vibrante, o que muitos chamam de música alternativa, pois varia muito em seu instrumental, passeando entre o rap, o reggae, o samba, o funk e o rock.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/32453997/pexels-photo-32453997.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Afro'z Rep Band"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Band Members */}
        <div className="mb-20">
          <h3 className={`text-3xl md:text-4xl font-bold text-rock text-center text-white mb-12 transition-all duration-1000 delay-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            OS INTEGRANTES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <Card
                key={index}
                className={`card-rock group hover:scale-105 transition-all duration-500 delay-${(index + 1) * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-red-500/50 group-hover:border-red-500 transition-colors"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-red-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className={`transition-all duration-1000 delay-1200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <achievement.icon className="w-8 h-8 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-black text-white group-hover:text-red-500 transition-colors">
                    {achievement.number}
                  </div>
                </div>
                <p className="text-gray-400 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;