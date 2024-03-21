import { render, screen } from "@testing-library/react";
import WelcomeComp from "../components/WelcomeComp";

describe("welcome", () => {
  it("all'avvio compaia il titolo", () => {
    render(<WelcomeComp />);
    const title = screen.getByText(/Scopri i migliori libri Fantasy/i);
    expect(title).toBeInTheDocument();
  });

  it("all'avvio compaia l'alert", () => {
    render(<WelcomeComp />);
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });
});
