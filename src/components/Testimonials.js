import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsLightbulb } from "react-icons/bs";
import { useStaticQuery, graphql } from "gatsby";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <TestimonialSection>
            <IoMdCheckmarkCircleOutline />
            <h3>John Doe</h3>
            <p>
              I can confidently say that my recent trip to Santorini was the
              most unforgettable experience of my life. From the moment I
              arrived on this enchanting island, I was completely mesmerized by
              its beauty and charm. The stunning vistas of the caldera, with its
              azure blue waters contrasting against the iconic white-washed
              buildings, took my breath away.
            </p>
          </TestimonialSection>
          <TestimonialSection>
            <BsLightbulb />
            <h3>Jane Doe</h3>
            <p>
              The greatest experience I've ever had was during my trip to the
              beautiful island of Santorini. The moment I set foot on the
              island, I was captivated by its breathtaking views and stunning
              landscapes. The crystal-clear blue waters, the charming
              white-washed buildings, and the picturesque sunsets created a
              magical atmosphere that I will never forget.
            </p>
          </TestimonialSection>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw -1300px) / 2);
  height: 100%;
`;

const TopLine = styled.p`
  font-size: 1rem;
  color: #077bf1;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialSection = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`;

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`;
