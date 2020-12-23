<template>
      <div class="text-center md:text-right lg:text-right">
        <a v-bind:href="contact_url" class="HoverCoffeeBorderColor font-bold OpenSans CoffeTextColor border-0">
          {{ contact_name }}
        </a>
        <div class="font-extrabold text-xl OpenSans CoffeTextColor">
          {{ type }}
        </div>
      </div>
</template>

<script>
/* eslint-disable */
  export default {
    props: ['type', 'contact_name', 'contact_url']
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
