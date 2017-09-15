<template>
  <main-wrapper>
    <transition name="fade" mode="out-in">
      <div v-if="complete">
      <section-title >
        Thanks for your submission, we will be in touch
      </section-title>
      <section-title>Validated Form Data Sent to the server</section-title>
         {{ step1 }}<br/>
         {{ step2 }}<br/>
         {{ step3 }}<br/>
         {{ step4 }}<br/>
      </div>
      <wizard v-else
              :steps="steps" 
              :currentStepIndex="currentStepIndex" 
              @next="handleNext" 
              @previous="handlePrevious" 
              @complete="handleComplete" >
     
           <example-wizard-step id="step1"       v-if="currentStepIndex === 0" ref="step1"  v-model="dto.step1" ></example-wizard-step>
           <example-wizard-step2 id="step2" v-else-if="currentStepIndex === 1" ref="step2"  v-model="dto.step2" ></example-wizard-step2>
           <example-wizard-step3 id="step3" v-else-if="currentStepIndex === 2" ref="step3"  v-model="dto.step3" ></example-wizard-step3>
           <example-wizard-step4 id="step4" v-else-if="currentStepIndex === 3" ref="step4"  v-model="dto.step4" >

                {{ dto.step1 }}<br/>
                {{ dto.step2 }}<br/>
                {{ dto.step3 }}<br/>
                {{ dto.step4 }}<br/>
           </example-wizard-step4>
          
      </wizard>
      </transition>
           
  </main-wrapper>
</template>

<script>
import ExampleWizardStep from './ExampleWizardStep.vue'
import ExampleWizardStep2 from './ExampleWizardStep2.vue'
import ExampleWizardStep3 from './ExampleWizardStep3.vue'
import ExampleWizardStep4 from './ExampleWizardStep4.vue'

export default {
   components:{ExampleWizardStep,ExampleWizardStep2,ExampleWizardStep3,ExampleWizardStep4},
   data(){
     return {
         steps:[{title:'Begin'}, {title:'Middle'},{title:'End'},{title:'Confirmed'}],
         currentStepIndex:0,
         complete:false,
         dto:this.$root.dto
     }
   },
   methods:{
      handleNext(nextStep){
       var self = this
       //check if component is valid before moving on to next step
       this.$refs[`step${nextStep}`].$validate().then((success)=>{
           if(success){
             self.currentStepIndex = nextStep
           }
       })

        
      },
      handlePrevious(previousStep){
         this.currentStepIndex = previousStep
      },
      handleComplete(){
        //check if object is valid before moving on to next step
         this.complete = true
      }
   }
}
</script>

<style>

</style>
