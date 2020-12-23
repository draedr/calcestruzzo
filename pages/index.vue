<template>
  <div class="dark OpenSans pb-8 pt-0 md:pt-8 lg:pt-8">
    <div class="mx-0 md:mx-8 lg:mx-8">
      <Hero />
    </div>

    <div class="my-8 hidden md:block lg:block " />

    <div
      class="mx-0 md:mx-8 lg:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12 md:mt-0 lg:mt-0">

      <div class="mx-0 md:mx-8 lg:mx-8 OpenSans">
        <div class="CoffeBackgroundColor px-8 py-8 shadow-lg rounded-none md:rounded-xl lg:rounded-xl">

          <h2 class="mb-4 font-bold text-xl CoffeTextColor">
            Hi, i'm Manuel Tondelli.
          </h2>
          <p class="mb-2">
            I'm a 21 years old, studying Information Technology at University of Parma, currently looking for work a software developer.
          </p>
          <p>
            I'm quite the geek, with my main hobbies being programming & videogames. You can usually find me on Twitter or Mastodon.
          </p>

        </div>
      </div>

      <div class="flex flex-col mx-0 md:mx-8 lg:mx-8 px-8 py-8 shadow-lg rounded-none md:rounded-xl lg:rounded-xl OpenSans">

        <h2 class="text-2xl font-light">
          <a href="https://github.com/draedr">Portfolio</a>
        </h2>

        <portfolio-link
          name="Calcestruzzo"
          description="A simple portfolio made with NuxtJS & TailwindCSS."
          url="https://github.com/draedr/calcestruzzo"
          v-bind:has_divider="true" />

        <portfolio-link
          name="KriticalTimes"
          description="A port of the 'Critical Times' theme from OJS to Eleventy, based on deventy and built using tailwindcss."
          url="https://github.com/draedr/KriticalTimes"
          v-bind:has_divider="true" />

        <portfolio-link
          name="Health-Science.11"
          description="A port of the 'Health Science' theme from OJS to Eleventy, based on deventy and built using tailwindCSS."
          url="https://github.com/draedr/Health-Science.11"
          v-bind:has_divider="true" />

        <portfolio-link
          name="acorth"
          description="An eleventy theme for an elegant and simple blog."
          url="https://github.com/draedr/acorth"
          v-bind:has_divider="false" />

      </div>

    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import PortfolioLink from '../components/PortfolioLink.vue'
export default { components: { Hero, PortfolioLink } }
</script>

<style>
.CoffeBorderColor { border-color: #C3B5A0;}
.CoffeBackgroundColor { background-color: #C3B5A0; }
.CoffeTextColor { color: #4e4840; }

.LinkedinButtonBackgroundColor { background-color: #0a66c2; }

.OpenSans { font-family: "Open Sans" !important; }
</style>
