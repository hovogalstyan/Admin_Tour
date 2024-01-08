import React  from 'react';
import Wrapper from "../components/Wrapper";
import CategoriesList from "../components/Categories/CategoriesList";

const Categories = () => {
    return (
        <Wrapper helmetTitle={'Categories'}>
            <section className={'categories'}>
                <CategoriesList />
            </section>
        </Wrapper>
    );
};

export default Categories;
