<script>
  import { Link } from "svelte-routing";
  import clockIcon from "./assets/alarm_clock.svg";
  import helpIcon from "./assets/help.svg";
  import illustration from "./assets/illustration.svg";
  import Button from "./Button.svelte";
  import IconWithText from "./IconWithText.svelte";
  import Layout from "./Layout.svelte";
  import Text from "./Text.svelte";
  import Title from "./Title.svelte";
</script>

<Layout>
  <div slot="header" class="header-infos">
    <IconWithText>
      <img src={helpIcon} alt="help icon" slot="icon" />
      Need help
    </IconWithText>
    <IconWithText>
      <img src={clockIcon} alt="clock icon" slot="icon" />
      <span class="highlight"><strong>±3</strong> minutes</span>
    </IconWithText>
  </div>

  <img
    src={illustration}
    alt="illustration for KaraFun Business"
    class="illustration"
  />

  <Title prefix="Get started">with KaraFun Business</Title>

  <hr class="divider" />

  <Text>
    Welcome to KaraFun Business!
    <br />
    Follow the steps below to setup your business account.
  </Text>

  <Link to="/form">
    <Button>Let's go</Button>
  </Link>

  <p class="info">Usually complete within 3 minutes</p>
</Layout>

<style>
  .info {
    color: #a59bdb;
    font-size: var(--small-font-size);
  }

  .divider {
    width: 200px;
    height: 4px;
    margin-left: 0;
    border-color: var(--main-highlight-color);
    background-color: var(--main-highlight-color);
    border-style: none;
    margin-bottom: 24px;
  }

  .illustration {
    position: absolute;
    right: 21.26px;
  }

  .header-infos {
    display: flex;
    justify-content: space-between;
    font-size: var(--small-font-size);
    color: var(--main-color);
  }

  .highlight {
    color: var(--main-highlight-color);
  }
</style>
