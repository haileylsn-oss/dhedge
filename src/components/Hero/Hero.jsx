import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.jpg'
import six from '../../assets/6.jpg'
import seven from '../../assets/7.jpg'
// import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Hero = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Explore", path: "/wallet" },
    { name: "My Deposits", path: "/wallet" },
    { name: "Manage", path: "/wallet" },
    { name: "DHT Holders", path: "/wallet" },
    { name: "Stats", path: "/wallet" },
  ];


   const cards = [
    {
      title: "Create revenue generating tokens",
      desc: "dHEDGE vault tokens let you set custom fees to maximize revenue for your given strategy",
      icon: one
    },
    {
      title: "Leverage 3rd party DeFi tools",
      desc: "Unlock money markets, derivatives, and yield sources to execute your best trading strategy",
      icon: two
    },
    {
      title: "Profit with over 100 assets",
      desc: "Buy assets covering diverse categories and multiple chains",
      icon: three
    },
    {
      title: "Automate for unmatched trading efficiency",
      desc: "With the dHEDGE SDK, unlock trading strategies that transcend human limits",
      icon: four
    }
  ];


const projects = [
    {
      name: "Toros",
      description: "Exponential gains with leveraged tokens",
      url: "/wallet",
      lightLogo: five,
      darkLogo: five,
      alt: "Toros Logo"
    },
    {
      name: "Flat Money",
      description: "Pure yield with no banking risk",
      url: "/wallet",
      lightLogo: six,
      darkLogo: six,
      alt: "Flat Money Logo"
    },
    {
      name: "mStable",
      description: "Stack wealth efficiently",
      url: "/wallet",
      lightLogo: seven,
      darkLogo: seven,
      alt: "mStable Logo"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-16 py-4 px-6 relative">
      {/* Hamburger for Mobile */}
      <button
        className="lg:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 order-2 lg:order-1">
        <img src={logo} alt="Logo" className="w-28" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-8 ml-6">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </nav>

     
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-lg">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* <Link
            to="/wallet"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Connect Wallet
          </Link> */}
        </div>
      )}
    </header>

        {/* Main Content */}
        <main className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Monetize your <span className="text-blue-600">edge</span> on the market
          </h1>
          
      

          {/* Buttons */}
          <div className="flex flex-row sm:flex-row gap-4 justify-center items-center mb-16">
          
          <Link to={'/wallet'}><button className="bg-blue-500  hover:bg-blue-700 text-white px-8 py-1 rounded-full font-medium text-sm transition-colors duration-200 w-full sm:w-auto">
              Explore top vaults
            </button></Link>  
           <Link to={'/wallet'}> <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900  px-8 py-1 rounded-full font-medium text-sm transition-colors duration-200 w-full sm:w-auto">
              Read the docs
            </button></Link>
          </div>

 <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300"
          >
            <div className="p-6 flex justify-between items-start h-full">
              {/* Left Text Section */}
              <div className="flex-1 pr-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {card.desc}
                </p>
                <div className="flex items-center text-blue-600 font-medium cursor-pointer group">
                  <span className="mr-2">See more</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              

              {/* Right Icon Section */}
              <div className=" text-blue-600 p-4 rounded-xl flex-shrink-0 transition-transform duration-300 hover:scale-105">
               <img src={card.icon} alt="" className='w-[100px]' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


     <section className="mb-12">
      <h2 className="text-xl font-medium mb-5">Projects by dHEDGE</h2>
      
      <div className="grid grid-cols-1 auto-rows-fr lg:grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            
            rel="noreferrer"
            className="block"
          >
            <div className="relative group h-full transition-all duration-500 flex gap-6 p-6 border rounded-2xl text-black dark:text-white select-none items-center border-black/30 hover:border-black dark:border-white/20 dark:hover:border-white">
              {/* Dark mode logo */}
              <img
                alt={`${project.alt} White`}
                loading="lazy"
                width="48"
                height="48"
                className="h-12 w-12 hidden dark:block"
                src={project.darkLogo}
              />
              
              {/* Light mode logo */}
              <img
                alt={project.alt}
                loading="lazy"
                width="48"
                height="48"
                className="h-12 w-12 block dark:hidden"
                src={project.lightLogo}
              />
              
              <div className="flex-1">
                <div className="flex gap-2 items-center">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="transition-all inline-block h-3 w-3 group-hover:ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <p className="text-base">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
        </main>
      </div>
    </div>
  );
};

export default Hero;