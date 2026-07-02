<script setup lang="ts"></script>

<template>
  <section class="flex justify-center">
    <div class="relative top-12">
      <img
        src="../images/image-tanya.jpg"
        alt=""
        class="w-60 rounded-md z-20"
      />
      <div
        class="flex items-center absolute justify-center left-20 space-x-10 bg-white px-2 py-2 rounded-2xl -bottom-4 z-20"
      >
        <button>
          <img
            src="../images/icon-prev.svg"
            alt="icon left pointed arrow"
            class=""
          />
        </button>
        <button>
          <img src="../images/icon-next.svg" alt="icon right pointed arrow" />
        </button>
      </div>
      <img
        src="../images/pattern-bg.svg"
        alt="pattern background"
        class="w-75 absolute -top-4 -left-9 -z-10 max-w-none"
      />
    </div>
  </section>

  <section class="mt-35 space-y-4 text-lg text-center">
    <div class="px-10 z-20 relative">
      <span>
        "I've been interested in coding for a while but never taken the jump,
      until now. I couldn't recommend this course enough. I'm now in the job of
      my dreams and so excited about the future."
      </span> 

      <img
        src="../images/pattern-quotes.svg"
        alt="pattern-quotes"
        class="z-10 absolute w-15 -top-5.5 left-39"
      />
    </div>
    <div class="">
      <div class="font-bold">Tanya Sinclair</div>
      <div>UX Engineer</div>
    </div>
  </section>
</template>

<style scoped></style>
