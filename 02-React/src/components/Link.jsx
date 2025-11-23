import { useRouter } from "../hooks/useRouter";

export default function Link({ href, children, ...restOfProps }) {

  const { navigateTo } = useRouter();

    const handleCLick = (event) => {
        event.preventDefault();
        navigateTo(href);
      }

    return (
    <a href={href} {...restOfProps} onClick={handleCLick} >
      {children}
    </a>
  );
}