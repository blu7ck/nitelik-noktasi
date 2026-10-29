import React from 'react';
import { Lightbulb, Users, Target, Heart } from 'lucide-react';

const EventInfo = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Derinlikli Bilgi",
      description: "Kod satırlarının arkasındaki derinliği konuşuyoruz. Yüzeysel değil, özün konuşulduğu bir ortam sunuyoruz."
    },
    {
      icon: Users,
      title: "Nitelikli Ağ",
      description: "Teknoloji dünyasının görünmeyen akıl hocalarıyla tanışma ve bağlantı kurma fırsatı."
    },
    {
      icon: Target,
      title: "Gerçek Rol Modeller",
      description: "Az bilinen ama çok bilen isimleri ön plana çıkararak, genç profesyonellere gerçek rol modeller sunuyoruz."
    },
    {
      icon: Heart,
      title: "İnsan Odaklı Yaklaşım",
      description: "Niteliği algoritmalar değil, insanlar belirler. Teknolojiyi insan hikayeleri ve felsefi boyutlarıyla ele alıyoruz."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Amacımız
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bilgiye sadakat gösteren, sessiz ama güçlü teknoloji ustalarını bir araya getiriyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-black rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Vizyonumuz
            </h3>
            <p className="text-lg md:text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              "Niteliği algoritmalar değil, insanlar belirler" sloganıyla hareket ederek, kodun, yapay zekânın, 
              mühendisliğin, siber güvenliğin, veri bilimlerinin ve teknoloji vizyonlarının derinliklerine hâkim 
              nitelikli profesyonelleri bir araya getiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;