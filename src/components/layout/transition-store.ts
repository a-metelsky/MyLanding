const TRANSITION_COUNT = 12;

type Listener = () => void;

let currentIndex = 0;
let lastIndex = 0;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribeTransition(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getTransitionIndex() {
  return currentIndex;
}

export function chooseNextTransition() {
  const options = Array.from({ length: TRANSITION_COUNT }, (_, index) => index).filter(
    (index) => index !== lastIndex
  );

  const randomValue = window.crypto.getRandomValues(new Uint32Array(1))[0];
  const nextIndex = options[randomValue % options.length];
  lastIndex = nextIndex;
  currentIndex = nextIndex;
  emit();
}
