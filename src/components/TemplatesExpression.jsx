import FirstComponent from "./FirstComponent";

const TemplateExpression = () => {
    const name = "Bruno";

    const data = {
        age: 20,
        job: 'programador'
    };

    return (
        <>

            <FirstComponent />
            
            <h1 className="username"> Olá, {name}, tudo bem? </h1>
            <p>Minha idade é {data.age} e trabalho como {data.job}</p>
        </>
    );
};

export default TemplateExpression;