import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from "../Pagination";

describe("Pagination", () => {
  it("muestra la página actual y total", () => {
    render(<Pagination page={2} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText("Página 2 de 5")).toBeInTheDocument();
  });

  it("llama a onPageChange al hacer click en los botones", () => {
    const onPageChange = jest.fn();
    render(<Pagination page={2} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText("<"));
    expect(onPageChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByText(">"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
