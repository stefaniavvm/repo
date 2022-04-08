import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link>Marvel comics</Link>
      <Link>Dc comics</Link>
      <Link>Compra icono</Link>
      <Link>Novedades</Link>
      <Link>Proximas novedades</Link>
      <Link>Loading</Link>
    </nav>
  );
};