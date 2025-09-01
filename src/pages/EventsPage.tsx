import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const events = [
    {
      id: "gelecegi-tasarlama-atolyesi",
      title: "Geleceği Tasarlama Atölyesi",
      date: "14 Haziran 2025",
      location: "Ankara Bilkent Cyberpark",
      description: "Teknoloji ve inovasyonun geleceğini şekillendiren profesyonellerle buluşun. Derinlikli bilgi ve nitelikli ağ fırsatları.",
      participants: "Nitelikli Profesyoneller",
      image: "/logos/image.svg"
    }
    // Future events can be added here
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Etkinlikler
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Nitelik Noktası'nın düzenlediği teknoloji ve inovasyon etkinliklerini keşfedin
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Event Image */}
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="h-32 w-auto"
                />
              </div>
              
              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                {/* Action Button */}
                <div className="flex justify-end">
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <span>Daha Fazla</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Message */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Daha Fazla Etkinlik Yakında
            </h3>
            <p className="text-gray-600">
              Yeni etkinliklerimiz için takipte kalın. Nitelik Noktası olarak sürekli yenilikçi 
              ve değerli buluşmalar düzenliyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
