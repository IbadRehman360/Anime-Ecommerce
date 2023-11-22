import OrderDisplay from "@components/TrackOrder/OrderDisplay";
import TrackOrder from "@components/TrackOrder/Track";
import { getServerSession } from "next-auth";

export default async function OrderPage() {
  const session = await getServerSession();
  if (session) {
    var data = await getOrderStatus(session.user.email);
  }

  return (
    <main className="max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      {session ? (
        <p>
          Welcome, {session.user.name}! <OrderDisplay data={data} />
        </p>
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
      `http://localhost:3000/api/find-order?email=${email}`
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
