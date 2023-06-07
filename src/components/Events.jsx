const Events = () => {

    const handleClick = (event) => {
        console.log(event);
        console.log("clicou");
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>O x é verdadeiro!</h1>;
        } else {
            return <h1>O x NÃO é verdadeiro!</h1>;
        }
    }

    return (
        <>
            <button
                onClick={handleClick}
            >
                Clique Aqui!
            </button>
            <button
                className="m-md"
                onClick={() => console.log("clicou no segundo")}
            >
                Clique Aqui Também!
            </button>
            {renderSomething(true)}
        </>
    );
};

export default Events;