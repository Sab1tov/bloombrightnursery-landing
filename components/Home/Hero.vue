<script setup lang="ts">
import { ref, onMounted } from "vue";

const showOverlay = ref(false);
const showTitle = ref(false);
const showSubtitle = ref(false);
const showButton = ref(false);
const showScroll = ref(false);
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;

  setTimeout(() => {
    showOverlay.value = true;
    setTimeout(() => {
      showTitle.value = true;
      setTimeout(() => {
        showSubtitle.value = true;
        setTimeout(() => {
          showButton.value = true;
          setTimeout(() => {
            showScroll.value = true;
          }, 700);
        }, 500);
      }, 400);
    }, 300);
  }, 600);
});
</script>

<template>
  <section
    id="hero"
    class="hero-section relative flex w-full items-center justify-center overflow-hidden"
    :class="{ 'is-mounted': isMounted }"
  >
    <!-- Облако 1 (левое верхнее) -->
    <img
      src="/images/cloud.svg"
      class="animate-cloud-1 pointer-events-none absolute top-[40px] left-[20px] z-10 h-32 w-48 opacity-80 md:top-[60px] md:left-[40px] md:h-36 md:w-56 lg:top-[80px] lg:left-[60px]"
      alt="Cloud"
    />

    <!-- Облако 2 (правое верхнее) -->
    <img
      src="/images/cloud.svg"
      class="animate-cloud-2 pointer-events-none absolute top-[80px] right-[40px] z-10 h-24 w-36 opacity-70 md:top-[100px] md:right-[60px] md:h-28 md:w-44 lg:top-[120px] lg:right-[80px]"
      alt="Cloud"
    />

    <!-- Облако 3 (левое нижнее) - скрыто на мобильных -->
    <img
      src="/images/cloud.svg"
      class="animate-cloud-3 pointer-events-none absolute bottom-[140px] left-[100px] z-10 hidden h-20 w-32 opacity-60 md:block md:h-24 md:w-40 lg:bottom-[180px] lg:left-[140px]"
      alt="Cloud"
    />

    <!-- Облако 4 (правое нижнее) - скрыто на мобильных -->
    <img
      src="/images/cloud.svg"
      class="animate-cloud-2 pointer-events-none absolute right-[120px] bottom-[180px] z-10 hidden h-20 w-32 opacity-50 md:block md:h-24 md:w-40 lg:right-[160px] lg:bottom-[220px]"
      alt="Cloud"
    />

    <!-- Логотип -->
    <div
      class="absolute top-4 left-4 z-20 flex items-center md:top-6 md:left-6 lg:top-8 lg:left-8"
    >
      <NuxtImg
        src="/images/logo-alt-1.PNG"
        alt="Bloom Bright Logo"
        class="h-10 w-auto max-w-[100px] rounded-xl bg-white/80 p-1 drop-shadow-md sm:h-12 sm:max-w-[120px] md:h-14 md:max-w-[140px] lg:h-16 lg:max-w-[160px]"
      />
    </div>

    <!-- Badge -->
    <div
      class="absolute top-4 right-4 z-20 md:top-6 md:right-6 lg:top-8 lg:right-8"
    >
      <span
        class="animate-badge inline-block rounded-full bg-[#D95C3A] px-3 py-1 text-xs font-bold tracking-wide text-white shadow-lg sm:px-4 sm:py-1.5 sm:text-sm md:px-5 md:py-2 md:text-base"
        >Open for 2025/26</span
      >
    </div>

    <!-- Overlay for readability -->
    <transition name="hero-fade">
      <div
        v-if="showOverlay"
        class="absolute inset-0"
        style="background: rgba(43, 122, 120, 0.45)"
      ></div>
    </transition>
    <div
      class="hero-content relative z-10 flex w-full flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8"
      style="max-width: 900px; margin: 0 auto"
    >
      <transition name="hero-fade-left">
        <h1
          v-if="showTitle"
          class="hero-type mb-4"
          style="
            color: #fff;
            font-size: clamp(2rem, 7vw, 4.5rem);
            font-weight: 900;
            text-shadow: 0 2px 16px rgba(43, 122, 120, 0.25);
          "
        >
          Welcome to <span style="color: #d95c3a">Bloom Bright</span>
        </h1>
      </transition>
      <transition name="hero-fade-left">
        <div v-if="showSubtitle" class="mb-4">
          <span
            class="hero-usp bg-opacity-80 inline-block rounded-xl bg-[#CFE3D1] px-4 py-2 text-lg font-semibold text-[#2B7A78] shadow-sm"
            style="backdrop-filter: blur(2px)"
            >A place where every child shines</span
          >
        </div>
      </transition>
      <transition name="hero-fade-left">
        <p
          v-if="showSubtitle"
          class="hero-subtitle mb-7"
          style="
            color: #f4ebd6;
            font-size: clamp(1.05rem, 3vw, 2rem);
            font-weight: 500;
            text-shadow: 0 2px 12px rgba(43, 122, 120, 0.18);
          "
        >
          Montessori-inspired kindergarten where every child blossoms with care,
          creativity, and confidence.
        </p>
      </transition>
      <transition name="hero-fade-left">
        <a
          v-if="showButton"
          href="#contacts"
          class="hero-btn inline-block rounded-full px-7 py-3 font-bold shadow-lg transition hover:scale-105"
          style="
            background: #d95c3a;
            color: #fff;
            font-size: clamp(1rem, 2vw, 1.3rem);
            letter-spacing: 0.03em;
            box-shadow: 0 4px 24px rgba(217, 92, 58, 0.18);
          "
        >
          Book a Visit
        </a>
      </transition>
    </div>
    <!-- Decorative gradient at the bottom -->
    <div
      class="absolute bottom-0 left-0 w-full"
      style="
        height: 1rem;
        background: linear-gradient(
          90deg,
          #2b7a78 0%,
          #cfe3d1 50%,
          #d95c3a 100%
        );
        opacity: 0.7;
      "
    ></div>
  </section>
</template>

<style scoped>
.hero-section {
  background: #f4ebd6 url("/images/hero-img.jpg") center center / cover
    no-repeat;
  min-height: 100vh;
  height: 100vh;
  padding-top: 5vw;
  padding-bottom: 5vw;
  width: 100%;
}

/* Мобильные устройства (маленькие) */
@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
    height: 50vh;
    padding-top: 8vw;
    padding-bottom: 8vw;
  }

  .hero-content {
    padding-top: 5vw;
    padding-bottom: 5vw;
  }

  .hero-type {
    min-height: 2rem;
    font-size: clamp(1.2rem, 6vw, 1.8rem) !important;
    margin-bottom: 0.5rem;
  }

  .hero-subtitle {
    font-size: clamp(0.9rem, 3.5vw, 1.1rem) !important;
    margin-bottom: 1rem;
  }

  .hero-usp {
    font-size: clamp(0.9rem, 3.5vw, 1rem);
    padding: 0.5rem 1rem;
  }

  .hero-btn {
    min-width: 100px;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}

/* Мобильные устройства (средние) */
@media (min-width: 481px) and (max-width: 767px) {
  .hero-section {
    min-height: 54vh;
    height: 54vh;
    padding-top: 7vw;
    padding-bottom: 7vw;
  }

  .hero-content {
    padding-top: 4vw;
    padding-bottom: 4vw;
  }

  .hero-type {
    min-height: 2.5rem;
    font-size: clamp(1.5rem, 7vw, 2.2rem) !important;
  }

  .hero-subtitle {
    font-size: clamp(0.95rem, 4vw, 1.2rem) !important;
    margin-bottom: 1.5rem;
  }
}

/* Планшеты */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-section {
    min-height: 80vh;
    height: 80vh;
  }

  .hero-content {
    padding-top: 3vw;
    padding-bottom: 3vw;
  }
}

/* Десктопы */
@media (min-width: 1024px) {
  .hero-section {
    min-height: 120vh;
    height: 120vh;
  }

  .hero-content {
    padding-top: 2vw;
    padding-bottom: 2vw;
  }
}

.hero-content {
  padding-top: 2vw;
  padding-bottom: 2vw;
}
.hero-type {
  letter-spacing: 0.01em;
  min-height: 4.5rem;
  word-break: break-word;
}
.hero-btn {
  min-width: 180px;
  font-size: clamp(1rem, 2vw, 1.3rem);
  padding-left: clamp(1.2rem, 4vw, 2.5rem);
  padding-right: clamp(1.2rem, 4vw, 2.5rem);
  padding-top: clamp(0.7rem, 2vw, 1.1rem);
  padding-bottom: clamp(0.7rem, 2vw, 1.1rem);
}
.hero-subtitle {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.hero-usp {
  font-size: clamp(1.05rem, 2.5vw, 1.35rem);
}

@keyframes cloud-move-1 {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(18px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
@keyframes cloud-move-2 {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(-8px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
@keyframes cloud-move-3 {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  50% {
    transform: translateY(10px) translateX(-5px) scale(1.05);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
}
.animate-cloud-1 {
  animation: cloud-move-1 9s ease-in-out infinite;
}
.animate-cloud-2 {
  animation: cloud-move-2 12s ease-in-out infinite;
}
.animate-cloud-3 {
  animation: cloud-move-3 15s ease-in-out infinite;
}
@keyframes badge-pop {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-badge {
  animation: badge-pop 1.1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Анимации */
.hero-fade-enter-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
.hero-fade-enter-to,
.hero-fade-leave-from {
  opacity: 1;
}
.hero-fade-left-enter-active {
  transition:
    opacity 1.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 1.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-fade-left-leave-active {
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-fade-left-enter-from,
.hero-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-3rem);
}
.hero-fade-left-enter-to,
.hero-fade-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
