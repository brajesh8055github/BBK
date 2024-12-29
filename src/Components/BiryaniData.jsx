import { useNavigate } from "react-router-dom";

const BiryaniData = () => {


  const navigate = useNavigate();

  function CardHandler(item) {
    navigate('/item-details', {
        state: {
            title: item.title,
            oprice: item.price,
            description: item.description,
            image: item.img,
        }
    });
}


  const biryaniData = [
    {
      title: "Chicken Hyderabadi Dum Biryani [1/2 kg]",
      description:
        "[2 pcs] Fresh Chicken is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
      price: 399,
      size: "1/2 kg",
      servings: "2pcs",
      bestseller: true,
      orders: "15439",
      discountCode: "BBK120",
      img:"./Images/19.PNG",
    },
    {
      title: "Chicken Hyderabadi Dum Biryani [750g]",
      description:
        "[4 pcs] Fresh Chicken is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
      price: 629,
      size: "750g",
      servings: "4pcs",
      bestseller: false,
      orders: "11211",
      discountCode: "BBK120",
      img:"./Images/20.JPEG",
    },
        {
          title: "Chicken Hyderabadi Dum Biryani [1/2 kg]",
          description: "[2 pcs] Fresh Chicken is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 399,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: true,
          orders: "15439",
          discountCode: "BBK120",
          img:"./Images/21.WEBP",

        },
        {
          title: "Chicken Hyderabadi Dum Biryani [750g]",
          description: "[4 pcs] Fresh Chicken is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 629,
          size: "750g",
          servings: "4pcs",
          bestseller: false,
          orders: "11211",
          discountCode: "BBK120",
          img:"./Images/23.AVIF",

        },
        {
          title: "Chicken Hyderabadi Dum Biryani [1kg]",
          description: "[6 pcs] Fresh Chicken is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 879,
          size: "1kg",
          servings: "6pcs",
          bestseller: true,
          orders: "7671",
          discountCode: "BBK120",
          img:"./Images/18.JPEG",

        },
        {
          title: "Mutton Hyderabadi Dum Biryani [1/2 kg]",
          description: "[2 pcs] Mutton is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 499,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: false,
          orders: "8350",
          discountCode: "BBK120",
          img:"./Images/17.JPEG",

        },
        {
          title: "Mutton Hyderabadi Dum Biryani [750g]",
          description: "[4 pcs] Mutton is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 749,
          size: "750g",
          servings: "4pcs",
          bestseller: true,
          orders: "11295",
          discountCode: "BBK120",
          img:"./Images/16.JPEG",

        },
        {
          title: "Mutton Hyderabadi Dum Biryani [1kg]",
          description: "[6 pcs] Mutton is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 999,
          size: "1kg",
          servings: "6pcs",
          bestseller: false,
          orders: "7421",
          discountCode: "BBK120",
          img:"./Images/20.JPEG",
        },
        {
          title: "Vegetable Hyderabadi Dum Biryani [1/2 kg]",
          description: "[2 pcs] Fresh vegetables are layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 299,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: true,
          orders: "9603",
          discountCode: "BBK120",
          img:"./Images/21.WEBP",

        },
        {
          title: "Vegetable Hyderabadi Dum Biryani [750g]",
          description: "[4 pcs] Fresh vegetables are layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 499,
          size: "750g",
          servings: "4pcs",
          bestseller: true,
          orders: "6322",
          discountCode: "BBK120",
          img:"./Images/19.PNG",
        },
        {
          title: "Vegetable Hyderabadi Dum Biryani [1kg]",
          description: "[6 pcs] Fresh vegetables are layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 699,
          size: "1kg",
          servings: "6pcs",
          bestseller: false,
          orders: "5431",
          discountCode: "BBK120",
          img:"./Images/20.JPEG",
        },
        {
          title: "Special Paneer Hyderabadi Dum Biryani [1/2 kg]",
          description: "[2 pcs] Fresh Paneer is marinated in BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 349,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: true,
          orders: "8547",
          discountCode: "BBK120",
          img:"./Images/22.JPEG",
        },
        {
          title: "Special Paneer Hyderabadi Dum Biryani [750g]",
          description: "[4 pcs] Fresh Paneer is marinated in BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price: 549,
          size: "750g",
          servings: "4pcs",
          bestseller: false,
          orders: "3987",
          discountCode: "BBK120",
          img:"./Images/18.JPEG",
        },
        {
          title: "Special Paneer Hyderabadi Dum Biryani [1kg]",
          description: "[6 pcs] Fresh Paneer is marinated in BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.",
          price:799,
          size: "1kg",
          servings: "6pcs",
          bestseller: true,
          orders: "5264",
          discountCode: "BBK120",
          img:"./Images/17.JPEG",
        },
        {
          title: "Chicken Kacchi Biryani [1/2 kg]",
          description: "[2 pcs] Fresh Chicken is marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 459,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: true,
          orders: "14753",
          discountCode: "BBK120",
          img:"./Images/18.JPEG",
        },
        {
          title: "Chicken Kacchi Biryani [750g]",
          description: "[4 pcs] Fresh Chicken is marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 639,
          size: "750g",
          servings: "4pcs",
          bestseller: false,
          orders: "8712",
          discountCode: "BBK120",
          img:"./Images/16.JPEG",
        },
        {
          title: "Chicken Kacchi Biryani [1kg]",
          description: "[6 pcs] Fresh Chicken is marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 899,
          size: "1kg",
          servings: "6pcs",
          bestseller: true,
          orders: "10293",
          discountCode: "BBK120",
          img:"./Images/20.JPEG",
        },
        {
          title: "Mutton Kacchi Biryani [1/2 kg]",
          description: "[2 pcs] Fresh Mutton is marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 499,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: true,
          orders: "8956",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Mutton Kacchi Biryani [750g]",
          description: "[4 pcs] Fresh Mutton is marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 799,
          size: "750g",
          servings: "4pcs",
          bestseller: false,
          orders: "6353",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Mutton Kacchi Biryani [1kg]",
          description: "[6 pcs] Fresh Mutton is marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 1099,
          size: "1kg",
          servings: "6pcs",
          bestseller: true,
          orders: "9231",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Vegetable Kacchi Biryani [1/2 kg]",
          description: "[2 pcs] Fresh vegetables are marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 279,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: false,
          orders: "5347",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Vegetable Kacchi Biryani [750g]",
          description: "[4 pcs] Fresh vegetables are marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 449,
          size: "750g",
          servings: "4pcs",
          bestseller: true,
          orders: "3615",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Vegetable Kacchi Biryani [1kg]",
          description: "[6 pcs] Fresh vegetables are marinated in BBK spices, layered with rice & cooked with raw marination in the sealed handi.",
          price: 629,
          size: "1kg",
          servings: "6pcs",
          bestseller: true,
          orders: "4829",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Special Veg Biryani [1/2 kg]",
          description: "[2 pcs] A special mix of seasonal vegetables and long grain basmati rice cooked together in the sealed handi.",
          price: 399,
          size: "1/2 kg",
          servings: "2pcs",
          bestseller: false,
          orders: "2631",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Special Veg Biryani [750g]",
          description: "[4 pcs] A special mix of seasonal vegetables and long grain basmati rice cooked together in the sealed handi.",
          price: 549,
          size: "750g",
          servings: "4pcs",
          bestseller: true,
          orders: "4853",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        },
        {
          title: "Special Veg Biryani [1kg]",
          description: "[6 pcs] A special mix of seasonal vegetables and long grain basmati rice cooked together in the sealed handi.",
          price: 699,
          size: "1kg",
          servings: "6pcs",
          bestseller: false,
          orders: "3651",
          discountCode: "BBK120",
          img:"./Images/20.JPEG"
        }
      ];

  // console.log(biryaniData);  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hyderabadi Biryani</h1>
      <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {biryaniData.map((item, index) => (
          // <BiryaniItem key={index} item={item} />

          <div className="border rounded-lg shadow-md p-4 bg-white relative" key={index}>
          {item.bestseller && (
            <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
              Bestseller
            </span>
          )}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm font-bold mt-2">₹{item.price}</p>
          <p className="text-sm text-gray-500">
            <span>{item.size}</span> - <span>{item.servings}</span>
          </p>
          <p className="text-sm text-green-500">
            {item.orders} People ordered last week
          </p>
          <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg" onClick={() => CardHandler(item)}>
            Add +
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Get Rs 120 OFF | Use code: {item.discountCode}
          </p>
        </div>


        ))}
      </div>
    </div>
    </div>
  );
};

export default BiryaniData;
