import Vue from 'vue'
import App from './AppShell/App'
import AppHeader from './Components/AppHeader.vue'
import Grid from './Components/Grid.vue'
import Row from './Components/Row.vue'
import Column from './Components/Column.vue'
import Card from './Components/Card.vue'
import CardBlock from './Components/CardBlock.vue'
import CardTitle from './Components/CardTitle.vue'
import AddButton from './Components/AddButton.vue'
import CancelButton from './Components/CancelButton.vue'
import UpdateButton from './Components/UpdateButton.vue'
import DeleteButton from './Components/DeleteButton.vue'
import SubmitButton from './Components/SubmitButton.vue'
import DataForm from './Components/DataForm.vue'
import FormGroup from './Components/FormGroup.vue'
import ValidationWrapper from './Components/ValidationWrapper.vue'
import ValidationSummary from './Components/ValidationSummary.vue'
import InputLabel from './Components/InputLabel.vue'
import TextBox from './Components/TextBox.vue'
import HelpText from './Components/HelpText.vue'
import PaginationFooter from './Components/PaginationFooter.vue'
import Jumbotron from './Components/Jumbotron.vue'
import PageFooter from './Components/PageFooter.vue'


Vue.config.productionTip = false

 
Vue.component('app-header',AppHeader)
Vue.component('grid',Grid)
Vue.component('row',Row)
Vue.component('column',Column) 
Vue.component('card',Card) 
Vue.component('card-block',CardBlock) 
Vue.component('card-title',CardTitle)
Vue.component('add-button', AddButton)
Vue.component('cancel-button',CancelButton)
Vue.component('update-button',UpdateButton)
Vue.component('delete-button',DeleteButton)
Vue.component('submit-button',SubmitButton)
Vue.component('data-form', DataForm)
Vue.component('form-group', FormGroup)
Vue.component('validation-wrapper',ValidationWrapper)
Vue.component('validation-summary',ValidationSummary)
Vue.component('input-label',InputLabel)
Vue.component('text-box',TextBox)
Vue.component('help-text',HelpText)
Vue.component('pagination-footer',PaginationFooter)
Vue.component('jumbotron',Jumbotron)
Vue.component('page-footer',PageFooter)
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
