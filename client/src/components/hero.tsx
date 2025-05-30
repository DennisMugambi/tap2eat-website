import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-sophisticated to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-semibold text-blackboard leading-tight">
              A healthy <span className="text-carrot">and</span> delicious way to fuel their day
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tap2Eat provides a cashless system for students to receive nutritious school meals. 
              Simple, secure, and focused on your child's health and convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("#parents")}
                className="bg-carrot text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl h-auto"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#parents")}
                className="border-2 border-carrot text-carrot px-8 py-4 rounded-xl font-semibold hover:bg-carrot hover:text-white transition-all h-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Happy school children enjoying nutritious meals" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-leafy-green text-white p-2 rounded-lg">
                  <span className="material-icons text-sm">restaurant</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Nutritious Meals</p>
                  <p className="text-xs text-gray-500">Served daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
