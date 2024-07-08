import FloorPlan from "views/admin/smarthome/components/FloorPlan";
import { useEffect, useState } from "react";

const SmartHome = () => {

  const [colorKitchen, setColorKitchen] = useState("");
  const [colorBath, setColorBath] = useState("");
  const [colorBedRoom, setColorBedRoom] = useState("");
  const [colorLiving, setColorLivingn] = useState("");
  const [colorBedRoom2, setColorBedRoom2] = useState("");

  useEffect(() => {
    setColorBath(colorBath);
  }, [colorBath]);
    
  return (
    <div className="mt-3 grid h-full ">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <FloorPlan 
          colorKitchen={colorKitchen}
          colorBath={colorBath}
        />
      </div>

      { /* right side */ }
      {/* <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        
      </div> */}
    </div>
  );
};

export default SmartHome;
