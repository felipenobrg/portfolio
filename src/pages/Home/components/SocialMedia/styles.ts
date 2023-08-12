import { styled } from "styled-components";

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  .socialMediaImg {
    width: 100%;
    height: 3rem;
    background: ${(props => props.theme.white)};
    border-radius: 9999px;
    padding: 0.2rem
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
