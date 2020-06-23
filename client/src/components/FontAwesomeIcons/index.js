/*
    *Import custom font-awesome library
     import various font awesome icons and add to the library to use globally as props in a FontAwesomeIcon component

*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLayerGroup, faSort, faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'

library.add(faLayerGroup, faSort, faLongArrowAltUp, faLongArrowAltDown)
