export default function TrustListItem({ icon, text }) {
  return (
    <div className="flex items-center">
      {icon}
      <span className="ml-4 text-[0.85rem] font-medium font-inter tracking-wide border-b-2 border-b-gray-300 text-gray-500">
        {text}
      </span>
    </div>
  );
}
