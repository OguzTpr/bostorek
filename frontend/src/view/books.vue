<template>
<section>
    <div class="container">
<sectionHeader title="B.o.o.k.s" text="Some text about books"/>
<div class="row">
<div class="col-sm-6 col-md-4 col-xl-3">
    <div class="card border-0 shadow position-relative">
        <img src="https://img.kitapyurdu.com/v1/getImage/fn:11803611/" class="card-img-top" />
        <div class="card-body">
            <div class="auth-box">
                <span style="background-color: cadetblue;" class="py-1 px-3 text-white rounded-pill">
                Haruki Murakami
                </span>
            </div>
            <h5 class="card-title mt-3 fw-semibold">Ortadan Kaybolan Fil</h5>
            <p class="card-text">Haruki Murakami’nin 1980-1991 yılları arasında yazdığı, 17 öyküden oluşan Ortadan Kaybolan Fil, kitap olarak önce İngilizce yayımlandı. Kitap haline gelmeden önce öykülerin bazıları The New Yorker, Playboy gibi dergilerde yer aldı. Ortadan Kaybolan Fil Haruki Murakami edebiyatının kaynaklarına dair çok önemli ipuçları veren, yazarın 1Q84, Zemberekkuşu’nun Güncesi gibi kült eserlerinin çıkış noktası olan öykülerin yanı sıra Şüphe adıyla filme uyarlanan “Ambar Yakmak”ın yer aldığı, Murakami hayranlarının uzun zamandır beklediği bir kitap.</p>
            <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="card-link">Read more</a>
                <p style="background-color: cadetblue" class="py=1 px=3 text-white badge">19 jan 2022</p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</section>
</template>

<script>
import sectionHeader from '@/components/sectionheader.vue';
    export default {
        name: "books",
        components:{
            sectionHeader
        },
        data() {
            return{
            }
        }
        
    }
</script>

<style scoped>
.auth-box {
    margin-top: -30px;
}

</style>