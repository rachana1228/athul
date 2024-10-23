const basicBtn = document.getElementById("basic-btn");
const premiumBtn = document.getElementById("premium-btn");

basicBtn.addEventListener("click", function() {
	alert("You have signed up for the Basic Plan!");
});

premiumBtn.addEventListener("click", function() {
	alert("You have signed up for the Premium Plan!");
});

const basicPrice = document.getElementById("basic-price");
const premiumPrice = document.getElementById("premium-price");

const updatePrice = function() {
	const today = new Date();
	const dayOfWeek = today.getDay();

	if (dayOfWeek === 0 || dayOfWeek === 6) {
		basicPrice.textContent = "$5.99";
		premiumPrice.textContent = "$19.99";
	} else {
		basicPrice.textContent = "$9.99";
		premiumPrice.textContent = "$29.99";
	}
};

// Update the price every day at midnight
const updateInterval = setInterval(updatePrice, 86400000);
updatePrice();