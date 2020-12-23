<template>
    <a
      v-bind:href="url"
      target="_blank"
      rel="noopener noreferrer"
      v-bind:class="{ 'border-b-2': has_divider }"
      class="block border-gray-300 p-4">
        <h3 class="font-bold text-md">
            {{ name }}
        </h3>
        <p class="text-sm">
            {{ description }}
        </p>
    </a>
</template>

<script>
/* eslint-disable */
  export default {
    props: ['name', 'description', 'has_divider'],
    props: {
      "name": String,
      "description": String,
      "url": String,
      "has_divider": Boolean
    }
  }
</script>

<style>
.CoffeTextColor { color: #4e4840; }

.HoverCoffeeBorderColor:hover {
  border-color: #4e4840;
  border-width: 0px;
  border-bottom-width: 2px;;
}

.OpenSans {
  font-family: "Open Sans"
}
</style>
