import { CDN_URL } from "../utils/constant"

const RestruatantCard = (prop) => {
    const { resCardInfo } = prop;
    // console.log(resCardInfo);

    const { name, cuisines, avgRatingString, sla, locality, costForTwo, cloudinaryImageId } = resCardInfo?.info;


    return <div className="res-card w-full h-full cursor-pointer bg-slate-100 hover:bg-slate-200 mb-16 rounded-md overflow-hidden">
        <img alt="res-logo" className="res-logo h-1/2 w-full object-cover" src={CDN_URL + cloudinaryImageId} />
        <div className="res-info px-[1vw] py-[0.5vw]">
            <h4 className="text-lg font-bold ">{name}</h4>
            <h5 className="font-semibold">{cuisines[0]}{cuisines[1] && ", "+cuisines[1]}</h5>
            <h6 className="text-sm">{avgRatingString} star • {sla.slaString}</h6>
            <h6 className="text-sm">{costForTwo}</h6>
            <h6 className="text-sm">{locality}</h6>
        </div>
    </div>
}

export const NearbyResCard = (RestruatantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute -top-7 left-0 z-10 ml-1 p-1 text-xs rounded-md bg-zinc-300  font-semibold" >Nearly</label>
                <RestruatantCard {...props} />
            </>
        )
    }
}

export default RestruatantCard;