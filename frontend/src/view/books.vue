<template>
    <section class="full-section">
        <div class="container">
            <sectionHeader title="B.o.o.k.s" text="Some text about books" />
            <BookList :books="paginatedBooks" />
            <pagination
                :currentPage="currentPage"
                :totalPages="totalPages"
                @page-change="upPage"
            />
        </div>
    </section>
</template>

<script>
import pagination from '@/components/pagination.vue'
import BookList from '@/components/booklist.vue'
import sectionHeader from '@/components/sectionheader.vue'
import { useBookStore } from '@/stores/bookStore.js'
import { mapState } from 'pinia'

export default {
    name: 'books',
    components: {
        sectionHeader,
        BookList,
        pagination,
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 8,
        }
    },
    computed: {
        ...mapState(useBookStore, ['books']),

        totalPages() {
            return Math.ceil(this.books.length / this.itemsPerPage)
        },
        paginatedBooks() {
            const starting = (this.currentPage - 1) * this.itemsPerPage
            const ending = starting + this.itemsPerPage
            return this.books.slice(starting, ending)
        },
    },

    methods: {
        upPage(page) {
            this.currentPage = page
        },
    },
}
</script>

<style scoped>
.auth-box {
    margin-top: -30px;
}
</style>
