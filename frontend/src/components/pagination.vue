<template>
   <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item" :class="{'disabled': currentPage === 1}">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item" :class="{'disabled': currentPage === totalPages}">
      <a class="page-link" @click="goToP(currentPage +1)" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
    export default {
        name: "pagination",
        emits:['pageChange'],
        props: {
            currentPage: {
                type: Number,
                required: true
            },
            totalPages: {
                type: Number,
                required: true
            }
        },
        methods: {
          goTop(page) {
            this.$emit("pageChange", page)
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>