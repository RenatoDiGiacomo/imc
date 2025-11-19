import React from 'react';
import { getIMCData } from '../../services/api';

const PreviousDataComponent = () => {
    const [previousData, setPreviousData] = React.useState([]);


    React.useEffect(() => {
        getIMCData().then((data) => {
            setPreviousData(data);
        });
    }, [])

    if (previousData.length === 0) {
        return (
            <div className={`absolute left-0 top-0 w-1/6 min-h-screen bg-gray-100 p-4 overflow-y-auto`}>
                <h2 className="text-2xl font-bold mb-4">Dados Anteriores</h2>
                <div className="mb-4 p-4 border rounded bg-white shadow">
                    <p>Nenhum Dado Disponível</p>
                </div>
            </div>
        )
    }
    return (
        <div className={`absolute left-0 top-0 w-1/6 min-h-screen bg-gray-100 p-4 overflow-y-auto`}>
            <h2 className="text-2xl font-bold mb-4">Dados Anteriores</h2>
            {previousData.map((item, index) => (
                <div key={index} className="mb-4 p-4 border rounded bg-white shadow">
                    <p className="text-lg">Nome: {item.name}</p>
                    <p className="text-lg">IMC: {item.imc} kg/m²</p>
                </div>
            ))}
        </div>
    )
}

export default PreviousDataComponent