import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            
          </div>
          
          <p className="text-lg md:text-xl text-red-200 mb-6 max-w-4xl mx-auto leading-relaxed italic">
            "Bilgi Gürültüsünün İçinde Anlamın Peşine Düşenlerin Buluşma Noktası"
          </p>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            NİTELİK NOKTASI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-100">
              Teknolojide Nitelik Buluşmaları
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            "Niteliği algoritmalar değil, insanlar belirler"
          </p>

        </div>
      </div>
    </div>
  );
};

export default Hero;