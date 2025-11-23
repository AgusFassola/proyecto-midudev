export default function Link({ href, children, ...restOfProps }) {

    const handleCLick = (event) => {
        event.preventDefault();
        window.history.pushState({},'', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
    }

    return (
    <a href={href} {...restOfProps} onClick={handleCLick} >
      {children}
    </a>
  );
}