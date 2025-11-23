export const preventDefault = (e: Event) => e.preventDefault();
export const preventKeyScroll = (e: KeyboardEvent) => {
    const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' '];
    if (keys.includes(e.key)) e.preventDefault();
};

export function disableScroll() {
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventKeyScroll);
}

export function enableScroll() {
    window.removeEventListener('wheel', preventDefault);
    window.removeEventListener('touchmove', preventDefault);
    window.removeEventListener('keydown', preventKeyScroll);
}
