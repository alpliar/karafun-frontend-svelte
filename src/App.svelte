<script>
  import { Route, Router } from "svelte-routing";
  import FailurePage from "./FailurePage.svelte";
  import FormPage from "./FormPage.svelte";
  import HomePage from "./HomePage.svelte";

  export let url = "";
</script>

<Router {url}>
  <!-- <Route path="blog/:id" component="{BlogPost}" /> -->
  <!-- <Route path="blog" component="{Blog}" /> -->
  <!-- <Route path="about" component="{About}" /> -->
  <Route path="/"><HomePage /></Route>
  <Route path="/form"><FormPage /></Route>
  <Route path="/oops"><FailurePage /></Route>
</Router>
