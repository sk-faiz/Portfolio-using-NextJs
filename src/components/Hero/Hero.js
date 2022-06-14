import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Faiz<br />
        Welcome to My Portfolio 
      </SectionTitle>
      <SectionText>
        This is my portfolio website made using NextJS.
      </SectionText>
      <Button>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;