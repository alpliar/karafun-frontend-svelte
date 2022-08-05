<script>
  export let prefix = undefined;
</script>

<h1 class="title">
  {#if prefix}
    <span class="secondary">{prefix}</span>
  {/if}
  <slot />
</h1>
