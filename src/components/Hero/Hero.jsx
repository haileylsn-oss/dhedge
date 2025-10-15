import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Hero = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold text-gray-800"><img src={logo} alt="" /></div>
           <Link to={'/wallet'}><button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            Connect Wallet
          </button>
           </Link>
        </header>

        {/* Main Content */}
        <main className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Monetize your <span className="text-blue-600">edge</span> on the market
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Leverage your market insights and turn them into profitable opportunities with our advanced trading tools.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          
          <Link to={'/wallet'}><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 w-full sm:w-auto">
              Explore top vaults
            </button></Link>  
           <Link to={'/wallet'}> <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 w-full sm:w-auto">
              Read the docs
            </button></Link>
          </div>

          {/* Stats or Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">$2.1B+</div>
              <div className="text-gray-600">Total Volume</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Strategies</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;