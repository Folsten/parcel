<template>
  <div>
    <div class="cursor-text h-16 items-center flex">
      <div
        class="flex items-center h-full w-full relative pl-4 pr-3 rounded border-2 border-r-0 rounded-r-none border-secondarySuperDark"
      >
        <i class="fas fa-search pr-3 text-primary"></i>
        <div class=""></div>
        <input
          type="text"
          placeholder="Enter up to 30 tracking numbers..."
          class="w-full"
        />
      </div>
      <div
        class="flex items-center justify-center w-16 bg-coloredPrimary h-full cursor-pointer rounded rounded-l-none hover:bg-coloredPrimaryDark duration-200"
      >
        <i class="fas fa-chevron-right text-lg text-white"></i>
      </div>
    </div>
    <div class="mt-6 leading-loose">
      To track several parcels, separate them with
      <span
        class="border-2 border-secondarySuperDark p-1 rounded text-sm font-bold"
        >Space</span
      >
      , or
      <span
        class="border-2 border-secondarySuperDark p-1 rounded text-sm font-bold"
        >;</span
      >
      <br />
      Then send the form by pressing
      <span
        class="border-2 border-secondarySuperDark p-1 rounded text-sm font-bold"
        >Enter</span
      >
    </div>
  </div>
</template>
