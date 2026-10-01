// KPSS konu özetleri ve kodlamalar
window.SUB = {
  tr:  { ad: "Türkçe", n: 30, g: "Genel Yetenek" },
  mat: { ad: "Matematik", n: 30, g: "Genel Yetenek" },
  tar: { ad: "Tarih", n: 27, g: "Genel Kültür" },
  cog: { ad: "Coğrafya", n: 18, g: "Genel Kültür" },
  vat: { ad: "Vatandaşlık", n: 9, g: "Genel Kültür" },
  gun: { ad: "Güncel Bilgiler", n: 6, g: "Genel Kültür" },
  eb:  { ad: "Eğitim Bilimleri", n: 80, g: "Öğretmenlik" }
};
// KPSS Önlisans: Eğitim Bilimleri oturumu yok, bu yüzden menüde gösterilmez
window.ORDER = ["tr", "mat", "tar", "cog", "vat", "gun"];

window.NOTES = {
tr: [
{ t: "Paragraf", sik: true, b: `
<p>Türkçe testindeki 30 sorunun yaklaşık yarısı paragraf ve anlam sorusudur. En çok net buradan gelir: her gün en az 10 paragraf sorusu çöz.</p>
<h4>Soru tipleri</h4>
<ul>
<li><b>Ana düşünce:</b> Yazarın asıl mesajı. Çoğunlukla ilk ya da son cümlededir; “bu yüzden, kısacası, yani, demek ki” sonrasına bak.</li>
<li><b>Yardımcı düşünce (değinilmemiştir / çıkarılamaz):</b> Seçenekleri tek tek metinde ara. Yorum yapma, metinde olanı işaretle.</li>
<li><b>Konu:</b> Paragrafın neden söz ettiği. Ana düşünceden daha geniştir.</li>
<li><b>Akışı bozan cümle:</b> Konudan sapan ya da önceki cümleye bağlanmayan cümle. Zamirlere (bu, şu, onlar) ve bağlaçlara bak.</li>
<li><b>İkiye bölme:</b> Konunun ya da bakış açısının değiştiği cümleyi bul.</li>
</ul>
<h4>Anlatım biçimleri</h4>
<div class="tw"><table><tr><th>Biçim</th><th>Nasıl tanırsın</th></tr>
<tr><td>Açıklama</td><td>Bilgi verir, öğretir. Kanıtlama ya da ikna amacı yoktur.</td></tr>
<tr><td>Tartışma</td><td>Karşı görüşü çürütür, kendi görüşünü kanıtlar. Okura soru sorar.</td></tr>
<tr><td>Betimleme</td><td>Sözcüklerle resim çizer. Duyulara seslenir, sıfatlar yoğundur.</td></tr>
<tr><td>Öyküleme</td><td>Olay, kişi, yer, zaman vardır. Fiiller hareket bildirir.</td></tr></table></div>
<h4>Düşünceyi geliştirme yolları</h4>
<ul><li><b>Tanımlama:</b> “... nedir?” sorusuna cevap verir.</li><li><b>Örneklendirme:</b> “örneğin, mesela”.</li><li><b>Karşılaştırma:</b> İki şeyin benzerlik ve farkları; “daha, oysa, ise”.</li><li><b>Tanık gösterme:</b> Ünlü birinin sözüne başvurma.</li><li><b>Sayısal veri:</b> Oran, yüzde, istatistik.</li><li><b>Benzetme:</b> Bir şeyi başka bir şeye benzetme; “gibi”.</li></ul>`,
  kod: "Tartışma = karşı görüşü çürüt. Betimleme = gözünle gör. Öyküleme = olayı yaşa. Açıklama = öğret." },

{ t: "Sözcükte ve Cümlede Anlam", sik: true, b: `
<ul>
<li><b>Gerçek anlam:</b> Sözcüğün akla gelen ilk anlamı (sert kaya).</li>
<li><b>Yan anlam:</b> Gerçek anlamla bağını koruyan yeni anlam (masanın ayağı).</li>
<li><b>Mecaz anlam:</b> Gerçek anlamdan tamamen uzaklaşma (sert mizaç).</li>
<li><b>Terim:</b> Bilim, sanat ya da meslek dalına özgü sözcük (açı, üçgen, perde).</li>
<li><b>Eş sesli:</b> Yazılışı aynı, anlamı ilgisiz (yüz: sayı / çehre).</li>
</ul>
<h4>Cümlede anlam</h4>
<ul>
<li><b>Neden-sonuç:</b> “-den dolayı, için (neden), çünkü”. Eylem gerçekleşmiştir.</li>
<li><b>Amaç-sonuç:</b> “için, üzere, diye” ile yapılmak istenen. Eylem gerçekleşmemiş olabilir.</li>
<li><b>Koşul-sonuç:</b> “-se, -dikçe, -madan” ile bir şart.</li>
<li><b>Nesnel yargı:</b> Kanıtlanabilir, kişiye göre değişmez.</li>
<li><b>Öznel yargı:</b> Kişisel görüş, beğeni; “bence, güzel, sıkıcı”.</li>
</ul>`,
  kod: "Nesnel = tartı, sayı, tarih ile kanıtlanır. Öznel = “bence” eklenebilir." },

{ t: "Ses Bilgisi", sik: false, b: `
<ul>
<li><b>Büyük ünlü uyumu:</b> Kalın ünlüyle (a, ı, o, u) başlayan sözcük kalın, ince ünlüyle (e, i, ö, ü) başlayan ince devam eder. Uymayan ekler: -ken, -leyin, -daş, -yor, -ki, -gil.</li>
<li><b>Küçük ünlü uyumu:</b> Düz ünlüden sonra düz ünlü; yuvarlak ünlüden sonra ya düz-geniş (a, e) ya dar-yuvarlak (u, ü).</li>
<li><b>Ünsüz benzeşmesi (sertleşme):</b> Sert ünsüzle biten sözcüğe c, d, g ile başlayan ek gelince ç, t, k olur: kitap<b>ç</b>ı, sokak<b>t</b>a.</li>
<li><b>Ünsüz yumuşaması:</b> p, ç, t, k ünlüyle başlayan ek alınca b, c, d, ğ olur: dolap → dola<b>b</b>ı, çocuk → çocu<b>ğ</b>u. Tek heceli çoğu sözcükte olmaz (top → topu). Özel adlarda yazıda gösterilmez (Mehmet'i).</li>
<li><b>Ünlü düşmesi:</b> ağız → ağzı, burun → burnu, oğul → oğlu, gönül → gönlü.</li>
<li><b>Ünlü daralması:</b> -yor ekiyle a/e → ı/i/u/ü: başla → başlıyor, de → diyor.</li>
<li><b>Ünsüz türemesi:</b> his → hissi, hak → hakkı, ret → reddi.</li>
<li><b>Ünsüz düşmesi:</b> küçük → küçülmek, alçak → alçalmak.</li>
<li><b>Kaynaştırma ünsüzleri:</b> y, ş, s, n (kapı-y-a, iki-şer, masa-s-ı, bu-n-u).</li>
</ul>`,
  kod: "Sert ünsüzler: “FıSTıKÇı ŞaHaP” → f, s, t, k, ç, ş, h, p. Kaynaştırma: “YeŞiL SaNat” → y, ş, s, n." },

{ t: "Yapı Bilgisi", sik: false, b: `
<ul>
<li><b>Kök:</b> Sözcüğün parçalanamayan en küçük anlamlı parçası (göz, gel).</li>
<li><b>Yapım eki:</b> Yeni sözcük türetir (göz-lük, gel-ecek).</li>
<li><b>Çekim eki:</b> Sözcüğün anlamını değiştirmez, cümledeki görevini belirler (çoğul -ler, hâl ekleri, iyelik, kişi ekleri).</li>
<li><b>Basit sözcük:</b> Yapım eki almamış (kitap, kitaplar).</li>
<li><b>Türemiş sözcük:</b> Yapım eki almış (kitapçı, yazar).</li>
<li><b>Birleşik sözcük:</b> İki ya da daha çok sözcükten oluşan (hanımeli, bilgisayar, kayınpeder).</li>
</ul>`,
  kod: "Yapım eki kalıcı yeni sözcük yapar, çekim eki sadece kıyafet değiştirir." },

{ t: "Sözcük Türleri ve Fiilimsiler", sik: true, b: `
<ul>
<li><b>İsim:</b> Varlıkları karşılar. <b>Sıfat:</b> İsmi niteler ya da belirtir (kırmızı kalem). <b>Zamir:</b> İsmin yerini tutar (o, bu, kendi).</li>
<li><b>Zarf:</b> Fiili, sıfatı ya da başka bir zarfı niteler (hızlı koştu, çok güzel).</li>
<li><b>Edat:</b> Tek başına anlamı yoktur, ilgi kurar (gibi, için, kadar, göre, ile).</li>
<li><b>Bağlaç:</b> Sözcükleri ve cümleleri bağlar (ve, ama, fakat, de, ki, ise).</li>
</ul>
<h4>Fiilimsiler</h4>
<div class="tw"><table><tr><th>Tür</th><th>Ekler</th><th>Örnek</th></tr>
<tr><td>İsim-fiil</td><td>-ma, -ış, -mak</td><td>Kitap okumayı seviyor.</td></tr>
<tr><td>Sıfat-fiil</td><td>-an, -ası, -mez, -ar, -dik, -ecek, -miş</td><td>Gelen misafirler</td></tr>
<tr><td>Zarf-fiil</td><td>-ıp, -arak, -ınca, -ken, -dıkça, -madan, -alı</td><td>Koşarak geldi.</td></tr></table></div>
<p>Kalıcı isim olmuş sözcükler fiilimsi sayılmaz: dondurma, çakmak, yazar, dolmuş.</p>`,
  kod: "Sıfat-fiil: “ANASI MEZAR DIKECEKMIŞ” → -an, -ası, -mez, -ar, -dik, -ecek, -miş. İsim-fiil: “MA-IŞ-MAK”." },

{ t: "Cümlenin Ögeleri", sik: true, b: `
<ol>
<li><b>Yüklem:</b> İş, oluş, hareket bildiren temel öge. Önce yüklemi bul.</li>
<li><b>Özne:</b> Yüklemi yapan: “kim, ne?” Gerçek özne yoksa gizli özne olabilir (Geldim → ben).</li>
<li><b>Nesne:</b> İşten etkilenen. Belirtili: “neyi, kimi?”; belirtisiz: “ne?”</li>
<li><b>Dolaylı tümleç:</b> -e, -de, -den hâl ekleri: “kime, nereye, nerede, nereden?”</li>
<li><b>Zarf tümleci:</b> “nasıl, ne zaman, niçin, ne kadar, kiminle?” (-le eki birliktelik ve araçta zarf tümlecidir.)</li>
</ol>
<p>Ara söz ve cümle dışı unsurlar (Ey, Hey) öge değildir.</p>`,
  kod: "Sıra: Yüklem → Özne → Nesne → Dolaylı tümleç → Zarf tümleci. Soruyu yükleme sor." },

{ t: "Cümle Türleri", sik: false, b: `
<ul>
<li><b>Yüklemin türüne göre:</b> İsim cümlesi (Hava soğuk.) / Fiil cümlesi (Kar yağdı.)</li>
<li><b>Yüklemin yerine göre:</b> Kurallı (yüklem sonda) / Devrik (yüklem sonda değil) / Eksiltili (yüklem yok, “...” ile biter).</li>
<li><b>Anlamına göre:</b> Olumlu, olumsuz, soru, ünlem.</li>
<li><b>Yapısına göre:</b> Basit (tek yargı), birleşik (girişik: fiilimsi grubu var; şartlı: -se; ki'li; iç içe), sıralı (virgül/noktalı virgülle), bağlı (bağlaçla).</li>
</ul>`,
  kod: "Fiilimsi grubu varsa girişik birleşik; “-se” varsa şartlı birleşik." },

{ t: "Yazım Kuralları", sik: true, b: `
<ul>
<li><b>“de/da” bağlacı</b> her zaman ayrı yazılır; çıkarınca anlam bozulmuyorsa bağlaçtır: “Ben de geldim.” Hâl eki olan -de/-da bitişiktir: “Evde kaldım.”</li>
<li><b>“ki” bağlacı</b> ayrı yazılır: “Duydum ki gitmişsin.” Bitişik olanlar: belki, çünkü, sanki, oysaki, mademki, hâlbuki, meğerki. -ki sıfat eki bitişik: evdeki, yarınki.</li>
<li><b>“mi” soru eki</b> ayrı yazılır, önceki sözcüğe göre uyuma girer: geldi mi, güzel mi.</li>
<li><b>Sayılar</b> ayrı yazılır: on beş, yüz yirmi. Rakamla sıra sayısı: 3. ya da 3'üncü (ikisi birden olmaz).</li>
<li><b>Kesme işareti:</b> Özel adlara gelen çekim ekleri ayrılır (Ankara'ya). Kurum, kuruluş adlarına gelen ekler ayrılmaz (Türk Dil Kurumunun). Kısaltmalarda ayrılır (TDK'nin).</li>
<li><b>Büyük harf:</b> Cadde, sokak, kurum adlarının her sözcüğü büyük: Atatürk Caddesi. Gün ve ay adları belirli tarihte büyük: 29 Ekim 1923 Pazartesi.</li>
</ul>`,
  kod: "Bitişik “ki”ler: belki, çünkü, sanki, oysaki, mademki, hâlbuki, meğerki." },

{ t: "Noktalama İşaretleri", sik: false, b: `
<ul>
<li><b>Nokta (.):</b> Cümle sonunda, kısaltmalarda, sıra sayılarında (3.), saat ve dakika arasında (15.30).</li>
<li><b>Virgül (,):</b> Eş görevli sözcükleri ayırır, ara sözü ayırır, uzun cümlede özneden sonra konur.</li>
<li><b>Noktalı virgül (;):</b> Ögeleri virgülle ayrılmış sıralı cümleleri ayırır; “ama, fakat” gibi bağlaçlardan önce konabilir.</li>
<li><b>İki nokta (:):</b> Kendisinden sonra açıklama, örnek ya da alıntı gelecek cümlenin sonunda.</li>
<li><b>Üç nokta (...):</b> Tamamlanmamış cümle, söylenmek istenmeyen sözler.</li>
<li><b>Kısa çizgi (-):</b> Satır sonunda bölme, ara sözü ayırma, “-den ... -e” anlamında (Ankara-İstanbul).</li>
<li><b>Uzun çizgi (—):</b> Konuşmaları göstermek için satır başında.</li>
</ul>`,
  kod: "İki nokta = “işte şunlar”. Noktalı virgül = virgülden güçlü, noktadan zayıf." },

{ t: "Anlatım Bozuklukları", sik: true, b: `
<h4>Anlamsal bozukluklar</h4>
<ul>
<li><b>Gereksiz sözcük:</b> “Yaklaşık yüz kadar kişi” (yaklaşık = kadar).</li>
<li><b>Yanlış anlamda sözcük:</b> “Fiyatlar çok ucuzladı” yerine “Fiyatlar düştü”.</li>
<li><b>Anlamca çelişen sözcükler:</b> “Mutlaka gelmiş olabilir.”</li>
<li><b>Mantık hatası, sıralama hatası:</b> “Toplantıya öğrenciler, hatta bakan da katıldı.” doğru, “bakan, hatta öğrenciler” yanlış.</li>
</ul>
<h4>Yapısal bozukluklar</h4>
<ul>
<li><b>Özne-yüklem uyumsuzluğu:</b> “Ben ve arkadaşım geldiler” → geldik.</li>
<li><b>Ortak öge yanlışlığı:</b> “Onu sevdi ve güvendi” → ona güvendi.</li>
<li><b>Ek eylem eksikliği:</b> “Sınıf temiz, öğrenciler çalışkandı” → “Sınıf temizdi”.</li>
<li><b>Çatı uyuşmazlığı:</b> Etken ve edilgen yüklemler aynı özneye bağlanamaz.</li>
</ul>`,
  kod: "Önce anlamı kontrol et (gereksiz, çelişik, yanlış sözcük), sonra ögeleri (özne-yüklem, ortak öge)." },

{ t: "Sözel Mantık", sik: false, b: `
<p>Kişi, sıra, gün eşleştirme soruları. Son yıllarda 3–5 soru olarak gelir.</p>
<ul><li>Kesin bilgileri (“Ali en solda”) önce tabloya yaz.</li><li>“Hemen yanında”, “bitişik” gibi ikili bilgileri blok olarak düşün.</li><li>Olumsuz bilgileri (“... değil”) tabloda çarpı ile işaretle.</li><li>Seçenekleri tabloya tek tek dene; çelişki çıkaranı ele.</li></ul>`,
  kod: "Kesin bilgi → blok bilgi → olumsuz bilgi → seçenek dene." }
],

mat: [
{ t: "Temel Kavramlar", sik: true, b: `
<ul>
<li>Rakamlar: 0–9. En küçük asal sayı 2'dir (tek çift asal). 1 asal değildir.</li>
<li>Ardışık sayılar: 1 + 2 + ... + n = n(n+1)/2. İlk n çift sayı: n(n+1). İlk n tek sayı: n².</li>
<li>Terim sayısı = (son − ilk) / artış + 1.</li>
<li>Mutlak değer: |x| ≥ 0. |x − a| = b → x = a + b ya da x = a − b.</li>
<li>Tek × tek = tek; çift × herhangi = çift. Tek + tek = çift.</li>
</ul>`,
  kod: "Terim sayısı: “son eksi ilk, bölü artış, artı bir”." },

{ t: "Bölünebilme ve EBOB-EKOK", sik: true, b: `
<div class="tw"><table><tr><th>Bölen</th><th>Kural</th></tr>
<tr><td>2</td><td>Son basamak çift</td></tr><tr><td>3</td><td>Rakamlar toplamı 3'ün katı</td></tr>
<tr><td>4</td><td>Son iki basamak 4'ün katı</td></tr><tr><td>5</td><td>Son basamak 0 ya da 5</td></tr>
<tr><td>6</td><td>2 ve 3 ile bölünür</td></tr><tr><td>8</td><td>Son üç basamak 8'in katı</td></tr>
<tr><td>9</td><td>Rakamlar toplamı 9'un katı</td></tr>
<tr><td>11</td><td>Sağdan +, −, +, − ile toplam 11'in katı</td></tr></table></div>
<ul><li>Pozitif bölen sayısı: a<sup>x</sup>·b<sup>y</sup> → (x+1)(y+1).</li><li>İki sayı için: EBOB · EKOK = a · b.</li><li>“En büyük parça, en az sayı” soruları EBOB; “aynı anda tekrar, en az ortak” soruları EKOK.</li></ul>`,
  kod: "Parçala → EBOB. Birleştir, tekrar buluş → EKOK." },

{ t: "Rasyonel, Üslü ve Köklü Sayılar", sik: false, b: `
<ul>
<li>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>; (a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup>; a<sup>0</sup> = 1 (a ≠ 0); a<sup>−n</sup> = 1/a<sup>n</sup>.</li>
<li>(−2)<sup>4</sup> = 16 ama −2<sup>4</sup> = −16. Negatif tabanın çift kuvveti pozitiftir.</li>
<li>√a · √b = √(ab); √12 = 2√3. Toplamada sadece aynı kökler toplanır: 2√3 + 3√3 = 5√3.</li>
<li>Paydayı kökten kurtarmak için eşleniğiyle çarp: 1/(√3 − 1) → (√3 + 1)/2.</li>
<li>Devirli ondalık: 0,333... = 3/9 = 1/3.</li>
</ul>`,
  kod: "Çarpmada üsler toplanır, üssün üssünde çarpılır." },

{ t: "Oran-Orantı ve Denklemler", sik: false, b: `
<ul>
<li>a/b = c/d ise a·d = b·c.</li>
<li><b>Doğru orantı:</b> Biri artınca diğeri aynı oranda artar (işçi sayısı – yapılan iş).</li>
<li><b>Ters orantı:</b> Biri artınca diğeri azalır (işçi sayısı – işin bitme süresi).</li>
<li>a/b = 3/5 ise a = 3k, b = 5k yaz; soruyu k ile çöz.</li>
</ul>`,
  kod: "Oran verildi mi? Hemen “k” koy." },

{ t: "Problemler", sik: true, b: `
<div class="tw"><table><tr><th>Tür</th><th>Anahtar</th></tr>
<tr><td>Yaş</td><td>İki kişinin yaş farkı hiç değişmez. t yıl sonra herkes t yaş büyür.</td></tr>
<tr><td>Yüzde</td><td>%x artış → ×(100+x)/100. %20 artıp %20 azalan fiyat %4 düşer.</td></tr>
<tr><td>Kâr-zarar</td><td>Aksi söylenmedikçe alış (maliyet) fiyatı üzerinden hesaplanır.</td></tr>
<tr><td>İşçi</td><td>1/a + 1/b = 1/t → iki kişi için t = ab/(a+b).</td></tr>
<tr><td>Hareket</td><td>Yol = hız × zaman. Karşılaşma: yol/(v₁+v₂). Yetişme: fark/(v₁−v₂).</td></tr>
<tr><td>Havuz</td><td>Dolduran musluk +, boşaltan musluk −.</td></tr></table></div>`,
  kod: "Yaş farkı sabit, yol = hız × zaman, kâr maliyetten." },

{ t: "Kümeler", sik: false, b: `
<ul>
<li>s(A ∪ B) = s(A) + s(B) − s(A ∩ B).</li>
<li>n elemanlı kümenin alt küme sayısı 2<sup>n</sup>; öz alt küme sayısı 2<sup>n</sup> − 1.</li>
<li>r elemanlı alt küme sayısı: C(n, r).</li>
<li>Venn şeması çiz: önce kesişimi, sonra “yalnız” bölgeleri doldur.</li>
</ul>`,
  kod: "Venn'de içten dışa doldur: önce kesişim." },

{ t: "Permütasyon ve Olasılık", sik: true, b: `
<ul>
<li>n! = 1·2·...·n; 0! = 1.</li>
<li>Permütasyon (sıralama önemli): P(n, r) = n!/(n−r)!</li>
<li>Tekrarlı harf: n!/(tekrarların faktöriyelleri çarpımı). KPSS → 4!/2! = 12.</li>
<li>Kombinasyon (seçim, sıra önemsiz): C(n, r) = n!/(r!(n−r)!).</li>
<li>Olasılık = istenen durum / tüm durumlar. İki zarda 36 durum vardır.</li>
</ul>`,
  kod: "Sıra önemliyse permütasyon, “seçme, grup, takım” diyorsa kombinasyon." },

{ t: "Geometri", sik: false, b: `
<ul>
<li>Üçgenin iç açıları 180°; n kenarlı çokgenin iç açıları (n − 2)·180°.</li>
<li>Düzgün çokgenin bir dış açısı 360°/n.</li>
<li>Pisagor: a² + b² = c². Özel üçlüler: 3-4-5, 5-12-13, 8-15-17, 6-8-10.</li>
<li>30-60-90 üçgeni: 1 – √3 – 2. 45-45-90: 1 – 1 – √2.</li>
<li>Alanlar: üçgen taban·yükseklik/2; dikdörtgen a·b; kare a²; yamuk (a+c)·h/2; daire πr²; çevre 2πr.</li>
</ul>`,
  kod: "3-4-5 üçlüsünü gördüğün an hesap yapmayı bırak." },

{ t: "Sayısal Mantık", sik: true, b: `
<p>Tablo, grafik ve örüntü soruları. Son yıllarda matematiğin önemli bir bölümünü oluşturur.</p>
<ul><li>Dizilerde ardışık farklara bak; farklar sabit değilse farkların farkına ya da çarpan ilişkisine bak (×2 − 1 gibi).</li><li>Grafik sorularında önce eksen birimlerini oku.</li><li>Seçenekleri geriye doğru denemek çoğu zaman en hızlı yoldur.</li></ul>`,
  kod: "Fark → farkın farkı → oran. Üç adımda örüntü bulunur." }
],

tar: [
{ t: "İslamiyet Öncesi Türk Tarihi", sik: true, b: `
<ul>
<li><b>Asya Hun (M.Ö. 220):</b> Mete Han ordu teşkilatında onlu sistemi kurdu (bugünkü Türk ordusunun kuruluşu M.Ö. 209).</li>
<li><b>Avrupa Hun:</b> 375'te Balamir önderliğinde batıya ilerleme → Kavimler Göçü; Attila döneminde en güçlü hâl.</li>
<li><b>Göktürkler (552):</b> Türk adıyla kurulan ilk Türk devleti (Bumin Kağan). II. Göktürk (Kutluk) Devleti'nin Orhun Yazıtları, Türk adının geçtiği ilk Türk kaynağıdır.</li>
<li><b>Uygurlar:</b> Yerleşik hayata geçen ilk Türk devleti; Mani dini, kendi alfabesi, matbaa, kâğıt.</li>
</ul>
<h4>Kültür</h4>
<ul><li><b>Kut:</b> Yönetme yetkisinin Tanrı tarafından verildiği inancı.</li><li><b>Kurultay (Toy):</b> Devlet işlerinin görüşüldüğü meclis.</li><li><b>Töre:</b> Yazısız hukuk kuralları.</li><li><b>İkili teşkilat:</b> Doğu (kağan) ve batı (yabgu) yönetimi.</li><li>Ülke hanedanın ortak malı sayılırdı → taht kavgaları.</li></ul>`,
  kod: "HGU sırası: Hun (onlu sistem) → Göktürk (Türk adı, Orhun) → Uygur (yerleşik hayat)." },

{ t: "İlk Türk-İslam Devletleri", sik: false, b: `
<ul>
<li><b>Talas Savaşı (751):</b> Türk-Arap yakınlaşması; kâğıt İslam dünyasına geçti.</li>
<li><b>Karahanlılar:</b> Satuk Buğra Han İslamiyet'i kabul etti. Türkçe resmî dildi. Kutadgu Bilig (Yusuf Has Hacib), Divanü Lügati't-Türk (Kaşgarlı Mahmud), Atabetü'l-Hakayık (Edip Ahmet).</li>
<li><b>Gazneliler:</b> Gazneli Mahmut, Hindistan seferleri; “sultan” unvanını ilk kullanan hükümdar.</li>
<li><b>Büyük Selçuklu:</b> Dandanakan 1040 (kuruluş), Pasinler 1048 (ilk Türk-Bizans savaşı), Malazgirt 1071 (Anadolu'nun kapıları açıldı). Nizamülmülk: Nizamiye medreseleri, Siyasetname.</li>
<li><b>Türkiye Selçukluları:</b> Miryokefalon 1176 (Anadolu kesin Türk yurdu), Yassıçemen 1230, Kösedağ 1243 (Moğol egemenliği).</li>
</ul>`,
  kod: "1040 kuruluş, 1048 ilk çarpışma, 1071 kapı açıldı, 1176 tapu alındı." },

{ t: "Osmanlı Siyasi Tarihi", sik: true, b: `
<div class="tw"><table><tr><th>Yıl</th><th>Olay</th><th>Neden önemli</th></tr>
<tr><td>1302</td><td>Koyunhisar (Bafeus)</td><td>Bizans ile ilk savaş</td></tr>
<tr><td>1364</td><td>Sırpsındığı</td><td>İlk Osmanlı-Haçlı savaşı</td></tr>
<tr><td>1402</td><td>Ankara Savaşı</td><td>Timur'a yenilgi, Fetret Devri</td></tr>
<tr><td>1453</td><td>İstanbul'un fethi</td><td>Orta Çağ kapandı</td></tr>
<tr><td>1514 / 1516–17</td><td>Çaldıran / Mercidabık-Ridaniye</td><td>Doğu Anadolu; halifelik Osmanlı'ya geçti</td></tr>
<tr><td>1526 / 1538</td><td>Mohaç / Preveze</td><td>Macaristan; Akdeniz Türk gölü</td></tr>
<tr><td>1606</td><td>Zitvatorok</td><td>Avusturya ile eşitlik</td></tr>
<tr><td>1639</td><td>Kasr-ı Şirin</td><td>İran sınırı büyük ölçüde çizildi</td></tr>
<tr><td>1699</td><td>Karlofça</td><td>İlk büyük toprak kaybı</td></tr>
<tr><td>1718</td><td>Pasarofça</td><td>Lale Devri başladı</td></tr>
<tr><td>1774</td><td>Küçük Kaynarca</td><td>Kırım bağımsız, ilk savaş tazminatı</td></tr>
<tr><td>1839 / 1856</td><td>Tanzimat / Islahat Fermanı</td><td>Hukukun üstünlüğü; gayrimüslimlere haklar</td></tr>
<tr><td>1876</td><td>I. Meşrutiyet</td><td>Kanun-i Esasi, II. Abdülhamit</td></tr>
<tr><td>1908</td><td>II. Meşrutiyet</td><td>Meclis yeniden açıldı</td></tr></table></div>`,
  kod: "Karlofça = ilk kayıp, Küçük Kaynarca = ilk tazminat, Pasarofça = Lale." },

{ t: "Osmanlı Kültür ve Medeniyeti", sik: true, b: `
<h4>Divan-ı Hümayun</h4>
<ul><li><b>Sadrazam:</b> Padişahın mutlak vekili.</li><li><b>Kazasker:</b> Hukuk ve eğitim.</li><li><b>Defterdar:</b> Maliye.</li><li><b>Nişancı:</b> Tuğra çekme, tapu kayıtları.</li><li><b>Şeyhülislam:</b> Fetva verir; Divan'ın asıl üyesi değildi.</li></ul>
<h4>Toprak ve vergi</h4>
<ul><li><b>Dirlik:</b> Tımar 3.000–20.000, zeamet 20.000–100.000, has 100.000+ akçe.</li><li><b>Öşür:</b> Müslüman halkın ürününden alınan vergi. <b>Cizye:</b> Askerlik yapmayan gayrimüslim erkeklerden alınan vergi. <b>Avarız:</b> Olağanüstü durum vergisi.</li><li><b>Devşirme:</b> Gayrimüslim çocukların yetiştirilmesi (Enderun, yeniçeri).</li></ul>
<h4>Yenilikler</h4>
<ul><li>İlk matbaa: İbrahim Müteferrika, 1727 (Lale Devri).</li><li>Nizam-ı Cedid: III. Selim. Yeniçeri Ocağı'nın kaldırılması: 1826, II. Mahmut.</li><li>İlk resmî gazete Takvim-i Vekayi (1831); ilk özel gazete Tercüman-ı Ahval (1860).</li></ul>`,
  kod: "Divan'da para Defterdar'da, hukuk Kazasker'de, mühür Nişancı'da." },

{ t: "Kurtuluş Savaşı: Hazırlık", sik: true, b: `
<ul>
<li><b>Mondros (30 Ekim 1918):</b> 7. madde → İtilaf devletleri güvenliklerini tehdit eden her yeri işgal edebilecekti.</li>
<li><b>Zararlı cemiyetler:</b> Mavri Mira, Pontus, Etnik-i Eterya, Taşnak-Hınçak (azınlık); İngiliz Muhipler, Wilson Prensipleri, Kürt Teali (Türk).</li>
<li><b>Yararlı cemiyetler:</b> Müdafaa-i Hukuk cemiyetleri, Redd-i İlhak, Kilikyalılar.</li>
<li><b>Havza Genelgesi (28 Mayıs 1919):</b> İşgallere karşı protesto mitingleri düzenlenmesi istendi.</li>
<li><b>Amasya Genelgesi (22 Haziran 1919):</b> “Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.” Millî egemenliğe ilk vurgu.</li>
<li><b>Erzurum Kongresi (23 Temmuz–7 Ağustos 1919):</b> Toplanışı bölgesel, kararları ulusal. Manda ve himaye ilk kez reddedildi.</li>
<li><b>Sivas Kongresi (4–11 Eylül 1919):</b> Cemiyetler “Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti” adıyla birleşti; Temsil Heyeti tüm yurdu temsil etti.</li>
<li><b>Misak-ı Milli (28 Ocak 1920):</b> Son Osmanlı Mebusan Meclisi kabul etti.</li>
<li><b>TBMM'nin açılışı:</b> 23 Nisan 1920.</li>
</ul>`,
  kod: "A-E-S: Amasya (sinyal), Erzurum (manda reddi), Sivas (birleşme)." },

{ t: "Kurtuluş Savaşı: Cepheler ve Antlaşmalar", sik: true, b: `
<div class="tw"><table><tr><th>Olay</th><th>Tarih</th><th>Sonuç</th></tr>
<tr><td>Gümrü Antlaşması</td><td>3 Aralık 1920</td><td>Ermenistan; TBMM'nin ilk askerî-siyasi başarısı, ilk uluslararası antlaşması</td></tr>
<tr><td>I. İnönü</td><td>Ocak 1921</td><td>Düzenli ordunun ilk zaferi; Londra Konferansı</td></tr>
<tr><td>II. İnönü</td><td>Mart 1921</td><td>Moskova Antlaşması (16 Mart 1921)</td></tr>
<tr><td>Kütahya-Eskişehir</td><td>Temmuz 1921</td><td>Yenilgi; Başkomutanlık Kanunu</td></tr>
<tr><td>Tekalif-i Milliye</td><td>Ağustos 1921</td><td>Sakarya öncesi ordunun ihtiyaçları</td></tr>
<tr><td>Sakarya</td><td>23 Ağustos–13 Eylül 1921</td><td>Gazi unvanı, Mareşal rütbesi; Kars ve Ankara antlaşmaları</td></tr>
<tr><td>Ankara Antlaşması</td><td>20 Ekim 1921</td><td>Fransa: bir İtilaf devleti TBMM'yi tanıdı</td></tr>
<tr><td>Büyük Taarruz</td><td>26–30 Ağustos 1922</td><td>Başkomutanlık Meydan Muharebesi</td></tr>
<tr><td>Mudanya Ateşkesi</td><td>11 Ekim 1922</td><td>Doğu Trakya savaşmadan alındı</td></tr>
<tr><td>Saltanatın kaldırılması</td><td>1 Kasım 1922</td><td>—</td></tr>
<tr><td>Lozan Barışı</td><td>24 Temmuz 1923</td><td>Yeni Türk devletinin uluslararası tanınması</td></tr></table></div>`,
  kod: "Gümrü = ilk, Moskova = ilk büyük tanıma, Ankara = ilk İtilaf tanıması, Mudanya = savaşsız Trakya." },

{ t: "Atatürk İlke ve İnkılapları", sik: true, b: `
<div class="tw"><table><tr><th>Alan</th><th>İnkılaplar</th></tr>
<tr><td>Siyasi</td><td>Saltanatın kaldırılması (1922), Cumhuriyet (29 Ekim 1923), Halifeliğin kaldırılması (3 Mart 1924)</td></tr>
<tr><td>Hukuk</td><td>Türk Medeni Kanunu (17 Şubat 1926, İsviçre'den)</td></tr>
<tr><td>Eğitim-kültür</td><td>Tevhid-i Tedrisat (3 Mart 1924), Harf İnkılabı (1 Kasım 1928), Millet Mektepleri (1928), TTK (1931), TDK (1932), Üniversite Reformu (1933)</td></tr>
<tr><td>Toplumsal</td><td>Şapka Kanunu ve tekke-zaviyelerin kapatılması (1925), uluslararası takvim ve saat (1925), Ölçüler Kanunu (1931), Soyadı Kanunu (1934), lakap ve unvanların kaldırılması (1934), hafta tatili pazar (1935)</td></tr>
<tr><td>Kadın hakları</td><td>Belediye seçimleri 1930, muhtarlık 1933, milletvekilliği 5 Aralık 1934</td></tr>
<tr><td>Ekonomi</td><td>İzmir İktisat Kongresi (1923), Aşar vergisinin kaldırılması (1925), Kabotaj Kanunu (1926), Teşvik-i Sanayi (1927), I. Beş Yıllık Sanayi Planı (1934)</td></tr></table></div>
<h4>Altı ilke (1937'de anayasaya girdi)</h4>
<p>Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık.</p>`,
  kod: "Altı ilke: “CuMHuDeLİ” → Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık. 3 Mart 1924 = 4 olay tek gün." },

{ t: "Atatürk Dönemi Dış Politika", sik: false, b: `
<ul>
<li><b>Musul:</b> 1926 Ankara Antlaşması ile Irak'a bırakıldı.</li>
<li><b>Milletler Cemiyeti:</b> 1932'de üyelik.</li>
<li><b>Balkan Antantı (1934):</b> Türkiye, Yunanistan, Yugoslavya, Romanya.</li>
<li><b>Montrö Boğazlar Sözleşmesi (1936):</b> Boğazlarda tam Türk egemenliği.</li>
<li><b>Sadabat Paktı (1937):</b> Türkiye, İran, Irak, Afganistan.</li>
<li><b>Hatay:</b> 1938'de Hatay Devleti; 29 Haziran 1939'da anavatana katıldı.</li>
</ul>`,
  kod: "Balkan '34 batıda, Sadabat '37 doğuda; Montrö '36 ortada." },

{ t: "Çağdaş Türk ve Dünya Tarihi", sik: false, b: `
<ul>
<li>II. Dünya Savaşı (1939–1945): Türkiye savaşa fiilen girmedi; Şubat 1945'te Almanya'ya sembolik savaş ilanı (BM'ye kurucu üye olabilmek için).</li>
<li>Çok partili hayat: 1946 seçimleri; 1950'de Demokrat Parti iktidar oldu.</li>
<li>Truman Doktrini (1947) ve Marshall Planı (1948): ABD yardımları.</li>
<li>Kore Savaşı (1950): Türk askeri gönderildi → NATO üyeliği (1952).</li>
<li>Kıbrıs Barış Harekâtı: 1974. KKTC: 1983.</li>
<li>Soğuk Savaş'ın sonu: Berlin Duvarı'nın yıkılması 1989, SSCB'nin dağılması 1991.</li>
</ul>`,
  kod: "Kore '50 → NATO '52." }
],

cog: [
{ t: "Coğrafi Konum", sik: true, b: `
<ul>
<li><b>Mutlak konum:</b> 36°–42° Kuzey enlemleri, 26°–45° Doğu boylamları.</li>
<li>Enlemin sonuçları: güneş ışınlarının geliş açısı, sıcaklığın güneyden kuzeye azalması, dört mevsim.</li>
<li>Boylamın sonucu: yerel saat farkı. 19 boylam × 4 dk = 76 dakika.</li>
<li><b>Uç noktalar:</b> Kuzey Sinop İnceburun, güney Hatay (Beysun), doğu Iğdır (Dilucu), batı Gökçeada.</li>
<li>Yüzölçümü yaklaşık 783 bin km².</li>
</ul>`,
  kod: "Enlem = sıcaklık ve açı. Boylam = saat." },

{ t: "İklim ve Bitki Örtüsü", sik: true, b: `
<div class="tw"><table><tr><th>İklim</th><th>Özellik</th><th>Bitki örtüsü</th></tr>
<tr><td>Akdeniz</td><td>Yazlar sıcak-kurak, kışlar ılık-yağışlı</td><td>Maki</td></tr>
<tr><td>Karadeniz</td><td>Her mevsim yağışlı</td><td>Orman</td></tr>
<tr><td>Karasal</td><td>Yazlar sıcak-kurak, kışlar soğuk-karlı</td><td>Bozkır (step)</td></tr></table></div>
<h4>Yağış türleri</h4>
<ul><li><b>Orografik (yamaç):</b> Nemli hava dağ yamacında yükselir. Karadeniz ve Akdeniz kıyıları.</li><li><b>Konveksiyonel (yükselim):</b> Isınan hava yükselir. İç Anadolu'da ilkbaharda “kırkikindi” yağmurları.</li><li><b>Cephesel:</b> Sıcak ve soğuk hava kütlesi karşılaşır. Akdeniz'de kış yağışları.</li></ul>`,
  kod: "Karadeniz yağışı dağdan (orografik), İç Anadolu yağışı ısınmadan (konveksiyonel)." },

{ t: "Yer Şekilleri ve Sular", sik: false, b: `
<ul>
<li><b>Kıyı tipleri:</b> Boyuna (dağlar kıyıya paralel): Karadeniz, Akdeniz. Enine (dağlar kıyıya dik): Ege. Ria (akarsu vadisini deniz basmış): İstanbul Boğazı, Haliç.</li>
<li><b>Delta ovaları:</b> Çukurova (Seyhan-Ceyhan), Bafra (Kızılırmak), Çarşamba (Yeşilırmak), Silifke (Göksu).</li>
<li><b>Göller:</b> Van (volkanik set, Nemrut lavları), Nemrut Krater Gölü (Bitlis), Tuz Gölü ve Sapanca (tektonik), Tortum, Abant, Yedigöller, Sera (heyelan set).</li>
<li><b>Karstik şekiller:</b> Obruk, dolin, uvala, polye, mağara, traverten (Pamukkale).</li>
<li><b>Volkanik dağlar:</b> Ağrı (5137 m, en yüksek), Erciyes, Hasan, Nemrut, Süphan, Tendürek, Karacadağ.</li>
<li>Sınırlarımız içinde en uzun akarsu: Kızılırmak.</li>
</ul>`,
  kod: "Heyelan set gölleri: “TAYS” → Tortum, Abant, Yedigöller, Sera." },

{ t: "Nüfus ve Yerleşme", sik: false, b: `
<ul>
<li>İlk nüfus sayımı: 1927 (yaklaşık 13,6 milyon).</li>
<li>Nüfusu en kalabalık il İstanbul; en az il Bayburt.</li>
<li>Nüfus yoğunluğu en fazla Marmara Bölgesi'nde.</li>
<li>Nüfus artış hızı düşüyor, ortanca yaş yükseliyor (nüfus yaşlanıyor).</li>
<li>Göçün temel nedenleri: iş, eğitim, sağlık; yön genelde doğudan batıya, kırdan kente.</li>
</ul>`,
  kod: "1927 ilk sayım; en kalabalık İstanbul, en az Bayburt." },

{ t: "Tarım ve Hayvancılık", sik: true, b: `
<div class="tw"><table><tr><th>Ürün</th><th>Başlıca yer</th></tr>
<tr><td>Çay</td><td>Rize (Doğu Karadeniz)</td></tr><tr><td>Fındık</td><td>Ordu, Giresun</td></tr>
<tr><td>Muz</td><td>Anamur, Alanya</td></tr><tr><td>Pamuk</td><td>Şanlıurfa (Harran), Çukurova, Söke</td></tr>
<tr><td>Zeytin</td><td>Ege ve Akdeniz kıyıları</td></tr><tr><td>Turunçgiller</td><td>Akdeniz kıyıları</td></tr>
<tr><td>Buğday</td><td>İç Anadolu</td></tr><tr><td>Şeker pancarı</td><td>İç Anadolu (Konya)</td></tr>
<tr><td>Ayçiçeği</td><td>Trakya</td></tr><tr><td>Haşhaş</td><td>Afyonkarahisar (kontrollü ekim)</td></tr>
<tr><td>Çeltik (pirinç)</td><td>Edirne (Meriç), Samsun, Çorum</td></tr></table></div>
<ul><li>Büyükbaş: Doğu Anadolu (Erzurum-Kars). Ankara keçisi (tiftik): İç Anadolu. İpekböcekçiliği: Bursa. Hamsi: Karadeniz.</li></ul>`,
  kod: "Karadeniz'de çay-fındık, Akdeniz'de muz-turunçgil, GAP'ta pamuk." },

{ t: "Madenler ve Enerji", sik: true, b: `
<div class="tw"><table><tr><th>Kaynak</th><th>Başlıca yer</th></tr>
<tr><td>Bor</td><td>Eskişehir Kırka, Balıkesir Bigadiç, Kütahya Emet, Bursa Kestelek</td></tr>
<tr><td>Krom</td><td>Elazığ Guleman, Muğla Fethiye, Bursa Orhaneli</td></tr>
<tr><td>Demir</td><td>Sivas Divriği, Malatya Hekimhan (işleme: Karabük, Ereğli, İskenderun)</td></tr>
<tr><td>Bakır</td><td>Artvin Murgul, Kastamonu Küre, Elazığ Maden, Rize Çayeli</td></tr>
<tr><td>Boksit</td><td>Konya Seydişehir</td></tr>
<tr><td>Linyit</td><td>Afşin-Elbistan, Soma, Tunçbilek-Seyitömer, Yatağan</td></tr>
<tr><td>Taşkömürü</td><td>Zonguldak</td></tr>
<tr><td>Petrol</td><td>Batman (Raman), Adıyaman, Şırnak (Gabar)</td></tr>
<tr><td>Doğal gaz</td><td>Karadeniz Sakarya Gaz Sahası</td></tr></table></div>
<ul><li>HES: Atatürk, Keban, Karakaya (Fırat), Ilısu (Dicle). Jeotermal: ilk santral Denizli Sarayköy (Kızıldere). Nükleer: Akkuyu (Mersin). Rüzgâr: Ege ve Marmara.</li></ul>`,
  kod: "Bor Kırka, Krom Guleman, Demir Divriği, Bakır Murgul, Boksit Seydişehir, Taşkömürü Zonguldak." },

{ t: "Sanayi, Ulaşım ve Turizm", sik: false, b: `
<ul>
<li>İlk şeker fabrikaları: Uşak ve Alpullu (1926). İlk demir-çelik: Karabük (1937).</li>
<li>Sanayinin en yoğun olduğu bölge Marmara.</li>
<li>Ulaşım projeleri: Marmaray (2013), Avrasya Tüneli ve Osmangazi Köprüsü (2016), 1915 Çanakkale Köprüsü (2022).</li>
<li>Turizm: Kapadokya (peribacaları, volkanik tüf aşınması), Pamukkale (traverten), Efes, Göbeklitepe.</li>
</ul>`,
  kod: "Karabük = ilk demir-çelik, Uşak-Alpullu = ilk şeker." },

{ t: "Bölgeler ve Projeler", sik: false, b: `
<ul>
<li>7 coğrafi bölge. En büyük Doğu Anadolu, en küçük Güneydoğu Anadolu.</li>
<li><b>GAP illeri (9):</b> Adıyaman, Batman, Diyarbakır, Gaziantep, Kilis, Mardin, Siirt, Şanlıurfa, Şırnak.</li>
<li>Diğer kalkınma projeleri: DAP (Doğu Anadolu), DOKAP (Doğu Karadeniz), KOP (Konya Ovası), ZBK (Zonguldak-Bartın-Karabük).</li>
</ul>`,
  kod: "GAP illeri: “SiBAŞŞ MaGaKiDi” → Siirt, Batman, Adıyaman, Şanlıurfa, Şırnak, Mardin, Gaziantep, Kilis, Diyarbakır." }
],

vat: [
{ t: "Hukukun Temel Kavramları", sik: true, b: `
<ul>
<li><b>Kaynaklar:</b> Yazılı (Anayasa, kanun, CB kararnamesi, yönetmelik). Yazısız (örf ve adet). Yardımcı (yargı kararları, bilimsel görüşler).</li>
<li><b>Hak ehliyeti:</b> Sağ doğmak koşuluyla ana rahmine düşülen andan başlar, ölümle biter.</li>
<li><b>Fiil ehliyeti:</b> Ayırt etme gücü, ergin olma ve kısıtlı olmama.</li>
<li><b>Erginlik:</b> 18 yaş; evlenmeyle; 15 yaşını dolduran kişi mahkeme kararıyla.</li>
<li>Evlenme yaşı: 17; olağanüstü durumda hâkim kararıyla 16.</li>
<li><b>Yaptırımlar:</b> Ceza, cebri icra, tazminat, iptal, hükümsüzlük.</li>
</ul>`,
  kod: "Fiil ehliyeti üçlüsü: “AEK” → Ayırt etme gücü, Ergin olma, Kısıtlı olmama." },

{ t: "Anayasa Tarihi", sik: true, b: `
<div class="tw"><table><tr><th>Belge</th><th>Öne çıkan</th></tr>
<tr><td>Sened-i İttifak (1808)</td><td>Padişahın yetkisi ilk kez sınırlandı</td></tr>
<tr><td>Tanzimat (1839), Islahat (1856)</td><td>Hukukun üstünlüğü, eşitlik</td></tr>
<tr><td>Kanun-i Esasi (1876)</td><td>İlk yazılı anayasa, I. Meşrutiyet</td></tr>
<tr><td>Teşkilat-ı Esasiye (1921)</td><td>Millî egemenlik, güçler birliği; temel haklara yer vermedi</td></tr>
<tr><td>1924 Anayasası</td><td>Güçler birliği; 1937'de laiklik eklendi</td></tr>
<tr><td>1961 Anayasası</td><td>Anayasa Mahkemesi, çift meclis, sosyal devlet</td></tr>
<tr><td>1982 Anayasası</td><td>Halkoylamasıyla kabul (7 Kasım 1982)</td></tr>
<tr><td>2017 değişikliği</td><td>Cumhurbaşkanlığı Hükümet Sistemi, 600 milletvekili, 18 yaş</td></tr></table></div>`,
  kod: "1876 ilk yazılı, 1921 ilk millî egemenlik, 1961 ilk AYM ve sosyal devlet." },

{ t: "1982 Anayasası: Genel Esaslar", sik: true, b: `
<ul>
<li><b>Madde 1:</b> Devletin şekli Cumhuriyettir.</li>
<li><b>Madde 2:</b> Demokratik, laik, sosyal bir hukuk devleti.</li>
<li><b>Madde 3:</b> Ülke ve millet bütünlüğü, dil Türkçe, bayrak, İstiklal Marşı, başkent Ankara.</li>
<li><b>Madde 4:</b> İlk üç madde değiştirilemez, değiştirilmesi teklif edilemez.</li>
<li>Egemenlik kayıtsız şartsız milletindir.</li>
<li>Yasama: TBMM. Yürütme: Cumhurbaşkanı. Yargı: bağımsız mahkemeler.</li>
</ul>`,
  kod: "İlk 3 madde kilitli, 4. madde kilidin kendisi." },

{ t: "Temel Hak ve Ödevler", sik: false, b: `
<ul>
<li><b>Kişi hakları (negatif statü):</b> Yaşam, konut dokunulmazlığı, haberleşme, özel hayat, din-vicdan, düşünce özgürlüğü. Devlet müdahale etmesin.</li>
<li><b>Sosyal ve ekonomik haklar (pozitif statü):</b> Eğitim, çalışma, sağlık, sosyal güvenlik. Devlet sağlasın.</li>
<li><b>Siyasi haklar (aktif statü):</b> Seçme, seçilme, parti kurma, dilekçe hakkı.</li>
<li><b>Sınırlama (m.13):</b> Yalnızca kanunla, özüne dokunmadan, ölçülülük ilkesine uygun.</li>
<li><b>Olağanüstü hallerde bile dokunulamayanlar:</b> Yaşam hakkı, maddi-manevi bütünlük, din-vicdan özgürlüğü, suç ve cezaların geriye yürümezliği, masumiyet karinesi.</li>
</ul>`,
  kod: "Negatif = dokunma, pozitif = ver, aktif = katıl." },

{ t: "Yasama", sik: true, b: `
<ul>
<li>TBMM 600 milletvekili; seçimler 5 yılda bir (CB seçimiyle aynı gün). 18 yaşını dolduran seçilebilir.</li>
<li>Toplantı yeter sayısı: üye tamsayısının 1/3'ü (200). Karar yeter sayısı: katılanların salt çoğunluğu, en az 151.</li>
<li><b>Anayasa değişikliği:</b> Teklif 200 imza. 360–399 oy → halkoylaması zorunlu. 400 ve üzeri → CB isterse halkoyuna sunar.</li>
<li><b>Seçimlerin yenilenmesi:</b> TBMM 3/5 (360) oyla karar verebilir; CB de karar verebilir.</li>
<li>Denetim yolları: meclis araştırması, genel görüşme, meclis soruşturması, yazılı soru.</li>
<li>CB kanunu 15 gün içinde yayımlar ya da bir kez daha görüşülmek üzere geri gönderir.</li>
</ul>`,
  kod: "200 aç, 360 halka sor, 400 doğrudan geç." },

{ t: "Yürütme", sik: true, b: `
<ul>
<li><b>Cumhurbaşkanı:</b> 40 yaş, yükseköğrenim, milletvekili seçilme yeterliliği. Halk seçer; 5 yıl, en fazla 2 dönem.</li>
<li>Aday gösterme: parti grupları, son seçimde en az %5 oy alan partiler, 100.000 seçmen.</li>
<li>Cumhurbaşkanı yardımcılarını ve bakanları atar ve görevden alır.</li>
<li><b>CB kararnamesi:</b> Yürütme yetkisine ilişkin konularda. Temel haklar, kişi hakları ve siyasi haklar ile kanunda açıkça düzenlenen konular CBK ile düzenlenemez.</li>
<li><b>Olağanüstü hal:</b> CB ilan eder, en fazla 6 ay; TBMM onayı gerekir.</li>
<li><b>CB hakkında soruşturma:</b> Önerge salt çoğunluk (301), açma kararı 3/5 (360), Yüce Divan'a sevk 2/3 (400).</li>
</ul>`,
  kod: "CB: 40 yaş, 5 yıl, 2 dönem, %5 ya da 100 bin imza." },

{ t: "Yargı", sik: true, b: `
<ul>
<li><b>Yüksek mahkemeler:</b> Anayasa Mahkemesi, Yargıtay, Danıştay, Uyuşmazlık Mahkemesi.</li>
<li><b>Anayasa Mahkemesi:</b> 15 üye (12'sini CB, 3'ünü TBMM seçer); 12 yıl, bir kez. Yüce Divan sıfatıyla yargılama yapar.</li>
<li><b>Hâkimler ve Savcılar Kurulu (HSK):</b> 13 üye. Başkanı Adalet Bakanı; Bakan Yardımcısı tabii üye. 4 üye CB, 7 üye TBMM seçer. 4 yıl.</li>
<li><b>Sayıştay:</b> Kamu harcamalarını TBMM adına denetler.</li>
<li><b>Yargıtay:</b> Adli yargının, <b>Danıştay:</b> idari yargının son inceleme mercii. <b>Uyuşmazlık Mahkemesi:</b> Adli ve idari yargı arasındaki görev ve hüküm uyuşmazlıklarını çözer.</li>
<li><b>Parti kapatma:</b> Davayı Yargıtay Cumhuriyet Başsavcısı açar, Anayasa Mahkemesi karar verir.</li>
<li><b>Bireysel başvuru:</b> Temel hakkı kamu gücünce ihlal edilen kişi, olağan yolları tükettikten sonra Anayasa Mahkemesi'ne başvurur.</li>
<li><b>Yüksek Seçim Kurulu:</b> Seçimlerin genel yönetim ve denetimini yapar; kararları kesindir.</li>
</ul>`,
  kod: "AYM 15 = 12 + 3. HSK 13 = 2 tabii + 4 CB + 7 TBMM." },

{ t: "İdare Hukuku", sik: false, b: `
<ul>
<li><b>Merkezî yönetim:</b> Başkent teşkilatı (CB, bakanlıklar), taşra teşkilatı (il: vali, ilçe: kaymakam).</li>
<li>İl idaresi yetki genişliği esasına dayanır.</li>
<li><b>Yerinden yönetim:</b> Yer bakımından (il özel idaresi, belediye, köy); hizmet bakımından (üniversiteler, TRT, meslek kuruluşları).</li>
<li>Merkezî idare yerel yönetimler üzerinde <b>idari vesayet</b> yetkisine sahiptir.</li>
<li>Yerel seçimler 5 yılda bir yapılır.</li>
</ul>`,
  kod: "Vali ve kaymakam merkezî idarededir; belediye, il özel idaresi ve köy yerinden yönetimdir." }
],

gun: [
{ t: "Nasıl Takip Edilir", sik: true, b: `
<p>Güncel Bilgiler 6 sorudur ve her sınavda sınavdan önceki 1–2 yılın olaylarından gelir. Buradaki bilgiler 2026 ortasına kadar olan kalıcı konuları kapsar. Sınavdan önceki son aylarda şunları ayrıca takip et:</p>
<ul><li>Uluslararası zirveler ve Türkiye'nin ev sahipliği yaptığı organizasyonlar</li><li>UNESCO listesine yeni eklenen alanlar</li><li>Yılın ilan edilen teması, büyük spor organizasyonları, ödüller (Nobel vb.)</li><li>Türkiye'nin savunma, enerji ve uzay projelerindeki yeni gelişmeler</li></ul>`,
  kod: "Güncel = son 12 ay. Her hafta 15 dakika haber özeti oku." },

{ t: "Uluslararası Kuruluşlar", sik: true, b: `
<ul>
<li><b>NATO:</b> Türkiye 1952'de üye oldu. Finlandiya (2023) ve İsveç (2024) katıldı; 32 üye.</li>
<li><b>Türk Devletleri Teşkilatı:</b> Türkiye, Azerbaycan, Kazakistan, Kırgızistan, Özbekistan. Gözlemci: Macaristan, Türkmenistan, KKTC. 2021'de Türk Konseyi olan adı değişti.</li>
<li><b>İslam İşbirliği Teşkilatı:</b> 57 üye, merkezi Cidde.</li>
<li><b>D-8:</b> Türkiye, İran, Pakistan, Bangladeş, Malezya, Endonezya, Mısır, Nijerya kurucu üyelerdir.</li>
<li><b>G20:</b> Türkiye üyedir.</li>
</ul>`,
  kod: "Türk Devletleri Teşkilatı tam üyeler: “TAKKÖ” → Türkiye, Azerbaycan, Kazakistan, Kırgızistan, Özbekistan." },

{ t: "Türkiye'de Büyük Projeler", sik: true, b: `
<ul>
<li><b>Türksat 6A:</b> İlk yerli ve millî haberleşme uydusu; Temmuz 2024'te fırlatıldı.</li>
<li><b>1915 Çanakkale Köprüsü:</b> 18 Mart 2022'de açıldı; dünyanın en uzun orta açıklıklı asma köprüsü (2023 m).</li>
<li><b>Sakarya Gaz Sahası:</b> Karadeniz'de 2020'de keşfedildi, ilk gaz 2023'te Filyos'a ulaştı.</li>
<li><b>Akkuyu Nükleer Güç Santrali:</b> Mersin; Türkiye'nin ilk nükleer santrali.</li>
<li><b>Gabar Dağı petrolü:</b> Şırnak.</li>
</ul>`,
  kod: "Uzay: Türksat 6A. Enerji: Sakarya gazı, Akkuyu, Gabar. Ulaşım: 1915 Çanakkale." },

{ t: "Kültür ve Miras", sik: false, b: `
<p>UNESCO Dünya Mirası Listesi'nde 2023 itibarıyla Türkiye'den 21 alan vardı. Sonraki yıllarda eklenenleri ayrıca kontrol et.</p>
<div class="tw"><table><tr><th>Yıl</th><th>Alan</th></tr>
<tr><td>1985</td><td>Göreme ve Kapadokya, İstanbul Tarihi Alanları, Divriği Ulu Camii</td></tr>
<tr><td>1986–1988</td><td>Hattuşa, Nemrut Dağı, Xanthos-Letoon, Hierapolis-Pamukkale</td></tr>
<tr><td>1994–1998</td><td>Safranbolu, Truva</td></tr>
<tr><td>2011–2012</td><td>Edirne Selimiye Camii, Çatalhöyük</td></tr>
<tr><td>2014–2015</td><td>Bursa ve Cumalıkızık, Bergama, Diyarbakır Kalesi ve Hevsel Bahçeleri, Efes</td></tr>
<tr><td>2016–2018</td><td>Ani, Afrodisias, Göbeklitepe</td></tr>
<tr><td>2021</td><td>Arslantepe</td></tr>
<tr><td>2023</td><td>Gordion, Anadolu'nun Orta Çağ ahşap hipostil camileri</td></tr></table></div>`,
  kod: "Son eklenenler sık sorulur: Göbeklitepe 2018, Arslantepe 2021, Gordion 2023." }
],

eb: [
{ t: "Gelişim Psikolojisi", sik: true, b: `
<h4>Piaget: bilişsel gelişim</h4>
<ul><li><b>Duyusal-motor (0–2):</b> Nesne sürekliliği.</li><li><b>İşlem öncesi (2–7):</b> Benmerkezcilik, animizm, tek yönlü düşünme.</li><li><b>Somut işlemler (7–11):</b> Korunum, tersine çevrilebilirlik, sınıflama.</li><li><b>Soyut işlemler (11+):</b> Hipotetik düşünme, soyut kavramlar.</li></ul>
<h4>Erikson: psikososyal gelişim</h4>
<p>Güvene karşı güvensizlik → özerkliğe karşı utanç → girişimciliğe karşı suçluluk → başarıya karşı aşağılık → <b>kimlik kazanmaya karşı rol karmaşası (ergenlik)</b> → yakınlığa karşı yalnızlık → üretkenliğe karşı durgunluk → benlik bütünlüğüne karşı umutsuzluk.</p>
<h4>Kohlberg: ahlak gelişimi</h4>
<p>Gelenek öncesi (ceza-itaat, çıkar), geleneksel (iyi çocuk, kanun-düzen), gelenek sonrası (sosyal sözleşme, evrensel ahlak).</p>
<h4>Vygotsky</h4><p>Yakınsal gelişim alanı, iskele kurma, dil ve kültürün önemi.</p>`,
  kod: "Piaget: “DİSS” → Duyusal-motor, İşlem öncesi, Somut, Soyut." },

{ t: "Öğrenme Psikolojisi", sik: true, b: `
<ul>
<li><b>Klasik koşullanma (Pavlov):</b> Nötr uyaran koşulsuz uyaranla eşleşir.</li>
<li><b>Edimsel koşullanma (Skinner):</b> Davranış sonuçlarıyla şekillenir.</li>
<li><b>Olumlu pekiştirme:</b> Hoşa gideni vererek davranışı artırma. <b>Olumsuz pekiştirme:</b> Hoşa gitmeyeni kaldırarak davranışı artırma.</li>
<li><b>1. tür ceza:</b> Hoşa gitmeyen uyaran verme. <b>2. tür ceza:</b> Hoşa gideni alma. İkisi de davranışı azaltır.</li>
<li>Sönmeye en dirençli tarife: <b>değişken oranlı</b> (kumar makinesi).</li>
<li><b>Sosyal öğrenme (Bandura):</b> Model alma, dolaylı pekiştirme, öz yeterlik.</li>
<li><b>Bilgi işleme:</b> Duyusal kayıt → kısa süreli bellek → uzun süreli bellek.</li>
</ul>`,
  kod: "Pekiştirme her zaman artırır, ceza her zaman azaltır. Olumsuz pekiştirme ceza değildir." },

{ t: "Öğretim Yöntemleri", sik: false, b: `
<ul>
<li><b>Sunuş yoluyla (Ausubel):</b> Ön örgütleyiciler, tümdengelim, anlamlı öğrenme.</li>
<li><b>Buluş yoluyla (Bruner):</b> Tümevarım, keşfetme, sarmal program.</li>
<li><b>Araştırma-inceleme (Dewey):</b> Bilimsel yöntem, problem çözme.</li>
<li><b>Çoklu zekâ (Gardner):</b> Sözel, mantıksal, görsel, müziksel, bedensel, sosyal, içsel, doğacı.</li>
<li>Teknikler: beyin fırtınası, drama, gösterip yaptırma, istasyon, altı şapka.</li>
</ul>`,
  kod: "Ausubel genelden özele (sunuş), Bruner özelden genele (buluş)." },

{ t: "Ölçme ve Değerlendirme", sik: true, b: `
<ul>
<li><b>Ölçek türleri:</b> Sınıflama (forma numarası), sıralama (yarış derecesi), eşit aralıklı (°C, mutlak sıfır yok), oranlı (boy, kilo; mutlak sıfır var).</li>
<li><b>Geçerlik:</b> Ölçmek istediğini ölçmesi (kapsam, yapı, ölçüt geçerliği).</li>
<li><b>Güvenirlik:</b> Tutarlılık. Test-tekrar test, paralel form, iki yarı, KR-20, Cronbach alfa.</li>
<li>Güvenirlik geçerliğin ön koşuludur; güvenilir test geçerli olmayabilir.</li>
</ul>`,
  kod: "Ölçekler: “SSEO” → Sınıflama, Sıralama, Eşit aralık, Oranlı. Sadece oranlıda gerçek sıfır var." },

{ t: "Program Geliştirme", sik: false, b: `
<ul>
<li><b>Tyler modeli öğeleri:</b> Hedef, içerik, eğitim durumları (öğrenme-öğretme süreci), sınama durumları (değerlendirme).</li>
<li><b>Revize Bloom taksonomisi:</b> Hatırlama, anlama, uygulama, çözümleme, değerlendirme, yaratma.</li>
<li>Program yaklaşımları: konu merkezli, öğrenci merkezli, sorun merkezli.</li>
</ul>`,
  kod: "Tyler: “Hİ-ES” → Hedef, İçerik, Eğitim durumu, Sınama." },

{ t: "Rehberlik", sik: false, b: `
<ul>
<li>Rehberliğin çekirdek hizmeti: <b>psikolojik danışma</b>.</li>
<li>Hizmetler: bireyi tanıma, bilgi verme, psikolojik danışma, yöneltme-yerleştirme, izleme, önleyici hizmetler, konsültasyon, sevk.</li>
<li>İlkeler: gönüllülük, gizlilik, bireye saygı, süreklilik.</li>
<li>Günümüzde benimsenen model: gelişimsel rehberlik.</li>
</ul>`,
  kod: "Gizlilik + gönüllülük = danışmanın iki temel kuralı." }
]
};
