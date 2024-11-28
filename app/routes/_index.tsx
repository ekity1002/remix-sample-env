import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // const name = "太郎";
  // const email = "taro@example.com";
  // createCreator(name, email);
  // const user = await getCreatorByEmail(email);
  const user = { name: "taro", email: "taro@example.com" };
  return { user };
};

export default function Index() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="font-bold mb-2">
        User: {user?.name} {user.email}
      </h1>
      <h2>h2 death</h2>
      <Button variant="outline">Button</Button>
    </div>
  );
}
