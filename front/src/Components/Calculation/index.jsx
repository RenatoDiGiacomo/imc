import React from 'react'
import { postIMCData } from '../../services/api';

const CalculationComponent = () => {
    const [inputExist, setInputExist] = React.useState(false);
    const [name, setName] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");
    const [dataPost, setDataPost] = React.useState({ name, imc: 0, classification: { title: "", color: "" } });


    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "name") {
            setName(value);
        }
        if (id === "weight") {
            setWeight(value);
        }
        if (id === "height") {
            const valueFixed = value.replace(",", ".");
            setHeight(valueFixed);
        }
    }

    const handleSubmitData = () => {
        /*
         A escala do IMC é :
         magreza (IMC menor que 18,5 kg/m²)
         eutrofia (IMC entre 18,5 e 24,9 kg/m²)
         sobrepeso (IMC entre 25 e 29,9 kg/m²)
         obesidade grau I (IMC entre 30 e 34,9 kg/m²)
         obesidade grau II (IMC entre 35 e 40 kg/m²)
         obesidade grau III (IMC maior que 40 kg/m²)    
         */

        if (name && weight && height) {
            const weightNumber = Number(weight);
            const heightNumber = Number(height);
            const imcValue = (weightNumber / (heightNumber * heightNumber)).toFixed(1);

            const classification = { title: "", color: "" };
            if (imcValue < 18.5) {
                classification.title = "magreza";
                classification.color = "bg-blue-500";
            } else if (imcValue >= 18.5 && imcValue <= 24.9) {
                classification.title = "eutrofia";
                classification.color = "bg-green-500";
            } else if (imcValue >= 25 && imcValue <= 29.9) {
                classification.title = "sobrepeso";
                classification.color = "bg-amber-500";
            } else if (imcValue >= 30 && imcValue <= 34.9) {
                classification.title = "obesidade grau I";
                classification.color = "bg-orange-600";
            } else if (imcValue >= 35 && imcValue <= 40) {
                classification.title = "obesidade grau II";
                classification.color = "bg-red-600";
            } else {
                classification.title = "obesidade grau III";
                classification.color = "bg-red-900";
            }

            setDataPost({ name, imc: Number(imcValue), classification: classification });
            postIMCData({ name, imc: Number(imcValue) });
        }
    }


    React.useEffect(() => {
        if (name && weight && height) {
            setInputExist(true);
        } else {
            setInputExist(false);
        }
    }, [name, weight, height]);



    return (
        // Container principal: Altura total da tela, fundo cinza claro e centralização com flexbox
        <div className=" flex-2 min-h-screen bg-white-100 flex flex-col gap-8 items-center justify-center p-4 ">
            <div className="w-120 p-2 bg-gray-200 flex-col items-center justify-center rounded-lg shadow-lg">
                <h1 className="text-3xl mb-2.5 text-center">Cálculo - IMC</h1>
                <form className="p-2 gap-3 flex flex-col">
                    <div>
                        <input
                            onChange={handleInputChange}
                            value={name}
                            type="text"
                            id="name"
                            placeholder="Nome Completo"
                            className="bg-white w-full mb-6 border rounded px-1 text-lg placeholder:text-center"
                            required
                        />
                    </div>
                    <div>
                        <input
                            onChange={handleInputChange}
                            value={weight}
                            type="text"
                            id="weight"
                            placeholder="Peso"
                            className="bg-white w-full border rounded px-1 text-lg placeholder:text-center"
                            required
                        />
                    </div>
                    <div>
                        <input
                            onChange={handleInputChange}
                            value={height}
                            type="text"
                            id="height"
                            placeholder="Altura"
                            className="bg-white w-full border rounded px-1 text-lg placeholder:text-center"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        {
                            inputExist ?
                                (<input onClick={handleSubmitData} type="button" value="Calcular" className="w-1/2 py-3 rounded bg-red-500 text-white cursor-pointer" />) :
                                (<input type="button" value="Calcular" className="w-1/2 py-3 rounded bg-gray-300 border-grey-300 text-gray-100 cursor-not-allowed" disabled />)
                        }


                    </div>
                </form>
            </div>

            {/* Resultados */}

            <div>
                {dataPost.imc > 0 ?
                    (
                        <div className="flex flex-col gap-6 items-center justify-center">

                            <div className="w-120 px-4 py-6 bg-gray-200 flex-col items-center justify-center rounded-lg shadow-lg">
                                <h2
                                    className='text-2xl mb-2.5 text-center'>
                                    Resultados
                                </h2>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className="text-lg items-center">Nome: {dataPost.name}</p>
                                    <p className="text-lg items-center">IMC: {dataPost.imc} kg/m²</p>
                                    <div className={`${dataPost.classification.color} text-white text-2xl font-bold p-6 rounded mt-4`}>
                                        <p className='uppercase'>{dataPost.classification.title}</p>
                                    </div>
                                </div>
                            </div>

                            <input onClick={() => { window.location.reload() }}
                                type="button"
                                value="Fazer Novamente o Cálculo"
                                className="w-1/2 py-3 rounded bg-blue-300 border-grey-300 text-gray-100 font-bold cursor-pointer" />
                        </div>
                    )
                    :
                    null}

            </div>
        </div>
    )
}

export default CalculationComponent