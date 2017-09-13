//// 1. Define route components.
//// These can be imported from other files
import Home from './../Pages/Home.vue'
import Index from './../Pages/Index.vue'
import ExampleForm from './../Pages/ExampleForm.vue'
import ExampleCards from './../Pages/ExampleCards.vue'
import ExampleWizard from './../Pages/ExampleWizard.vue'
import ExamplePageList from './../Pages/ExamplePageList.vue'

const routes =[
    { name: '*', path: '*', component: Home },
    { name: 'home', path: '/home', component: Home },
    { name: 'index', path: '/index', component: Index,
    children: [
      { path: '', component: ExampleForm },
      { path: 'form', component: ExampleForm },
      { path: 'cards', component: ExampleCards },
      { path: 'wizard', component: ExampleWizard },
      { path: 'pagelist', component: ExamplePageList }
    ]
    }
  ]


export default routes

