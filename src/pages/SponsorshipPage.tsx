import React, { useState } from 'react';
import { Mail, Users, Target, Award, Lightbulb, Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SponsorshipPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    sponsorshipType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');



    try {
      // EmailJS template parameters
      const templateParams = {
        to_email: import.meta.env.VITE_PRIMARY_EMAIL,
        cc_email: import.meta.env.VITE_CC_EMAIL,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        sponsorship_type: formData.sponsorshipType,
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        sponsorshipType: '',
        message: ''
      });
    } catch (error) {
      console.error('Email gönderimi başarısız:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NİTELİK NOKTASI: TEKNOLOJİDE NİTELİK BULUŞMALARI
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed italic">
              "Bilgi Gürültüsünün İçinde Anlamın Peşine Düşenlerin Buluşma Noktası"
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            BİZ KİMİZ?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              TeknolojiMenajeri.com.tr, Türkiye'nin ilk ve tek yazılımcı ve teknoloji menajerlik firmasıdır. 
              Alanında uzman Türk bilişim şirketlerinin menajerliğini yaparak, bu şirketleri yerel ve global 
              marka ve projelerle buluşturmaktadır.
            </p>
            <p>
              "Nitelik Noktası" etkinliğimizle teknoloji dünyasının derinliklerine iniyoruz. Dijital dünyada 
              çoğu zaman takipçi sayısı, görünürlük ve yüzeysel anlatımlar öne çıkarken, biz "az bilinen ama 
              çok bilen" isimleri ön plana çıkarıyoruz.
            </p>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-red-600 underline mb-2">
                VİZYONUMUZ
              </h2>
              <p className="text-lg text-gray-700">
                "Niteliği algoritmalar değil, insanlar belirler"
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* For Participants */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-red-600" />
              Katılımcılar İçin
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Derinlikli Bilgi Edinme</h4>
                <p className="text-gray-600 text-sm">
                  "Kod satırlarının arkasındaki derinliği konuşuyoruz" sloganımızla, yüzeysel değil, özün konuşulduğu bir ortam sunuyoruz.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Nitelikli Ağ</h4>
                <p className="text-gray-600 text-sm">
                  Teknoloji dünyasının görünmeyen akıl hocalarıyla tanışma ve bağlantı kurma fırsatı.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">İlham ve Motivasyon</h4>
                <p className="text-gray-600 text-sm">
                  Fikri Mirasyedi Panosu ile her katılımcı etkinlikten değerli fikirlerle ayrılıyor.
                </p>
              </div>
            </div>
          </div>

          {/* For Sector */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-red-600" />
              Sektör İçin
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Etik Bilinç</h4>
                <p className="text-gray-600 text-sm">
                  Yapay zekâda etik nitelik, siber güvenlikte kanaat ve sorumluluk gibi konuları öne çıkararak sektörde bilinçli bir bakış açısı geliştiriyoruz.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Yetenek Keşfi</h4>
                <p className="text-gray-600 text-sm">
                  Genç girişimciler ve profesyoneller için gerçek rol modeller sunarak, geleceğin teknoloji liderlerini yönlendiriyoruz.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">İnovasyon Kültürü</h4>
                <p className="text-gray-600 text-sm">
                  Teknolojiyi sadece teknik bir konu olarak değil, insan hikayeleri ve felsefi boyutlarıyla ele alarak, daha bütünsel bir inovasyon anlayışı geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Sponsor Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            NEDEN SPONSOR OLUNMALI?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Markanız İçin */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-red-600" />
                Markanız İçin
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Düşünce Liderliği:</strong> B2B IT markaları için "thought-leadership" konumlandırması sağlıyoruz.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Hedef Kitleye Doğrudan Erişim:</strong> Yazılım geliştiriciler, yapay zekâ mühendisleri, CTO'lar, teknik liderler, dijital dönüşüm danışmanları ve akademisyenler gibi nitelikli profesyonellerle doğrudan etkileşim kurma fırsatı.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Özel İçerik Fırsatları:</strong> Etkinlik sonrası özel röportaj içerikleri ve kurumsal görünürlük ile markanızın mesajını geniş kitlelere ulaştırma imkanı.</span>
                </li>
              </ul>
            </div>

            {/* Stratejik Avantajlar */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-red-600" />
                Stratejik Avantajlar
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Nitelikli İçerik Ortaklığı:</strong> LinkedIn'de "Nitelik Serileri", podcast olarak "Nitelikli Sohbetler" içerikleriyle markanızın hikayesini anlatıyoruz.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Marka Algısı:</strong> Teknik terimlerle değil, hikayelerle anlatan sade ama saygı uyandıran bir dil kullanarak, markanızın insani yönünü öne çıkarıyoruz.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Hatırlanabilir Unsurlar:</strong> Her konuşmadan sonra "Nitelik Kartı" ile konuşmacının en değerli cümlesi paylaşılarak, etkinlik sonrası da akıllarda kalıcı izler bırakıyoruz.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Sosyal Etki:</strong> Sponsorluklarla desteklenen sosyal etki projelerine dahil olarak, kurumsal sosyal sorumluluk hedeflerinize ulaşma imkanı sunuyoruz.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sponsorship Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sponsor Kategorilerimiz
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ana Sponsor */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-red-900 px-4 py-1 rounded-full text-sm font-bold">
                  ANA SPONSOR
                </span>
              </div>
              <div className="text-center pt-4">
                <h4 className="text-2xl font-bold mb-4">Ana Sponsor</h4>
                <div className="text-3xl font-bold mb-6">150.000₺</div>
                <ul className="text-sm space-y-2 text-red-100">
                  <li>• Etkinlik isim sponsorluğu</li>
                  <li>• Konuşmacı hakkı</li>
                  <li>• Özel röportaj içerikleri</li>
                </ul>
              </div>
            </div>

            {/* Altın Sponsor */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Altın Sponsor</h4>
                <div className="text-3xl font-bold mb-6">75.000₺</div>
                <ul className="text-sm space-y-2 text-yellow-100">
                  <li>• Panel sponsorluğu</li>
                  <li>• Kurumsal görünürlük</li>
                </ul>
              </div>
            </div>

            {/* Gümüş Sponsor */}
            <div className="bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-2xl p-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Gümüş Sponsor</h4>
                <div className="text-3xl font-bold mb-6">50.000₺</div>
                <ul className="text-sm space-y-2 text-gray-100">
                  <li>• "Nitelik Kartı" sponsorluğu</li>
                  <li>• İçerik paylaşımı</li>
                </ul>
              </div>
            </div>

            {/* Bronz Sponsor */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Bronz Sponsor</h4>
                <div className="text-3xl font-bold mb-6">25.000₺</div>
                <ul className="text-sm space-y-2 text-orange-100">
                  <li>• Logo kullanım hakları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Sponsor Olun
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              "Nitelik Noktası: Teknolojide Nitelik Buluşmaları" etkinliğine sponsor olarak, 
              teknoloji dünyasında gerçek değer ve derinliğe verdiğiniz önemi gösterin.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-semibold">Teşekkürler!</p>
              <p>Sponsorluk talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">Hata!</p>
              <p>Form gönderimi sırasında bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Soyad *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Soyadınız"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Şirket
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Şirket Adı"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sponsorshipType" className="block text-sm font-medium text-gray-700 mb-2">
                Sponsorluk Kategorisi *
              </label>
              <select
                id="sponsorshipType"
                name="sponsorshipType"
                required
                value={formData.sponsorshipType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
              >
                <option value="">Kategori Seçiniz</option>
                <option value="ana">Ana Sponsor - 150.000₺</option>
                <option value="altin">Altın Sponsor - 75.000₺</option>
                <option value="gumus">Gümüş Sponsor - 50.000₺</option>
                <option value="bronz">Bronz Sponsor - 25.000₺</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mesaj *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                placeholder="Sponsorluk talebiniz hakkında detayları buraya yazabilirsiniz..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-red-600 to-black text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-red-700 hover:to-gray-900'
              }`}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Sponsorluk Talebi Gönder'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Alternatif olarak doğrudan e-posta gönderebilirsiniz:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:gulsah@teknolojimenajeri.com"
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>gulsah@teknolojimenajeri.com</span>
              </a>
              <a
                href="mailto:furkanakbas@teknolojimenajeri.com"
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>furkanakbas@teknolojimenajeri.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;