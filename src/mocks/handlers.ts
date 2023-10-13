import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/users",
    (res, req, context) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: "prajwol",
          },
          {
            name: "sahin",
          },
          {
            name: "future",
          },
        ])
      );
    }
  ),
];
