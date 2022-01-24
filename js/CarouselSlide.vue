<template>
    <transition
    id=""
    :name="direction"
    mode="in-out">
        <div v-show="visibleSlide === index" class="carousel-slide">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    props: ['visibleSlide', 'index', 'direction'],
    data() {
        return {

        }
    },
}

</script>

<style scoped>
    .carousel-slide {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .leftEnterActive {
        animation: leftInAnimation 0.4s ease-in-out;
    }

    .leftLeaveActive {
        animation: leftOutAnimation 0.4s ease-in-out;
    }

    @keyframes leftInAnimation {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }

     @keyframes leftOutAnimation {
       from { transform: translateX(0); }
        to { transform: translateX(-100%); } 
    }

    .rightEnterActive {
        animation: rightInAnimation 0.4s ease-in-out;
    }

    .rightLeaveActive {
        animation: rightOutAnimation 0.4s ease-in-out;
    }

    @keyframes rightInAnimation {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }

     @keyframes rightOutAnimation {
       from { transform: translateX(0); }
        to { transform: translateX(-100%); } 
    }
</style>