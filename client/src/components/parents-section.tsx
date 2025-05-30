import { Card, CardContent } from "@/components/ui/card";

export default function ParentsSection() {
  const steps = [
    {
      number: "01",
      title: "Register",
      description: "Fill out the form from your child's school"
    },
    {
      number: "02", 
      title: "Top Up Account",
      description: "Add money using M-PESA Paybill: 956751"
    },
    {
      number: "03",
      title: "Get Wristband", 
      description: "Your child receives their Tap2Eat wristband"
    },
    {
      number: "04",
      title: "Tap & Eat",
      description: "Simple tap for delicious, nutritious meals"
    }
  ];

  const mpesaSteps = [
    "Go to M-PESA on your phone",
    "Select \"Lipa na M-PESA\"",
    "Select \"Pay Bill\"",
    "Enter Business Number: 956751",
    "Enter your child's account number",
    "Enter amount and your M-PESA PIN"
  ];

  return (
    <section id="parents" className="py-20 bg-sophisticated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blackboard mb-4">For Parents</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about getting started with Tap2Eat
          </p>
        </div>

        {/* How It Works Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-carrot text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                {step.number}
              </div>
              <h3 className="font-semibold text-blackboard mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* M-PESA Instructions */}
        <Card className="bg-white rounded-2xl shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-blackboard mb-6">Easy M-PESA Top-Up Instructions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ol className="space-y-4">
                  {mpesaSteps.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="bg-leafy-green text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className={index === 3 ? "font-medium" : ""}>
                        {index === 3 ? (
                          <>Enter Business Number: <strong className="text-carrot">956751</strong></>
                        ) : (
                          step
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-sophisticated rounded-xl p-6">
                <h4 className="font-semibold text-blackboard mb-4">Check Account Balance</h4>
                <p className="text-gray-600 mb-4">To view your Tap2Eat account details anytime:</p>
                <div className="bg-white rounded-lg p-4 border-2 border-carrot">
                  <p className="text-center text-xl font-semibold text-carrot">Dial *648#</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
