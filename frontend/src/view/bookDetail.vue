<template>
    <section>
    <div class="container">
        <sectionHeader :title="book.name" :text="book.author" />
        <font-awesome-icon icon="arrow-left" size="2xl" class="mb-2" style="cursor:pointer" @click="backToBooks" />
        <div class="row">
            <div class="col-lg-6">
            <img :src="book.image" alt="Murakami books" class="card-img-top" />
            </div>
            <div class="col-lg-6">
                <p class="lead">{{  book.description }}</p>
            
            <div>
                <div class="row border-bottom pb-3">
                    <div class="col-lg-6"><strong>Gender</strong></div>
                    <div class="col-lg-6">fiction</div>
                </div>
            
                <div class="row border-bottom pb-3">
                    <div class="col-lg-6"><strong>Page</strong></div>
                    <div class="col-lg-6">{{ book.page }}</div>
                </div>
            
                <div class="row border-bottom pb-3">
                    <div class="col-lg-6"><strong>Rating</strong></div>
                    <div class="col-lg-6">{{  book.rating }}</div>
                </div>
            
                <div class="row border-bottom pb-3">
                    <div class="col-lg-6"><strong>Date</strong></div>
                    <div class="col-lg-6">{{ book.uploadDate }}</div>
                </div>
            </div>
            <div class="comments">
                <h3 class="display-6 mb-2">Comments</h3>
                <div class="card mb-4">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, totam?</p>
                        <div class="d-flex justify-content-between">
                            <p class="fw-bold fst-italic">John Doe</p>
                            <div class="d-flex align-items-center">
                                <font-awesome-icon :icon=" ['fas', 'thumbs-up']" />
                                <p class="ps-2 mb-0"><strong>8</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>
import books from '@/db';
import sectionHeader from '@/components/sectionheader.vue';
export default {
        name: "bookDetail",
        components: {
            sectionHeader
        },
        data() {
            return {
                book: null
            }
        },
        created() {
            const bookId = this.$route.params.id;
            this.book = books.find(book => book.id === parseInt(bookId))
        },
        methods: {
            backToBooks() {
                this.$router.push({name:"books"})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>