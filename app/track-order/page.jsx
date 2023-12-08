import OrderDisplay from "@components/TrackOrder/OrderDisplay";
import TrackOrder from "@components/TrackOrder/Track";
import { getServerSession } from "next-auth";

export default async function OrderPage() {
  const session = await getServerSession();
  if (session) {
    var data = await getOrderStatus(session.user.email);
  }

  return (
    <main className="max-w-2xl mx-auto pb-8 md:pb-24 pt-2 sm:pt-16 sm:px-6 lg:max-w-[90rem] lg:px-8">
      {session && data ? (
        <OrderDisplay data={data} />
      ) : (
        <TrackOrder data={data} />
      )}
    </main>
  );
}
export async function getOrderStatus(email) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/find-order?email=${email}`
  );
  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  }
  return null;
}
