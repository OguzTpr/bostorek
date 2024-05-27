<template>
<section>
    <div class="container">
<sectionHeader title="B.o.o.k.s" text="Some text about books"/>
<BookList :books="books"/>
</div>
</section>
</template>

<script>
import BookList from '@/components/booklist.vue';
import sectionHeader from '@/components/sectionheader.vue';
import books from '@/db.js';
    export default {
        name: "books",
        components:{
            sectionHeader,
            BookList
        },
        data() {
            return{
                books: books
            }
        }
        
    }
</script>

<style scoped>
.auth-box {
    margin-top: -30px;
}

</style>