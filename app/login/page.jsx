import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginRegistertion from "@components/LoginRegistertion";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

export default async function Example() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <LoginRegistertion />;
}
