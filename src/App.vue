<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Testimonial {
  id: string;
  paragraph: string;
  name: string;
  position: string;
  image: string;
}

const testimonials = ref<Testimonial[]>([]);
const currentIndex = ref(0);
const loading = ref(true);
const error = ref("");

const fetchTestimonials = async () => {
  try {
    const res = await fetch("/api/testimonials");
    if (!res.ok) throw new Error("Gagal fetch data");
    testimonials.value = await res.json();
  } catch (err) {
    error.value = "Gagal memuat testimonials";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) %
    testimonials.value.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

onMounted(fetchTestimonials);
</script>

<template>
  <div v-if="loading">Loading</div>
  <div v-else-if="error">{{ error }}</div>
  <div class="md:grid md:grid-cols-2 md:mx-auto md:w-190">
    <section class="flex justify-center md:col-start-2 md:place-self-start">
      <div class="relative top-12">
        <Transition name="fade" mode="out-in">
          <img
            :key="currentIndex"
            :src="testimonials[currentIndex]?.image"
            :alt="testimonials[currentIndex]?.name"
            class="w-60 rounded-md z-20 md:w-85"
          />
        </Transition>
        <div
          class="flex items-center absolute justify-center left-17 px-2 py-2 rounded-2xl -bottom-6 z-20"
        >
          <button
            class="bg-white pl-3 pr-5 py-2 rounded-l-full hover:bg-[#FBEFEF] active:bg-[#B5BAFF]"
            @click="prev"
          >
            <img
              src="/images/icon-prev.svg"
              alt="icon left pointed arrow"
              class=""
            />
          </button>
          <button
            class="bg-white pl-5 pr-3 py-2 rounded-r-full hover:bg-[#FBEFEF] active:bg-[#B5BAFF]"
            @click="next"
          >
            <img src="/images/icon-next.svg" alt="icon right pointed arrow" />
          </button>
        </div>
        <img
          src="/images/pattern-bg.svg"
          alt="pattern background"
          class="w-75 absolute -top-4 -left-9 -z-10 max-w-none md:w-103"
        />
      </div>
    </section>

    <section
      class="mt-35 space-y-4 text-lg text-center md:text-left md:col-span-1 md:row-start-1 md:relative md:z-20 md:left-16"
    >
      <Transition name="fade" mode="out-in">
        <div :key="currentIndex">
          <div class="px-10 z-20 relative md:px-0">
            <span class="">
              <!-- "I've been interested in coding for a while but never taken the jump,
              until now. I couldn't recommend this course enough. I'm now in the job
              of my dreams and so excited about the future." -->
              {{ testimonials[currentIndex]?.paragraph }}
            </span>

            <img
              src="/images/pattern-quotes.svg"
              alt="pattern-quotes"
              class="z-10 absolute w-15 -top-5.5 left-39"
            />
          </div>
          <div class="md:flex md:gap-x-2">
            <div class="font-bold">
              <!-- Tanya Sinclair  -->
              {{ testimonials[currentIndex]?.name }}
            </div>
            <div>
              <!-- UI ux designer -->
              {{ testimonials[currentIndex]?.position }}
            </div>
          </div>
        </div>
      </Transition>
    </section>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
