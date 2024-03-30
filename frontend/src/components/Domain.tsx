const Domain = () => {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center bg-[#1F2123]">
      <p className="font-bold text-white text-[28px]">Secure your domain now</p>
      <p className="font-extralight tracking-widest leading-loose text-slate-300 w-[50%] my-4  text-[12px]">
        Unlock your digital potential with our domain registration service. Your
        domain is your unique online identity, your digital storefront in the
        vast landscape of the internet.
      </p>
      <div className="w-[70%] h-[80px] rounded-lg flex justify-around items-center  bg-slate-300 ">
        <input
          type="text"
          placeholder="my-website.com"
          className="px-12 h-[50%] w-[80%] rounded-lg py-3 bg-slate-300 placeholder:text-[22px]  placeholder:font-extralight"
        />
        <button className="h-[50%] my-auto px-2 text-white bg-[#0766FF] rounded-lg">
          Find domain
        </button>
      </div>
    </div>
  );
};
export default Domain;
