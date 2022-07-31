import React from 'react';

const Money = () => {
    return (
        <div>
            <select className='select-color font-weight-bold'>
                <option value="XOF">XOF</option>
                <option value="USD">USD</option>
                <option value="STR">STR</option>
            </select>
        </div>
    );
};

export default Money;