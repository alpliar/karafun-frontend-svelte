<script>
  import arrow from "./assets/arrow_right.svg";
</script>

<button>
  <slot />
  <img class="button-icon" src={arrow} alt="right arrow" />
</button>

<style>
  .button-icon {
    width: 20px;
    height: 20px;
  }
</style>
