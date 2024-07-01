const books = [
    {
        id: 1,
        name: 'Rüzgarın Şarkısını Dinle',
        author: 'Haruki Murakami',
        page: 168,
        description: 'Herkes yürekten verdiğinin karşılığını alır. Kesinlikle güzel biri değildi. Ancak “güzel biri değildi” demekle ona haksızlık etmiş olurum.',
        rating: 8.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:5959390/wh:500/wi:true',
        uploadDate: '21 Aug 2023'
    },
    {
        id: 2,
        name: 'Ortadan Kaybolan Fil',
        author: 'Haruki Murakami',
        page: 360,
        description: '“Sana yardım etmeme izin verirsen bir şeyler değişebilir” diye fısıldadı cüce. “Nasıl bir yardım bu?” diye merakla sordum hemen.',
        rating: 7.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:11803611/wh:500/wi:true',
        uploadDate: '07 May 2024'
    },
    {
        id: 3,
        name: 'Kadınsız Erkekler',
        author: 'Haruki Murakami',
        page: 224,
        description: 'Bir gün sen de kadınsız erkeklerden olacaksın. O gün en ufak bir uyarı, küçücük bir ipucu vermeden; önsezi olarak hissettirmeden ya da içine doğmadan; kapını çalmadan, hiç beklemediğin bir anda seni bulacak.',
        rating: 6.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:1133181/wh:500/wi:true',
        uploadDate: '15 Mar 2022'
    },
    {
        id: 4,
        name: 'Pinball 1973',
        author: 'Haruki Murakami',
        page: 144,
        description: 'Bir pinball makinesinden hiçbir şey kazanamayız. Sayıya dönüştürülmüş gurur dışında. Öte yandan kaybedeceklerimiz gerçekten de çok fazladır.',
        rating: 5.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:11310719/wh:500/wi:true',
        uploadDate: '21 Nov 2020'
    },
    {
        id: 5,
        name: 'Fare Dörtlemesi',
        author: 'Haruki Murakami',
        page: 928,
        description: 'Başlarda “Fare Üçlemesi” olarak anılan seri Rüzgârın Şarkısını Dinle, Pinball 1973 ve Yaban Koyununun İzinde’den oluşur.',
        rating: 4.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:11826628/wh:500/wi:true',
        uploadDate: '12 Jan 2024'
    },
    {
        id: 6,
        name: '1Q84 1. Kitap',
        author: 'Haruki Murakami',
        page: 470,
        description: 'Sarsıcı bir yolculuğa hazır mısınız? Öyleyse kemerlerinizi bağlayın. Erkekleri, titizlikle geliştirdiği bir yöntemle öteki dünyaya gönderen genç bir kadınla tanışacaksınız.',
        rating: 5.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:1108278/wh:500/wi:true',
        uploadDate: '28 Oct 2016'
    },
    {
        id: 7,
        name: 'İmkansızın Şarkısı',
        author: 'Haruki Murakami',
        page: 349,
        description: 'Bir yolculuk sırasında Beatles’ın “Norwegian Wood” adlı parçasını duyan kahramanımız 37 yaşındadır ve bu parça onu Tokyo’da geçirdiği üniversite yıllarına götürecektir.',
        rating: 7.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:1113480/wh:500/wi:true',
        uploadDate: '14 Dec 2015'
    },
    {
        id: 8,
        name: 'Haşlanmış Harikalar Diyarı ve Dünyanın Sonu',
        author: 'Haruki Murakami',
        page: 564,
        description: '“Dünyanın sonu insanın yüreğinin içinde gelir.” ‘‘Çektiğin acıyı ben de anlıyorum. Fakat bu herkesin başından geçiyor. O yüzden senin de katlanman gerek. Sonrasında kurtuluş geliyor. O zaman artık sen, hiçbir şeyi dert etmeyecek, üzülmeyeceksin. Hepsi kaybolup gider.',
        rating: 6.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:174155/wh:500/wi:true',
        uploadDate: '14 Jan 2015'
    },
    {
        id: 9,
        name: 'Karanlıktan Sonra',
        author: 'Haruki Murakami',
        page: 180,
        description: 'Gece yarısından sonra zamanın kendine özgü bir akışı vardır. Ona karşı koyamazsın…',
        rating: 7.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:3813748/wh:500/wi:true',
        uploadDate: '25 May 2017'
    },
    {
        id: 10,
        name: 'Zemberek Kuşu nun Güncesi',
        author: 'Haruki Murakami',
        page: 738,
        description: 'Japon edebiyatının aykırı çocuğu Murakami Haruki "Zemberek Kuşu’nun Güncesi" adlı, kendisine dünya edebiyatında önemli bir yer açan romanıyla Türkçe.',
        rating: 4.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:271176/wh:500/wi:true',
        uploadDate: '05 Nov 2015'
    },
    {
        id: 11,
        name: 'Sahilde Kafka',
        author: 'Haruki Murakami',
        page: 656,
        description: 'Kafka Tamura on beş yaşına girdiği gün evden kaçar. Uzun zamandır planladığı bu kaçışın nedeni babasının yıllar önce dile getirdiği uğursuz kehanettir.',
        rating: 5.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:11862940/wh:500/wi:true',
        uploadDate: '26 Jan 2016'
    },
    {
        id: 12,
        name: 'Birinci Tekil Şahıs',
        author: 'Haruki Murakami',
        page: 152,
        description: 'Belki de bir anlamda gerçek aşktı bu. Ya da gerçek yalnızlık.Hepimiz öyle ya da böyle maske takarak yaşıyoruz. Bu vahşi dünyada maske takmadan yaşanamaz çünkü.',
        rating: 7.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:11480684/wh:500/wi:true',
        uploadDate: '20 Nov 2021'
    },
    {
        id: 13,
        name: 'Sınırın Güneyinde Güneşin Batısında',
        author: 'Haruki Murakami',
        page: 188,
        description: 'Tokyo’nun varlıklı bir mahallesinde, sıradan ve sorunsuz gibi gözüken bir hayat süren Hajime, orta yaşlara geldiğinde yaşamını sorgulamaya başlar.',
        rating: 8.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:2814/wh:500/wi:true',
        uploadDate: '08 Jan 2016'
    },
    {
        id: 14,
        name: 'Koşmasaydım Yazamazdım',
        author: 'Haruki Murakami',
        page: 176,
        description: '“Murakami Bey, insan sizin gibi sağlıklı bir yaşam sürünce zamanla roman yazamaz hale gelmez mi?” Arada sırada insanlar bu soruyu sorar bana. Roman yazmak, sağlıksız bir eylem',
        rating: 3.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:162857/wh:500/wi:true',
        uploadDate: '10 Dec 2015'
    },
    {
        id: 15,
        name: 'Sputnik Sevgilim',
        author: 'Haruki Murakami',
        page: 224,
        description: 'Ben âşık oldum. Şüphe yok. Buz soğuktur, gül kırmızı. Ve bu aşk beni sürükleyip bir yerlere götürmeye çalışıyor; öyle güçlü bir akıntı ki ondan kendimi korumam neredeyse olanaksız. Ama artık dönüş yok.',
        rating: 4.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:1411569/wh:500/wi:true',
        uploadDate: '11 Oct 2016'
    },
    {
        id: 16,
        name: 'Yaban Koyununun İzinde',
        author: 'Haruki Murakami',
        page: 356,
        description: 'Yıldız işaretli esrarengiz koyunun peşinde heyecan dolu bir takip! Japonya hakkında tüm bildiklerinizi unutun…',
        rating: 9.5,
        image: 'https://img.kitapyurdu.com/v1/getImage/fn:8778/wh:500/wi:true',
        uploadDate: '08 Jun 2015'
    },
]

export default books;