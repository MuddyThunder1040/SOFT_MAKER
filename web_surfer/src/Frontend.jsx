import React from 'react';

function Frontend() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Web Surfer</h1>
            <p>Your one-stop solution for seamless web browsing!</p>
            <button 
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => alert('Button Clicked!')}
            >
                Get Started
            </button>
        </div>
    );
}

export default Frontend;