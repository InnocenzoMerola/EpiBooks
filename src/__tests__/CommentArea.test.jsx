import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("comment list", () => {
  it('renderizza "CommentArea"', () => {
    const selectedAsin = "0316389706";
    render(<CommentArea selectedAsin={selectedAsin} />);
    const commentsList = screen.queryAllByTestId("list-comment");
    expect(commentsList).toHaveLength(1);
  });
  it('controllo "Commentlist', async () => {
    const selectedAsin = "0316389706";
    render(<CommentArea selectedAsin={selectedAsin} />);
    const commentsListComment = await screen.findAllByTestId("comment-list-comment");
    expect(commentsListComment).toHaveLength(2);
  });
});
