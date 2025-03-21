import styled from "styled-components";

interface EventCardContainerProps {
  category: string;
}

const categoryBackgroundColors: { [key: string]: string } = {
  Art: "#750000",
  Social: "#CE5C23",
  Tech: "#244E2E",
  Sports: "#BE8127",
  Entertainment: "#284D55",
  Other: "#872C6B",
  default: "#BE8127"
};

export const EventCardContainer = styled.div<EventCardContainerProps>`
  flex: 0 0 auto;
  width: 211px;
  height: 300px;
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ category }) => categoryBackgroundColors[category] || categoryBackgroundColors.default};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
`;