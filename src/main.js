
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$filters = {
  test(val) {
     if(!val || typeof(val) != 'string'){
        return '';
    }else{
        val = val.slice(0,4);
        return val;
    }
  }
}

app.mount('#app')
