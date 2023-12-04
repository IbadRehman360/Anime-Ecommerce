import OrderDisplay from "@components/TrackOrder/OrderDisplay";
import TrackOrder from "@components/TrackOrder/Track";
import { getServerSession } from "next-auth";

export default async function OrderPage() {
  const session = await getServerSession();
  if (session) {
    var data = await getOrderStatus(session.user.email);
  }

  return (
    <main className="max-w-2xl   mx-auto   pb-16 md:pb-24  sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      {session ? (
        <>
          <OrderDisplay data={data} />
        </>
      ) : (
        <TrackOrder />
      )}
    </main>
  );
}

export async function getOrderStatus(email) {
  try {
    console.log(email);
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/find-order?email=${email}`
    );

    if (!response.ok) {
      throw new Error(`No orders found for email: ${email}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error in getOrderStatus:", error);
    throw error;
  }
}
