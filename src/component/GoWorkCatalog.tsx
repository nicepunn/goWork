import ThumbnailCard from "./ThumbnailCard";


export default function GoworkCatalog({allGoWorkJson}: {allGoWorkJson: Object | null}) {


    return (
        <div className="flex flex-row flex-wrap justify-around content-around">
                {
                    allGoWorkJson != null?
                    allGoWorkJson.data.map((goWorkItem: Object)=>(
                        <ThumbnailCard _id={goWorkItem._id} name={goWorkItem.name}
                      operatingHours={goWorkItem.operatingHours} address={goWorkItem.address}
                      province={goWorkItem.province} postalcode={goWorkItem.postalcode} tel={goWorkItem.tel}
                      picture={goWorkItem.picture} __v={goWorkItem.__v} id={goWorkItem.id} allNumOfRoom={[1, 2, 3]} />
                    ))
                    :
                    <></>
                }
        </div>
    )
}