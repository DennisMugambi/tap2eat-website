import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Tap2Eat has been a game-changer for our family. My daughter loves the healthy meals, and I love the convenience of not having to worry about lunch money every day.",
      name: "Margaret Wanjiru",
      role: "Parent, Grade 4",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "The system is so easy to use. Top-up is quick with M-PESA, and my son never forgets his wristband. Much better than carrying cash every day.",
      name: "David Kimani", 
      role: "Parent, Grade 2",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "Peace of mind knowing my children are eating nutritious meals at school. The balance checking feature helps me stay on top of their account.",
      name: "Grace Muthoni",
      role: "Parent, Grade 6", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blackboard mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-gray-600">Real feedback from families using Tap2Eat</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-progressive">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-icons text-sm">star</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full object-cover mr-3" 
                  />
                  <div>
                    <p className="font-semibold text-blackboard">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
