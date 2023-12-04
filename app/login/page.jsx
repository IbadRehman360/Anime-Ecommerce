import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginRegistertion from "@components/LoginRegistertion";

export default async function Example() {
  const session = await getServerSession();
  if (session) redirect("/");

  return <LoginRegistertion />;
}
