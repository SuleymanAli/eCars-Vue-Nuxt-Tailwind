<template>
  <header class="">
    <div class="bg-dark-1 p-2.5 text-white/70">
      <div class="container flex flex-wrap justify-between">
        <div class="flex items-center">
          <div class="flex items-center space-x-4">
            <!-- Social -->
            <div class="flex space-x-4">
              <NuxtIcon name="social/fb" />
              <NuxtIcon class="text-" name="social/twitter" />
              <NuxtIcon name="social/youtube" />
              <NuxtIcon name="social/ig" />
            </div>
            <!-- Phone -->
            <div class="flex items-center">
              <NuxtIcon name="social/wp" class="mr-2" />
              <span> +971 55 811 9024 </span>
            </div>
            <!-- Email -->
            <div class="flex items-center">
              <NuxtIcon name="mail" class="text- mr-2 mb-0" />
              <span> request@example.com </span>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-7">
          <!-- Ship -->
          <div class="flex items-center">
            <NuxtIcon name="location" class="mr-2" />
            <span> Ship to: Canada </span>
          </div>
          <!-- Currency -->
          <div class="flex items-center">
            <span>Currency: USD</span>
            <NuxtIcon name="chevron-down" />
          </div>
          <!-- Help -->
          <div class="flex items-center">
            <NuxtIcon name="info" class="mr-2" />
            <span> Help </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-0.5 py-4">
      <div class="flex justify-between">
        <nav class="flex list-none items-center">
          <li class="mr-6">
            <img src="/logo.svg" alt="" />
          </li>
          <li class="mx-4">
            <a href="/" class="label-secondary leading-relaxed text-gray-900">
              All Cars
            </a>
          </li>
          <li class="mx-4">
            <a href="/" class="label-secondary leading-relaxed text-gray-900">
              About Us
            </a>
          </li>
          <li class="mx-4">
            <a href="/" class="label-secondary leading-relaxed text-gray-900">
              Blog
            </a>
          </li>
          <li class="mx-4">
            <a href="/" class="label-secondary leading-relaxed text-gray-900">
              Contact
            </a>
          </li>
        </nav>
        <div class="flex">
          <div class="mr-10 flex items-center space-x-7">
            <NuxtIcon name="search" class="text-xl" />
            <NuxtIcon name="like" class="text-xl" />
            <NuxtIcon name="profile" class="text-xl" />
          </div>
          <div>
            <button
              class="label-secondary rounded-lg bg-primary-500 py-1.5 px-3 leading-relaxed text-white"
            >
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
