<template>
    <div id="" class="app">
        <carousel
        @next="next"
        @prev="prev">
            <!-- for key use id ??? -->
            <carousel-slide 
            v-for="(slide,index) in slides"
            :key="slide"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"> 
                <img :src="slide" />
            </carousel-slide>
        </carousel>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Carousel from './Carousel.vue'
import CarouselSlide from './CarouselSlide.vue'

export default {
    data() {
        return {
            slides: [
                'https://unsplash.com/photos/eoHUaRLrYxw',
                'https://unsplash.com/photos/BHJs5TZ-Nt0',
                'https://unsplash.com/photos/FilM6ng7VGQ'
            ],
            visibleSlide : 0,
            direction: 'left',
        }
    },
    computed: {
        sLength() {
            return this.slides.length;
        }
    },
    methods: {
        next()  {
            if(this.visibleSlide >= this.sLength - 1) {
                this.visibleSlide = 0;
            } else {
                this.visibleSlide++;
            }
            this.direction = "left"
        },
        prev()  {
            if(this.visibleSlide <= 0) {
                this.visibleSlide = this.sLength - 1;
            } else {
                this.visibleSlide--;
            }
            this.direction = "right"
        }
    }, 
    components : {
        Carousel,
        CarouselSlide,
    }
}
// export default defineComponent({
//   components: { Carousel, CarouselSlide },
//     setup() {
        
//     },
// })
</script>

<style scoped>

</style>