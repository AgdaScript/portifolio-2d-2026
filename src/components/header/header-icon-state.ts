let visible = false;
const listeners = new Set<() => void>();

export function isHeaderIconVisible() {
  return visible;
}

export function showHeaderIcon() {
  visible = true;
  listeners.forEach((listener) => listener());
}

export function subscribeHeaderIcon(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
