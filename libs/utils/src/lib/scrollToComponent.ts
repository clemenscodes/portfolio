export const scrollToComponent: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) {
        throw Error('href attribute does not exist');
    }
    const id = href.replace('/#', '');
    const component = document.getElementById(id);
    if (!component) {
        throw Error(`Element with id ${id} does not exist`);
    }
    component.scrollIntoView({ behavior: 'smooth' });
};
