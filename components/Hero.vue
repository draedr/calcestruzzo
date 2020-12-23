<template>
  <div class="flex flex-col md:flex-row lg:flex-row mx-0 md:mx-8 lg:my-8 rounded-none md:rounded-2xl lg:rounded-2xl px-16 py-8 CoffeBackgroundColor shadow-lg">
    <img
      src="~/assets/avatar.png"
      class="shadow block border-4 border-black border-opacity-25 rounded-full h-48 w-48 mx-auto AppearEffect" />
    <div class="pt-8 flex-grow grid grid-cols-1 md:grid-cols-2">
      <hero-contact
        type="LinkedIn"
        contact_name="Manuel Tondelli"
        contact_url="https://www.linkedin.com/in/manuel-tondelli-5a7696185/" />

      <hero-contact
        class="mb-4"
        type="Twitter"
        contact_name="@azurelighting"
        contact_url="twitter.com/azurelighting" />

      <hero-contact
        class="mb-4"
        type="Contact"
        contact_name="manueltondelli@hotmail.it"
        contact_url="mailto:manueltondelli@hotmail.it" />

      <hero-contact
        type="Mastodon"
        contact_name="@kettlevoid@koyu.space"
        contact_url="#" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import HeroContact from './HeroContact.vue'
export default {
  components: { HeroContact },}
</script>

<style>
.CoffeBackgroundColor { background-color: #C3B5A0; }

.AppearEffect {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
