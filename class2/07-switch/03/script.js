/* 
You are in a store and want to calculate the discount on a purchase based on the customer type. Create a program that, based on the chosen type (normal, premium, or VIP), calculates the discount to be applied to the purchase price. Ask the user to choose between 'normal', 'premium', and 'VIP' as customer types. Based on the choice, calculate and display the final purchase price after applying the corresponding discount.

normal: 5% discount
premium: 10% discount
VIP: 15% discount
*/

let discountRate, price

const customerType = prompt("Are you a normal, a premium or a VIP customer?").toLowerCase()

const purchase = Number(prompt("What is the purchase price?"))

switch (customerType) {
    case "normal":
        discountRate = 0.05
        priceAfterDiscount = calculatePrice(discountRate, purchase)
        alert("You are a normal customer and your discount is 5%.")
        alertToCustomer(priceAfterDiscount)
        break
    case "premium":
        discountRate = 0.10
        priceAfterDiscount = calculatePrice(discountRate, purchase)
        alert("You are a premium customer and your discount is 10%.")
        alertToCustomer(priceAfterDiscount)
        break
    case "vip":
        discountRate = 0.15
        priceAfterDiscount = calculatePrice(discountRate, purchase)
        alert("You are a VIP customer and your discount is 15%.")
        alertToCustomer(priceAfterDiscount)
        break

    default:
        alert("Invalid answer.")
        break
}

function calculatePrice(discount, price) {
    const finalPrice = price - (price * discount)
    return finalPrice
}

function alertToCustomer(p) {
    alert(`Your purchase worth of ${p} was approved.`)
}