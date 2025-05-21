<script setup lang="ts"></script>

<template>
  <section id="contacts" class="bg-[#2b7a78] py-12">
    <div class="container mx-auto w-full p-4 text-center">
      <h2 class="text-2xl font-bold text-white">Contact Us</h2>
      <p class="text-white">
        Interested? Fill out the form below and we'll reply to you soon.
      </p>

      <div class="mt-8 flex gap-8">
        <form
          action=""
          class="mx-auto flex w-full max-w-md flex-col gap-4 rounded-lg bg-[#f4ebd6] p-6 text-left shadow-md"
        >
          <div>
            <label
              for="parentName"
              class="block text-sm font-medium text-[#2b7a78]"
              >Parent Name</label
            >
            <input
              type="text"
              id="parentName"
              name="parentName"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2b7a78] focus:ring-[#2b7a78]"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-[#2b7a78]"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2b7a78] focus:ring-[#2b7a78]"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-[#2b7a78]"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2b7a78] focus:ring-[#2b7a78]"
            />
          </div>
          <div>
            <label
              for="childName"
              class="block text-sm font-medium text-[#2b7a78]"
              >Child Name</label
            >
            <input
              type="text"
              id="childName"
              name="childName"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2b7a78] focus:ring-[#2b7a78]"
            />
          </div>
          <div>
            <label
              for="childAge"
              class="block text-sm font-medium text-[#2b7a78]"
              >Child Age</label
            >
            <input
              type="number"
              id="childAge"
              name="childAge"
              min="0"
              required
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-[#2b7a78] focus:ring-[#2b7a78]"
            />
          </div>
          <button
            type="submit"
            class="mt-4 rounded-md bg-[#2b7a78] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#3a9a98]"
          >
            Submit
          </button>
        </form>

        <div>Map</div>
      </div>
    </div>
  </section>
</template>
