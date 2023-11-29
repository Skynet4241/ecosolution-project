import { memo, useState } from "react";
import {
  OpenCardInfoWrap,
  EnergySourcesList,
  EnergySourcesListButton,
  EnergySourcesWrap,
  ServiceSectionCardTitle,
  ServiceSectionCardWrap,
  ServiceSectionEnergySources,
  OpenCardWrap,
  OpenCardInfoSVG,
  OpenCardInfoLink,
  OpenCardInfoImg,
  OpenCardInfoTitle,
  OpenCardInfoText,
  EnergySourcesListItemBlock,
  EnergySourcesListItemSVG,
} from "./EnergySources.styled";
import icons from "../../../../assets/icons/icons.svg";
import EnergySolar from "../../../../assets/images/energy-sources-solar.jpg";
import EnergyWind from "../../../../assets/images/energy-sources-wind.png";
import EnergyHydro from "../../../../assets/images/energy-sources-hydro.jpg";
import EnergyThermal from "../../../../assets/images/energy-sources-thermal.jpg";
import EnergyNuclear from "../../../../assets/images/energy-sources-nuclear.jpg";

const energySourcesData = [
  {
    name: "Solar",
    image: EnergySolar,
    alt: "Panoramic view of the field where the solar panels are located",
    description: "Read more about Solar Energy ",
    url: "https://en.wikipedia.org/wiki/Solar_energy",
  },
  {
    name: "Wind",
    image: EnergyWind,
    alt: "Panoramic view wind farm wind park with high wind turbines generation electricity",
    description: "Read more about Wind Energy",
    url: "https://en.wikipedia.org/wiki/Wind_power",
  },
  {
    name: "Hydro",
    image: EnergyHydro,
    alt: "Panoramic view of the lake where the annual power plant is located",
    description: "Read more about Hydro Energy",
    url: "https://en.wikipedia.org/wiki/Hydroelectricity",
  },
  {
    name: "Thermal",
    image: EnergyThermal,
    alt: "Panoramic view of a thermal power plant",
    description: "Read more about Thermal Energy",
    url: "https://en.wikipedia.org/wiki/Thermal_energy",
  },
  {
    name: "Nuclear",
    image: EnergyNuclear,
    alt: "Panoramic view of the 4 pipes from the nuclear power plant",
    description: "Read more about Nuclear Energy",
    url: "https://en.wikipedia.org/wiki/Nuclear_power",
  },
];

const EnergySources = () => {
  const [isActive, setIsActive] = useState(null);

  const handleEnergySourceClick = (index) => {
    setIsActive(index);
  };

  return (
    <ServiceSectionEnergySources>
      <ServiceSectionCardWrap>
        {isActive !== null ? (
          <OpenCardWrap>
            <OpenCardInfoWrap>
              <OpenCardInfoTitle>
                {energySourcesData[isActive].name} Energy
              </OpenCardInfoTitle>
              <OpenCardInfoLink
                href={energySourcesData[isActive].url}
                target="_blank"
                rel="noreferrer"
              >
                <OpenCardInfoSVG>
                  <use href={icons + "#icon-arrow-right"} />
                </OpenCardInfoSVG>
              </OpenCardInfoLink>
            </OpenCardInfoWrap>

            <OpenCardInfoImg
              src={energySourcesData[isActive].image}
              alt={`${energySourcesData[isActive].alt}`}
            />
            <OpenCardInfoText>
              {energySourcesData[isActive].description}
            </OpenCardInfoText>
          </OpenCardWrap>
        ) : (
          <ServiceSectionCardTitle>
            Development and implementation of renewable environmentally friendly
            energy sources
          </ServiceSectionCardTitle>
        )}
      </ServiceSectionCardWrap>
      <EnergySourcesWrap>
        <EnergySourcesList>
          {energySourcesData.map((source, index) => (
            <li key={index}>
              <EnergySourcesListButton
                onClick={() => handleEnergySourceClick(index)}
                active={index === isActive}
              >
                <EnergySourcesListItemBlock>
                  {isActive === index && (
                    <EnergySourcesListItemSVG>
                      <use href={icons + "#icon-arrow-right"} />
                    </EnergySourcesListItemSVG>
                  )}
                  {source.name}
                </EnergySourcesListItemBlock>
              </EnergySourcesListButton>
            </li>
          ))}
        </EnergySourcesList>
      </EnergySourcesWrap>
    </ServiceSectionEnergySources>
  );
};

export default memo(EnergySources);
