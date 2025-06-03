<script setup lang="ts">
import { onMounted, ref } from "vue";

// Данные причин выбрать наш детский сад (на основе предоставленных фотографий)
const reasons = [
  {
    id: 1,
    title: "Independence from the start",
    description:
      "Children are gently encouraged to do things on their own, at their own pace. That builds real confidence.",
    icon: "i-heroicons-academic-cap",
    color: "#2B7A78",
    image: "/images/image3.jpg",
  },
  {
    id: 2,
    title: "Respect for the child",
    description:
      "Even the tiniest humans deserve to be heard and understood. We treat each child as a unique individual.",
    icon: "i-heroicons-user-group",
    color: "#D95C3A",
    image: "/images/image7.jpg",
  },
  {
    id: 3,
    title: "A space that invites curiosity",
    description:
      "From soft lighting to hands-on materials — everything is designed to inspire self-directed learning.",
    icon: "i-heroicons-shield-check",
    color: "#AA7756",
    image: "/images/image9.jpg",
  },
  {
    id: 4,
    title: "Guidance through trust, not punishment",
    description:
      "No time-outs, no fear-based discipline — just gentle guidance and clear, respectful boundaries.",
    icon: "i-heroicons-sun",
    color: "#2B7A78",
    image: "/images/image11.jpg",
  },
  {
    id: 5,
    title: "Focus, calm, and inner discipline",
    description:
      "Montessori helps children develop concentration, patience, and love for deep, quiet work — skills for life.",
    icon: "i-heroicons-heart",
    color: "#D95C3A",
    image: "/images/image15.jpg",
  },
  {
    id: 6,
    title: "Montessori Method",
    description:
      "We implement authentic Montessori principles, providing prepared environments where children learn through discovery and develop independence.",
    icon: "i-heroicons-arrow-path",
    color: "#AA7756",
    image: "/images/image17.jpg",
  },
];

const isVisible = ref(false);
const showCards = ref(Array(reasons.length).fill(false));

onMounted(() => {
  // Используем Intersection Observer для анимации при прокрутке
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        // Показываем карточки с задержкой
        reasons.forEach((_, index) => {
          setTimeout(() => {
            showCards.value[index] = true;
          }, 200 * index);
        });
        observer.disconnect(); // Отключаем обсервер после срабатывания
      }
    },
    { threshold: 0.1 },
  );

  // Наблюдаем за секцией
  const section = document.querySelector("#why");
  if (section) observer.observe(section);
});
</script>

<template>
  <section
    id="why"
    class="relative overflow-hidden bg-gradient-to-br from-[#f4ecd6] via-[#e3f0e6] to-[#cfe3d1] py-10 sm:py-16 md:py-24"
  >
    <!-- SVG/Blurred Background Spots -->
    <div
      class="pointer-events-none absolute -top-32 left-1/2 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2B7A78]/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute right-0 bottom-0 z-0 h-60 w-60 translate-x-1/3 translate-y-1/3 rounded-full bg-[#D95C3A]/10 blur-2xl"
    ></div>
    <div
      class="pointer-events-none absolute top-1/3 left-0 z-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#AA7756]/10 blur-2xl"
    ></div>

    <div class="relative z-10 container mx-auto px-2 sm:px-4 md:px-8">
      <div class="mb-14 text-center">
        <h2
          class="relative mb-4 inline-block text-2xl font-extrabold tracking-tight text-[#2B7A78] sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Why Choose Bloom Bright?
          <span
            class="absolute -bottom-2 left-1/2 h-1 w-2/3 -translate-x-1/2 rounded-full bg-[#D95C3A] opacity-60"
          ></span>
        </h2>
        <p
          class="mx-auto mt-4 max-w-2xl text-base text-[#444] sm:text-lg md:text-xl"
        >
          We provide more than just childcare — we nurture minds, inspire
          creativity, and build foundations for lifelong learning in a safe,
          loving environment.
        </p>
      </div>

      <!-- Reason List -->
      <div
        class="mx-auto grid max-w-4xl grid-cols-1 gap-y-6 px-2 sm:px-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-8"
      >
        <div
          v-for="(reason, idx) in reasons"
          :key="reason.id"
          class="flex items-start gap-3 sm:gap-5 md:gap-6"
        >
          <div
            class="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full shadow-md sm:mr-5 sm:h-12 sm:w-12 md:mr-6 md:h-14 md:w-14"
            :style="{ backgroundColor: reason.color }"
          >
            <span
              class="text-lg font-extrabold text-white select-none sm:text-xl md:text-2xl"
              >{{ idx + 1 }}</span
            >
          </div>
          <div class="relative flex-1">
            <div
              class="absolute top-3 left-0 h-6 w-1 rounded-full bg-[#2B7A78] opacity-60 sm:top-4 sm:h-7 md:top-5 md:h-8"
            ></div>
            <h3
              class="relative z-10 mb-1 pl-4 text-lg leading-tight font-extrabold text-[#2B7A78] sm:text-xl md:mb-2 md:text-2xl"
            >
              {{ reason.title }}
            </h3>
            <p
              class="relative z-10 pl-4 text-base leading-relaxed text-[#333] sm:text-lg md:text-xl"
            >
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="mt-12 flex flex-col items-center justify-center space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-6"
      >
        <div
          class="w-full max-w-xl transform rounded-2xl border-l-4 border-[#2B7A78] bg-white/80 p-4 shadow-xl shadow-[#2B7A78]/10 backdrop-blur-md transition-all duration-300 hover:shadow-2xl sm:max-w-2xl sm:p-6 md:max-w-3xl md:p-8"
        >
          <p
            class="mb-2 text-base font-semibold text-[#333] sm:mb-4 sm:text-lg"
          >
            Ready to see our kindergarten in action?
          </p>
          <a
            href="#contacts"
            class="hover:bg-opacity-90 inline-block rounded-full bg-[#D95C3A] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3.5 sm:text-base"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: scale(0.97) translateY(40px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.card {
  transition:
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.card:hover {
  transform: scale(1.05) translateY(-5px);
}
</style>
