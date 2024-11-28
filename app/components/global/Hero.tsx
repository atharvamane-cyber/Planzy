import { CardBody, CardContainer, CardItem } from './3d-card';
import { HeroParallax } from './connect-parallax';
import { ContainerScroll } from './container-scroll-animation';
import { InfiniteMovingCards } from './infinite-moving-cards';

import { Button } from '@/components/ui/button';
import { products } from '@/lib/constant';
import { clients } from '@/lib/constant';
import { CheckIcon } from 'lucide-react';

import React from 'react';
import { AuthModal } from './AuthModal';
export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col w-full overflow-x-hidden">
      
      <section className="w-full relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 h-[80rem] w-full items-center px-5 py-24 bg-gradient-to-r from-[#f78fb3] via-[#f8a5c2] to-[#c8d6e5] transition-all duration-1000 ease-in-out"></div>

        <div className="relative">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center text-center ">
                <Button
                  size={'lg'}
                  className="p-8 text-2xl w-full sm:w-fit border-t-2 rounded-full border-gray-200 bg-white hover:bg-gray-100 group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-gray-200 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-900">
                    Start Free Trial
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600 font-sans font-bold">
                  Scheduling Sipmlified with Planzy
                </h1>
              </div>
            }
          />
        </div>
      </section>
  


      <div className="w-full relative bg-black py-12">
        <div className="max-w-7xl mx-auto">
          <InfiniteMovingCards items={clients} direction="left" speed="normal" />
        </div>
      </div>

      <section className="min-h-screen">
        <HeroParallax products={products} />
      </section>

      {/* Pricing Cards Section */}
      <section className="w-full flex flex-col bg-gradient-to-r from-[#f78fb3] via-[#f8a5c2] to-[#c8d6e5] items-center px-6 -mt-80">
        <div className="flex flex-wrap justify-center gap-10 mb-0">
          <CardContainer className="inter-var animate-bounce-slow hover:animate-none">
            <CardBody className="bg-gradient-to-r from-white to-blue-200 relative group/card hover:shadow-2xl hover:shadow-black/[0.1] border-black w-full md:w-[400px] h-[500px] rounded-xl p-8 border">
              <CardItem translateZ="50" className="text-2xl font-bold text-black">
                Hobby
                <h2 className="text-7xl">$0</h2>
              </CardItem>
              <CardItem translateZ="60" className="text-black text-base max-w-sm mt-4">
                Start your scheduling journey with our feature-rich free plan
                <ul className="my-6 flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> 5 Calendar Connections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Basic Event Types
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Email Notifications
                  </li> 
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Easy To Use
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem translateZ={20} as="button" className="px-5 py-3 rounded-xl text-sm font-normal">
                  Try now →
                </CardItem>
                <CardItem translateZ={20} as="button" className="px-5 py-3 rounded-xl bg-black text-white text-sm font-bold">
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var animate-bounce-slow hover:animate-none delay-75">
            <CardBody className="bg-gradient-to-r from-white to-blue-200 relative group/card hover:shadow-2xl hover:shadow-black/[0.1] border-black w-full md:w-[400px] h-[500px] rounded-xl p-8 border">
              <CardItem translateZ="50" className="text-2xl font-bold text-black">
                Pro Plan
                <h2 className="text-7xl">$29</h2>
              </CardItem>
              <CardItem translateZ="60" className="text-black text-base max-w-sm mt-4">
                Perfect for professionals who need advanced scheduling features
                <ul className="my-6 flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Unlimited Calendar Connections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Custom Branding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Team Scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Advanced Integrations
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem translateZ={20} as="button" className="px-5 py-3 rounded-xl text-sm font-normal">
                  Try now →
                </CardItem>
                <CardItem translateZ={20} as="button" className="px-5 py-3 rounded-xl bg-black text-white text-sm font-bold">
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var animate-bounce-slow hover:animate-none delay-150">
            <CardBody className="bg-gradient-to-r from-white to-blue-200 relative group/card hover:shadow-2xl hover:shadow-black/[0.1] border-black w-full md:w-[400px] h-[500px] rounded-xl p-8 border">
              <CardItem translateZ="50" className="text-2xl font-bold text-black">
                Unlimited
                <h2 className="text-7xl">$99</h2>
              </CardItem>
              <CardItem translateZ="60" className="text-black text-base max-w-sm mt-4">
                Enterprise-grade features for large teams and organizations
                <ul className="my-6 flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Everything in Pro Plan
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Admin Console
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> API Access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Priority Support
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem translateZ={20} as="button" className="px-5 py-3 rounded-xl text-sm font-normal">
                  Try now →
                </CardItem>
                <CardItem translateZ={20} as="button" className="px-5 py-3 rounded-xl bg-black text-white text-sm font-bold">
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gradient-to-r from-[#f78fb3] via-[#f8a5c2] to-[#c8d6e5] pt-10 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Planzy
            </h3>
            <p className="text-gray-600 max-w-xs">
              Planzy is a scheduling software that helps you manage your events and appointments in one place,
              Built with Cutting Edge Technology.</p>
            <div className="flex space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Stay Updated</h4>
            <p className="text-gray-600">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-lg hover:from-gray-700 hover:to-gray-500 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              &copy; 2024 Planzy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
