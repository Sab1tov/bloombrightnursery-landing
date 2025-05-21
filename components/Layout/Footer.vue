<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="bg-[#f4ebd6]">
    <div class="container mx-auto flex items-center justify-between p-4">
      <nav class="w-full py-8 md:py-4">
        <ul class="flex flex-col justify-between gap-8 md:flex-row">
          <li class="hidden md:block">
            <NuxtLink to="/" @click="scrollToTop">
              <NuxtImg src="/images/logo-alt-1.PNG" class="h-18" />
            </NuxtLink>
          </li>

          <li>
            <ul>
              <strong>Address</strong>

              <li class="underline">UAE, Dubai</li>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Contact</strong>

              <li class="underline">+7 777 777 77 77</li>
              <li class="underline">+8 888 888 88 88</li>
              <li class="underline">+9 999 999 99 99</li>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Socials</strong>

              <li>
                <NuxtLink
                  to=""
                  class="group flex cursor-pointer items-center gap-2 transition-all duration-300 hover:text-shadow-md"
                >
                  <Icon
                    name="i-lucide-instagram"
                    class="transition-all duration-300 group-hover:text-[#d95c3a]"
                  />
                  Instagram
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to=""
                  class="group flex cursor-pointer items-center gap-2 transition-all duration-300 hover:text-shadow-md"
                >
                  <Icon
                    name="i-lucide-linkedin"
                    class="transition-all duration-300 group-hover:text-[#d95c3a]"
                  />
                  Linkedin
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
