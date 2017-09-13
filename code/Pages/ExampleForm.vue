<template>
  <div class="mt-4">
        <h1 class="mb-4">Forms</h1>
        <validation-summary :errors="errors"></validation-summary>
        <data-form>
            <form-group :hasErrorMessage="true">
                <validation-wrapper :isRequired="true">
                        <input-label slot="label">Forename</input-label>
                        <div slot="error">Forename is required....</div>
                        <help-text slot="help">Enter your first name, e.g. Sean</help-text>
                        <text-box slot="input"></text-box>
                </validation-wrapper>
            </form-group>
            <form-group :hasErrorMessage="false">
                <validation-wrapper :isRequired="false">
                        <input-label slot="label">Surname</input-label>
                        <text-box slot="input"></text-box>
                </validation-wrapper>
            </form-group>
            <form-group :hasErrorMessage="false">
                <submit-button></submit-button>
                <cancel-button></cancel-button>
            </form-group>
        </data-form>
</div>
</template>

<script>
export default {
  name:'example-form',
  data () {
    return {
      errors:[{message:'This is an error!'}]
    }
 }
}
</script>

<style>

</style>
