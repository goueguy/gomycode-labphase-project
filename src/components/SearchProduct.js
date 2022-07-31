import React from 'react';

const SearchProduct = () => {
    return (
        <div>
            <form>
                <input type="input" placeholder="Rechercher un produit...."/>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default SearchProduct;