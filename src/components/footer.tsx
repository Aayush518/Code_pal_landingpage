import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Technology', href: '/technology' },
      { name: 'About', href: '/about' },
    ],
    company: [
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Guides', href: '/guides' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Status', href: '/status' },
    ],
  }

  return (
    <footer className="bg-white/80 backdrop-blur-lg border-t border-gray-200 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span>CODE PAL</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Revolutionizing code reviews with AI-powered insights and seamless collaboration.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="font-semibold mb-4 text-gray-900 capitalize">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="max-w-md mx-auto sm:mx-0">
            <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-600 mb-4">Get the latest updates and news directly in your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Code Pal. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}