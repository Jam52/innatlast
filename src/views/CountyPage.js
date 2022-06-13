import styled from 'styled-components';
import { useState } from 'react';
import Divider from '../components/Divider';
import { SelectedableButton } from '../components/buttons';
import countyDetails from './CountyDetails.json';
import CountyCard from '../components/CountyCard';

const CountyPage = () => {
  const [selectedOption, setSelectedOption] = useState('placesToGo');
  return (
    <Wrapper className="section container flow flow--lg">
      <div className="para para--right flow flow--md">
        <h2 className="h1">Explore Your Stay</h2>
        <Divider option="3" right={true} />
        <p className="para">
          Mauris vel ornare massa. Donec placerat ut risus eget pretium. In et
          dolor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis et arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet
          non. augue. augue.
        </p>
      </div>
      <div className="btn-container hflow">
        <SelectedableButton
          selected={selectedOption === 'placesToGo'}
          onClick={() => setSelectedOption('placesToGo')}
        >
          Places to Go
        </SelectedableButton>
        <SelectedableButton
          selected={selectedOption === 'thingsToDo'}
          onClick={() => setSelectedOption('thingsToDo')}
        >
          Things to Do
        </SelectedableButton>
      </div>
      <section className="card-container cards">
        {countyDetails[selectedOption].map((detail) => {
          return (
            <CountyCard
              image={detail.image}
              header={detail.header}
              text={detail.textShort}
              map={detail.map}
            />
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 7rem;

  .btn-container {
    justify-content: center;
  }

  .cards {
    gap: 2rem;
  }
`;

export default CountyPage;
