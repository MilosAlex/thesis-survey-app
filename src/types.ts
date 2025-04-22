export type Book = {
  title: string;
  orignal_id: string;
  generated_id: string;
};

export type Chunk = {
  chunk_id: string;
  source: "human" | "ai";
  book_title: string;
  text: string;
};

export type Answer = Chunk & {
  user_guess: "human" | "ai";
  time_ms: number;
};
