// This file contains utility functions that can be used throughout the application for various helper tasks.

export const generateUniqueTag = (existingTags) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let tag;

    do {
        tag = alphabet.charAt(Math.floor(Math.random() * alphabet.length)) +
              alphabet.charAt(Math.floor(Math.random() * alphabet.length)) +
              Math.floor(Math.random() * 100);
    } while (existingTags.includes(tag));

    return tag;
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const calculateTotalCharges = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const isEmpty = (value) => {
    return value === null || value === undefined || value.trim() === '';
};