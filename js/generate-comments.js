import {generateComment} from './generate-comment.js';

const generateComments = (countComments) => {
  return Array.from({length: countComments}, ( _, index) => generateComment(index))
}

export {generateComments};
