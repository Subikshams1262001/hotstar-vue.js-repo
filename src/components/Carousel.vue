<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-height="400"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4253/734253-h"
      >
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9259/1039259-h-679b60c3ce99"
      >
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8747/958747-h"
      >
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/8945/38945-h"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style>
.carousel {
  width: 100% !important;
  height: 400px !important;
}
.w-100 {
  width: 100% !important;
  height: 400px !important;
}
@media screen and (min-width: 70px) and (max-width: 760px) {
  .carousel {
    width: 100% !important;
    height: 200px !important;
  }
  .w-100 {
    width: 100% !important;
    height: 200px !important;
  }
}
@media screen and (min-width: 760px) and (max-width: 1024px) {
  .carousel {
    width: 100% !important;
    height: 300px !important;
  }
  .w-100 {
    width: 100% !important;
    height: 300px !important;
  }
}
</style>
