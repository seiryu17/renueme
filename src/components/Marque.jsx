import Marquee from "react-fast-marquee";

const DATA = [
  "Bukit Merah Family Store is open! Visit Us from Monday-Saturday 9am - 6pm",
  "Permanent Closure of the i12 Katong Salvation Army Donation Booth from 22nd Jan 2024. Click here to view more details"
];

const Marque = () => {
  return (
    <div className="bg-black text-white py-3">
      <Marquee pauseOnHover gradient={false}>
        {DATA.map((item, index) => (<>
          <span key={index} >
            {item}
          </span>
          <span className="mx-6">•</span>
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;
