import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Code2, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Code2 className="h-6 w-6 text-primary" />
            <span>CODE PAL</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-12">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {[
                  { to: "/why-code-pal", label: "Why Code Pal" },
                  { to: "/about", label: "About product" },
                  { to: "/technology", label: "Technology" },
                  { to: "/pricing", label: "Pricing" },
                ].map((item) => (
                  <NavigationMenuItem key={item.to}>
                    <Link
                      to={item.to}
                      className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost"
                onClick={() => navigate('/login')}
                className="hover:bg-primary/10"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {[
              { to: "/why-code-pal", label: "Why Code Pal" },
              { to: "/about", label: "About product" },
              { to: "/technology", label: "Technology" },
              { to: "/pricing", label: "Pricing" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button 
                variant="ghost"
                onClick={() => { navigate('/login'); setIsMenuOpen(false); }}
                className="w-full hover:bg-primary/10"
              >
                Login
              </Button>
              <Button
                onClick={() => { navigate('/signup'); setIsMenuOpen(false); }}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                Get started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}