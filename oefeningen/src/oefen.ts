const kmPerPixel = 0.01;
const numberElement: HTMLElement | null = document.querySelector(".teller");
const signs: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".sign");
const petrol: HTMLElement | null = document.querySelector(".petrol");
console.log(petrol);
const tankVolume = 100; // in liters
const consumptionRate = 2; // liters per kilometer
let petrolLevel = tankVolume; // initial petrol level in liters
let lastPosition = 0;

window.addEventListener("scroll", () => {
    const currentPosition = window.scrollY;
    const kilometer = Math.floor(currentPosition * kmPerPixel);

    if (currentPosition > lastPosition) {
        // Scrolling down - vooruit
        numberElement?.classList.remove("achteruit");
        const petrolDistance = currentPosition - lastPosition;
        const kmDriven = petrolDistance * kmPerPixel;
        const petrolConsumption = kmDriven * consumptionRate;
        petrolLevel -= petrolConsumption;
        console.log("Scrolling down");
        if (petrolLevel <= 0) {
            petrolLevel = 0;
            console.log("Petrol tank is empty!");
        }
    }
    // Scrolling up - achteruit
    else if (currentPosition < lastPosition) {
        numberElement?.classList.add("achteruit");
        console.log("Scrolling up");
    }

    if (numberElement) {
        numberElement.textContent = `${kilometer} km`;
    }

    if (petrol) {
        petrol.textContent = `${petrolLevel.toFixed(1)} L`;
    }

    lastPosition = currentPosition;

    for (const sign of signs) {
        const kmText = sign.dataset.km;

        if (kmText === undefined) {
            continue;
        }

        const signKm = Number(kmText);

        if (kilometer >= signKm) {
            sign.classList.add("gepasseerd");
        }
        else {
            sign.classList.remove("gepasseerd");
        }
    }
});

console.log("Oefeningen script loaded successfully.");