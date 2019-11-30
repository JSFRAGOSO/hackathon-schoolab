import React from "react";

export const SchoolCard = ({ children, school, ...linkProps }) => {
    return (
        <section
            className="rounded-xl mt-4 bg-white block p-2 shadow-lg focus:shadow-outline"
            {...linkProps}
        >
            <h1>Não encontramos escolas</h1>
        </section>
    );
};
