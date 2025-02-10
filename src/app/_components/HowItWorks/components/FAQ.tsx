import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Separator } from "@/components/ui/separator";
  
  export default function FAQ() {
    const faqItems = [
      {
        question: "What is Squadra Media all about?",
        answer:
          "Squadra Media specialises in crafting engaging digital narratives, branding strategies, and multimedia solutions that help businesses connect with their audiences.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We work with a diverse range of industries, adapting our expertise to meet each sector's unique needs and challenges.",
      },
      {
        question: "How does Squadra Media approach storytelling?",
        answer:
          "We combine creative narratives with strategic insights to craft compelling stories that resonate with your target audience.",
      },
      {
        question: "How does Squadra Media ensure the projects align with our vision?",
        answer:
          "We maintain close collaboration with our clients throughout the project, ensuring all deliverables align with their brand vision and objectives.",
      },
      {
        question: "Can Squadra Media manage social media accounts?",
        answer:
          "Yes, we offer comprehensive social media management services, including content creation, scheduling, and engagement strategies.",
      },
      {
        question: "Do you handle branding from scratch?",
        answer:
          "Yes, we provide end-to-end branding services, from initial concept development to complete brand identity creation and implementation.",
      },
    ];
  
    return (
      <div className="w-full max-w-[1200px] px-[20px] md:px-[60px] lg:px-[170px] mx-auto py-[40px] lg:py-[100px]">
        <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold text-center mb-[40px] lg:mb-[100px]">
          Frequently Asked Questions (FAQs)
        </h1>
  
        <div className="rounded-xl px-[16px] md:p-[20px] lg:p-[86px] bg-white shadow-[0px_5px_20px_0px_#080F3414]">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <div key={index}>
                <AccordionItem value={`item-${index + 1}`} className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline text-gray-950 text-[14px] md:text-[20px] lg:text-[25px]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-[13px] md:text-[16px] lg:text-lg mr-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
                {index < faqItems.length - 1 && (
                  <Separator className="lg:my-4 bg-gray-300" />
                )}
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    );
  }
  