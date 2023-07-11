import {createImage} from './create-image.js'

const similarImagesLength = 25
const similarImages = Array.from({length: similarImagesLength}, ( _, index) => createImage(index + 1))

export {similarImages}
