<script>
  export let prefix;
</script>

<h1 class="title">
  {#if prefix}
    <span class="secondary">{prefix}</span>
  {/if}
  <slot />
</h1>
