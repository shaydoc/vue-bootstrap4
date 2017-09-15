<template>
<div>
      <div class="stepwizard">
            <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step" v-for="(item,index) in steps" v-bind:key="`step-${index}`">
                    <div class="blue" v-bind:class="{ round: index === currentStepIndex, 'round-disabled': index !== currentStepIndex}">
                        <span>{{ index+1 }}</span>
                    </div>
                    <p>{{item.title}}</p>
                </div>
            </div>  
        </div>
        <div style="min-height:300px">
            <transition name="fade" mode="out-in"  >
                <slot></slot>
            </transition>
            </div>
            <button type="button" v-if="currentStepIndex >0" class="btn btn-default mr-4" @click="previous" >Previous</button>
           
           <button type="button" v-if="currentStepIndex === steps.length-1" class="btn btn-success ml-4" @click="complete" >Confirm</button>
            
            <button type="button" v-else class="btn btn-primary" @click="next" >Next</button>
        </div>    
</template>

<script>
export default {
    name:'wizard',
    props:['steps','currentStepIndex'],
    methods:{
        previous(){
          window.scrollTo(0, 0)
          this.$emit('previous',this.currentStepIndex-1)
        },
        next(){
         window.scrollTo(0, 0)
         this.$emit('next',this.currentStepIndex+1)
        },
        complete(){
         window.scrollTo(0, 0)
         this.$emit('complete',this.currentStepIndex+1)
        }
    }
}
</script>

<style>
.stepwizard-step p {
    margin-top: 10px;
}

.stepwizard-row {
    display: table-row;
}

.stepwizard {
    display: table;
    width: 100%;
    position: relative;
    table-layout: fixed;
}

.stepwizard-step button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
}

.stepwizard:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
}

.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
}

.round {
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    background-color: #222;
    color: #FFF;
    text-align: center;
    font-size: 12px;
}

.round-disabled {
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    background-color: #E6E6E6;
    text-align: center;
    font-size: 12px;
}

.round.blue {
    background-color: #0A7AD0;
}

</style>
