import Alert from "react-bootstrap/Alert";

const WelcomeComp = function () {
  return (
    <>
      <Alert key="info" data-testid="alert">
        Il nostro sito è in fase di costruzione, ci scusiamo per eventuali bug.
      </Alert>

      <h3 className="text-center">Scopri i migliori libri Fantasy</h3>
    </>
  );
};

export default WelcomeComp;
