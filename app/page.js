import React from 'react';
import { ShoppingCart, Search, Menu, Heart, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const data = {
  topBanner: 'Free shipping on orders above ₹499 | Shop Now',
  categories: ['Men', 'Women', 'Accessories', 'Winter Wear'],
  featuredCategories: [
    'Printed T-Shirts',
    'Oversized T-Shirts',
    'Plain T-Shirts',
    'Sweatshirts & Hoodies',
    'Jackets',
    'Joggers',
  ],
  heroBanner: {
    image:
      'https://bewakoof-tawny.vercel.app/img/Nov-COTM-SnazzyGreen-Bewakoof-HeroBanner-Launch-men--1--1635685347.webp',
    text: 'Summer Sale: Up to 50% Off',
  },
  trendingProducts: [
    {
      id: 1,
      name: "Men's Black T-Shirt",
      price: 499,
      originalPrice: 999,
      discount: 50,
      image:
        'https://images.bewakoof.com/t1080/men-s-black-t-shirt-106-1701423878-1.jpg',
      badge: 'NEW',
    },
    {
      id: 2,
      name: "Women's White Top",
      price: 599,
      originalPrice: 1199,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/women-s-white-cool-pals-graphic-printed-oversized-t-shirt-594428-1708436755-1.jpg',
      badge: 'NEW',
    },
    {
      id: 3,
      name: 'Unisex Denim Jacket',
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      image: 'https://images.bewakoof.com/t640/men-s-blue-washed-jacket-557973-1669896846-1.jpg',
      badge: 'TRENDING',
    },
    {
      id: 4,
      name: "Men's Cargo Pants",
      price: 899,
      originalPrice: 1799,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/men-s-grey-oversized-cargo-pants-609842-1721970607-1.jpg',
      badge: 'HOT',
    },
    {
      id: 5,
      name: "Women's Floral Dress",
      price: 799,
      originalPrice: 1599,
      discount: 50,
      image: 'https://images.bewakoof.com/original/women-s-beige-red-all-over-floral-printed-dress-ssumr23cswssdr253-604094-1689843599-4.jpg',
      badge: 'NEW',
    },
    {
      id: 6,
      name: 'Unisex Sneakers',
      price: 1299,
      originalPrice: 2599,
      discount: 50,
      image: 'https://images.bewakoof.com/original/men-s-white-casual-shoes-592548-1684501826-1.jpg',
      badge: 'TRENDING',
    },
    {
      id: 7,
      name: "Men's Formal Shirt",
      price: 699,
      originalPrice: 1399,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/men-s-blue-den-graphic-printed-oversized-shirt-604442-1721131088-1.jpg',
      badge: 'NEW',
    },
    {
      id: 8,
      name: "Women's Yoga Pants",
      price: 549,
      originalPrice: 1099,
      discount: 50,
      image: 'https://images.bewakoof.com/web/Cut-out-set---Yoga-Dress-For-Women---Bewakoof-Blog.jpg',
      badge: 'HOT',
    },
    {
      id: 9,
      name: 'Unisex Backpack',
      price: 999,
      originalPrice: 1999,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/unisex-black-sneaker-gang-small-backpack-602929-1695886231-1.jpg',
      badge: 'NEW',
    },
    {
      id: 10,
      name: "Women's Crop Top",
      price: 399,
      originalPrice: 799,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/women-s-blue-typography-crop-top-597991-1687338942-1.jpg',
      badge: 'TRENDING',
    },
  ],
  bestsellerProducts: [
    {
      id: 1,
      name: "Women's Printed T-Shirt",
      price: 399,
      originalPrice: 799,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/women-s-blue-stardust-soul-graphic-printed-oversized-t-shirt-580622-1716887024-1.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 2,
      name: "Men's Denim Jacket",
      price: 1299,
      originalPrice: 2599,
      discount: 50,
      image: 'https://images.bewakoof.com/t540/style-quotient-men-mustard-yellow-solid-denim-jacket-style-quotient-men-s-denim-jacket-316665-1609423211.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 3,
      name: 'Unisex Hoodie',
      price: 899,
      originalPrice: 1799,
      discount: 50,
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25859910/2023/11/11/082d4260-2b1b-4f0b-88d4-dc863dbd03191699679971062BewakoofMenBlueHoodedSweatshirt1.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 4,
      name: "Women's Maxi Dress",
      price: 999,
      originalPrice: 1999,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/women-s-dark-blue-maxi-dress-630939-1707386560-1.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 5,
      name: "Men's Chino Shorts",
      price: 599,
      originalPrice: 1199,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/men-s-olive-green-oversized-cargo-shorts-634304-1720780750-1.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 6,
      name: "Women's Denim Skirt",
      price: 699,
      originalPrice: 1399,
      discount: 50,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR262WRoi_X7ZDjYhY5NkwrQ08GhDxvdZqlFw&s',
      badge: 'BESTSELLER',
    },
    {
      id: 7,
      name: 'Unisex Slip-on Shoes',
      price: 799,
      originalPrice: 1599,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/men-s-white-grey-color-block-lightweight-casual-shoes-496988-1655815173-1.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 8,
      name: "Men's Polo Shirt",
      price: 549,
      originalPrice: 1099,
      discount: 50,
      image: 'https://images.bewakoof.com/t1080/men-s-brown-white-color-block-oversized-polo-zipper-t-shirt-637198-1715258082-1.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 9,
      name: "Women's Cardigan",
      price: 849,
      originalPrice: 1699,
      discount: 50,
      image: 'https://images.bewakoof.com/original/women-s-black-beige-striped-oversized-sweater-641021-1725341695-1.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: 10,
      name: 'Unisex Baseball Cap',
      price: 299,
      originalPrice: 599,
      discount: 50,
      image: 'https://images.bewakoof.com/original/melting-leaf-baseball-cap-405263-1672908030-1.jpg',
      badge: 'BESTSELLER',
    },
  ],
  categoryBags: [
    {
      id: 1,
      name: 'T-Shirts',
      image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/13451502/2024/4/5/d47540a2-b973-46a4-a615-85cec64e78781712300915888-Bewakoof-Men-Black-Printed-Round-Neck-Pure-Cotton-T-shirt-53-13.jpg',
    },
    {
      id: 2,
      name: 'Jeans',
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/a/l/d/32-624277-bewakoof-original-imagvczknexdnpk2.jpeg?q=90&crop=false',
    },
    {
      id: 3,
      name: 'Dresses',
      image: 'https://images.bewakoof.com/t1080/women-s-black-daffy-graphic-printed-oversized-dress-584769-1707221676-1.jpg',
    },
    {
      id: 4,
      name: 'Shirts',
      image: 'https://images.bewakoof.com/t1080/men-s-white-shirt-596670-1686842911-1.jpg',
    },
    {
      id: 5,
      name: 'Sweaters',
      image: 'https://images-static.nykaa.com/media/catalog/product/7/4/74d1249597243_1.jpg',
    },
    {
      id: 6,
      name: 'Jackets',
      image: 'https://images.bewakoof.com/t1080/men-s-black-oversized-fit-puffer-jackets-498982-1671457033-1.jpg',
    },
    {
      id: 7,
      name: 'Shorts',
      image: 'https://images-static.nykaa.com/media/catalog/product/7/b/7b081e6635480_1.jpg?tr=w-500',
    },
    {
      id: 8,
      name: 'Skirts',
      image: 'https://images.bewakoof.com/t640/women-s-white-blue-all-over-floral-printed-slit-midi-skirts-636362-1712077818-1.jpg',
    },
    {
      id: 9,
      name: 'Activewear',
      image: 'https://images.bewakoof.com/t540/activewear-t-shirt-in-light-blue-with-reflector-piping-379152-1637302981-1.jpg',
    },
    {
      id: 10,
      name: 'Accessories',
      image: 'https://images.bewakoof.com/t1080/men-s-brown-deathstroke-graphic-printed-oversized-t-shirt-564899-1709531629-1.jpg',
    },
    {
      id: 11,
      name: 'Shoes',
      image: 'https://images.bewakoof.com/t1080/men-s-red-black-color-block-high-top-sneakers-630682-1721643544-1.jpg',
    },
    {
      id: 12,
      name: 'Bags',
      image: 'https://images.bewakoof.com/t1080/ultimate-marvel-small-backpack-585129-1680613572-1.jpg',
    },
  ],
};

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200 inline-block">
    {children}
  </h2>
);

export default function Component() {
  return (
    <div className="min-h-screen bg-[#475E66]/10">
      {/* Top Banner */}
      <div className="bg-[#475E66] text-white text-center py-2 px-4 text-sm font-medium">
        {data.topBanner}
      </div>

      {/* Responsive Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src='/Logo.png' alt="Logo" className="h-auto w-20 rounded-xl" />
                {/* <span className="font-bold text-xl">Elemental</span> */}
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {data.categories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${
                      index === 0
                        ? 'border-b-2 border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 text-sm font-medium`}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative">
                <Input type="text" placeholder="Search" className="w-64" />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <Button variant="ghost" size="icon" className="ml-4">
                <Heart className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-4">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative">
          <img
            src={"/banner2.png"}
            alt="Promotional Banner"
            className="w-full max-h-[600px] rounded-lg shadow-md object-cover object-top"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white shadow-text">{data.heroBanner.text}</h2>
          </div> */}
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative">
          <img
            src={data.heroBanner.image}
            alt="Promotional Banner"
            className="w-full max-h-[400px] rounded-lg shadow-md object-cover object-top"
          />
          
        </div>
      </div> */}

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <SectionHeading>POPULAR CATEGORIES</SectionHeading>
        <div className="grid max-md:px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {data.featuredCategories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-2 px-4 text-sm font-medium justify-between"
            >
              {category}
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <SectionHeading>TRENDING</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.trendingProducts.map((product) => (
            <Card key={product.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white rounded-full p-1.5"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Badge className="absolute bottom-2 left-2 bg-white text-black">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold mb-1 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-semibold">
                      {product.discount}% OFF
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bestsellers Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <SectionHeading>BESTSELLERS</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.bestsellerProducts.map((product) => (
            <Card key={product.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white rounded-full p-1.5"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Badge className="absolute bottom-2 left-2 bg-white text-black">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold mb-1 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-semibold">
                      {product.discount}% OFF
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <SectionHeading>CATEGORIES TO BAG</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.categoryBags.map((category) => (
            <div key={category.id} className="text-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto rounded-full mb-2"
              />
              <p className="text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#475E66] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Track Order</a></li>
                <li><a href="#" className="hover:text-gray-300">Return Order</a></li>
                <li><a href="#" className="hover:text-gray-300">Cancel Order</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">We're Hiring</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              </ul>
            </div>
            {/* Connect with Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
                <a href="#" className="hover:text-gray-300"><Instagram /></a>
                <a href="#" className="hover:text-gray-300"><Youtube /></a>
              </div>
            </div>
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none bg-white text-black" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Elemental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
