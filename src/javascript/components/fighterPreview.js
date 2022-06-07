import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });
  // todo: show fighter info (image, name, health, etc.)
  if (fighter) {
    const fighterImg = createFighterImage(fighter);
    const fighterInfo = createFighterInfo(fighter);

    fighterElement.append(fighterImg);
    fighterElement.append(fighterInfo);
  }
  return fighterElement;
}

function createFighterInfo(fighter) {
  const { _id, source, ...infoData } = fighter;
  const fighterInfoList = createElement({
    tagName: 'ul',
    className: 'fighter-preview___info',
  })
  for (const prop in infoData) {
    const fighterInfoItem = createElement({
      tagName: 'li',
      className: 'fighter-preview___info-item',
    })
    fighterInfoItem.innerHTML = `<span>${prop}</span> - ${infoData[prop]}`;
    fighterInfoList.append(fighterInfoItem);
  }

  return fighterInfoList;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
