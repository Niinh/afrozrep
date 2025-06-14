'use client';

import { useState } from 'react';
import { Calendar, User, ExternalLink, X, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'Novo Single "Resistência" Quebra Recordes',
      excerpt: 'Nossa mais nova música alcança 100 mil streams em apenas 48 horas após o lançamento.',
      content: `A Afro'z Rep acaba de lançar seu mais novo single "Resistência", que já está causando furor nas plataformas digitais. Em apenas 48 horas, a música alcançou mais de 100 mil streams, estabelecendo um novo recorde para a banda.

      "Resistência" é uma música que fala sobre persistência, sobre nunca desistir dos seus sonhos mesmo quando tudo parece perdido. A letra foi inspirada em experiências pessoais dos membros da banda e nas dificuldades enfrentadas durante a pandemia.

      O single foi gravado no famoso estúdio XYZ, com produção de João Silva, vocalista da banda, e masterização internacional. O resultado é um som poderoso que combina a energia clássica do rock com elementos modernos.

      A música já está disponível em todas as plataformas digitais e o videoclipe oficial será lançado na próxima semana. Fiquem ligados!`,
      date: '2024-01-15',
      author: 'Equipe Afro\'z Rep',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      category: 'Lançamento',
    },
    {
      id: 2,
      title: 'Turnê Nacional 2024 Anunciada',
      excerpt: 'Prepare-se para a maior turnê da banda até agora, passando por 15 cidades brasileiras.',
      content: `A Afro'z Rep anuncia oficialmente sua turnê nacional 2024, que promete ser a maior e mais ambiciosa da carreira da banda. Intitulada "Energia Pura Tour", a turnê passará por 15 cidades brasileiras entre março e dezembro de 2024.

      As cidades confirmadas incluem São Paulo, Rio de Janeiro, Belo Horizonte, Porto Alegre, Curitiba, Brasília, Salvador, Recife, Fortaleza, Manaus, Goiânia, Campo Grande, Vitória, Florianópolis e Natal.

      "Estamos extremamente empolgados para levar nossa música para mais fãs pelo Brasil. Cada show será uma experiência única, com um setlist especial e surpresas exclusivas", declara João Silva, vocalista da banda.

      Os ingressos estarão disponíveis a partir do dia 20 de janeiro, através do site oficial da banda e pontos de venda autorizados. Fãs cadastrados no nosso mailing list terão acesso à pré-venda com desconto especial.`,
      date: '2024-01-10',
      author: 'Assessoria de Imprensa',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      category: 'Tour',
    },
    {
      id: 3,
      title: 'Bastidores: Gravação do Novo Álbum',
      excerpt: 'Veja como está sendo o processo criativo do nosso próximo trabalho de estúdio.',
      content: `O processo de criação do novo álbum da Afro'z Rep está a todo vapor. Nos últimos três meses, a banda tem se dedicado intensamente à composição e pré-produção do que promete ser seu trabalho mais maduro e elaborado até agora.

      "Este álbum representa uma evolução natural do nosso som. Estamos explorando novos territórios musicais sem perder nossa identidade", explica Carlos Santos, guitarrista da banda.

      O álbum contará com 12 faixas inéditas, incluindo colaborações especiais com artistas renomados do cenário nacional. As gravações estão sendo realizadas no estúdio ABC, conhecido por seu trabalho com grandes nomes do rock brasileiro.

      A previsão de lançamento é para o segundo semestre de 2024, coincidindo com o encerramento da turnê nacional. Mais detalhes sobre o álbum, incluindo título e capa, serão revelados em breve.

      Acompanhem nossas redes sociais para não perder nenhuma novidade sobre este projeto especial!`,
      date: '2024-01-05',
      author: 'João Silva',
      image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
      category: 'Estúdio',
    },
    {
      id: 4,
      title: 'Parceria com ONG Música para Todos',
      excerpt: 'Afro\'z Rep se une à ONG para levar música e educação para comunidades carentes.',
      content: `A Afro'z Rep anuncia orgulhosamente sua parceria com a ONG "Música para Todos", uma organização dedicada a levar educação musical para crianças e jovens de comunidades carentes.

      A parceria inclui workshops gratuitos, doação de instrumentos musicais e apresentações especiais em escolas públicas. O primeiro evento acontecerá no próximo mês, na periferia de São Paulo.

      "Acreditamos no poder transformador da música. Se conseguimos inspirar pelo menos uma criança a seguir seus sonhos, já cumprimos nossa missão", declara Pedro Lima, baixista da banda.

      A iniciativa faz parte do projeto social permanente da banda, que busca retribuir à comunidade todo o carinho e apoio recebido ao longo da carreira.

      Empresas e pessoas físicas interessadas em apoiar este projeto podem entrar em contato através do nosso site oficial.`,
      date: '2023-12-28',
      author: 'Pedro Lima',
      image: 'https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg',
      category: 'Social',
    },
  ];

  const shareNews = (newsItem: NewsItem) => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback para dispositivos que não suportam Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-rock text-gradient mb-4">
            NOTÍCIAS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fique por dentro de todas as novidades, lançamentos e acontecimentos da banda.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-6" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {news.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              className="card-rock group cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedNews(item)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end mt-4">
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 p-0">
                      Ler Mais
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* News Modal */}
        {selectedNews && (
          <div 
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:items-start md:justify-start"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setSelectedNews(null);
                  }
                }}
              >
            <div className="bg-gray-900 rounded-xl w-[90%] max-w-4xl h-[95vh] relative flex flex-col md:m-auto md:w-[80%] md:h-[80vh]">
              <div className="relative">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedNews.category}
                  </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:text-red-500 bg-black/50 hover:bg-black/70"
                  onClick={() => setSelectedNews(null)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <div className="flex-1 p-8 overflow-y-auto h-[calc(100vh-300px)] md:h-[calc(80vh-300px)]">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4 md:gap-8">
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 md:space-x-8">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedNews.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{selectedNews.author}</span>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-6">{selectedNews.title}</h1>
                
                <div className="prose prose-invert max-w-none">
                  {selectedNews.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700">
                  <Button
                    className="btn-rock-outline"
                    onClick={() => shareNews(selectedNews)}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar Notícia
                  </Button>
                  
                  
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center">
          <Button className="btn-rock-outline">
            Ver Mais Notícias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;