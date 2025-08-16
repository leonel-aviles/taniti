document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("attraction");

        const infoColumn = document.getElementById("attraction-info");
        // Restaurant data
        const restaurants = {
        "oceanview-grill": {
            name: "Oceanview Grill",
            description: "Fresh-caught seafood served with panoramic ocean views. A perfect blend of local flavors and international dishes.",
            type: "Seafood & International",
            hours: "Mon–Sun, 11:00 AM – 10:00 PM",
            address: "123 Beachfront Ave, Taniti City",
            dress: "Casual",
            image: "./assets/restaurants/ocean-view-grill.jpg"
        },
        "sunset-bistro": {
            name: "Sunset Bistro",
            description: "Casual beachside dining with colorful cocktails and live music. Famous for its grilled fish and tropical desserts.",
            type: "Local & Pan-Asian",
            hours: "Tue–Sun, 12:00 PM – 11:00 PM",
            address: "45 Sunset Blvd, Merriton Landing",
            dress: "Resort Casual",
            image: "./assets/restaurants/island-restaurant.jpg"
        },
        "volcano-view-cafe": {
            name: "Volcano View Café",
            description: "Enjoy a hearty breakfast or light lunch while gazing at Taniti’s active volcano. Known for fresh coffee, tropical fruit smoothies, and locally baked pastries.",
            type: "Café & Breakfast",
            hours: "Mon–Sat, 6:30 AM – 3:00 PM",
            address: "88 Crater Road, Taniti City",
            dress: "Casual",
            image: "./assets/restaurants/volcano-view-cafe.jpg"
        },
        "coral-reef": {
            name: "Coral Reef",
            description: "Upscale dining featuring a rotating menu of seafood and locally sourced produce. Elegant ambiance perfect for romantic dinners.",
            type: "Fine Dining & Seafood",
            hours: "Mon–Sun, 5:00 PM – 10:30 PM",
            address: "14 Marina Lane, Taniti Harbor",
            dress: "Smart Casual",
            image: "./assets/restaurants/coral-reef.jpg"
        },
        "bamboo-hut": {
            name: "The Bamboo Hut",
            description: "Rustic open-air restaurant serving Tanitian comfort food and family-style platters. A favorite among locals for its authenticity.",
            type: "Local & Traditional",
            hours: "Wed–Mon, 11:00 AM – 9:00 PM",
            address: "7 Palm Grove Street, Merriton Landing",
            dress: "Casual",
            image: "./assets/restaurants/bamboo-hut.jpg"
        },
        "tropical-harvest": {
            name: "Tropical Harvest",
            description: "Healthy, farm-to-table restaurant featuring locally sourced ingredients in creative dishes.",
            type: "Vegetarian & International",
            hours: "Mon–Sun, 9:00 AM – 9:00 PM",
            address: "101 Garden Way, Taniti Hills",
            dress: "Casual",
            image: "./assets/restaurants/tropical-harvest.jpg"
        },
        "brewery-grill": {
            name: "Merriton Landing Brewery & Grill",
            description: "Craft beers brewed on-site paired with hearty grilled dishes. Relaxed atmosphere with live bands on weekends.",
            type: "Pub & Grill",
            hours: "Mon–Sun, 12:00 PM – 12:00 AM",
            address: "29 Wharfside Drive, Merriton Landing",
            dress: "Casual",
            image: "./assets/restaurants/brewery-grill.jpg"
        },
        "azure-sky": {
            name: "Azure Sky Rooftop Lounge",
            description: "Chic rooftop venue offering panoramic bay views, signature cocktails, and tapas-style plates. Perfect for sunset evenings.",
            type: "Lounge & Tapas",
            hours: "Thu–Sun, 4:00 PM – 1:00 AM",
            address: "3 Skyview Tower, Taniti City",
            dress: "Elegant Casual",
            image: "./assets/restaurants/azure-rooftop.jpg"
        },
        "rainforest-flavors": {
            name: "Rainforest Flavors",
            description: "Nestled on the edge of the rainforest, this restaurant serves organic vegetarian and vegan dishes inspired by Tanitian and Asian cuisine.",
            type: "Vegetarian & Vegan Fusion",
            hours: "Tue–Sun, 10:00 AM – 9:00 PM",
            address: "51 Green Trail Road, Taniti Highlands",
            dress: "Casual",
            image: "./assets/restaurants/rainforest-flavors.jpg"
        }
        };
        // Lodging Data
       const lodging = {
            "taniti-beach-resort": { 
                name: "Taniti Beach Resort", 
                description: "Luxury beachfront resort with full-service spa, infinity pool, and fine dining. Perfect for a relaxing island escape.", 
                capacity: "Max 4 guests", 
                minNights: "2-night minimum stay", 
                price: "$280 per night", 
                address: "101 Oceanfront Drive, Taniti City", 
                image: "./assets/lodging/beach-resort.jpg" 
            },
            "palm-grove-villas": { 
                name: "Palm Grove Villas", 
                description: "Private villa rentals surrounded by lush gardens and just minutes from the beach. Ideal for families and groups.", 
                capacity: "Max 6 guests", 
                minNights: "3-night minimum stay", 
                price: "$350 per night", 
                address: "12 Palm Grove Street, Merriton Landing", 
                image: "./assets/lodging/palm-grove-villas.jpg" 
            },
            "volcano-view-lodge": { 
                name: "Volcano View Lodge", 
                description: "Cozy hillside lodge offering breathtaking views of Taniti’s active volcano. Perfect for nature lovers.", 
                capacity: "Max 2 guests", 
                minNights: "1-night minimum stay", 
                price: "$150 per night", 
                address: "88 Crater Road, Taniti Highlands", 
                image: "./assets/lodging/volcano-view-lodge.jpg" 
            },
            "coral-reef-inn": { 
                name: "Coral Reef Inn", 
                description: "Charming boutique inn located steps from the marina. Offers easy access to boat tours and waterfront dining.", 
                capacity: "Max 3 guests", 
                minNights: "2-night minimum stay", 
                price: "$180 per night", 
                address: "14 Marina Lane, Taniti Harbor", 
                image: "./assets/lodging/coral-reef-inn.jpg" 
            },
            "rainforest-hideaway": { 
                name: "Rainforest Hideaway", 
                description: "Secluded eco-lodge nestled deep in the rainforest. Perfect for travelers seeking peace, privacy, and adventure.", 
                capacity: "Max 2 guests", 
                minNights: "2-night minimum stay", 
                price: "$200 per night", 
                address: "51 Green Trail Road, Taniti Highlands", 
                image: "./assets/lodging/rainforest-hideaway.jpg" 
            },
            "seashell-apartments": { 
                name: "Seashell Apartments", 
                description: "Modern, fully equipped apartments located in the heart of Taniti City. Great for extended stays.", 
                capacity: "Max 4 guests", 
                minNights: "5-night minimum stay", 
                price: "$220 per night", 
                address: "77 Market Street, Taniti City", 
                image: "./assets/lodging/seashell-apartments.jpg" 
            },
            "sunset-bay-cabins": { 
                name: "Sunset Bay Cabins", 
                description: "Rustic wooden cabins with unbeatable sunset views over the bay. Perfect for romantic getaways.", 
                capacity: "Max 2 guests", 
                minNights: "2-night minimum stay", 
                price: "$170 per night", 
                address: "29 Wharfside Drive, Merriton Landing", 
                image: "./assets/lodging/sunset-bay-cabins.jpg" 
            },
            "azure-sky-suites": { 
                name: "Azure Sky Suites", 
                description: "Chic modern suites with rooftop infinity pool and panoramic city and bay views.", 
                capacity: "Max 4 guests", 
                minNights: "3-night minimum stay", 
                price: "$300 per night", 
                address: "3 Skyview Tower, Taniti City", 
                image: "./assets/lodging/azure-sky-suites.jpg" 
            },
            "lagoon-breeze-bungalows": { 
                name: "Lagoon Breeze Bungalows", 
                description: "Charming overwater bungalows with direct lagoon access, perfect for swimming and snorkeling.", 
                capacity: "Max 2 guests", 
                minNights: "4-night minimum stay", 
                price: "$400 per night", 
                address: "5 Lagoon Lane, Taniti Harbor", 
                image: "./assets/lodging/lagoon-breeze-bungalows.jpg" 
            }
        };

        // Activity Data
        const activities = {
            "snorkeling": { 
                name: "Coral Reef Snorkeling", 
                description: "Swim among vibrant coral reefs and colorful tropical fish with a guided snorkeling tour.", 
                duration: "3 hours", 
                schedule: "Daily, 9:00 AM & 1:00 PM", 
                meetingPoint: "Taniti Harbor", 
                price: "$60 per person", 
                image: "./assets/activities/snorkeling.jpg" 
            },
            "volcano-hike": { 
                name: "Volcano Summit Hike", 
                description: "Take an adventurous trek to the summit of Taniti’s active volcano and enjoy panoramic views.", 
                duration: "5 hours", 
                schedule: "Tue–Sun, 6:00 AM", 
                meetingPoint: "Crater Base Camp", 
                price: "$80 per person", 
                image: "./assets/activities/volcano-hike.jpg" 
            },
            "zipline": { 
                name: "Rainforest Zipline", 
                description: "Fly above the lush canopy and get a bird’s-eye view of Taniti’s untouched rainforest.", 
                duration: "2 hours", 
                schedule: "Mon–Sat, Every Hour from 8 AM", 
                meetingPoint: "Merriton Landing Zip Center", 
                price: "$50 per person", 
                image: "./assets/activities/zipline.jpg" 
            },
            "scuba-diving": { 
                name: "Scuba Diving Expedition", 
                description: "Dive into deeper waters to explore shipwrecks, exotic marine life, and underwater caves.", 
                duration: "4 hours", 
                schedule: "Wed–Sun, 8:00 AM", 
                meetingPoint: "Deep Blue Dive Center", 
                price: "$120 per person", 
                image: "./assets/activities/scubadiving.jpg" 
            },
            "kayaking": { 
                name: "Coastal Kayaking", 
                description: "Paddle along Taniti’s scenic shoreline, discovering hidden beaches and sea caves.", 
                duration: "3 hours", 
                schedule: "Daily, 10:00 AM & 2:00 PM", 
                meetingPoint: "Taniti Kayak Club", 
                price: "$45 per person", 
                image: "./assets/activities/kayaking.jpg" 
            },
            "cultural-show": { 
                name: "Cultural Dance Show", 
                description: "Experience Tanitian culture through traditional dance, music, and storytelling.", 
                duration: "1.5 hours", 
                schedule: "Thu–Sat, 7:00 PM", 
                meetingPoint: "Taniti Cultural Center", 
                price: "$30 per person", 
                image: "./assets/activities/cultural-show.jpg" 
            },
            "fishing-trip": { 
                name: "Deep Sea Fishing Trip", 
                description: "Join local fishermen for a half-day fishing trip and try your luck catching big game fish.", 
                duration: "4 hours", 
                schedule: "Mon–Sun, 6:00 AM", 
                meetingPoint: "Taniti Fishing Docks", 
                price: "$90 per person", 
                image: "./assets/activities/fishing.jpg" 
            },
            "rainforest-hike": { 
                name: "Rainforest Nature Hike", 
                description: "Discover exotic plants, wildlife, and hidden waterfalls with a knowledgeable local guide.", 
                duration: "3 hours", 
                schedule: "Daily, 8:00 AM & 1:00 PM", 
                meetingPoint: "Taniti Eco Tours", 
                price: "$40 per person", 
                image: "./assets/activities/rainforest-hike.jpg" 
            },
            "sunset-sailing": { 
                name: "Sunset Sailing Cruise", 
                description: "Set sail on a luxury catamaran to watch the sun dip below the horizon with complimentary drinks.", 
                duration: "2 hours", 
                schedule: "Daily, 5:00 PM", 
                meetingPoint: "Taniti Marina", 
                price: "$70 per person", 
                image: "./assets/activities/sailing.jpg" 
            }
        };



        if (key && restaurants[key]) {
            const r = restaurants[key];
            infoColumn.innerHTML = `
            <h2>${r.name}</h2>
            <img src="${r.image}" alt="${r.name}">
            <p>${r.description}</p>
            <ul>
                <li><strong>Type:</strong> ${r.type}</li>
                <li><strong>Hours:</strong> ${r.hours}</li>
                <li><strong>Address:</strong> ${r.address}</li>
                <li><strong>Dress Code:</strong> ${r.dress}</li>
            </ul>
            `;
        } 
        else if (lodging[key]) {
            const l = lodging[key];
            const today = new Date().toISOString().split('T')[0];

            infoColumn.innerHTML = `
            <h2>${l.name}</h2>
            <img src="${l.image}" alt="${l.name}">
            <p>${l.description}</p>
            <ul>
                <li><strong>Capacity:</strong> ${l.capacity}</li>
                <li><strong>Minimum Nights:</strong> ${l.minNights}</li>
                <li><strong>Price:</strong> ${l.price}</li>
                <li><strong>Address:</strong> ${l.address}</li>
            </ul>
            `;
            const form = document.getElementById('reservation-form');
            const checkIn = document.createElement('div');
            checkIn.classList.add('dynamic-field');
            checkIn.innerHTML = `
                <label for="checkin">Check-in Date</label>
                <input type="date" name="checkin" id="checkin" required>
            `;
            
            const checkOut = document.createElement('div');
            checkOut.classList.add('dynamic-field');
            checkOut.innerHTML = `
                <label for="checkout">Check-out Date</label>
                <input type="date" name="checkout" id="checkout" required>
            `;

            checkIn.querySelector('#checkin').setAttribute('min', today);
            checkOut.querySelector('#checkout').setAttribute('min', today);

            // Update checkout min whenever check-in changes
            checkIn.querySelector('#checkin').addEventListener('change', () => {
                const checkInDate = checkIn.querySelector('#checkin').value;
                checkOut.querySelector('#checkout').setAttribute('min', checkInDate); // cannot check out before check-in
            });

            const fieldsToRemove = document.querySelectorAll('.remove'); // select by class
            fieldsToRemove.forEach(field => field.remove());
            form.insertBefore(checkIn, document.getElementById('guests').previousElementSibling);
            form.insertBefore(checkOut, document.getElementById('guests').previousElementSibling);
        }
        else if (activities[key]) {
            const a = activities[key];
            infoColumn.innerHTML = `
            <h2>${a.name}</h2>
            <img src="${a.image}" alt="${a.name}">
            <p>${a.description}</p>
            <ul>
                <li><strong>Duration:</strong> ${a.duration}</li>
                <li><strong>Schedule:</strong> ${a.schedule}</li>
                <li><strong>Meeting Point:</strong> ${a.meetingPoint}</li>
                <li><strong>Price:</strong> ${a.price}</li>
            </ul>
            `;
        }
        else {
            infoColumn.innerHTML = "<p>Attraction not found.</p>";
        }
    });

const form = document.getElementById('reservation-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the param
    const params = new URLSearchParams(window.location.search);
    const key = params.get("attraction");

    // Redirect to thank-you page with query parameter
    window.location.href = `thank-you.html?${params}`;
});
