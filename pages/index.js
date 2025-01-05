import Navbar from '../components/Navbar'
    import Footer from '../components/Footer'
    import BitcoinChart from '../components/BitcoinChart'
    import BitcoinAnalytics from '../components/BitcoinAnalytics'
    import HeroSection from '../components/HeroSection'
    
    export default function Home() {
      return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <HeroSection />
    
          {/* Features Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12">
                Our Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature Cards */}
                <div className="text-center data-point">
                  <div className="text-4xl mb-4 text-primary">📈</div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Data</h3>
                  <p className="text-gray-600">
                    Access up-to-the-minute financial data and market trends.
                  </p>
                </div>
                <div className="text-center data-point">
                  <div className="text-4xl mb-4 text-primary">📊</div>
                  <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600">
                    Powerful tools for in-depth financial analysis and insights.
                  </p>
                </div>
                <div className="text-center data-point">
                  <div className="text-4xl mb-4 text-primary">🔒</div>
                  <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
                  <p className="text-gray-600">
                    Enterprise-grade security for your financial data.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Cryptocurrency Section */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12">
                Cryptocurrency Analytics
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <BitcoinChart />
                <BitcoinAnalytics />
              </div>
            </div>
          </section>
    
          {/* Testimonials Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial Cards */}
                <div className="testimonial-card">
                  <p className="text-gray-600 mb-4">
                    "Chartonomics has transformed how we analyze financial data.
                    The insights we've gained have been invaluable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">John Doe</h4>
                      <p className="text-sm text-gray-500">CEO, FinTech Inc.</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="text-gray-600 mb-4">
                    "The platform is intuitive and powerful. It's become an
                    essential tool for our financial decision-making."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">Jane Smith</h4>
                      <p className="text-sm text-gray-500">CFO, DataCorp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <Footer />
        </div>
      )
    }
