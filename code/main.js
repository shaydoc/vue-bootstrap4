import Vue from 'vue'
import router from './Routing/router.js'
import App from './AppShell/App'
import AppHeader from './Components/AppHeader.vue'

//Grid
import Grid from './Components/Grid.vue'
import Row from './Components/Row.vue'
import Column from './Components/Column.vue'
import DesktopColumn from './Components/DesktopColumn.vue'
import Jumbotron from './Components/Jumbotron.vue'
import PageFooter from './Components/PageFooter.vue'
import SideNav from './Components/SideNav.vue'
import MainWrapper from './Components/MainWrapper.vue'
//End Grid

//Headers
import PageTitle from './Components/PageTitle.vue'
import SectionTitle from  './Components/SectionTitle.vue'
//Headers

//Card
import CardList from './Components/CardList.vue'
import Card from './Components/Card.vue'
import CardBlock from './Components/CardBlock.vue'
import CardTitle from './Components/CardTitle.vue'
//End Card 

//Buttons
import AddButton from './Components/AddButton.vue'
import CancelButton from './Components/CancelButton.vue'
import UpdateButton from './Components/UpdateButton.vue'
import DeleteButton from './Components/DeleteButton.vue'
import SubmitButton from './Components/SubmitButton.vue'
import BlockLinkButton from './Components/BlockLinkButton.vue'
//End Buttons

//Forms
import DataForm from './Components/DataForm.vue'
import FormGroup from './Components/FormGroup.vue'
import ValidationWrapper from './Components/ValidationWrapper.vue'
import ValidationSummary from './Components/ValidationSummary.vue'
import InputLabel from './Components/InputLabel.vue'
import RadioButtonList from './Components/RadioButtonList.vue'
import CheckBoxList from './Components/CheckBoxList.vue'
import DropDownList from './Components/DropDownList.vue'
import TextBox from './Components/TextBox.vue'
import InputList from './Components/InputList.vue'
import TextArea from './Components/TextArea.vue'
import DateBox from './Components/DateBox.vue'
import HelpText from './Components/HelpText.vue'
//End Forms

//Wizard
import Wizard from './Components/Wizard.vue'
//Wizard

//Pagination
import ClientSidePagedTable from './Components/ClientSidePagedTable.vue'
import PaginationFooter from './Components/PaginationFooter.vue'
//End Pagination



Vue.config.productionTip = false

 
Vue.component('app-header',AppHeader)
Vue.component('grid',Grid)
Vue.component('row',Row)
Vue.component('column',Column) 
Vue.component('desktop-column',DesktopColumn) 
Vue.component('jumbotron',Jumbotron)
Vue.component('page-footer',PageFooter)
Vue.component('side-nav', SideNav)
Vue.component('main-wrapper', MainWrapper)

Vue.component('page-title', PageTitle)
Vue.component('section-title', SectionTitle)

Vue.component('card-list',CardList)
Vue.component('card',Card) 
Vue.component('card-block',CardBlock) 
Vue.component('card-title',CardTitle)

Vue.component('add-button', AddButton)
Vue.component('cancel-button',CancelButton)
Vue.component('update-button',UpdateButton)
Vue.component('delete-button',DeleteButton)
Vue.component('submit-button',SubmitButton)
Vue.component('block-link-button', BlockLinkButton)

Vue.component('data-form', DataForm)
Vue.component('form-group', FormGroup)
Vue.component('validation-wrapper',ValidationWrapper)
Vue.component('validation-summary',ValidationSummary)
Vue.component('input-label',InputLabel)
Vue.component('text-box',TextBox)
Vue.component('input-list', InputList)
Vue.component('text-area',TextArea)
Vue.component('date-box', DateBox)
Vue.component('radio-button-list',RadioButtonList)
Vue.component('check-box-list', CheckBoxList)
Vue.component('drop-down-list', DropDownList)
Vue.component('help-text',HelpText)

Vue.component('wizard', Wizard)

Vue.component('client-side-paged-table',ClientSidePagedTable)
Vue.component('pagination-footer',PaginationFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
    dto:{
      step1:{
        forename:'Shay',
        surname:'Doherty',
        age:'33',
        date:'2017-09-01',
        subject:'test'
      },
       step2:{
      forename:'Vanessa',
        surname:'Doherty',
        age:'33',
        date:'2017-09-01',
        subject:'test'
      },
      step3:{
        forename:'Joanna',
        surname:'Doherty',
        age:'33',
        date:'2017-09-01',
        subject:'test'
      },
      step4:{
        forename:'',
        surname:'',
        age:'',
        date:'',
        subject:''
      }
    }
  },
  render: h => h(App)
})
