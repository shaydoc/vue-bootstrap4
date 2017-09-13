<template>
  <div>
        <validation-summary :errors="errors"></validation-summary>
        <data-form>
            <form-group :hasErrorMessage="false">
                <validation-wrapper :isRequired="true">
                        <input-label slot="label">Forename</input-label>
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
