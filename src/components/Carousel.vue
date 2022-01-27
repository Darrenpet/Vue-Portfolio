<template>
  <div id="app">
    <div
      :class="['imageSliderContainer', itemsPerPageCssStyle]"
      style="width: 100%; height: 374px"
    >
      <div
        class="wrapper"
        style="
          height: 355px;
          margin-left: 15px;
          padding-right: 4px;
          z-index: 1;
          overflow: hidden;
        "
      >
        <div class="carousel-view">
          <carousel
            :per-page="5"
            :navigation-enabled="true"
            :min-swipe-distance="1"
          >
            <!-- don't wrap with div here -->
            <!-- just v-for on slide -->
            <slide v-for="product in products" :key="product.id">
              <div class="img-container">
                <img :src="product.img" :alt="'Product #' + product.id" />
              </div>
              <h3>Product #{{ product.id }}</h3>
              <a href="#" tabindex="0" name="instantadd">
                <div class="btn_CA_Search buttonSearch gradient">
                  Add to Cart
                </div>
              </a>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    carousel: VueCarousel.Carousel,
    slide: VueCarousel.Slide,
  },
  props: {
    numSlides: {
      type: Number,
      default: 5,
    },
    itemsPerPageCssStyle: {
      type: String,
      default: "slider5buckets",
    },
  },
  data: function () {
    return {
      products: [
        { id: 1, img: "https://placeimg.com/100/100" },
        { id: 2, img: "https://placeimg.com/101/101" },
        { id: 3, img: "https://placeimg.com/102/102" },
        { id: 4, img: "https://placeimg.com/103/103" },
        { id: 5, img: "https://placeimg.com/104/104" },
        { id: 6, img: "https://placeimg.com/105/105" },
        { id: 7, img: "https://placeimg.com/106/106" },
        { id: 8, img: "https://placeimg.com/107/107" },
        { id: 9, img: "https://placeimg.com/108/108" },
        { id: 10, img: "https://placeimg.com/109/109" },
        { id: 11, img: "https://placeimg.com/110/110" },
        { id: 12, img: "https://placeimg.com/111/111" },
        { id: 13, img: "https://placeimg.com/112/112" },
      ],
    };
  },
}
</script>

<style></style>
