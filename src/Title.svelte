<script>
  export let prefix = undefined;
</script>

<h1 class="title">
  {#if prefix}
    <span class="secondary">{prefix}</span>
  {/if}
  <slot />
</h1>

<style>
  h1 {
    max-width: 1000px;
    font-family: var(--title-font-family);
  }
</style>
