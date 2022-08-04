<script>
  import Header from "./Header.svelte";
</script>

<main class="relative">
  <Header>
    <slot name="header" />
  </Header>

  <div>
    <slot />
  </div>
</main>

<style>
  .relative {
    position: relative;
  }
</style>
