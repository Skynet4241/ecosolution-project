import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";
import icons from "../../../../assets/icons/icons.svg";

export const AccordionWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-top: 16px;
    border-top: 1px solid #97d28b;
  }
`;

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  backgroundColor: "transparent",

  "&:not(:last-child)": {
    paddingBottom: "16px",
    borderBottom: "1px solid #97D28B",
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled(
  (props) => (
    <MuiAccordionSummary
      expandIcon={
        <svg
          style={{
            width: "16px",
            height: "16px",
            fill: "rgba(151, 210, 139, 1)",
            stroke: "rgba(23, 61, 51, 1)",
          }}
        >
          {!props.id ? (
            <use href={icons + "#icon-add"} />
          ) : (
            <use href={icons + "#icon-minus"} />
          )}
        </svg>
      }
      {...props}
      sx={{ padding: "0" }}
    />
  ),
  {
    shouldForwardProp: (p) => p !== "isExpanded",
  }
)(() => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  minHeight: "0",
  "& .MuiAccordionSummary-content": {
    margin: "0 0 0 8px",
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "16px 0 0 24px",
}));

export const SummaryTitle = styled(Typography)`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 24px;
  }
`;

export const SummaryTitleText = styled(Typography)`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 16px;
  }
`;
