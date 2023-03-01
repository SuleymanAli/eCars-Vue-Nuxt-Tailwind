<template>
  <footer class="bg-light py-20">
    <div class="p-small container">
      <div class="mb-16 flex flex-col text-gray-700 md:flex-row">
        <div class="max-md:mb-6 md:basis-3/12">
          <img src="/logo.svg" alt="" class="mb-6" />
          <p class="mb-6">
            Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae
            nunc. Ut tellus elementum sagittis vitae et leo duis.
          </p>
          <div class="flex space-x-4">
            <NuxtIcon name="social/fb" />
            <NuxtIcon class="text-" name="social/twitter" />
            <NuxtIcon name="social/youtube" />
            <NuxtIcon name="social/ig" />
          </div>
        </div>
        <div class="max-md:mb-6 md:mx-auto md:basis-2/12">
          <div class="label mb-6 text-gray-900">Company</div>
          <div class="mb-3">About Us</div>
          <div class="mb-3">Blog</div>
          <div>FAQ</div>
        </div>
        <div class="max-md:mb-6 md:mx-auto md:basis-2/12">
          <div class="label mb-6 text-gray-900">Cars</div>
          <div class="mb-3">Special offers</div>
          <div class="mb-3">New cars</div>
          <div class="mb-3">Used cars</div>
          <div>Brands</div>
        </div>
        <div class="flex flex-col md:basis-2/12">
          <div class="label mb-6 text-gray-900">Contacts</div>

          <div class="mb-3 flex items-center">
            <NuxtIcon name="social/wp" class="mr-2" />
            +971 55 811 9024
          </div>

          <div class="flex items-center">
            <NuxtIcon name="mail" class="mr-2" />
            request@example.com
          </div>
        </div>
      </div>
      <div class="p-small-2x flex justify-between text-gray-500">
        <p>eCars © 2022. All rights reserved.</p>
        <div class="flex space-x-6">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
