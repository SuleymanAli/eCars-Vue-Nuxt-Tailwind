<template>
  <!-- Card -->
  <div
    class="relative flex overflow-hidden rounded-lg text-gray-700 shadow-[0px_8px_16px_rgba(28,30,34,0.08)] transition hover:shadow-[0px_1px_2px_rgba(28,30,34,0.08)]"
    :class="
      vertical
        ? 'max-h-[312px] max-w-[288px] flex-col '
        : 'min-h-[225px] max-w-[704px]'
    "
  >
    <!-- Image -->
    <div
      class="relative shrink-0"
      :class="vertical ? 'h- h-[180px] w-full' : 'w-[300px]'"
    >
      <img src="/car1.png" alt="" class="h-full w-full object-cover" />
      <span
        v-if="!vertical"
        class="caption-secondary absolute top-2 left-0 rounded-r-md bg-yellow-500 px-2 py-1 text-black"
        >Premium</span
      >
    </div>
    <!-- Content -->
    <div class="flex flex-col p-4">
      <!-- Title And Icon -->
      <div class="flex">
        <p class="p-small mb-2 text-gray-900">
          Toyota Land Cruiser 300 VXR+ V6 3.3L Diesel Twin Turbo AT
        </p>
        <a href="/" class="absolute top-2 right-2">
          <NuxtIcon
            name="like"
            class="text-xl"
            :class="vertical ? 'text-white' : 'text-gray-300'"
          />
        </a>
      </div>
      <!-- Tag -->
      <p class="p-small mb-2 pr-5 text-gray-700" v-if="!vertical">
        Milwaukee • NEW • 0 km • Gasoline
      </p>
      <!-- Description -->
      <p class="text-gray-900" v-if="!vertical">
        2022 Land Cruiser, panoramic roof, black interior, LED headlights and
        automatic gearbox. A brand new car with GCC specifications.
      </p>
      <p class="mb-3 text-xs text-gray-300">Used • 27,057 mi • Petrol</p>
      <!-- Bottom -->
      <div class="mt-auto flex justify-between">
        <!-- Price -->
        <span class="label text-gray-900"> $45,995 </span>
        <!-- Cta -->
        <a href="/" class="label-secondary flex items-center text-primary-500">
          <span>Details</span>
          <NuxtIcon name="chevron-right" class="text-xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
// .card {
//   box-shadow: 0px 8px 16px rgba(28, 30, 34, 0.08);

//   &:hover {
//     box-shadow: 0px 1px 2px rgba(28, 30, 34, 0.08);
//   }
// }
</style>
