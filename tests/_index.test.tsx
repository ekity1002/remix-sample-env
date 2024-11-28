// app/check.spec.ts
import { createRemixStub } from "@remix-run/testing";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import { createCreator, getCreatorByEmail } from "~/models/creator.server";

const prisma = vPrisma.client;

import Index, { loader } from "~/routes/_index";

async function initDb() {
  await createCreator("taro", "user1@example.com");
}

describe("check", () => {
  beforeEach(async () => {
    // const createdUser = await prisma.creator.create({
    //   data: {
    //     email: "user1@example.com",
    //     name: "taro",
    //   },
    // });
    // await createCreator("taro", "user1@example.com");
  });
  // 各テスト毎処理
  afterEach(async () => {
    vi.resetModules();
  });

  it("show env without error", async () => {
    await initDb()
    // const user = await prisma.creator.findUnique({
    //   where: { email: "user1@example.com" },
    // });
    const user = await getCreatorByEmail("user1@example.com");
    console.log(user)
    expect(user.email).toBe("user1@example.com");
  });

  test("Count user", async () => {
    expect(await prisma.creator.count()).toBe(0);
  });

  test("Index component", async () => {
    // const user = await prisma.creator.findUnique({
    //   where: { email: "user1@example.com" },
    // });
    const user = await getCreatorByEmail("user1@example.com");

    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: Index,
        loader,
      },
    ]);
    render(<RemixStub />);
    await waitFor(async () => {
      // const element = await screen.findByText("Text is hogehoge");
      const element = await screen.findByText(`h2 death`);
      expect(element).toBeVisible();
      expect(element).toBeInTheDocument();
    });
  });

  test("loader", async () => {
    const response = await loader({ request: new Request(`http://localhost/`), params: {}, context: {}, });
    expect(response.user.name).toBe("taro");
    expect(response.user.email).toBe("taro@example.com");
  }
)
});
