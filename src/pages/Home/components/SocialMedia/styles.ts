import { styled } from "styled-components";

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  .socialMediaImg {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    background: ${(props => props.theme.white)};
    border-radius: 9999px;
    padding: 0.2rem;

    &:hover {
      transition: 0.3s ease;
      background: ${(props => props.theme["gray-300"])};
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
