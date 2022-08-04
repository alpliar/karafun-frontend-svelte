<span class="icon-with-text">
  <slot name="icon" class="icon" />
  <slot />
</span>

<style>
  .icon-with-text {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }

  .icon {
    width: 32px;
    height: 32px;
  }
</style>
