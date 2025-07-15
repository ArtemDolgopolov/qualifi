// app/lib/fontawesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faGraduationCap, faBolt, faClock } from '@fortawesome/free-solid-svg-icons'

// Disable automatic CSS injection (Next.js handles this)
config.autoAddCss = false

// Add icons to library
library.add(faGlobe, faGraduationCap, faBolt, faClock)