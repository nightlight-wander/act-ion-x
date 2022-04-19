import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "Sci-Code",
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
