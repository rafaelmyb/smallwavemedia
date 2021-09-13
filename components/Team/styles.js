import styled from "styled-components";

export const Section = styled.section`
  max-width: 100%;
  height: 100vh;
  min-height: 820px;
  padding: 0 2rem;

  background: var(--gray-700);

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1120px;
  width: 1120px;
  min-height: 664px;
  margin: 0;

  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 1120px;
  height: 800px;

  display: grid;
  grid-template-areas: "headline cardsTop"
                        "cardsDown cardsDown";
`;

export const Headline = styled.div`
    width: 384px;
    height: 330px;

    span {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 1rem;
      font-weight: 800;
      color: var(--gray-300);
    }
`;

export const Subtitle = styled.h3`
  font-size: 1rem;
`;

export const CardsTop = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.li`
    img {
      width: 204px;
      height: 312px;
    }
`;

export const CardBody = styled.div`
  font-size: 1rem;
`;

export const Social = styled.div`
  font-size: 1rem;
`;

export const CardsDown = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;