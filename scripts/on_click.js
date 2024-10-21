export function onClick(fun, elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.addEventListener("click", fun);
}
