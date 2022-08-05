<script>
  export let progress = 0;
</script>

<div class="container">
  <div class="progress-bar">
    <div class="progress-value" style={`width: ${progress}%`} />
  </div>
  <span><strong>{progress}%</strong> completed</span>
</div>

<style>
  .container {
    display: flex;
    font-size: var(--small-font-size);
    color: var(--main-highlight-color);
    gap: 24px;
    white-space: nowrap;
  }
  .progress-bar,
  .progress-value {
    height: 20px;
    border-radius: 100px;
  }

  .progress-bar {
    background-color: #fde6e3;
    width: 984px;
  }

  .progress-value {
    background-color: var(--main-highlight-color);
    will-change: width;
    transition: width 1s ease-in-out;
  }
</style>
