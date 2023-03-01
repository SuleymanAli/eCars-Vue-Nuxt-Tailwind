<template>
  <div class="">
    <div class="container">
      <div
        class="mb-8 flex flex-wrap justify-between bg-primary-500 py-4 px-6 text-white max-md:space-y-5"
      >
        <div class="">
          <p class="italic">Font Stlyes - Heading</p>

          <p class="title">Title</p>
          <h1 class="mb-2">Heading 1</h1>
          <h2 class="mb-2">Heading 2</h2>
          <h3 class="mb-2">Heading 3</h3>
          <h4 class="mb-2">Heading 4</h4>
          <h5 class="mb-2">Heading 5</h5>
          <h6 class="mb-2">Heading 6</h6>
        </div>
        <div class="space-y-3 leading-loose">
          <p class="italic">Font Stlyes - Paragraph</p>

          <p class="p-large">Body Large</p>
          <p>Body Medium</p>
          <p class="p-small">Body Small</p>
          <p class="p-small-2x pb-3">Body xSmall</p>
          <label class="label block"> Label 1 </label>
          <label class="label-secondary"> Label 2 </label>
          <div class="caption">Caption 1</div>
          <div class="caption-secondary">Caption 2</div>
        </div>
        <div class="space-y-2 leading-loose">
          <p class="italic">Font Stlyes - Inter Font Family</p>

          <p class="font-black">black</p>
          <p class="font-extrabold">extra bold</p>
          <p class="font-bold">bold</p>
          <p class="font-semibold">semibold</p>
          <p class="font-medium">medium</p>
          <p class="font-normal">normal</p>
          <p class="font-light">light</p>
          <p class="font-extralight">extra light</p>
          <p class="font-thin">thin</p>
        </div>
      </div>
    </div>
    <div class="container mb-8 space-y-3 text-center">
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-primary-50 py-3 px-2"> primary-50 </span>
        <span class="grow bg-primary-100 py-3 px-2"> primary-100 </span>
        <span class="grow bg-primary-500 py-3 px-2 text-white"
          >primary-500</span
        >
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-secondary-50 py-3 px-2"> secondary-50 </span>
        <span class="grow bg-secondary-100 py-3 px-2"> secondary-100 </span>
        <span class="grow bg-secondary-500 py-3 px-2 text-white"
          >secondary-500</span
        >
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-tertiary-50 py-3 px-2"> tertiary-50 </span>
        <span class="grow bg-tertiary-100 py-3 px-2"> tertiary-100 </span>
        <span class="grow bg-tertiary-500 py-3 px-2 text-white"
          >tertiary-500</span
        >
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-red-50 py-3 px-2"> red-50 </span>
        <span class="grow bg-red-500 py-3 px-2 text-white">red-500</span>
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-blue-50 py-3 px-2"> blue-50 </span>
        <span class="grow bg-blue-500 py-3 px-2 text-white">blue-500</span>
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-orange-50 py-3 px-2"> orange-50 </span>
        <span class="grow bg-orange-500 py-3 px-2 text-white">orange-500</span>
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-yellow-50 py-3 px-2"> yellow-50 </span>
        <span class="grow bg-yellow-500 py-3 px-2 text-white">yellow-500</span>
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-gray-50 py-3 px-2"> gray-50 </span>
        <span class="grow bg-gray-100 py-3 px-2"> gray-100 </span>
        <span class="grow bg-gray-300 py-3 px-2"> gray-300 </span>
        <span class="grow bg-gray-500 py-3 px-2 text-white">gray-500</span>
        <span class="grow bg-gray-700 py-3 px-2 text-white"> gray-700 </span>
        <span class="grow bg-gray-900 py-3 px-2 text-white"> gray-900 </span>
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-dark-1 py-3 px-2 text-white"> dark-1 </span>
        <span class="grow bg-dark-2 py-3 px-2 text-white"> dark-2 </span>
        <span class="bg-dark-3 grow py-3 px-2">dark-3</span>
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-light py-3 px-2">light</span>
      </div>
      <div class="label-secondary flex border border-gray-500">
        <span class="grow bg-outline-1 py-3 px-2"> outline-1 </span>
        <span class="grow bg-outline-2 py-3 px-2">outline-2 (gray-100)</span>
      </div>
    </div>
    <div class="container mb-8">
      <p class="caption mb-6">Non-Vertical Card Component</p>
      <div class="mb-8 flex">
        <div class="mx-auto basis-7/12">
          <CardCar />
        </div>
      </div>
      <p class="caption mb-6">Vertical Card Component</p>
      <div class="flex">
        <div class="flex basis-3/12">
          <CardCar :vertical="true" class="mx-auto" />
        </div>
        <div class="flex basis-3/12">
          <CardCar :vertical="true" class="mx-auto" />
        </div>
        <div class="flex basis-3/12">
          <CardCar :vertical="true" class="mx-auto" />
        </div>
        <div class="flex basis-3/12">
          <CardCar :vertical="true" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
