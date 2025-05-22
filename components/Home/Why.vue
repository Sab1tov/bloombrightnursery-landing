<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

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

// Computed property for background pattern
const patternStyle = computed(() => {
  return {
    backgroundImage: "url('/images/cloud.svg')",
    backgroundSize: "300px",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    opacity: 0.05,
  };
});

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
    class="relative overflow-hidden bg-gradient-to-br from-[#F4EBD6] to-[#CFE3D1] py-8 sm:py-16 md:py-20 lg:py-24"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0" :style="patternStyle"></div>

    <!-- Decorative elements -->
    <div
      class="absolute -top-20 -left-20 hidden h-32 w-32 animate-pulse rounded-full bg-[#2B7A78] opacity-10 sm:block md:h-40 md:w-40"
    ></div>
    <div
      class="absolute -right-20 -bottom-20 hidden h-32 w-32 animate-pulse rounded-full bg-[#D95C3A] opacity-10 sm:block md:h-40 md:w-40"
      style="animation-duration: 8s"
    ></div>
    <!-- Additional decorative elements -->
    <div
      class="absolute top-1/4 right-4 hidden h-10 w-10 animate-pulse rounded-full bg-[#AA7756] opacity-10 sm:block md:right-10 md:h-16 md:w-16"
      style="animation-duration: 6s"
    ></div>
    <div
      class="absolute bottom-1/4 left-4 hidden h-10 w-10 animate-pulse rounded-full bg-[#2B7A78] opacity-10 sm:block md:left-10 md:h-16 md:w-16"
      style="animation-duration: 7s"
    ></div>

    <div class="relative z-10 container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div
        class="mb-16 text-center"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <h2
          class="relative mb-4 inline-block text-2xl font-bold text-[#2B7A78] sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Why Choose Bloom Bright?
          <span
            class="absolute -bottom-2 left-0 h-1 w-full scale-x-0 transform rounded-full bg-[#D95C3A] transition-transform duration-1000"
            :class="{ 'scale-x-100': isVisible }"
          ></span>
        </h2>
        <p
          class="mx-auto mt-4 max-w-2xl text-base text-[#555] sm:mt-6 sm:text-lg md:text-xl"
        >
          We provide more than just childcare — we nurture minds, inspire
          creativity, and build foundations for lifelong learning in a safe,
          loving environment.
        </p>
      </div>

      <!-- Reason Cards Grid -->
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3"
      >
        <div
          v-for="(reason, index) in reasons"
          :key="reason.id"
          class="card transform rounded-xl bg-white p-4 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl sm:p-5 md:p-6"
          :class="{ 'animate-fade-in-up': showCards[index] }"
          :style="{
            'animation-delay': `${index * 200}ms`,
            opacity: showCards[index] ? 1 : 0,
            transform: showCards[index] ? 'translateY(0)' : 'translateY(40px)',
            'border-top': `4px solid ${reason.color}`,
          }"
        >
          <!-- Card number badge -->

          <div class="mb-4 flex items-center">
            <div
              class="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full shadow-md sm:mr-4 sm:h-12 sm:w-12 md:h-14 md:w-14"
              :style="{ 'background-color': reason.color }"
            >
              <!-- Иконка из заголовка, можно заменить на конкретные иконки -->
              <div class="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-7 md:w-7">
                <svg
                  v-if="reason.id === 1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <svg
                  v-else-if="reason.id === 2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <svg
                  v-else-if="reason.id === 3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <svg
                  v-else-if="reason.id === 4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
                <svg
                  v-else-if="reason.id === 5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <svg
                  v-else-if="reason.id === 6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-[#333]">{{ reason.title }}</h3>
          </div>

          <div class="relative mb-4 h-48 overflow-hidden rounded-lg shadow-md">
            <div
              class="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
            <img
              :src="reason.image"
              :alt="reason.title"
              class="h-32 w-full object-cover transition-transform duration-500 hover:scale-110 sm:h-40 md:h-48"
            />
          </div>

          <p
            class="mb-2 text-sm leading-relaxed text-[#555] sm:mb-4 sm:text-base md:text-lg"
          >
            {{ reason.description }}
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="mt-10 flex flex-col items-center justify-center space-y-4 text-center sm:mt-14 sm:flex-row sm:space-y-0 sm:space-x-6 md:mt-16"
        :class="{ 'animate-fade-in-up': isVisible }"
        style="animation-delay: 800ms"
      >
        <div
          class="w-full max-w-xl transform rounded-xl border-l-4 border-[#2B7A78] bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:max-w-2xl sm:p-6 md:max-w-3xl md:p-8"
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
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 4s ease-in-out infinite;
}

.card {
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
