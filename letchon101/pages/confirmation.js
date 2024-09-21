import Link from "next/link";

export default function Confirmation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8C794] px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Thank you for your purchase!</h1>
      <p className="text-lg mb-4">Your order has been successfully placed.</p>
      <Link href="/homepage">
        <button className="bg-black text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-800">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
