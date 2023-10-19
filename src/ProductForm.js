import React, { useState } from 'react';

function ProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const resetForm = () => {
        setName('');
        setDescription('');
        setCategory('');
        setQuantity('');
        setPrice('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            name,
            description,
            category,
            quantity,
            price,
        };
        window.alert(`Product saved successfully.\n${JSON.stringify(product)}`);
        resetForm();
    };

    const handleCancel = () => {
        // reset form
        resetForm();
    };

    return (
        <div className='form-container'>
            <h1 >New Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder='Name' required type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input placeholder='Description' required type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                    <input placeholder='Category' required type='text' name='category' value={category} onChange={(e) => setCategory(e.target.value)}
                    />
                    <input placeholder='Quantity' required type='number' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}
                    />
                    <input placeholder='Price' required type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <button id='submitButton' type="submit">SUBMIT</button>
                    <button id='cancelButton' type='button' onClick={handleCancel}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;