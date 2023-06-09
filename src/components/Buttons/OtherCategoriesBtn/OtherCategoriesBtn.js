import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';

export const OtherCategoriesBtn = ({ to, location }) => {
  return (
    <CustomBtn
      to={to}
      location={location}
      variant="changeAll"
      sizes={{
        m: { w: 195, h: 46, padH: 32, padV: 14 },
        t: { w: 239, h: 61, padH: 52, padV: 20 },
      }}
    >
      Other categories
    </CustomBtn>
  );
};
