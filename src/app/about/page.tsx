import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-blue-500">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              WELCOME TO <div className='text-blue-800 line-clamp-2'>MARIE SUPER MARKET</div>
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
             {` We're your one-stop shop for all things fashion and style. Whether you're looking for trendy t-shirts, statement accessories, chic bags, stylish shoes, captivating perfumes, or cozy coats, we've got you covered.`}
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-badge mr-14" src="/images/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" alt="About Us" />
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-700">
              Our mission is to provide our customers with the latest fashion trends and high-quality products at affordable prices. We believe that everyone deserves to look and feel their best, and our diverse range of products caters to all styles and preferences.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-badge" src="/images/1685968393471.jpg" alt="Our Mission" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Our Commitment
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-white">
              At MARIE SUPER MARKET, customer satisfaction is our top priority. We strive to offer an exceptional shopping experience with fast shipping, easy returns, and responsive customer support. Our team is dedicated to helping you find the perfect items to express your unique personality and elevate your wardrobe.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-badge" src="/images/102328165-three-attractive-young-girls-are-doing-shopping-with-shopping-bags-in-modern-mall.jpg" alt="Our Mission" />
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800">
              Thank You
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-700">
             {` Whether you're shopping for yourself or looking for the perfect gift for a loved one, we're confident that you'll find something special in our curated collection. Thank you for choosing MARIE SUPER MARKET for all your fashion needs!`}
            </p>
            <p className="mt-4 max-w-3xl text-lg text-gray-700">
              Happy shopping!
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/thank-you-for-shopping-with-us-flyer-design-template-310398c8721e6c754bd88c65129be38f_screen.jpg" alt="Thank You" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About