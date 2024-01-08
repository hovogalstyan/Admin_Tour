import React  from 'react';
import Wrapper from "../components/Wrapper";
import DestinationsList from "../components/Destinations/DestinationsList";

const Destinations = () => {
    return (
        <Wrapper helmetTitle={'Destinations'}>
            <section className={'destinations'}>
                <DestinationsList />
            </section>
        </Wrapper>
    );
};

export default Destinations;
