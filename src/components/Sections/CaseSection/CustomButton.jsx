import {
  CustomButton,
  CustomButtonSVGLeft,
  CustomButtonSVGRight,
  CustomButtonWrap,
} from "./CaseSection.styled";
import icons from "../../../assets/icons/icons.svg";

const CustomButtons = () => {
  return (
    <CustomButtonWrap>
      <CustomButton className="custom-prev">
        <CustomButtonSVGLeft>
          <use href={icons + "#icon-arrow-right"} />
        </CustomButtonSVGLeft>
      </CustomButton>
      <CustomButton className="custom-next">
        <CustomButtonSVGRight>
          <use href={icons + "#icon-arrow-right"} />
        </CustomButtonSVGRight>
      </CustomButton>
    </CustomButtonWrap>
  );
};
export default CustomButtons;
