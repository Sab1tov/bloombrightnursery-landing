<script setup lang="ts"></script>

<template>
  <footer class="bg-[#f4ebd6]">
    <div class="container mx-auto flex items-center justify-between p-4">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo-alt-1.PNG" class="h-18" />
      </NuxtLink>

      <nav>
        <ul class="flex gap-8">
          <li>
            <ul>
              <strong>Address</strong>

              <li>Dubai</li>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Contact</strong>

              <li>+7 777 777 77 77</li>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Socials</strong>

              <li>
                <NuxtLink to="">
                  <Icon name="i-lucide-instagram" />
                  Instagram
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="">
                  <Icon name="i-lucide-linkedin" />
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
