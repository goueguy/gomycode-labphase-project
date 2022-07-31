import React from 'react';

const Language = () => {
    return (
        <div className='m-2'>
            <select className='select-color font-weight-bold'>
                <option value="Français">Français</option>
                <option value="Anglais">Anglais</option>
                <option value="Chinois">Chinois</option>
            </select>
        </div>
    );
};

export default Language;