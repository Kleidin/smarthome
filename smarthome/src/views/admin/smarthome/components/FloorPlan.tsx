import Card from "components/card";
import { MdBathroom, MdBedroomChild, MdBedroomParent, MdKitchen, MdLight, MdLiving } from "react-icons/md";
import livingRoom from "assets/img/livingroom.png";
import bedRoom from "assets/img/bedroom.png";
import bedRoom2 from "assets/img/bedroom2.png";
import kitchen from "assets/img/kitchen.png";
import bath from "assets/img/bath.png";
import Room from "./Room";

const FloorPlan = (props: any) => {

  return (
    <Card extra="flex flex-col bg-white w-full h-full rounded-3xl py-6 px-2 text-center w-auto">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Luzes
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdLight className="h-6 w-6" />
        </button>
      </div>
      
      <div style={{
        display: 'grid',
        height: '75vh',
        gridTemplateRows: '1fr 1fr',
        alignContent: 'left',
        marginTop: '20px',
        marginLeft: '25px',
        width: '950px'
      }}>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 3fr'}}>
          <Room url={kitchen} icon={<MdKitchen></MdKitchen>} />
          <Room url={bath} icon={<MdBathroom></MdBathroom>} />
          <Room url={bedRoom} icon={<MdBedroomChild></MdBedroomChild>} />
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '3fr 3fr'}}>
          <Room url={livingRoom} icon={<MdLiving></MdLiving>} />
          <Room url={bedRoom2} icon={<MdBedroomParent></MdBedroomParent>} />
        </div>
      </div>
    </Card>
  );
};

export default FloorPlan;
