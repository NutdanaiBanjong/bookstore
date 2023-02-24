import {NavLink } from 'react-router-dom'

function Navbar(){
  return  (
    <nav class="bg-blue-500 px-2 sm:px-4 text-white">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
      <span class="self-center text-2xl font-semibold ">DumDin BookStore</span>
      <div class="w-full md:block md:w-auto">
        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-20 md:mt-0 md:border-0">
          <li>
            <NavLink to="/" className="focus:underline">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="focus:underline">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="focus:underline">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/author" className="focus:underline">Author</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default Navbar;