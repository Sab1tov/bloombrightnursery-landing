<script setup lang="ts"></script>

<template>
  <header class="container mx-auto flex items-center justify-between p-4">
    <NuxtLink to="/">
      <NuxtImg src="/images/logo-main.PNG" class="h-18" />
    </NuxtLink>

    <nav>
      <ul class="flex gap-8">
        <li>
          <NuxtLink to="/">About</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/">Why Choose Us</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/">Gallery</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
