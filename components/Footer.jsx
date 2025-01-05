export default function Footer() {
      return (
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Chartonomics</h3>
                <p className="text-gray-400">
                  Your financial insights partner.
                </p>
              </div>
    
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-primary">About Us</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-primary">Services</a></li>
                  <li><a href="/portfolio" className="text-gray-400 hover:text-primary">Portfolio</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-primary">Contact</a></li>
                </ul>
              </div>
    
              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      {/* Twitter Icon */}
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      {/* Facebook Icon */}
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      {/* LinkedIn Icon */}
                    </svg>
                  </a>
                </div>
              </div>
    
              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="p-2 rounded-l-lg focus:outline-none text-gray-800"
                  />
                  <button
                    type="submit"
                    className="bg-primary px-4 rounded-r-lg hover:bg-secondary"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      )
    }
