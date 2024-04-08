// Danh sách các lá bài và thông tin chi tiết của từng lá bài
const cards = [
    { number: "2", name: "Give 2 drinks", description: "Pick two people to drink. Or pick one person twice.", descriptionVi: 'Chọn hai người đi uống. Hoặc chọn một người hai lần.' },
    { number: "3", name: "Take a drink", description: "You must drink.", descriptionVi: 'Bạn phải uống.' },
    { number: "4", name: "Take 2, give 2", description: "Take 2 drinks, and give 2 drinks.", descriptionVi: 'Uống 2 ly và cho 2 ly.' },
    { number: "5", name: "Guys drink", description: "All guys must drink.", descriptionVi: 'Mọi chàng trai đều phải uống.' },
    { number: "6", name: "Girls drink", description: "All girls must drink.", descriptionVi: 'Mọi cô gái đều phải uống.' },
    { number: "7", name: "Thumbmaster", description: "You are the thumbmaster. You can place your thumb anytime on the table and and all players must follow. The last to do so, drinks.", descriptionVi: 'Bạn là người điều khiển ngón tay cái. Bạn có thể đặt ngón tay cái của mình bất cứ lúc nào trên bàn và tất cả người chơi phải tuân theo. Người cuối cùng làm như vậy, uống.' },
    { number: "8", name: "Drinking mate", description: "Choose a drinking mate. Anytime you must drink, your drinking mate also drinks.", descriptionVi: 'Chọn một người bạn uống. Bất cứ lúc nào bạn phải uống, người bạn nhậu của bạn cũng uống.' },
    { number: "9", name: "Rhyme", description: "Choose a word. Take rounds saying rhyming words. First to pause or miss must drink.", descriptionVi: 'Chọn một từ. Lần lượt nói những từ có vần điệu. Đầu tiên phải tạm dừng hoặc bỏ lỡ phải uống.' },
    { number: "10", name: "Everyone drinks", description: "Cheers! Everyone drinks.", descriptionVi: 'Chúc mừng! Mọi người đều uống.' },
    { number: "J", name: "Rule", description: "Make a rule. If someone breaks it, they must drink.", descriptionVi: 'Hãy đặt ra một quy tắc. Nếu ai làm vỡ nó thì phải uống.' },
    { number: "Q", name: "Category", description: "Choose a category. Take turns naming an item in chosen category. First to pause or miss must drink.", descriptionVi: 'Chọn một danh mục. Lần lượt đặt tên một mục trong danh mục đã chọn. Đầu tiên phải tạm dừng hoặc bỏ lỡ phải uống.' },
    { number: "K", name: "King's Cup", description: "Pour your drink into the cup. The fourth person who gets this card must drink the cup.", descriptionVi: 'Đổ đồ uống của bạn vào cốc. Người thứ tư nhận được lá bài này phải uống cốc.' },
    { number: "A", name: "Waterfall", description: "Start drinking. Everyone must drink as long as you drink. You can stop at any time.", descriptionVi: 'Bắt đầu uống rượu. Mọi người đều phải uống miễn là bạn uống. Bạn có thể dừng lại bất cứ lúc nào.' }
];

const suits = ["♠", "♣", "♦", "♥"];
const suitColors = ["black", "black", "red", "red"];

// Lấy phần tử DOM
const cardIcon = document.getElementById('cardIcon');
const cardDisplay = document.getElementById('cardText');
const cardDescription = document.getElementById('cardDescription');
const cardDescriptionVi = document.getElementById('cardDescriptionVi');
const drawButton = document.getElementById('cardStack');
const number = document.getElementsByClassName('number');
const suit = document.getElementsByClassName('suit');
// Hàm bốc một lá bài ngẫu nhiên
function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    cardDisplay.textContent = card.name;
    cardDescription.textContent = card.description;
    cardDescriptionVi.textContent = card.descriptionVi;

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const suitIndex = suits.indexOf(randomSuit);
    const suitColor = suitColors[suitIndex];

    for (let item of number) {
        item.textContent = card.number;
        item.style.color = suitColor;
    }

    for (let item of suit) {
        item.style.color = suitColor;
    }

}

// Gắn sự kiện click cho nút bốc bài
drawButton.addEventListener('click', drawCard);

// Bốc một lá bài ngẫu nhiên khi trang được tải lần đầu
drawCard();
