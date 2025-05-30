import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const parentFAQs = [
    {
      question: "What is Tap2Eat?",
      answer: "Tap2Eat is a cashless meal system that allows students to receive nutritious school meals by simply tapping their wristband at the school cafeteria."
    },
    {
      question: "How can I make payments or top-up my Tap2Eat account?",
      answer: "You can top-up using M-PESA Pay Bill. Use business number 956751, enter your child's account number, amount, and your M-PESA PIN."
    },
    {
      question: "What happens when my child loses their Tap2Eat wristband?",
      answer: "Contact your school immediately. They will deactivate the lost wristband and issue a replacement. Your account balance remains safe and transfers to the new wristband."
    },
    {
      question: "How do I view my Tap2Eat account details?",
      answer: "Simply dial *648# from your registered phone number to check your account balance and transaction history."
    },
    {
      question: "How much are meals?",
      answer: "Meal prices vary by school and meal type. Contact your school administration for specific pricing information for your child's grade level."
    },
    {
      question: "Can I send my child with lunch money instead?",
      answer: "The Tap2Eat system is designed to replace cash transactions for better security and convenience. Please use the M-PESA top-up system instead."
    }
  ];

  const schoolFAQs = [
    {
      question: "How can our school sign up for the Tap2Eat program?",
      answer: "Contact our implementation team at 0713 379 230 to schedule a consultation and begin the enrollment process for your school."
    },
    {
      question: "What are the technical requirements for implementing Tap2Eat?",
      answer: "Basic requirements include internet connectivity, power supply for the tapping stations, and designated staff for meal service coordination."
    },
    {
      question: "How are school staff trained to use the Tap2Eat system?",
      answer: "We provide comprehensive on-site training for all staff involved in meal service, including system operation, troubleshooting, and reporting procedures."
    },
    {
      question: "What is the process for handling lost or damaged wristbands?",
      answer: "Schools can instantly deactivate lost wristbands through the admin portal and issue replacements. All transactions are tracked for security."
    },
    {
      question: "How does the school reconcile meal counts with Tap2Eat payments?",
      answer: "Our system provides real-time reporting and daily reconciliation reports that match meal service with payment transactions automatically."
    },
    {
      question: "Are there any costs involved for the school to participate?",
      answer: "Implementation and ongoing support are provided at no cost to schools. We work on a per-transaction fee model that is built into the meal pricing."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blackboard mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-lg text-gray-600">Find answers to common questions about Tap2Eat</p>
        </div>

        <Tabs defaultValue="parents" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="parents">For Parents</TabsTrigger>
            <TabsTrigger value="schools">For Schools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="parents" className="space-y-4">
            {parentFAQs.map((faq, index) => (
              <Card key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full text-left p-6 focus:outline-none focus:bg-gray-100 transition-colors h-auto">
                      <div className="flex justify-between items-center w-full">
                        <h3 className="font-semibold text-blackboard text-left">{faq.question}</h3>
                        <span className="material-icons text-gray-400">
                          {openItems.includes(index) ? 'expand_less' : 'expand_more'}
                        </span>
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="schools" className="space-y-4">
            {schoolFAQs.map((faq, index) => (
              <Card key={index + parentFAQs.length} className="bg-gray-50 rounded-xl overflow-hidden">
                <Collapsible open={openItems.includes(index + parentFAQs.length)} onOpenChange={() => toggleItem(index + parentFAQs.length)}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full text-left p-6 focus:outline-none focus:bg-gray-100 transition-colors h-auto">
                      <div className="flex justify-between items-center w-full">
                        <h3 className="font-semibold text-blackboard text-left">{faq.question}</h3>
                        <span className="material-icons text-gray-400">
                          {openItems.includes(index + parentFAQs.length) ? 'expand_less' : 'expand_more'}
                        </span>
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
