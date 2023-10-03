const MyButton = (props) => {
    const [count, setCount] = React.useState(0);
    const Buttonplus = () => {
        setCount(count + 1)
    }
    const Buttonminus = () => {
        setCount(count - 1)
    }

    console.log(props.children)
    return (
        <>
            <h2>{count}</h2>
            <button onClick={Buttonminus}>
                -1
            </button>
            <button onClick={Buttonplus}>
                +1
            </button>

        </>


    );
}
class MyApp extends React.Component {
    render() {
        return (
            <div>
                <MyButton />
            </div>
        )
    }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

