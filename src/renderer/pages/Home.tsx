import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>IndexPage</h1>
            <button
                onClick={() => {
                    navigate("function_test");
                }}
            >
                機能テストページへ
            </button>
        </div>
    );
};

export default Home;