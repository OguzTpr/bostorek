<template>
    <section>
    <div class="container">
        <sectionHeader title="B.o.o.k.D.e.t.a.i.l" text="All information about One book" />
        <button>Back!</button>
        <div class="row">
            <div class="col-lg-6">
            <img src="https://pyxis.nymag.com/v1/imgs/9a3/38f/c3d22bb734cbabad3d4e304f960e3894cc-21-new-murakami-lede.rhorizontal.w600.jpg" alt="Murakami books" class="card-img-top" />
            </div>
            <div class="col-lg-6">
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti quae hic, ex non impedit quam ratione nihil. Magnam commodi doloribus impedit exercitationem labore, rerum quo animi a quidem autem?</p>
            </div>
            
                <div class="row border-bottom pb-2">
                    <div class="col-lg-6"><strong>Gender</strong></div>
                    <div class="col-lg-6">fiction</div>
                </div>
            
                <div class="row border-bottom pb-2">
                    <div class="col-lg-6"><strong>Page</strong></div>
                    <div class="col-lg-6">278</div>
                </div>
            
                <div class="row border-bottom pb-2">
                    <div class="col-lg-6"><strong>Rating</strong></div>
                    <div class="col-lg-6">7.8</div>
                </div>
            
                <div class="row border-bottom pb-2">
                    <div class="col-lg-6"><strong>Date</strong></div>
                    <div class="col-lg-6">27.8.2020</div>
                </div>
            
        </div>
    
    </div>
</section>
</template>

<script>
import sectionHeader from '@/components/sectionheader.vue';
export default {
        name: "bookDetail",
        components: {
            sectionHeader
        }
    }
</script>

<style lang="scss" scoped>

</style>