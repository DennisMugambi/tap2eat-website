import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SchoolsSection() {
  const implementationSteps = [
    {
      icon: "school",
      title: "Implementation Planning",
      description: "Strategic planning and setup guidance"
    },
    {
      icon: "group_add", 
      title: "Student Registration",
      description: "Streamlined enrollment processes"
    },
    {
      icon: "settings",
      title: "System Integration", 
      description: "Technical setup and configuration"
    },
    {
      icon: "support_agent",
      title: "Training & Support",
      description: "Comprehensive staff training programs"
    },
    {
      icon: "analytics",
      title: "Monitoring & Reports",
      description: "Detailed usage and performance analytics"
    }
  ];

  const resources = [
    {
      icon: "download",
      title: "Implementation Guide",
      description: "Step-by-step guide for successful program implementation",
      action: "Download Guide →"
    },
    {
      icon: "campaign",
      title: "Promotional Materials", 
      description: "Ready-to-use posters, flyers, and presentation templates",
      action: "View Resources →"
    },
    {
      icon: "help_center",
      title: "Support Center",
      description: "Access training materials and get technical support", 
      action: "Get Support →"
    }
  ];

  return (
    <section id="schools" className="py-20 bg-sophisticated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blackboard mb-4">For School Administrators</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive implementation and support resources for schools
          </p>
        </div>

        {/* Implementation Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {implementationSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-leafy-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons">{step.icon}</span>
              </div>
              <h3 className="font-semibold text-blackboard mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-leafy-green text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-icons">{resource.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-blackboard mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Button variant="link" className="text-carrot font-semibold hover:text-opacity-80 transition-colors p-0 h-auto">
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
