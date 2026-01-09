import { Food } from "./model/food.model.js";

const menuItems = [
    {
        title: 'Fried paratha and egg',
        originalPrice: 70,
        discountedPrice: 60,
        image: 'https://i.ytimg.com/vi/ebbEvlvBVrY/hq720.jpg',
    },
    {
        title: 'Khichuri and fried eggs',
        originalPrice: 80,
        discountedPrice: 70,
        image: 'https://yumnia.com/storage/recipes/khichuri-with-fried-egg-Za5wS.webp',
    },
    {
        title: 'Bread, butter and jam',
        originalPrice: null,
        discountedPrice: 40,
        image: 'https://www.lazzaris.com/wp-content/uploads/sites/2/2022/09/fette-pane-burro-marmellata-1.jpg',
    },
    {
        title: 'Semai (sweet)',
        originalPrice: null,
        discountedPrice: 50,
        image: 'https://i.ytimg.com/vi/8dCnAelS8ag/maxresdefault.jpg',
    },
    // Additional teaser items (partially visible)
    {
        title: 'Beef patty Burger',
        originalPrice: 350,
        discountedPrice: 280,
        image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
    },
    {
        title: 'Chicken Sub-Sandwich',
        originalPrice: 260,
        discountedPrice: 220,
        image: 'https://www.foodandwine.com/thmb/tM060YA0Fd0UALCmPQ-5gGWyBqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg',
    },
    
];



export const foodInit = async (req, res) => {
    try {
        await Food.deleteMany({});

        await Food.insertMany(menuItems);

        return res.json({ message: "Food Items initialized!" });
    } catch (error) {
        console.log(error)
    }
}

