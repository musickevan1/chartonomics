export default function HeroSection() {
      return (
        <section className="relative h-[600px]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80"
              alt="Financial Data Visualizations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
              {/* Hero Content */}
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Data-Driven Financial Insights
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Transform your financial decision-making with real-time analytics
                  and predictive insights.
                </p>
                <div className="flex space-x-4">
                  <button className="btn-primary">
                    Get Started
                  </button>
                  <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
    
              {/* Data Analytics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="data-point">
                  <div className="text-3xl font-bold text-primary mb-2">$1.2T+</div>
                  <p className="text-gray-600">Assets Analyzed</p>
                </div>
                <div className="data-point">
                  <div className="text-3xl font-bold text-primary mb-2">98.9%</div>
                  <p className="text-gray-600">Accuracy Rate</p>
                </div>
                <div className="data-point">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-gray-600">Real-Time Monitoring</p>
                </div>
                <div className="data-point">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <p className="text-gray-600">Global Markets</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
