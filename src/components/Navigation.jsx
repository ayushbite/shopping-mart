import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
    const stylecart = {
        background:'#F59E0D',
        display:'flex',
        aligntems: 'center',
        padding:'6px 12px',
        borderRadius:'50px',


    }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        
          <Link to="/">
            <img
              style={{
                height: 45,
              }}
              src="/images/logo.png"
              alt=""
            />
          </Link>
          <ul className="flex items-center">
            <li className="ml-5"><Link to='/products'>Products</Link></li>
            <li className="ml-5"><Link to="/" exact={"/"}>Home</Link></li>
            <li className="ml-5">
                <Link to="/cart">
                    <div style={stylecart}>
                        <span className="text-tail-500">69</span>
                        <img className="ml-2" src="./images/cart.png" alt="cart" />
                    </div>
                </Link>
            </li>
          </ul>
       
      </nav>
    </>
  );
};

export default Navigation;
