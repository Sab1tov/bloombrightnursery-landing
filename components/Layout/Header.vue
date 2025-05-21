<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const scrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    isMenuOpen.value = false;
  }
};
</script>

<template>
  <header
    class="relative container mx-auto flex items-center justify-between p-4"
  >
    <div class="flex w-full items-center justify-between">
      <NuxtLink to="/" @click="scrollTo('hero')">
        <NuxtImg src="/images/logo-main.PNG" class="h-18" />
      </NuxtLink>
      <button
        class="z-20 flex h-10 w-10 items-center justify-center md:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Icon
          :name="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          class="h-8 w-8 text-2xl text-black transition-all duration-300"
        />
      </button>
    </div>

    <nav>
      <ul class="hidden gap-8 md:flex">
        <li>
          <NuxtLink class="cursor-pointer truncate" @click="scrollTo('about')">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="cursor-pointer truncate" @click="scrollTo('why')">
            Why Choose Us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="cursor-pointer truncate"
            @click="scrollTo('gallery')"
          >
            Gallery
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="cursor-pointer truncate"
            @click="scrollTo('contacts')"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <transition name="fade">
        <ul
          v-if="isMenuOpen"
          class="animate-fade-in absolute top-full left-0 z-10 flex w-full flex-col gap-4 bg-white p-6 shadow-lg md:hidden"
        >
          <li>
            <NuxtLink class="cursor-pointer" @click="scrollTo('about')">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="cursor-pointer" @click="scrollTo('why')">
              Why Choose Us
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="cursor-pointer" @click="scrollTo('gallery')">
              Gallery
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="cursor-pointer" @click="scrollTo('contacts')">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
