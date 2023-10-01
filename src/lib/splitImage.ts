export const splitImage = (
  totalCells: number,
  image: string,
  key: string,
  parent: Element,
) => {
  let _cells = totalCells;

  const createElement = ({
    _key,
    _parent,
    _el,
    _style,
  }: {
    _key?: string;
    _parent?: HTMLElement;
    _el?: HTMLElement;
    _style?: string;
  }) => {
    const argKey = _key || key;
    const argParent = _parent || parent;
    const el = _el || document.createElement('span');
    const style = _style || '';
    el.classList.add(argKey);
    el.setAttribute('style', style);

    return argParent && argParent.appendChild(el);
  };

  const elements = [];

  const container = createElement({
    _key: 'cell-grid',
    _style: `position: absolute;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100vh;
    display: grid;
    grid-template: repeat( ${totalCells}, 1fr ) / repeat( 1, 1fr );
    z-index: -1;`,
  });

  while (_cells--) {
    const cell = createElement({
      _key: 'cell',
      _parent: container,
      _style: `position: relative; overflow: hidden; display: block; top: 2px;`,
    });
    createElement({
      _parent: cell,
      _key: 'cell-inner',
    });
    elements.push(cell);
  }

  elements.forEach((el, index) => {
    console.log('totalCells', totalCells);

    const child = el.querySelector('.cell-inner') as HTMLElement;
    child.style.backgroundImage = `url(${image})`;
    child.style.position = 'absolute';
    child.style.width = '100%';
    child.style.height = `calc(100% * ${totalCells} + 6px)`;
    child.style.left = `0`;
    child.style.top = `${index}px`;
    child.style.display = 'block';
    child.style.backgroundPosition = `50% ${index * (100 / totalCells)}%`;
    child.style.backgroundSize = 'calc(100% - 200px)';
    child.style.backgroundRepeat = 'no-repeat';
    child.classList.add('cell');
  });

  parent && parent.appendChild(container);
  return elements;
};
