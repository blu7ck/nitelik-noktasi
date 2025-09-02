import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import VideoSection from '../components/VideoSection';

const EventDetailPage = () => {
  const { eventId } = useParams();

  const event = {
    id: "gelecegi-tasarlama-atolyesi",
    title: "Geleceği Tasarlama Atölyesi",
    date: "14 Haziran 2025",
    location: "Ankara Bilkent Cyberpark",
    description: "Teknoloji ve inovasyonun geleceğini şekillendiren profesyonellerle buluşun. Derinlikli bilgi ve nitelikli ağ fırsatları.",
    participants: "Nitelikli Profesyoneller",
    image: "/src/assets/image.svg"
  };

  const sessions = [
    {
      id: 1,
      title: "Eğitim, Teknoloji ve İnsan Odaklı Gelecek",
      participants: [
        "Dr. Arzu Ergişi Birgül - Yeni Nesil Eğitmen",
        "Feridun Portakal - Teknokent AR-GE",
        "Tolga Özdemir - Altın Eğitim Kurucu",
        "Yasemin Yüzgenç - ESA Solutions Yönetici"
      ]
    },
    {
      id: 2,
      title: "Finans, E-İhracat ve Ticarette Büyüme Dinamikleri",
      participants: [
        "Haktan Mazmanoğlu - Finans Uzmanı",
        "Barış Ünver - Web Geliştirici / Yazar",
        "Metin Karakoca - Turkcham Vietnam Türkiye Direktörü",
        "Dr. Ayşe Kuyrukçu - İnovest Girişim Kurucu"
      ]
    },
    {
      id: 3,
      title: "Dijital Girişimcilik ve Yazılım Ekosistemi",
      participants: [
        "Özlem Kayasaroğlu - YZ İçerik Üretici",
        "Eyüp Yalçınkaya - Kamu Bilimsel Programlar Kıdemli Uzmanı ve Veri Bilimci",
        "Alptekin Aydoğan - Yeni Nesil Gazeteci",
        "Yasin Şimşek - OnDokuzOn Yazılım"
      ]
    },
    {
      id: 4,
      title: "Yapay Zeka ve Veri ile Dönüşen Gelecek",
      participants: [
        "Fatih Sinan Esen - Kamu YZ Kurucu Bşk. Yrd.",
        "Zeynep Küçük - Veri Bilimi Uzmanı",
        "Mehmet Kaya - NöroPazarlama Danışmanı Neuro Reflect Kurucusu",
        "Mustafa Ali Belek - Yemece Yönetim Kurulu Başkanı"
      ]
    }
  ];

  const sponsors = {
    main: [
      { name: "Ana Sponsor", logo: "/Ana.png" }
    ],
    others: [
      { name: "Sponsor 1", logo: "/sponsor1.png" },
      { name: "Sponsor 2", logo: "/src/assets/sponsor2.svg" },
      { name: "Sponsor 3", logo: "/sponsor3.png" },
      { name: "Sponsor 4", logo: "/src/assets/sponsor4.svg" },
      { name: "Sponsor 5", logo: "/sponsor5.png" },
      { name: "Sponsor 6", logo: "/sponsor6.png" },
      { name: "Sponsor 7", logo: "/sponsor7.png" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Sponsor Section */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-4">
              Ana Sponsor
            </h2>
            <div className="flex justify-center">
                             {sponsors.main.map((sponsor, index) => (
                 <div key={index} className="bg-gray-800 rounded-lg p-6 w-48 h-32 flex items-center justify-center">
                   <img 
                     src={sponsor.logo} 
                     alt={sponsor.name}
                     className="max-w-full max-h-full object-contain"
                     onError={(e) => {
                       const target = e.currentTarget as HTMLImageElement;
                       target.style.display = 'none';
                       const fallback = target.parentElement?.querySelector('.fallback-text');
                       if (fallback instanceof HTMLElement) {
                         fallback.style.display = 'flex';
                       }
                     }}
                   />
                   <span className="text-gray-300 text-sm hidden fallback-text">Logo</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {event.title}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tarih</h3>
              <p className="text-red-100">{event.date}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Konum</h3>
              <p className="text-red-100">{event.location}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Katılımcılar</h3>
              <p className="text-red-100">{event.participants}</p>
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">
                  {session.title}
                </h3>
                <div className="space-y-3">
                  {session.participants.map((participant, index) => (
                    <div key={index} className="text-sm text-red-100 leading-relaxed">
                      {participant}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <VideoSection />

      {/* Other Sponsors Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600">
              Bu Etkinliği Destekleyen Değerli Sponsorlarımız
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {sponsors.others.map((sponsor, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 w-full h-20 flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-text');
                    if (fallback instanceof HTMLElement) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <span className="text-gray-300 text-sm hidden fallback-text">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
