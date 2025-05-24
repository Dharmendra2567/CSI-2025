
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormData = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <div className="text-center mt-5">No data submitted. <button className="btn btn-link" onClick={() => navigate('/')}>Go back</button></div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Submitted Data</h2>
            <div className="card shadow-lg p-4">
                <ul className="list-group list-group-flush">
                    {Object.entries(state).map(([key, val], idx) => (
                        <li key={idx} className="list-group-item">
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {val}
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-3">
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Form</button>
                </div>
            </div>
        </div>
    );
};

export default FormData;
