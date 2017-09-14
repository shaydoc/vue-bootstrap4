<template>
  <div class="mt-4">
      <h1 class="mb-4">Form</h1>
      <p>
        How to use forms with validation
      </p>
      <card v-if="submitted">
         <card-title>
           Form Received
         </card-title>
         <card-block>
             <p>
                 Thanks for the information, we will be in touch
             </p>
         </card-block>
         <card-block>
           <cancel-button @cancel="reset">Start Again!</cancel-button>
         </card-block>
      </card>
      <card v-else>
          <card-title>
              Form Submission
          </card-title>
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
             <form-group :hasErrorMessage="validation.hasError('message')">
                <validation-wrapper :isRequired="true">
                        <input-label for="message" slot="label">Message</input-label>
                        <div slot="error">{{ validation.firstError('message') }}</div>
                        <help-text slot="help">help text for message</help-text>
                        <text-area id="message" slot="input" v-model.lazy="message"></text-area>
                </validation-wrapper>
            </form-group>
            <form-group>
                <validation-wrapper :isRequired="false">
                     <input-label for="browser" slot="label">Browser</input-label>
                     <input-list  id="browser" slot="input" v-model.lazy="browser" inputId="browserId" :list="this.browserList" listType="browsers"  ></input-list>
                </validation-wrapper>
            </form-group>
            <form-group>
                 <validation-wrapper>
                     <input-label for="choice" slot="label">Radio List</input-label>
                     <radio-button-list id="choice" slot="input" ></radio-button-list>
                </validation-wrapper>
            </form-group>
            <form-group>
                <radio-button-list :options="radioOptions" name="yesno" v-model="selectedOption"></radio-button-list>
                <h1>{{ selectedOption }}</h1>
            </form-group>
            <form-group>
                <check-box-list :options="radioOptions" name="yesnomaybe" v-model="selectedOptions"></check-box-list>
                <h1>{{ selectedOptions }}</h1>
            </form-group>
            <form-group>
                <drop-down-list :options="radioOptions" v-model="ddlOption"></drop-down-list>
                <h1>{{ ddlOption }}</h1>
            </form-group>
            <form-group :hasErrorMessage="false">
                <submit-button :spin="spin" @submit="submit"></submit-button>
                <cancel-button @cancel="reset">Reset</cancel-button>
            </form-group>
        </data-form>

          </card-block>
      </card>
      
      
</div>
</template>

<script>
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'
let Validator = SimpleVueValidation.Validator
Vue.use(SimpleVueValidation, {mode: 'conservative'})

export default {
  name:'example-form',
  data(){
         return {
             spin:false,
             submitted:false,
             forename:'',
             surname:'',
             age:'',
             subject:'',
             message:'',
             date:'',
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
        message: function (value) {
                return Validator.value(value)
                .required('Message is required')
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Message has' + ' invalid characters');
            },
        browser: function (value) {
                return Validator.value(value)
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Browser name has' + ' invalid characters');
            }
         
     },
     methods:{
         reset(){
           this.submitted = false
           this.forename = ''
           this.surname =''
           this.subject =''
           this.message =''
           this.date =''
           this.validation.reset()
         },
         submit(){
           var self = this;

           this.$validate().then((success)=>
           {
              console.log(`The content validation returned: ${success}`)
              if (success){
                self.spin = true
                setTimeout(()=>
                {
                    self.spin = false
                    self.submitted = true
                },
                500)
              }
           }) 
           
        }
     }
}
</script>

<style>

</style>
