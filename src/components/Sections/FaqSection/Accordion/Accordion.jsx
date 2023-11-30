import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionWrap,
  SummaryTitle,
  SummaryTitleText,
} from "./Accordion.styled";

const accordionSourcesData = [
  {
    title:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    description:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    title:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    description: "Wind Power for auto field irrigation",
  },
  {
    title:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    description: "Wind Power for auto field irrigation",
  },
  {
    title:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    description: "Wind Power for auto field irrigation",
  },
  {
    title:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    description: "Wind Power for auto field irrigation",
  },
];

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = useState("panel0");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setIsExpanded(newExpanded);
  };

  return (
    <AccordionWrap>
      {accordionSourcesData.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          key={index}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            isExpanded={isExpanded}
          >
            <SummaryTitle>{item.title}</SummaryTitle>
          </AccordionSummary>
          <AccordionDetails>
            <SummaryTitleText>{item.description}</SummaryTitleText>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionWrap>
  );
};
export default CustomizedAccordions;
