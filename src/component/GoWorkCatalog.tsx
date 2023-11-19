import ThumbnailCard from "./ThumbnailCard";

const allGoWorkJsonRaw = {
    "success": true,
    "count": 2,
    "pagination": {},
    "data": [
      {
        "_id": "6559aa25e8addd217fbe8df4",
        "name": "Samyan Co-op",
        "operatingHours": "24 hours",
        "address": "Samyan Mitrtown",
        "province": "Bangkok",
        "postalcode": "10330",
        "tel": "+66 2 219 6999",
        "picture": "https://drive.google.com/uc?id=1Vsq3yGo0TbJtNnD-Q-GmIKEPhi774W_O",
        "__v": 0,
        "id": "6559aa25e8addd217fbe8df4"
      },
      {
        "_id": "6559aa83e8addd217fbe8df7",
        "name": "Chula Libaray",
        "operatingHours": "24 hours",
        "address": "Chulalongkorn University",
        "province": "Bangkok",
        "postalcode": "10330",
        "tel": "+66 2-218-2929",
        "picture": "https://drive.google.com/file/d/1Otx0rTEVbXahcxcXZTvoM9QnlRJmubOP/view?usp=sharing",
        "__v": 0,
        "id": "6559aa83e8addd217fbe8df7"
      }
    ]
  }


export default function GoworkCatalog({allGoWorkJson}: {allGoWorkJson: Object}) {


    return (
        <div className="flex flex-row flex-wrap justify-around content-around">
                {
                    allGoWorkJsonRaw.data.map((goWorkItem: Object)=>(
                        <ThumbnailCard _id={goWorkItem._id} name={goWorkItem.name} 
                        operatingHours={goWorkItem.operatingHours} address={goWorkItem.address} 
                        province={goWorkItem.province} postelcode={goWorkItem.postelcode} tel={goWorkItem.tel} 
                        picture={goWorkItem.picture} __v={goWorkItem.__v} id={goWorkItem.id} />
                    ))
                }
        </div>
    )
}