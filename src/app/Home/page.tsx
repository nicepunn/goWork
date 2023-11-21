import GoworkCatalog from "@/component/GoWorkCatalog";
import ThumbnailCard from "@/component/ThumbnailCard";

const allGoWorkJsonRaw = {
  "success": true,
  "count": 3,
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
      "picture": "https://drive.google.com/uc?id=1JinSybZyq4eMEJTUVewuh9X87DYznuc3",
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
      "picture": "https://drive.google.com/uc?id=1Otx0rTEVbXahcxcXZTvoM9QnlRJmubOP",
      "__v": 0,
      "id": "6559aa83e8addd217fbe8df7"
    },
    {
      "_id": "6559aa83e8addd217fbe8dg0",
      "name": "Chula Engineering Libaray",
      "operatingHours": "24 hours",
      "address": "Faculty of Engineering Chulalongkorn University",
      "province": "Bangkok",
      "postalcode": "10330",
      "tel": "+66 2-218-1234",
      "picture": "https://drive.google.com/uc?id=1PJC6JwBgjMkK8RgMGi4al13feVCE6l3c",
      "__v": 0,
      "id": "6559aa83e8addd217fbe8dg0"
    }
  ]
}
export default function Home() {
    return (
      <main >
        <GoworkCatalog allGoWorkJson={allGoWorkJsonRaw}/>
      </main>
    )
  }

