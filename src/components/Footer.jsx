import { Link } from "react-router-dom";
import { ShoppingBag, Instagram, Linkedin, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-black text-white"
          >
            <ShoppingBag />
            Omni<span className="text-violet-400">Cart</span>
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Everyday essentials, thoughtfully selected.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Explore</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop all</Link>
            <Link to="/cart">Your cart</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Customer care</h3>
          <p className="text-sm leading-7 text-slate-400">
            Delivery information
            <br />
            Returns and exchanges
            <br />
            Frequently asked questions
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Stay connected</h3>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/anzilasadiq27/" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/anzila-sadiq-8b9354359/" aria-label="Linkedin">
              <Linkedin />
            </a>
            <a href="mailto:anzilasadiq01@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} OmniCart. Demo project.
      </div>
    </footer>
  );
}
