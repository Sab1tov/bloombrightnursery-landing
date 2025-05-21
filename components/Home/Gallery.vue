<script setup lang="ts">
import { ref } from "vue";

const images = Array.from(
  { length: 18 },
  (_, i) => `/images/image${i + 1}.jpg`,
);
const showAll = ref(false);
const imagesToShow = ref(4);
const showModal = ref(false);
const selectedImage = ref<string | null>(null);

function toggleShowAll() {
  showAll.value = !showAll.value;
  imagesToShow.value = showAll.value ? images.length : 4;
}

function openModal(img: string) {
  selectedImage.value = img;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedImage.value = null;
}
</script>

<template>
  <section id="gallery" class="bg-[#d6dde4] py-12">
    <div class="container mx-auto w-full p-4 text-center">
      <h2 class="mb-6 text-2xl font-bold text-[#2b7a78]">Gallery</h2>
      <TransitionGroup
        name="gallery-fade"
        tag="div"
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6"
        appear
      >
        <div
          v-for="(img, idx) in images.slice(0, imagesToShow)"
          :key="img"
          class="h-40 w-full cursor-pointer overflow-hidden rounded-lg bg-white shadow md:h-64"
          @click="openModal(img)"
        >
          <NuxtImg
            :src="img"
            class="h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-90"
            :alt="`Gallery image ${idx + 1}`"
          />
        </div>
      </TransitionGroup>
      <button
        v-if="images.length > 6"
        class="mt-6 rounded-md bg-[#2b7a78] px-4 py-2 font-semibold text-white transition hover:bg-[#205e5a]"
        @click="toggleShowAll"
      >
        {{ showAll ? "Show Less" : "Show More" }}
      </button>

      <Transition name="modal-fade" appear>
        <div
          v-if="showModal"
          class="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          @click.self="closeModal"
        >
          <div
            class="animate-scalein relative flex w-full max-w-3xl flex-col items-center rounded-lg shadow-lg"
          >
            <NuxtImg :src="selectedImage || ''" class="aspect-3/2 rounded-lg" />
            <button
              class="absolute top-4 right-4 text-3xl text-gray-300 hover:text-[#2b7a78]"
              @click="closeModal"
            >
              <Icon name="i-lucide-x" />
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.gallery-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
.gallery-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.gallery-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.gallery-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}
</style>
