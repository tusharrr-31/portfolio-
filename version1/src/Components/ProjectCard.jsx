export default function CardDefault({link}) {
  return (
    <div className="bg-gray-200 h-72 rounded-lg shadow-lg transition duration-300 hover:scale-105">
  <iframe
              src={link}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
  </div>
  );
}
