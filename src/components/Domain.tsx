import { useState } from "react";

const Domain = () => {
  const [domainName, setDomainName] = useState("");
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const checkDomainAvailability = async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_APP_GODADDY_API_KEY;
    const apiSecret = import.meta.env.VITE_APP_GODADDY_SECRET;
    const apiUrl = `https://api.godaddy.com/v1/domains/available?domain=${domainName}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `sso-key ${apiKey}:${apiSecret}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch domain availability");
      }
      const data = await response.json();
      console.log(data);
      setAvailability(data.available);
    } catch (error) {
      console.error("Error checking domain availability:", error);
      setAvailability(false);
    } finally {
      setLoading(false);
    }
  };

  const handleFindDomain = () => {
    if (domainName) {
      checkDomainAvailability();
    }
  };

  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center bg-[#1F2123]">
      <p className="font-bold text-white text-[28px]">Secure your domain now</p>
      <p className="font-extralight tracking-widest leading-loose text-slate-300 w-[50%] my-4 text-[12px]">
        Unlock your digital potential with our domain registration service. Your
        domain is your unique online identity, your digital storefront in the
        vast landscape of the internet.
      </p>
      <div className="w-[70%] h-[80px] rounded-lg flex justify-around items-center bg-slate-300">
        <input
          type="text"
          placeholder="my-website.com"
          className="px-12 h-[50%] w-[80%] rounded-lg py-3 bg-slate-300 placeholder:text-[22px] placeholder:font-extralight"
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
        />
        <button
          className="h-[50%] my-auto px-2 text-white bg-[#0766FF] rounded-lg"
          onClick={handleFindDomain}
          disabled={loading}
        >
          {loading ? "Checking..." : "Find domain"}
        </button>
      </div>
      {availability !== null && (
        <p className="text-white mt-2">
          {availability ? "Domain available!" : "Domain not available."}
        </p>
      )}
    </div>
  );
};

export default Domain;
