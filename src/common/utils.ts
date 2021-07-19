export function isEqual(lhs, rhs) {
  return lhs === rhs;
}

export function render(query, block) {
  const root = document.querySelector(query) ?? document.body;
  root.insertAdjacentElement('beforeend', block.getContent());
  return root;
}
