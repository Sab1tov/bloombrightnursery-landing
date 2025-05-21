<script setup lang="ts"></script>

<template>
  <div>
    <LayoutHeader />
    <main class="container mx-auto min-h-dvh w-full">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
