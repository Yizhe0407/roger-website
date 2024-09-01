import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faChevronUp  } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// 添加 Instagram 和 LinkedIn 圖標到圖標庫中
library.add(faInstagram, faLinkedin, faGithub, faBars, faChevronUp )

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
