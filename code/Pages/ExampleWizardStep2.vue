<template>
  <main-wrapper>
      <card>
          <card-block>
                <validation-summary :errors="this.validation.errors"></validation-summary>
        <data-form>
            <form-group :hasErrorMessage="validation.hasError('forename')">
                <validation-wrapper :isRequired="true">
                        <input-label for="forename" slot="label">Forename</input-label>
                        <div slot="error">{{ validation.firstError('forename') }}</div>
                        <text-box id="forename" slot="input" v-model.lazy="forename"></text-box>
                </validation-wrapper>
            </form-group>
             <form-group :hasErrorMessage="validation.hasError('surname')">
                <validation-wrapper :isRequired="true">
                        <input-label for="surname" slot="label">Surname</input-label>
                        <div slot="error">{{ validation.firstError('surname') }}</div>
                        <text-box id="surname" slot="input" v-model.lazy="surname"></text-box>
                </validation-wrapper>
            </form-group>
              <form-group>
                 <input-label for="choice">Check List</input-label>
                <radio-button-list id="choice" :options="radioOptions" name="yesno" v-model="selectedOption"></radio-button-list>
            </form-group>
            <form-group>
                <input-label for="mulitchoice">Dropdown List</input-label>
                <check-box-list id="mulitchoice" :options="radioOptions" name="yesnomaybe" v-model="selectedOptions"></check-box-list>
            </form-group>
            <form-group>
                <input-label for="select">Select</input-label>
                <drop-down-list id="select" :options="radioOptions" v-model="ddlOption"></drop-down-list>
            </form-group>
             <form-group :hasErrorMessage="validation.hasError('age')">
                <validation-wrapper :isRequired="true">
                        <input-label for="age" slot="label">Age</input-label>
                        <div slot="error">{{ validation.firstError('age') }}</div>
                        <text-box id="age" slot="input" v-model.number.lazy="age" type="number"></text-box>
                </validation-wrapper>
            </form-group>
             <form-group :hasErrorMessage="validation.hasError('subject')">
                <validation-wrapper :isRequired="true">
                        <input-label for="subject" slot="label">Subject</input-label>
                        <div slot="error">{{ validation.firstError('subject') }}</div>
                        <help-text slot="help">help text for subject</help-text>
                        <text-box id="subject" slot="input" v-model.lazy="subject"></text-box>
                </validation-wrapper>
            </form-group>
             <form-group :hasErrorMessage="validation.hasError('date')">
                <validation-wrapper :isRequired="true">
                        <input-label for="date" slot="label">Date</input-label>
                        <div slot="error">{{ validation.firstError('date') }}</div>
                        <help-text slot="help">help text for date</help-text>
                        <date-box id="date" slot="input" v-model.lazy="date"></date-box>
                </validation-wrapper>
            </form-group>
           
          
         
          
        </data-form>

          </card-block>
      </card>
      
      
</main-wrapper>
</template>

<script>
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'
let Validator = SimpleVueValidation.Validator
Vue.use(SimpleVueValidation, {mode: 'conservative'})

export default {
  name:'example-wizard-step2',
  props:['value'],
  data(){
         return {
             forename:this.value.forename,
             surname: this.value.surname,
             age:this.value.age,
             date:this.value.date,
             subject:this.value.subject,
             spin:false,
             submitted:false,
             browser:'',
             browserList:['Chrome','Edge','Firefox','Internet Explorer','Opera','Safari'],
             radioOptions:[{text:'Yes', value:'Yes'},{text:'No',value:'No'},{text:'Maybe',value:'Maybe'}],
             selectedOption:'Yes',
             selectedOptions:['Yes','No','Maybe'],
             ddlOption:''
         }
     },
    validators:{
        forename: function (value) {
                return Validator.value(value)
                .required('Forename is required')
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Forename has' + ' invalid characters');
            },
        surname: function (value) {
                return Validator.value(value)
                .required('Surname is required')
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Surname has' + ' invalid characters');
            },
        age:function(value){
             return Validator.value(value)
                .required('Age is required')
                .regex(/[0-9]+$/,'Age has' + ' invalid characters');
        },
        date:function (value) {
                return Validator.value(value)
                .required('Date is required')
                .regex(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, 'YYYY-MM-DD is the valid format');
            },
        subject: function (value) {
                return Validator.value(value)
                .required('Subject is required')
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Subject has' + ' invalid characters');
            },
       
     },
     methods:{
     },
     watch:{
         forename(newValue){
            this.$emit('input',{
                                forename:this.forename,
                                surname: this.surname,
                                age:this.age,
                                date:this.date,
                                subject:this.subject,
                                })
         },
         surname(newValue){
            this.$emit('input',{
                                forename:this.forename,
                                surname: this.surname,
                                age:this.age,
                                date:this.date,
                                subject:this.subject,
                                })
         },
         age(newValue){
            this.$emit('input',{
                                forename:this.forename,
                                surname: this.surname,
                                age:this.age,
                                date:this.date,
                                subject:this.subject,
                                })
         },
         date(newValue){
              this.$emit('input',{
                                forename:this.forename,
                                surname: this.surname,
                                age:this.age,
                                date:this.date,
                                subject:this.subject,
                                })
         },
         subject(newValue){
            this.$emit('input',{
                                forename:this.forename,
                                surname: this.surname,
                                age:this.age,
                                date:this.date,
                                subject:this.subject,
                                })
         }
     }
}
</script>

<style>

</style>
