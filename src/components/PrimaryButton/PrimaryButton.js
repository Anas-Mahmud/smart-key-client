import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default PrimaryButton;