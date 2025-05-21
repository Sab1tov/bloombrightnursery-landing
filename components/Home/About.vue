<script setup lang="ts"></script>

<template>
  <section
    id="about"
    class="relative overflow-hidden"
    style="background-color: #f4ebd6; padding-block: clamp(2rem, 6vw, 4.5rem)"
  >
    <!-- Decorative circle in the corner -->
    <div
      class="absolute z-0 hidden rounded-full opacity-30 md:block"
      style="
        top: -4rem;
        left: -4rem;
        width: 16rem;
        height: 16rem;
        background-color: #cfe3d1;
      "
    ></div>
    <div
      class="relative z-10 container mx-auto flex flex-col-reverse items-center gap-8 px-4 md:flex-row md:gap-12"
      style="max-width: 1200px"
    >
      <div class="flex w-full flex-col justify-center text-left md:w-1/2">
        <h2
          class="mb-4 flex items-center gap-3 md:mb-6"
          style="
            color: #2b7a78;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
          "
        >
          <span>About Us</span>
          <span
            class="inline-block rounded"
            style="
              width: clamp(2.5rem, 5vw, 3.5rem);
              height: clamp(0.5rem, 1vw, 0.75rem);
              background-color: #d95c3a;
            "
          ></span>
        </h2>
        <p
          class="mb-4 md:mb-6"
          style="
            color: #aa7756;
            font-size: clamp(1.1rem, 2.5vw, 1.6rem);
            line-height: 1.5;
          "
        >
          <span style="color: #d95c3a; font-weight: 600">Bloom Bright</span> is
          a cozy kindergarten inspired by the
          <span style="color: #2b7a78; font-weight: 700"
            >Montessori approach</span
          >. We believe every child is unique and deserves care, respect, and
          support on their journey to independence.
        </p>
        <div
          class="mb-3 rounded-lg md:mb-5"
          style="
            background-color: rgba(207, 227, 209, 0.2);
            padding: clamp(1rem, 2vw, 1.5rem);
          "
        >
          <p
            class="mb-2 md:mb-3"
            style="color: #aa7756; font-size: clamp(1rem, 2vw, 1.25rem)"
          >
            In our space, children learn through
            <span style="color: #d95c3a; font-weight: 600">play</span>,
            <span style="color: #2b7a78; font-weight: 600">exploration</span>,
            and
            <span style="color: #d95c3a; font-weight: 600">creativity</span
            >.<br />
            We create an atmosphere of trust where kids discover their talents,
            make friends, and learn to care for each other.
          </p>
        </div>
        <p style="color: #374151; font-size: clamp(1rem, 2vw, 1.25rem)">
          Our mission is to help children grow
          <span style="color: #2b7a78; font-weight: 600">happy</span>,
          confident, and open to the world. Join the
          <span style="color: #d95c3a; font-weight: 600">Bloom Bright</span>
          family!
        </p>
      </div>
      <div class="mb-6 flex w-full justify-center md:mb-0 md:w-1/2">
        <div
          class="rounded-2xl border-2 p-2 shadow-lg"
          style="
            background-color: #fff;
            border-color: #aa7756;
            max-width: 400px;
            width: 100%;
          "
        >
          <NuxtImg
            src="/images/hero-img.jpg"
            alt="Bloom Bright Montessori Kids"
            class="w-full rounded-xl border-4 object-cover shadow-md"
            style="border-color: #cfe3d1; max-height: 340px; object-fit: cover"
          />
        </div>
      </div>
    </div>
    <!-- Decorative gradient line at the bottom -->
    <div
      class="absolute bottom-0 left-0 w-full rounded-t-xl opacity-60"
      style="
        height: clamp(0.75rem, 2vw, 1.25rem);
        background: linear-gradient(
          90deg,
          #2b7a78 0%,
          #cfe3d1 50%,
          #d95c3a 100%
        );
      "
    ></div>
  </section>
</template>
