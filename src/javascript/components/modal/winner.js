import { showModal } from './modal';
import { createElement } from '../../helpers/domHelper';

export function showWinnerModal(fighter) {
  const { name, source } = fighter
  const title = `${fighter.name} is winner`;

  const bodyElement = createElement({
    tagName: 'div',
    className: 'modal-body'
  })

  const imageElement = createElement({
    tagName: 'img',
    className: 'fighter___winner',
    attributes: { 
      src: source,
      title: name,
      alt: name, },
  })
  bodyElement.append(imageElement)
  showModal({ title, bodyElement });
}
