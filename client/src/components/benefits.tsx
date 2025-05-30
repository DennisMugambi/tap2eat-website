import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  const benefits = [
    {
      title: "Nutritious & Delicious",
      description: "Our meals are carefully planned to provide balanced nutrition that supports your child's growth and learning.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Nutritious school lunch with vegetables and proteins"
    },
    {
      title: "Easy & Convenient",
      description: "Simple M-PESA payments and wristband technology make meal access effortless for students and parents.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Parent and child using mobile payment technology"
    },
    {
      title: "School-Friendly",
      description: "Streamlined administration and comprehensive support make implementation smooth for school staff.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "School administrators and staff collaborating"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blackboard mb-4">
            Why Parents & Schools Love Tap2Eat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the benefits that make Tap2Eat the preferred choice for school nutrition programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={benefit.image}
                    alt={benefit.alt}
                    className="rounded-xl w-full h-48 object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-blackboard mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
