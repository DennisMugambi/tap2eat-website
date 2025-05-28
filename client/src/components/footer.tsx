import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-blackboard text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-carrot">Tap2Eat</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Providing nutritious school meals through innovative cashless payment solutions. 
              Empowering students, supporting parents, and partnering with schools for better nutrition.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={() => scrollToSection("#parents")}
                className="bg-carrot text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all h-auto"
              >
                Get Started Today
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("#parents")}
                  className="hover:text-carrot transition-colors text-left"
                >
                  For Parents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#schools")}
                  className="hover:text-carrot transition-colors text-left"
                >
                  For Schools
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-carrot transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#faq")}
                  className="hover:text-carrot transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="material-icons text-sm">phone</span>
                <span>0713 379 230</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-icons text-sm">help_outline</span>
                <span>*648# for balance</span>
              </li>
              <li>
                <a href="#" className="hover:text-carrot transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-carrot transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Tap2Eat by Food4Education. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Powered by</span>
              <span className="text-carrot font-semibold">Food4Education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
