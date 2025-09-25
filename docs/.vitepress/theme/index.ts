import DefaultTheme from 'vitepress/theme'
import './global.less' // global less
import GlobalElement from './components/GlobalElement.vue'
import VersionDateTag from './components/VersionDateTag.vue'
// import ComposeUI from 'composed-ui'
// import 'composed-ui/css'
import ComposeUI from '../../../dist/index'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp({ app }) {
    app.component('GlobalElement', GlobalElement)
    app.component('VersionDateTag', VersionDateTag)
    app.use(ComposeUI)
  }
}
