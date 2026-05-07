const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

function isEligible(product = {}) {
  return product.category === "Electronics" && Number(product.price) > 200;
}

function applyPromo(cartItems = [], promoCallback = () => false) {
  const safeCart = Array.isArray(cartItems) ? cartItems : [];
  const isPromoCallback = typeof promoCallback === "function" ? promoCallback : () => false;
  let discountedCount = 0;
  let totalSaving = 0;

  const updatedCart = safeCart.map((item) => {
    const product = item && typeof item === "object" ? item : {};
    const originalPrice = Number(product.price);
    const price = Number.isFinite(originalPrice) ? originalPrice : 0;
    const normalizedProduct = { ...product, price };
    const eligibleForDiscount = Boolean(isPromoCallback(normalizedProduct));

    if (eligibleForDiscount) {
      const saving = price * 0.1;
      discountedCount += 1;
      totalSaving += saving;

      return {
        ...normalizedProduct,
        price: Number((price - saving).toFixed(2)),
        isDiscounted: true
      };
    }

    return {
      ...normalizedProduct,
      isDiscounted: false
    };
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSaving.toFixed(2)}.`
      );
      resolve(updatedCart);
    }, 1000);
  });
}

if (typeof require === "undefined" || require.main === module) {
  applyPromo(cart, isEligible).then((updatedCart) => {
    console.log(updatedCart);
  });
}

if (typeof module !== "undefined") {
  module.exports = { applyPromo, isEligible };
}
