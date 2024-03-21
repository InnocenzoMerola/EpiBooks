import { render, screen } from "@testing-library/react";
import Welcome from "../components/WelcomeComp";

describe("welcome", () => {
  it("all'avvio compaia il titolo", () => {
    render(<Welcome />);
    const title = screen.getByText(/Scopri i migliori libri Fantasy/i);
    expect(title).toBeInTheDocument();
  });

  it("all'avvio compaia l'alert", () => {
    render(<Welcome />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
  });
});
