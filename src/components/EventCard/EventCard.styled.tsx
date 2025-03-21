import styled from "styled-components";

interface EventCardContainerProps {
  category: string;
}

const categoryColors: { [key: string]: string } = {
  Art: "#ffcccb",
  Social: "#add8e6",
  Tech: "#d3ffce",
  Sports: "#f0e68c",
  Entertainment: "#f0f8ff",
  Other: "#f0f8ff",
};

export const EventCardContainer = styled.div<EventCardContainerProps>`
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  background-color: ${({ category }) => categoryColors[category] || categoryColors.default};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;