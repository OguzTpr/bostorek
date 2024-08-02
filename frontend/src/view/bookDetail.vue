<template>
    <section class="full-section">
        <div class="container" v-if="loading"></div>
        <div class="container" v-else>
            <sectionHeader :title="book.name" :text="book.author" />
            <font-awesome-icon
                icon="arrow-left"
                size="2xl"
                class="mb-2"
                style="cursor: pointer"
                @click="backToBooks"
            />
            <div class="row">
                <div class="col-lg-6">
                    <img
                        :src="book.image"
                        alt="Murakami books"
                        class="card-img-top"
                    />
                </div>
                <div class="col-lg-6">
                    <p class="lead">{{ book.description }}</p>

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
                            <div class="col-lg-6">{{ book.rating }}</div>
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
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maiores, totam?
                                </p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon
                                            :icon="['fas', 'thumbs-up']"
                                        />
                                        <p class="ps-2 mb-0">
                                            <strong>8</strong>
                                        </p>
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
import sectionHeader from '@/components/sectionheader.vue'
import { useBookStore } from '@/stores/bookStore.js'
import { mapState } from 'pinia'
export default {
    name: 'bookDetail',
    components: {
        sectionHeader,
    },
    data() {
        return {
            book: null,
            loading: true,
        }
    },
    created() {
        this.selectBook()
        /*  const bookId = this.$route.params.id;
            this.book = books.find(book => book.id === parseInt(bookId)) */
    },
    methods: {
        backToBooks() {
            this.$router.push({ name: 'books' })
        },

        selectBook() {
            const bookId = this.$route.params.id
            this.book = this.selectedBook(bookId)
            this.loading = false
        },
        // async fetchAbook() {
        //     const bookId = this.$route.params.id
        //     try {
        //         const response = await fetch(
        //             `http://localhost:3000/api/v1/books/${bookId}`
        //         )
        //         const data = await response.json()
        //         this.book = data
        //         this.loading = false
        //     } catch (error) {}
        // },
    },
    computed: {
        ...mapState(useBookStore, ['selectedBook']),
    },
}
</script>

<style lang="scss" scoped></style>
