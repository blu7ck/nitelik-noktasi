# Nitelik Noktası

Nitelik Noktası; etkinlikleri, etkinlik detaylarını ve sponsorluk bilgilerini tanıtan bir web sitesidir. React, TypeScript ve Vite ile geliştirilmiştir.

## Projeyi kendi bilgisayarınızda çalıştırma

### 1. Gerekli programı yükleyin

Projeyi çalıştırmak için **Node.js 18 veya üzeri** gerekir. Node.js'in [resmî web sitesinden](https://nodejs.org/) **LTS** sürümünü indirip yükleyin. Kurulum sırasında varsayılan seçenekleri değiştirmeden devam edebilirsiniz.

Kurulum tamamlandıktan sonra açık terminalleri kapatıp yeniden açın. Node.js'in yüklenip yüklenmediğini kontrol etmek için:

1. Windows'ta **Başlat** menüsünü açın.
2. `PowerShell` yazıp **Windows PowerShell** uygulamasını açın.
3. Aşağıdaki komutları sırayla yazıp her birinden sonra Enter'a basın:

   ```powershell
   node -v
   npm -v
   ```

Her komut bir sürüm numarası gösteriyorsa hazır olacaksınız.

### 2. Proje dosyalarını bilgisayarınıza alın

Git yüklüyse PowerShell'de projeyi kaydetmek istediğiniz klasöre gidip şu komutu çalıştırın:

```powershell
git clone https://github.com/blu7ck/nitelik-noktasi.git
```

Git kullanmıyorsanız [GitHub'daki proje sayfasını](https://github.com/blu7ck/nitelik-noktasi) açın, **Code → Download ZIP** seçeneğiyle dosyaları indirin ve ZIP dosyasını bir klasöre çıkarın.

### 3. Terminali açıp proje klasörüne gidin

Bu işlem için VS Code gerekmez. Bilgisayarınızın terminalini açabilirsiniz:

- **Windows:** Başlat menüsüne `PowerShell` yazıp Windows PowerShell'i açın.
- **macOS:** Uygulamalar'daki **Terminal** uygulamasını açın.
- **Linux:** Uygulama menüsünden **Terminal**'i açın.

Git ile indirdiyseniz, `git clone` komutunu çalıştırdığınız klasörde proje klasörü oluşur. ZIP ile indirdiyseniz önce ZIP'i çıkardığınız klasörü bulun. Terminalde `cd` komutuyla proje klasörüne geçin. Örneğin Windows'ta:

```powershell
cd "C:\Users\kullanici-adiniz\Downloads\nitelik-noktasi"
```

Klasör adı veya konumu sizde farklıysa örneği kendi klasörünüze göre değiştirin. Terminalin proje klasöründe olduğunu anlamak için `package.json` dosyasının o klasörde bulunduğunu kontrol edin.

### 4. Gerekli paketleri yükleyin

Terminalde şu komutu çalıştırın:

```powershell
npm install
```

Bu işlem proje için gereken paketleri indirir. İnternet bağlantınıza bağlı olarak birkaç dakika sürebilir. İşlem tamamlanınca terminal komut yazmaya hazır hale gelir.

### 5. Web sitesini başlatın

Terminalde şu komutu çalıştırın:

```powershell
npm run dev
```

Terminalde `Local` satırının yanında görünen adresi (genellikle [http://localhost:5173](http://localhost:5173)) tarayıcınızda açın. Site çalışırken terminal penceresini kapatmayın. Durdurmak için terminale tıklayıp **Ctrl+C** tuşlarına basın. İsterseniz aynı komutları VS Code içindeki terminalde de çalıştırabilirsiniz; VS Code zorunlu değildir.

## Sponsorluk formu e-posta ayarı (isteğe bağlı)

Sponsorluk formunun e-posta gönderebilmesi için bir [EmailJS](https://www.emailjs.com/) hesabı ve proje bilgileri gerekir. Bu ayar yapılmadan da siteyi açıp diğer sayfaları inceleyebilirsiniz; ancak sponsorluk formu e-posta gönderemez.

EmailJS hesabınızdan servis, şablon ve public key bilgilerini aldıktan sonra proje kök klasöründe `.env.local` adlı bir dosya oluşturun. Aşağıdaki alanları kendi bilgilerinizle doldurun:

```env
VITE_EMAILJS_SERVICE_ID=EmailJS_servis_kimliginiz
VITE_EMAILJS_TEMPLATE_ID=EmailJS_sablon_kimliginiz
VITE_EMAILJS_PUBLIC_KEY=EmailJS_public_keyiniz
VITE_PRIMARY_EMAIL=basvurulari_alacak_adres@example.com
VITE_CC_EMAIL=kopya_adresi@example.com
```

EmailJS şablonunda formun kullandığı `to_email`, `cc_email`, `from_name`, `from_email`, `company`, `sponsorship_type`, `message` ve `reply_to` değişkenlerini tanımlayın. `.env.local` dosyasını oluşturduktan veya değiştirdikten sonra çalışan geliştirme sunucusunu **Ctrl+C** ile durdurup `npm run dev` komutuyla yeniden başlatın.

> `.env.local` dosyasını kimseyle paylaşmayın ve GitHub'a göndermeyin. Bu dosya Git tarafından yok sayılır. `VITE_` ile başlayan değerler tarayıcıya aktarılır; bu nedenle buraya gizli sunucu anahtarları koymayın.

## Kullanılabilir komutlar

Proje klasöründeki terminalde şu komutları kullanabilirsiniz:

| Komut | Ne yapar? |
| --- | --- |
| `npm install` | Proje paketlerini yükler. |
| `npm run dev` | Geliştirme sunucusunu başlatır. |
| `npm run build` | Yayına alınabilecek üretim dosyalarını `dist` klasörüne oluşturur. |
| `npm run preview` | Üretim derlemesini yerel olarak önizler. Önce `npm run build` çalıştırın. |
| `npm run lint` | Kod biçimi ve olası sorunlar için denetim yapar. |

## Sık karşılaşılan sorunlar

- **`node` veya `npm` komutu bulunamadı:** Node.js kurulumunu tamamlayın, PowerShell ve VS Code'u kapatıp tekrar açın. Sorun sürerse Node.js LTS sürümünü yeniden yükleyin.
- **`npm install` hata veriyor:** İnternet bağlantınızı kontrol edin ve terminalin proje klasöründe olduğundan emin olun.
- **`localhost:5173` açılmıyor:** Terminalde `npm run dev` komutunun çalışmaya devam ettiğini kontrol edin. Vite başka bir port gösterdiyse terminalde yazan adresi açın.
- **Sponsorluk formu e-posta gönderemiyor:** `.env.local` içindeki bilgileri ve EmailJS şablon değişkenlerini kontrol edin; ardından geliştirme sunucusunu yeniden başlatın.

## Sayfalar

- Ana sayfa: `/`
- Etkinlikler: `/events`
- Etkinlik detayı: `/events/gelecegi-tasarlama-atolyesi`
- Sponsorluk: `/sponsorship`
