// Creates a browser-safe SVG data URL
function makeProductImage(background, emoji) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="200"
             height="150"
             viewBox="0 0 200 150">
            
            <rect width="200" height="150"
                  rx="16"
                  fill="${background}"/>
            
            <text x="100"
                  y="85"
                  text-anchor="middle"
                  font-size="70"
                  dominant-baseline="middle">
                ${emoji}
            </text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const products = {
    stationery: [
        {
            name: "Black Pen",
            price: 1.50,
            prepTime: 2,
            image: makeProductImage("#1e293b", "🖊️")
        },
        {
            name: "Blue Pen",
            price: 1.50,
            prepTime: 2,
            image: makeProductImage("#1e3a8a", "🖊️")
        },
        {
            name: "Red Pen",
            price: 1.50,
            prepTime: 2,
            image: makeProductImage("#991b1b", "🖊️")
        },
        {
            name: "Eraser",
            price: 0.80,
            prepTime: 2,
            image: makeProductImage("#f43f5e", "🧹")
        },
        {
            name: "Sharpener",
            price: 1.00,
            prepTime: 3,
            image: makeProductImage("#0284c7", "✏️")
        },
        {
            name: "Ruler",
            price: 1.20,
            prepTime: 3,
            image: makeProductImage("#d97706", "📏")
        },
        {
            name: "Whiteboard Marker",
            price: 2.00,
            prepTime: 3,
            image: makeProductImage("#334155", "🖍️")
        }
    ],

    rent: [
        {
            name: "Scientific Calculator (Rent)",
            price: 3.00,
            prepTime: 8,
            image: makeProductImage("#0f172a", "🔢")
        },
        {
            name: "Chromebook Charger (Rent)",
            price: 2.50,
            prepTime: 6,
            image: makeProductImage("#1e293b", "🔌")
        },
        {
            name: "Mouse/Keyboard Set (Rent)",
            price: 4.00,
            prepTime: 10,
            image: makeProductImage("#334155", "⌨️")
        }
    ],

    snacks: [
        {
            name: "Orange Juice Box",
            price: 2.20,
            prepTime: 4,
            image: makeProductImage("#ea580c", "🧃")
        },
        {
            name: "Apple Juice Box",
            price: 2.20,
            prepTime: 4,
            image: makeProductImage("#65a30d", "🧃")
        },
        {
            name: "Muesli Bar",
            price: 1.80,
            prepTime: 3,
            image: makeProductImage("#b45309", "🍫")
        }
    ]
};
