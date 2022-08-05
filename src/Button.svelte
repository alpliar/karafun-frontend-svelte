<script>
  import { createEventDispatcher } from "svelte/internal";

  import arrow from "./assets/arrow_right.svg";
  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch("click");
  };
</script>

<button on:click={handleClick}>
  <slot />
  <img class="button-icon" src={arrow} alt="right arrow" />
</button>

<style>
  .button-icon {
    width: 20px;
    height: 20px;
  }
</style>
