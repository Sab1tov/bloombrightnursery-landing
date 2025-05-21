<script setup lang="ts">
import { ref, onMounted } from "vue";

const showOverlay = ref(false);
const showTitle = ref(false);
const showSubtitle = ref(false);
const showButton = ref(false);

onMounted(() => {
  setTimeout(() => {
    showOverlay.value = true;
    setTimeout(() => {
      showTitle.value = true;
      setTimeout(() => {
        showSubtitle.value = true;
        setTimeout(() => {
          showButton.value = true;
        }, 700);
      }, 600);
    }, 300);
  }, 600);
});
</script>

<template>
  <section
    id="hero"
    class="hero-section relative flex w-full items-center justify-center overflow-hidden"
    style="
      background: url(&quot;/images/hero-img.jpg&quot;) center/cover no-repeat;
    "
  >
    <!-- Overlay for readability -->
    <transition name="hero-fade">
      <div
        v-if="showOverlay"
        class="absolute inset-0"
        style="background: rgba(43, 122, 120, 0.45)"
      ></div>
    </transition>
    <div
      class="hero-content relative z-10 flex w-full flex-col items-center justify-center px-4 text-center"
      style="max-width: 900px; margin: 0 auto"
    >
      <transition name="hero-fade-left">
        <h1
          v-if="showTitle"
          class="hero-type mb-6"
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
        <p
          v-if="showSubtitle"
          class="hero-subtitle mb-8"
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
        height: 1.5rem;
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
  min-height: 65vh;
  padding-top: 5vw;
  padding-bottom: 5vw;
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
@media (max-width: 600px) {
  .hero-section {
    min-height: 54vh;
    padding-top: 7vw;
    padding-bottom: 7vw;
  }
  .hero-content {
    padding-top: 4vw;
    padding-bottom: 4vw;
  }
  .hero-type {
    min-height: 2.5rem;
    font-size: clamp(1.2rem, 7vw, 2.2rem) !important;
  }
  .hero-btn {
    min-width: 120px;
    font-size: clamp(0.95rem, 3vw, 1.1rem);
    padding-left: clamp(0.7rem, 4vw, 1.2rem);
    padding-right: clamp(0.7rem, 4vw, 1.2rem);
    padding-top: clamp(0.5rem, 2vw, 0.8rem);
    padding-bottom: clamp(0.5rem, 2vw, 0.8rem);
  }
  .hero-subtitle {
    font-size: clamp(0.95rem, 4vw, 1.2rem) !important;
  }
}
@media (min-width: 1200px) {
  .hero-section {
    min-height: 100vh;
  }
}
.hero-fade-up-enter-active {
  transition:
    opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-fade-up-leave-active {
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-fade-up-enter-from,
.hero-fade-up-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
.hero-fade-up-enter-to,
.hero-fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
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
