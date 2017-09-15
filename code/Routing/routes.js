//// 1. Define route components.
//// These can be imported from other files
import Home from './../Pages/Home.vue'

//Code Split All other Routes
const Index           = () => import('./../Pages/Index.vue')
const ExampleButtons  = () => import('./../Pages/ExampleButtons.vue')
const ExampleForm     = () => import('./../Pages/ExampleForm.vue')
const ExampleCards    = () => import('./../Pages/ExampleCards.vue')
const ExampleWizard   = () => import('./../Pages/ExampleWizard.vue')
const ExamplePageList = () => import('./../Pages/ExamplePageList.vue')

const routes =[
    { name: '*', path: '*', component: Home },
    { name: 'home', path: '/home', component: Home },
    { name: 'index', path: '/index', component: Index,
    children: [
      { path: 'buttons', component:ExampleButtons },
      { path: 'form', component: ExampleForm },
      { path: 'cards', component: ExampleCards },
      { path: 'wizard', component: ExampleWizard },
      { path: 'pagelist', component: ExamplePageList }
    ]
    }
  ]


export default routes

