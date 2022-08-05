<script>
  import { navigate } from "svelte-routing";
  import formSteps from "./data/formSteps";
  import FormChoices from "./FormChoices.svelte";
  import FormInputs from "./FormInputs.svelte";
  import Layout from "./Layout.svelte";
  import Progress from "./Progress.svelte";
  import Title from "./Title.svelte";

  let currentStepIndex = 1;
  let currentStep = formSteps[0];
  let hasSubmittedForm = false;

  const handleSubmitStep = (event) => {
    const { value } = event.detail;

    // console.log("step", currentStep, ", choosen value", value);
    if (
      currentStepIndex === 1 &&
      !currentStep.choices.slice(0, 2).some((choice) => choice.value === value)
    ) {
      navigate("/oops", { replace: true });
    }

    const nextId = currentStepIndex + 1;

    if (formSteps.some((step) => step.id === nextId)) {
      currentStepIndex = nextId;
      currentStep = formSteps.find((step) => step.id === nextId);
    }
  };

  const handleSubmitFinalStep = (data) => {
    hasSubmittedForm = true;

    alert(
      `Thanks ${data.detail.firstName}, we'll be back asap with a detailed estimate`
    );
  };
</script>

<Layout>
  <Progress
    progress={hasSubmittedForm ? 100 : currentStep.progression}
    slot="header"
  />
  <Title prefix={currentStep.titlePrefix}>{@html currentStep.title}</Title>
  {#if currentStep.choices.length > 0}
    <FormChoices
      on:submit={handleSubmitStep}
      choices={currentStep.choices}
      buttonLabel={currentStep.buttonLabel}
    />
  {:else}
    <FormInputs on:submit={handleSubmitFinalStep} />
  {/if}
</Layout>
