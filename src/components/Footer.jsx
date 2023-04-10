import React from "react";
import img from '../assets/Icons/Group 9969.png'

const Footer = () => {
  return (
    <footer className="mt-32 py-32 bg-stone-900">
      <section className="container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 px-2 lg:px-0">
        <div>
            <p className="text-3xl font-semibold text-white">Job Hunter</p>
            <p className="my-5 text-gray-400">
            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
            </p>
            <img src={img} alt="" />
        </div>
        <div className="space-y-4">
            <p className="text-white text-xl">Company</p>
            <p className="text-gray-400">About Us</p>
            <p className="text-gray-400">Work</p>
            <p className="text-gray-400">Latest News</p>
            <p className="text-gray-400">Careers</p>
        </div>
        <div className="space-y-4">
            <p className="text-white text-xl">Product</p>
            <p className="text-gray-400">Prototype</p>
            <p className="text-gray-400">Plans & Pricing</p>
            <p className="text-gray-400">Customers</p>
            <p className="text-gray-400">Integrations</p>
        </div>
        <div className="space-y-4">
            <p className="text-white text-xl">Support</p>
            <p className="text-gray-400">Help Desk</p>
            <p className="text-gray-400">Sales</p>
            <p className="text-gray-400">Become a Partner</p>
            <p className="text-gray-400">Developers</p>
        </div>
        <div className="space-y-4">
            <p className="text-white text-xl">Contact</p>
            <p className="text-gray-400">524 Broadway, NYC</p>
            <p className="text-gray-400">+1777-978-5570</p>
        </div>
      </section>
      <hr className="container mx-auto my-12" />
      <div className="container mx-auto flex justify-between text-white">
        <p><small>&copy;2023 JobHunter. All Rights Reserved</small></p>
        <p><small>Powered by JobHunter</small></p>
      </div>
    </footer>
  );
};

export default Footer;
