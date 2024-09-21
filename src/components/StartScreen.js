import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word - Game</h1>
      <p>Clique no Botão abaixo para começar a Jogar</p>
      <button onClick={startGame}>Começar o Jogo</button>
    </div>
  );
};

export default StartScreen;
