<template>
    <section>
        <Carousel :items="carouselItems" height="400px" />
    </section>
    <section class="my-5" style="margin-bottom: 200px !important">
        <div class="container">
            <sectionHeader
                title="F.e.a.t.u.r.e.d"
                text="New and featured books"
            />

            <div class="row">
                <div class="col-md-4">
                    <div class="list-group">
                        <button
                            type="button"
                            class="list-group-item list-group-item-action"
                            :class="{ active: selected === 'best' }"
                            @click="selectFilter('best')"
                        >
                            Best ratings
                        </button>

                        <button
                            type="button"
                            class="list-group-item list-group-item-action"
                            :class="{ active: selected === 'latest' }"
                            @click="selectFilter('latest')"
                        >
                            Latest Books
                        </button>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="accordion">
                        <div
                            class="accordion-item"
                            v-for="(book, index) in filtered"
                            :key="index"
                        >
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    :class="{ collapsed: openAcc !== index }"
                                    @click="toggleAcc(index)"
                                >
                                    {{ book.name }} - {{ book.author }}
                                </button>
                            </h2>
                            <div
                                class="accordion-collapse collapse"
                                :class="{ show: openAcc === index }"
                            >
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img
                                                :src="book.image"
                                                alt="Murakami books"
                                                class="img-fluid"
                                            />
                                        </div>
                                        <div
                                            class="col-md-8 d-flex flex-column justify-content-center"
                                        >
                                            <p>{{ book.description }}</p>
                                            <div
                                                class="badge"
                                                style="
                                                    background-color: var(
                                                        --second
                                                    );
                                                "
                                            >
                                                {{ book.rating }}
                                            </div>
                                        </div>
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
import Carousel from '@/components/widgets/carousel.vue'
import sectionHeader from '@/components/sectionheader.vue'
import hero_1 from '@/assets/hero_1.jpg'
import hero_2 from '@/assets/hero_2.jpg'
import hero_3 from '@/assets/hero_3.jpg'
import books from '@/db'
export default {
    name: 'home',
    components: {
        Carousel,
        sectionHeader,
    },
    data() {
        return {
            carouselItems: [
                {
                    imageUrl: hero_1,
                    subtitle: 'Liberte',
                    title: 'Lorem Ipsum Dolor Sit Amet',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    imageUrl: hero_2,
                    subtitle: 'Egalite',
                    title: 'Excepteur Sint Occaecat Cupidatat',
                    description:
                        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    imageUrl: hero_3,
                    subtitle: 'Fraternite',
                    title: 'Neque Porro Quisquam Est',
                    description:
                        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
                },
            ],
            books: [],
            selected: 'latest',
            openAcc: 0,
        }
    },
    methods: {
        selectFilter(filter) {
            this.selected = filter
        },
        async fetchBooks() {
            try {
                const response = await fetch(
                    'http://localhost:3000/api/v1/books'
                )
                const data = await response.json()
                this.books = data
            } catch (error) {}
        },
        toggleAcc(index) {
            if (this.openAcc === index) {
                this.openAcc = -1
            } else {
                this.openAcc = index
            }
        },
    },
    created() {
        this.fetchBooks()
    },
    computed: {
        filtered() {
            const copyBooks = [...this.books]
            if (this.selected === 'latest') {
                return copyBooks
                    .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .slice(0, 4)
            } else if (this.selected === 'best') {
                return copyBooks.sort((a, b) => b.rating > a.rating).slice(0, 4)
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
