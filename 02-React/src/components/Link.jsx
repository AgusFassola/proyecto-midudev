import { Link as NavLink } from 'react-router'
export default function Link({ href, children, ...restOfProps }) {


    return (
    <NavLink to={href} {...restOfProps} >
      {children}
    </NavLink>
  );
}