import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "Sci-Code",
    catImg:"https://wallpaperaccess.com/full/1886943.png",
    genre:[
      {_id:uuid(),
        genreName:"Quantas Science"
      },
      {_id:uuid(),
        genreName:"Cyborgs Science"
      },
      {_id:uuid(),
        genreName:"Predictions Science"
      },
    ]
  },
  {
    _id: uuid(),
    category: "Dynamics",
    catImg:"https://wallpapercave.com/wp/wp8901619.jpg",
    genre:[
      {_id:uuid(),
        genreName:"Contemporary Dance"
      },
      {_id:uuid(),
        genreName:"Movement Techniques"
      },
      {_id:uuid(),
        genreName:"Yoga"
      },
      {_id:uuid(),
        genreName:"Martial Arts"
      },
    ]
  },
  {
    _id: uuid(),
    category: "Soundscapes",
    catImg:"https://wallpapercave.com/uwp/uwp2328396.png",
    genre:[
      {_id:uuid(),
        genreName:"Rainbow"
      },
      {_id:uuid(),
        genreName:"Stars"
      },  
    ]
  },

];
