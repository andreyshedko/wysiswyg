export const initEditor = (value: HTMLElement, _document: Document) => {
    if (_document) {
        const start = _document.getElementById('start');
        start?.append(value);
    }
}