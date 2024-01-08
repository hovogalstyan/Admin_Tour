import React  from 'react';
import Wrapper from "../components/Wrapper";
import ToursList from "../components/Tours/ToursList";

const Tours = () => {
    return (
        <Wrapper helmetTitle={'Tours'}>
            <section className={'tours'}>
                <ToursList />
            </section>
        </Wrapper>
    );
};

export default Tours;
